type TokenType =
  | 'Keyword'
  | 'Identifier'
  | 'Operator'
  | 'NumericLiteral'
  | 'Punctuator'

export type Token = {
  type: TokenType
  value: string
}
