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

function parseAllTokensOfLet(
  tokens: Array<Token>,
  index: number
): {
  declarationInfo: {
    Identifier: DeclarationNode['declarations'][0]['id']['name']
    Literal: DeclarationNode['declarations'][0]['init']['value']
  }
  index: number
} {
  const declarationInfo: {
    Identifier: DeclarationNode['declarations'][0]['id']['name']
    Literal: DeclarationNode['declarations'][0]['init']['value']
  } = {
    Identifier: '',
    Literal: null,
  }

  for (let i = index; i < tokens.length; i++) {
    const token = tokens[i]

    if (token.type === 'Identifier') {
      declarationInfo.Identifier = token.value
    }

    if (token.type === 'NumericLiteral') {
      declarationInfo.Literal = Number(token.value)
    }

    if (token.type === 'Punctuator') {
      if (token.value === ';') {
        return {
          declarationInfo,
          index: i,
        }
      }
    }
  }

  return {
    declarationInfo,
    index,
  }
}

export function parser(tokens: Array<Token>): AST {
  const ast: AST = {
    type: 'Program',
    body: [],
  }

  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i]

    if (token.type === 'Keyword') {
      if (token.value === 'let') {
        const { declarationInfo, index } = parseAllTokensOfLet(tokens, i)
        i = index
        ast.body.push({
          type: 'VariableDeclaration',
          declarations: [
            {
              type: 'VariableDeclarator',
              id: { type: 'Identifier', name: declarationInfo.Identifier },
              init: { type: 'Literal', value: declarationInfo.Literal },
            },
          ],
          kind: 'let',
        })
      }
    }
  }

  return ast
}
