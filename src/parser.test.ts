import type { Token } from './tokenizer'

import { expect, it, describe } from 'vitest'

import { parser } from './parser'

describe.skip('Parser: Variable declaration', () => {
  //   it('should parse a `let` declaration with a number', () => {
  //     const tokens: Array<Token> = [
  //       { type: 'Keyword', value: 'let' },
  //       { type: 'Identifier', value: 'x' },
  //       { type: 'Operator', value: '=' },
  //       { type: 'NumericLiteral', value: '5' },
  //       { type: 'Punctuator', value: ';' },
  //     ]
  //     const ast = parser(tokens)
  //     expect(ast).toEqual({
  //       type: 'Program',
  //       body: [
  //         {
  //           type: 'VariableDeclaration',
  //           declarations: [
  //             {
  //               type: 'VariableDeclarator',
  //               id: { type: 'Identifier', name: 'x' },
  //               init: { type: 'Literal', value: 5 },
  //             },
  //           ],
  //           kind: 'let',
  //         },
  //       ],
  //     })
  //   })
  //   it('should parse a `let` declaration with a string', () => {
  //   })
  //   it('should parse a `const` declaration with a number', () => {
  //   })
  // Add tests for more complex scenarios as you expand the parser's capabilities
  // Examples:
  // - Parsing multiple variable declarations
  // - Handling syntax errors (once error handling is implemented)
})
