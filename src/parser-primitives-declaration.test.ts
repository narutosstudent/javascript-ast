import type { Token } from './types'

import { expect, it, describe } from 'vitest'

import { parser } from './parser'

describe('Parser: Variable declaration', () => {
  describe('let declaration', () => {
    it('should parse a `let` declaration with a number', () => {
      const tokens: Array<Token> = [
        { type: 'Keyword', value: 'let' },
        { type: 'Identifier', value: 'x' },
        { type: 'Operator', value: '=' },
        { type: 'NumericLiteral', value: '5' },
        { type: 'Punctuator', value: ';' },
      ]
      const ast = parser(tokens)

      expect(ast).toEqual({
        type: 'Program',
        body: [
          {
            type: 'VariableDeclaration',
            declarations: [
              {
                type: 'VariableDeclarator',
                id: { type: 'Identifier', name: 'x' },
                init: { type: 'Literal', value: 5 },
              },
            ],
            kind: 'let',
          },
        ],
      })
    })

    it('should parse a `let` declaration with a string', () => {
      const tokens: Array<Token> = [
        { type: 'Keyword', value: 'let' },
        { type: 'Identifier', value: 'message' },
        { type: 'Operator', value: '=' },
        { type: 'StringLiteral', value: 'Hello' },
        { type: 'Punctuator', value: ';' },
      ]
      const ast = parser(tokens)

      expect(ast).toEqual({
        type: 'Program',
        body: [
          {
            type: 'VariableDeclaration',
            declarations: [
              {
                type: 'VariableDeclarator',
                id: { type: 'Identifier', name: 'message' },
                init: { type: 'Literal', value: 'Hello' },
              },
            ],
            kind: 'let',
          },
        ],
      })
    })

    it('should parse a `let` declaration with a boolean', () => {
      const tokens: Array<Token> = [
        { type: 'Keyword', value: 'let' },
        { type: 'Identifier', value: 'isActive' },
        { type: 'Operator', value: '=' },
        { type: 'BooleanLiteral', value: 'true' },
        { type: 'Punctuator', value: ';' },
      ]
      const ast = parser(tokens)

      expect(ast).toEqual({
        type: 'Program',
        body: [
          {
            type: 'VariableDeclaration',
            declarations: [
              {
                type: 'VariableDeclarator',
                id: { type: 'Identifier', name: 'isActive' },
                init: { type: 'Literal', value: true },
              },
            ],
            kind: 'let',
          },
        ],
      })
    })

    it('should parse a `let` declaration with a null', () => {
      const tokens: Array<Token> = [
        { type: 'Keyword', value: 'let' },
        { type: 'Identifier', value: 'item' },
        { type: 'Operator', value: '=' },
        { type: 'NullLiteral', value: 'null' },
        { type: 'Punctuator', value: ';' },
      ]
      const ast = parser(tokens)

      expect(ast).toEqual({
        type: 'Program',
        body: [
          {
            type: 'VariableDeclaration',
            declarations: [
              {
                type: 'VariableDeclarator',
                id: { type: 'Identifier', name: 'item' },
                init: { type: 'Literal', value: null },
              },
            ],
            kind: 'let',
          },
        ],
      })
    })

    it('should parse multiple `let` declarations with different primitive types', () => {
      const tokens: Array<Token> = [
        { type: 'Keyword', value: 'let' },
        { type: 'Identifier', value: 'x' },
        { type: 'Operator', value: '=' },
        { type: 'NumericLiteral', value: '5' },
        { type: 'Punctuator', value: ';' },
        { type: 'Keyword', value: 'let' },
        { type: 'Identifier', value: 'message' },
        { type: 'Operator', value: '=' },
        { type: 'StringLiteral', value: 'Hello' },
        { type: 'Punctuator', value: ';' },
        { type: 'Keyword', value: 'let' },
        { type: 'Identifier', value: 'isActive' },
        { type: 'Operator', value: '=' },
        { type: 'BooleanLiteral', value: 'true' },
        { type: 'Punctuator', value: ';' },
        { type: 'Keyword', value: 'let' },
        { type: 'Identifier', value: 'item' },
        { type: 'Operator', value: '=' },
        { type: 'NullLiteral', value: 'null' },
        { type: 'Punctuator', value: ';' },
      ]
      const ast = parser(tokens)

      expect(ast).toEqual({
        type: 'Program',
        body: [
          {
            type: 'VariableDeclaration',
            declarations: [
              {
                type: 'VariableDeclarator',
                id: { type: 'Identifier', name: 'x' },
                init: { type: 'Literal', value: 5 },
              },
            ],
            kind: 'let',
          },
          {
            type: 'VariableDeclaration',
            declarations: [
              {
                type: 'VariableDeclarator',
                id: { type: 'Identifier', name: 'message' },
                init: { type: 'Literal', value: 'Hello' },
              },
            ],
            kind: 'let',
          },
          {
            type: 'VariableDeclaration',
            declarations: [
              {
                type: 'VariableDeclarator',
                id: { type: 'Identifier', name: 'isActive' },
                init: { type: 'Literal', value: true },
              },
            ],
            kind: 'let',
          },
          {
            type: 'VariableDeclaration',
            declarations: [
              {
                type: 'VariableDeclarator',
                id: { type: 'Identifier', name: 'item' },
                init: { type: 'Literal', value: null },
              },
            ],
            kind: 'let',
          },
        ],
      })
    })
  })

  describe('const declaration', () => {
    it('should parse a `const` declaration with a number', () => {
      const tokens: Array<Token> = [
        { type: 'Keyword', value: 'const' },
        { type: 'Identifier', value: 'x' },
        { type: 'Operator', value: '=' },
        { type: 'NumericLiteral', value: '5' },
        { type: 'Punctuator', value: ';' },
      ]
      const ast = parser(tokens)

      expect(ast).toEqual({
        type: 'Program',
        body: [
          {
            type: 'VariableDeclaration',
            declarations: [
              {
                type: 'VariableDeclarator',
                id: { type: 'Identifier', name: 'x' },
                init: { type: 'Literal', value: 5 },
              },
            ],
            kind: 'const',
          },
        ],
      })
    })

    it('should parse a `const` declaration with a string', () => {
      const tokens: Array<Token> = [
        { type: 'Keyword', value: 'const' },
        { type: 'Identifier', value: 'message' },
        { type: 'Operator', value: '=' },
        { type: 'StringLiteral', value: 'Hello' },
        { type: 'Punctuator', value: ';' },
      ]
      const ast = parser(tokens)

      expect(ast).toEqual({
        type: 'Program',
        body: [
          {
            type: 'VariableDeclaration',
            declarations: [
              {
                type: 'VariableDeclarator',
                id: { type: 'Identifier', name: 'message' },
                init: { type: 'Literal', value: 'Hello' },
              },
            ],
            kind: 'const',
          },
        ],
      })
    })

    it('should parse a `const` declaration with a boolean', () => {
      const tokens: Array<Token> = [
        { type: 'Keyword', value: 'const' },
        { type: 'Identifier', value: 'isActive' },
        { type: 'Operator', value: '=' },
        { type: 'BooleanLiteral', value: 'true' },
        { type: 'Punctuator', value: ';' },
      ]
      const ast = parser(tokens)

      expect(ast).toEqual({
        type: 'Program',
        body: [
          {
            type: 'VariableDeclaration',
            declarations: [
              {
                type: 'VariableDeclarator',
                id: { type: 'Identifier', name: 'isActive' },
                init: { type: 'Literal', value: true },
              },
            ],
            kind: 'const',
          },
        ],
      })
    })

    it('should parse a `const` declaration with a null', () => {
      const tokens: Array<Token> = [
        { type: 'Keyword', value: 'const' },
        { type: 'Identifier', value: 'item' },
        { type: 'Operator', value: '=' },
        { type: 'NullLiteral', value: 'null' },
        { type: 'Punctuator', value: ';' },
      ]
      const ast = parser(tokens)

      expect(ast).toEqual({
        type: 'Program',
        body: [
          {
            type: 'VariableDeclaration',
            declarations: [
              {
                type: 'VariableDeclarator',
                id: { type: 'Identifier', name: 'item' },
                init: { type: 'Literal', value: null },
              },
            ],
            kind: 'const',
          },
        ],
      })
    })

    it('should parse multiple `const` declarations with different primitive types', () => {
      const tokens: Array<Token> = [
        { type: 'Keyword', value: 'const' },
        { type: 'Identifier', value: 'x' },
        { type: 'Operator', value: '=' },
        { type: 'NumericLiteral', value: '5' },
        { type: 'Punctuator', value: ';' },
        { type: 'Keyword', value: 'const' },
        { type: 'Identifier', value: 'message' },
        { type: 'Operator', value: '=' },
        { type: 'StringLiteral', value: 'Hello' },
        { type: 'Punctuator', value: ';' },
        { type: 'Keyword', value: 'const' },
        { type: 'Identifier', value: 'isActive' },
        { type: 'Operator', value: '=' },
        { type: 'BooleanLiteral', value: 'true' },
        { type: 'Punctuator', value: ';' },
        { type: 'Keyword', value: 'const' },
        { type: 'Identifier', value: 'item' },
        { type: 'Operator', value: '=' },
        { type: 'NullLiteral', value: 'null' },
        { type: 'Punctuator', value: ';' },
      ]
      const ast = parser(tokens)

      expect(ast).toEqual({
        type: 'Program',
        body: [
          {
            type: 'VariableDeclaration',
            declarations: [
              {
                type: 'VariableDeclarator',
                id: { type: 'Identifier', name: 'x' },
                init: { type: 'Literal', value: 5 },
              },
            ],
            kind: 'const',
          },
          {
            type: 'VariableDeclaration',
            declarations: [
              {
                type: 'VariableDeclarator',
                id: { type: 'Identifier', name: 'message' },
                init: { type: 'Literal', value: 'Hello' },
              },
            ],
            kind: 'const',
          },
          {
            type: 'VariableDeclaration',
            declarations: [
              {
                type: 'VariableDeclarator',
                id: { type: 'Identifier', name: 'isActive' },
                init: { type: 'Literal', value: true },
              },
            ],
            kind: 'const',
          },
          {
            type: 'VariableDeclaration',
            declarations: [
              {
                type: 'VariableDeclarator',
                id: { type: 'Identifier', name: 'item' },
                init: { type: 'Literal', value: null },
              },
            ],
            kind: 'const',
          },
        ],
      })
    })
  })
})
