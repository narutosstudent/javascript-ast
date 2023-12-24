import { expect, it, describe } from 'vitest'

import { tokenize } from './tokenizer'

describe('Tokenizer: Object Literal Declaration', () => {
  describe('let declaration', () => {
    it('should tokenize a `let` declaration with an empty object', () => {
      const input = 'let obj = {};'
      const tokens = tokenize(input)

      expect(tokens).toEqual([
        { type: 'Keyword', value: 'let' },
        { type: 'Identifier', value: 'obj' },
        { type: 'Operator', value: '=' },
        { type: 'Punctuator', value: '{' },
        { type: 'Punctuator', value: '}' },
        { type: 'Punctuator', value: ';' },
      ])
    })

    //   it('should tokenize a `let` declaration with an object containing one property', () => {
    //     const input = 'let obj = { key: "value" };'
    //     const tokens = tokenize(input)

    //     expect(tokens).toEqual([
    //       { type: 'Keyword', value: 'let' },
    //       { type: 'Identifier', value: 'obj' },
    //       { type: 'Operator', value: '=' },
    //       { type: 'Punctuator', value: '{' },
    //       { type: 'Identifier', value: 'key' },
    //       { type: 'Punctuator', value: ':' },
    //       { type: 'StringLiteral', value: 'value' },
    //       { type: 'Punctuator', value: '}' },
    //       { type: 'Punctuator', value: ';' },
    //     ])
    //   })

    //   it('should tokenize a `let` declaration with an object containing multiple properties', () => {
    //     const input = 'let obj = { a: 1, b: 2 };'
    //     const tokens = tokenize(input)

    //     expect(tokens).toEqual([
    //       { type: 'Keyword', value: 'let' },
    //       { type: 'Identifier', value: 'obj' },
    //       { type: 'Operator', value: '=' },
    //       { type: 'Punctuator', value: '{' },
    //       { type: 'Identifier', value: 'a' },
    //       { type: 'Punctuator', value: ':' },
    //       { type: 'NumericLiteral', value: '1' },
    //       { type: 'Punctuator', value: ',' },
    //       { type: 'Identifier', value: 'b' },
    //       { type: 'Punctuator', value: ':' },
    //       { type: 'NumericLiteral', value: '2' },
    //       { type: 'Punctuator', value: '}' },
    //       { type: 'Punctuator', value: ';' },
    //     ])
    //   })

    //   it('should tokenize a `let` declaration with an object containing nested objects', () => {
    // 	    const input = 'let obj = { a: { b: 1 } };'
    //     const tokens = tokenize(input)

    //     expect(tokens).toEqual([
    //       { type: 'Keyword', value: 'let' },
    //       { type: 'Identifier', value: 'obj' },
    //       { type: 'Operator', value: '=' },
    //       { type: 'Punctuator', value: '{' },
    //       { type: 'Identifier', value: 'a' },
    //       { type: 'Punctuator', value: ':' },
    //       { type: 'Punctuator', value: '{' },
    //       { type: 'Identifier', value: 'b' },
    //       { type: 'Punctuator', value: ':' },
    //       { type: 'NumericLiteral', value: '1' },
    //       { type: 'Punctuator', value: '}' },
    //       { type: 'Punctuator', value: '}' },
    //       { type: 'Punctuator', value: ';' },
    //     ])
    //   })
  })
})
