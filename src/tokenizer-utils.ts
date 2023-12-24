import { WHITE_SPACE } from './constants'

export const isAlphaBetical = (char: string) => /[a-zA-Z]/.test(char)

export function getLetKeyword(input: string, cursor: number) {
  return input.slice(cursor, cursor + 3)
}

export function isLetKeyword(input: string, cursor: number) {
  const isEndingWithSpace = input[cursor + 3] === WHITE_SPACE
  return getLetKeyword(input, cursor) === 'let' && isEndingWithSpace
}

export function getFullString(input: string, cursor: number) {
  let numberToIncrementCursor = 0
  let fullString = ''

  // This loops till the string is closed
  while (isAlphaBetical(input[cursor + numberToIncrementCursor])) {
    fullString += input[cursor + numberToIncrementCursor]
    numberToIncrementCursor++
  }

  return { numberToIncrementCursor, fullString }
}

export function isBoolean(input: string, cursor: number) {
  const falseBoolean = input.slice(cursor, cursor + 5)
  const trueBoolean = input.slice(cursor, cursor + 4)

  return falseBoolean === 'false' || trueBoolean === 'true'
}

export function isNull(input: string, cursor: number) {
  const nullString = input.slice(cursor, cursor + 4)
  return nullString === 'null'
}
