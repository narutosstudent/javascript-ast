import type { Token } from './types'

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

    if (currentChar === 'l') {
      const keyword = input.slice(cursor, cursor + 3)

      if (keyword === 'let') {
        tokens.push({ type: 'Keyword', value: 'let' })
        cursor += 3
        currentChar = input[cursor]
        continue
      }
    }

    // isNan to ensure that the currentChar is a number
    const isCurrentCharNumeric = !isNaN(Number(currentChar))

    if (isCurrentCharNumeric) {
      tokens.push({ type: 'NumericLiteral', value: currentChar })
      cursor++
      currentChar = input[cursor]
      continue
    }

    tokens.push({ type: 'Identifier', value: currentChar })
    cursor++
    currentChar = input[cursor]
  }

  return tokens
}
