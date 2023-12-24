import type { Token } from './types'

const isAlphaBetical = (char: string) => /[a-zA-Z]/.test(char)

function getLetKeyword(input: string, cursor: number) {
  return input.slice(cursor, cursor + 3)
}

function isLetKeyword(input: string, cursor: number) {
  const isEndingWithSpace = input[cursor + 3] === ' '
  return getLetKeyword(input, cursor) === 'let' && isEndingWithSpace
}

function getFullString(input: string, cursor: number) {
  let numberToIncrementCursor = 0
  let fullString = ''

  // This loops till the string is closed
  while (isAlphaBetical(input[cursor + numberToIncrementCursor])) {
    fullString += input[cursor + numberToIncrementCursor]
    numberToIncrementCursor++
  }

  return { numberToIncrementCursor, fullString }
}

export function tokenize(input: string): Array<Token> {
  const tokens: Array<Token> = []

  let cursor = 0
  let currentChar = input[cursor]

  while (cursor < input.length) {
    if (currentChar === ' ') {
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

    if (isLetKeyword(input, cursor)) {
      tokens.push({ type: 'Keyword', value: 'let' })
      cursor += 3
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

    const isCurrentCharString = currentChar === '"'
    if (isCurrentCharString) {
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
