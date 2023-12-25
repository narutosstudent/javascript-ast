import type { AST, DeclarationNode, Token } from './types'

// TDD, below test case to handle, making it pass is priority

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

type TypeOfOperation = 'variableDeclaration' | 'start'

export function parser(tokens: Array<Token>): AST {
  const initialObject: AST = {
    type: 'Program',
    body: [],
  }

  let currentOperation: TypeOfOperation = 'start'

  const ast = tokens.reduce((acc, token) => {
    if (token.type === 'Keyword' && token.value === 'let') {
      currentOperation = 'variableDeclaration'
    }

    if (currentOperation === 'variableDeclaration') {
      if (token.type === 'Identifier') {
        const declarationNode: DeclarationNode = {
          type: 'VariableDeclaration',
          declarations: [
            {
              type: 'VariableDeclarator',
              id: { type: 'Identifier', name: token.value },
              init: null,
            },
          ],
          kind: 'let',
        }

        acc.body.push(declarationNode)
      }

      if (token.type === 'NumericLiteral') {
        const lastDeclarationNode = acc.body[
          acc.body.length - 1
        ] as DeclarationNode
        lastDeclarationNode.declarations[0].init = {
          type: 'Literal',
          value: Number(token.value),
        }
      }
    }

    return acc
  }, initialObject)

  return ast
}
