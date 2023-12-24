type TokenType =
  | 'Keyword'
  | 'Identifier'
  | 'Operator'
  | 'NumericLiteral'
  | 'Punctuator'
  | 'StringLiteral'
  | 'BooleanLiteral'
  | 'NullLiteral'

export type Token = {
  type: TokenType
  value: string
}
