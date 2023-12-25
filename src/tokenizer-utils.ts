import {
  CONST_INCREMENT,
  CONST_KEYWORD,
  LET_INCREMENT,
  LET_KEYWORD,
  WHITE_SPACE,
} from './constants'

export const isAlphaBetical = (char: string) => /[a-zA-Z]/.test(char)

export const isNumeric = (char: string) => /[0-9]/.test(char)

export function getLetKeyword(input: string, cursor: number) {
  return input.slice(cursor, cursor + LET_INCREMENT)
}

export function isLetKeyword(input: string, cursor: number) {
  const isEndingWithSpace = input[cursor + LET_INCREMENT] === WHITE_SPACE
  return getLetKeyword(input, cursor) === LET_KEYWORD && isEndingWithSpace
}

export function getConstKeyword(input: string, cursor: number) {
  return input.slice(cursor, cursor + CONST_INCREMENT)
}

export function isConstKeyword(input: string, cursor: number) {
  const isEndingWithSpace = input[cursor + CONST_INCREMENT] === WHITE_SPACE
  return getConstKeyword(input, cursor) === CONST_KEYWORD && isEndingWithSpace
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

export function getFullNumber(input: string, cursor: number) {
  let numberToIncrementCursor = 0
  let fullNumber = ''

  // This loops till the number is closed
  while (isNumeric(input[cursor + numberToIncrementCursor])) {
    fullNumber += input[cursor + numberToIncrementCursor]
    numberToIncrementCursor++
  }

  return { numberToIncrementCursor, fullNumber }
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
