import type { Token } from './types'

import {
  CONST_INCREMENT,
  CONST_KEYWORD,
  LET_INCREMENT,
  LET_KEYWORD,
  QUOTE,
  WHITE_SPACE,
} from './constants'
import {
  getFullString,
  isBoolean,
  isConstKeyword,
  isLetKeyword,
  isNull,
} from './tokenizer-utils'

export function tokenize(input: string): Array<Token> {
  const tokens: Array<Token> = []

  let cursor = 0
  let currentChar = input[cursor]

  while (cursor < input.length) {
    if (currentChar === WHITE_SPACE) {
      cursor++
      currentChar = input[cursor]
      continue
    }

    if (currentChar === ';') {
      tokens.push({ type: 'Punctuator', value: ';' })
      cursor++
      currentChar = input[cursor]
      continue
    }

    if (currentChar === '=') {
      tokens.push({ type: 'Operator', value: '=' })
      cursor++
      currentChar = input[cursor]
      continue
    }

    // isNan to ensure that the currentChar is a number
    const isCurrentCharNumeric = !isNaN(Number(currentChar))
    if (isCurrentCharNumeric) {
      tokens.push({ type: 'NumericLiteral', value: currentChar })
      cursor++
      currentChar = input[cursor]
      continue
    }

    // From here on, we are sure that the currentChar is a string of some sort

    if (isConstKeyword(input, cursor)) {
      tokens.push({ type: 'Keyword', value: CONST_KEYWORD })
      cursor += CONST_INCREMENT
      cursor++ // to skip the space
      currentChar = input[cursor]

      const { numberToIncrementCursor, fullString } = getFullString(
        input,
        cursor
      )

      tokens.push({ type: 'Identifier', value: fullString })
      cursor += numberToIncrementCursor
      currentChar = input[cursor]

      continue
    }

    if (isLetKeyword(input, cursor)) {
      tokens.push({ type: 'Keyword', value: LET_KEYWORD })
      cursor += LET_INCREMENT
      cursor++ // to skip the space
      currentChar = input[cursor]

      const { numberToIncrementCursor, fullString } = getFullString(
        input,
        cursor
      )

      tokens.push({ type: 'Identifier', value: fullString })
      cursor += numberToIncrementCursor
      currentChar = input[cursor]

      continue
    }

    if (isNull(input, cursor)) {
      const { numberToIncrementCursor, fullString } = getFullString(
        input,
        cursor
      )

      tokens.push({ type: 'NullLiteral', value: fullString })
      cursor += numberToIncrementCursor
      currentChar = input[cursor]
      continue
    }

    if (isBoolean(input, cursor)) {
      const { numberToIncrementCursor, fullString } = getFullString(
        input,
        cursor
      )

      tokens.push({ type: 'BooleanLiteral', value: fullString })
      cursor += numberToIncrementCursor
      currentChar = input[cursor]
      continue
    }

    const isCurrentCharStartOfString = currentChar === `${QUOTE}`
    if (isCurrentCharStartOfString) {
      cursor++
      const { numberToIncrementCursor, fullString } = getFullString(
        input,
        cursor
      )
      tokens.push({ type: 'StringLiteral', value: fullString })
      cursor += numberToIncrementCursor + 1 // +1 to include the closing double quote
      currentChar = input[cursor]
      continue
    }

    tokens.push({ type: 'Identifier', value: currentChar })
    cursor++
    currentChar = input[cursor]
  }

  console.log('tokens', tokens)
  return tokens
}
