# JavaScript AST from scratch

My attempt to write a JavaScript AST parser from scratch. This is a work in progress and more of a long term thingy for me to learn how things work under the hood.

## Scope 1 (in progress)

- Tokenizer for basic JavaScript syntax.
- Parser to create an AST for simple variable declarations.

Optional: error handling

- [x] Primitive types
- [ ] Object types
- [ ] Array types
- [ ] Function types
- [ ] Class types

## Lexical Analysis

This is the first step. It's also often called tokenization. The goal is to take a string of characters and turn it into a list of tokens. A token is a meaningful chunk of characters, for example a number, a string, a keyword, an operator or a punctuation mark.

This will be the input to the next step, the syntactic analysis.

## Syntactic Analysis

This is the second step. It's also often called parsing. The goal is to take a list of tokens and turn it into an abstract syntax tree (AST). An AST is a tree representation of the source code. It's a data structure that is easier to work with than the raw source code.

# Learnings

## Tokenizer and Parsing logic

When tokenizing a string, the output is an array of token objects. Each token object represents a meaningful unit of code (like a keyword, identifier, literal, etc.). The parsing logic then uses this array of tokens to understand the structure of the code.

**Token Boundaries:** The tokenizer determines where one token ends, and another begins, often based on whitespace, punctuation, or specific character patterns.

In this project we'll imagine `;` as the token boundary. So the parser will know that a new statement begins after a `;`.
