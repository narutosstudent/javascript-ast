import { expect, it, describe } from 'vitest'

import { tokenize } from './tokenizer'

describe('Tokenizer: Variable declaration', () => {
  it('should tokenize let and const with multiple primitive types', () => {
    const input =
      'let x = 5; let message = "Hello"; let isActive = true; let item = null; const y = 10; const name = "John"; const isDisabled = false; const item2 = null;'
    const tokens = tokenize(input)

    expect(tokens).toEqual([
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
      { type: 'Keyword', value: 'const' },
      { type: 'Identifier', value: 'y' },
      { type: 'Operator', value: '=' },
      { type: 'NumericLiteral', value: '10' },
      { type: 'Punctuator', value: ';' },
      { type: 'Keyword', value: 'const' },
      { type: 'Identifier', value: 'name' },
      { type: 'Operator', value: '=' },
      { type: 'StringLiteral', value: 'John' },
      { type: 'Punctuator', value: ';' },
      { type: 'Keyword', value: 'const' },
      { type: 'Identifier', value: 'isDisabled' },
      { type: 'Operator', value: '=' },
      { type: 'BooleanLiteral', value: 'false' },
      { type: 'Punctuator', value: ';' },
      { type: 'Keyword', value: 'const' },
      { type: 'Identifier', value: 'item2' },
      { type: 'Operator', value: '=' },
      { type: 'NullLiteral', value: 'null' },
      { type: 'Punctuator', value: ';' },
    ])
  })

  describe('let declaration', () => {
    it('should tokenize a `let` declaration to number', () => {
      const input = 'let x = 5;'
      const tokens = tokenize(input)

      expect(tokens).toEqual([
        { type: 'Keyword', value: 'let' },
        { type: 'Identifier', value: 'x' },
        { type: 'Operator', value: '=' },
        { type: 'NumericLiteral', value: '5' },
        { type: 'Punctuator', value: ';' },
      ])
    })

    it('should tokenize a `let` declaration to string', () => {
      const input = 'let message = "Hello";'
      const tokens = tokenize(input)

      expect(tokens).toEqual([
        { type: 'Keyword', value: 'let' },
        { type: 'Identifier', value: 'message' },
        { type: 'Operator', value: '=' },
        { type: 'StringLiteral', value: 'Hello' },
        { type: 'Punctuator', value: ';' },
      ])
    })

    it('should tokenize a `let` declaration to boolean', () => {
      const input = 'let isActive = true;'
      const tokens = tokenize(input)

      expect(tokens).toEqual([
        { type: 'Keyword', value: 'let' },
        { type: 'Identifier', value: 'isActive' },
        { type: 'Operator', value: '=' },
        { type: 'BooleanLiteral', value: 'true' },
        { type: 'Punctuator', value: ';' },
      ])
    })

    it('should tokenize a `let` declaration to null', () => {
      const input = 'let item = null;'
      const tokens = tokenize(input)

      expect(tokens).toEqual([
        { type: 'Keyword', value: 'let' },
        { type: 'Identifier', value: 'item' },
        { type: 'Operator', value: '=' },
        { type: 'NullLiteral', value: 'null' },
        { type: 'Punctuator', value: ';' },
      ])
    })

    it('should tokenize multiple `let` declarations with different primitive types', () => {
      const input =
        'let x = 5; let message = "Hello"; let isActive = true; let item = null;'
      const tokens = tokenize(input)

      expect(tokens).toEqual([
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
      ])
    })
  })

  describe('const declaration', () => {
    it('should tokenize a `const` declaration to number', () => {
      const input = 'const x = 5;'
      const tokens = tokenize(input)

      expect(tokens).toEqual([
        { type: 'Keyword', value: 'const' },
        { type: 'Identifier', value: 'x' },
        { type: 'Operator', value: '=' },
        { type: 'NumericLiteral', value: '5' },
        { type: 'Punctuator', value: ';' },
      ])
    })

    it('should tokenize a `const` declaration to string', () => {
      const input = 'const message = "Hello";'
      const tokens = tokenize(input)

      expect(tokens).toEqual([
        { type: 'Keyword', value: 'const' },
        { type: 'Identifier', value: 'message' },
        { type: 'Operator', value: '=' },
        { type: 'StringLiteral', value: 'Hello' },
        { type: 'Punctuator', value: ';' },
      ])
    })

    it('should tokenize a `const` declaration to boolean', () => {
      const input = 'const isActive = true;'
      const tokens = tokenize(input)

      expect(tokens).toEqual([
        { type: 'Keyword', value: 'const' },
        { type: 'Identifier', value: 'isActive' },
        { type: 'Operator', value: '=' },
        { type: 'BooleanLiteral', value: 'true' },
        { type: 'Punctuator', value: ';' },
      ])
    })

    it('should tokenize a `const` declaration to null', () => {
      const input = 'const item = null;'
      const tokens = tokenize(input)

      expect(tokens).toEqual([
        { type: 'Keyword', value: 'const' },
        { type: 'Identifier', value: 'item' },
        { type: 'Operator', value: '=' },
        { type: 'NullLiteral', value: 'null' },
        { type: 'Punctuator', value: ';' },
      ])
    })

    it('should tokenize multiple `const` declarations with different primitive types', () => {
      const input =
        'const x = 5; const message = "Hello"; const isActive = true; const item = null;'
      const tokens = tokenize(input)

      expect(tokens).toEqual([
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
      ])
    })
  })
})
