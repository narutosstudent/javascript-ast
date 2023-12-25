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

// Define a type for each kind of AST node you're handling

interface ProgramNode {
  type: 'Program'
  body: Array<DeclarationNode>
}

export interface DeclarationNode {
  type: 'VariableDeclaration'
  declarations: Array<VariableDeclaratorNode>
  kind: 'let' | 'const'
}

interface VariableDeclaratorNode {
  type: 'VariableDeclarator'
  id: IdentifierNode
  init: LiteralNode | null // Assuming init can be null
}

interface IdentifierNode {
  type: 'Identifier'
  name: string
}

interface LiteralNode {
  type: 'Literal'
  value: string | number | boolean | null // Could be any of these types
}

// Define the top-level AST type
export type AST = ProgramNode
