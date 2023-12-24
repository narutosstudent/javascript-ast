type TokenType =
  | 'Keyword'
  | 'Identifier'
  | 'Operator'
  | 'NumericLiteral'
  | 'Punctuator'
  | 'StringLiteral'

export type Token = {
  type: TokenType
  value: string
}
