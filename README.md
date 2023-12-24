# JavaScript AST from scratch

My attempt to write a JavaScript AST parser from scratch. This is a work in progress and more of a long term thingy for me to learn how things work under the hood.

## Scope 1 (in progress)

- Tokenizer for basic JavaScript syntax (variable declarations).
- Parser to create an AST for simple variable declarations.

Optional: error handling

## Lexical Analysis

This is the first step. It's also often called tokenization. The goal is to take a string of characters and turn it into a list of tokens. A token is a meaningful chunk of characters, for example a number, a string, a keyword, an operator or a punctuation mark.

This will be the input to the next step, the syntactic analysis.

## Syntactic Analysis

This is the second step. It's also often called parsing. The goal is to take a list of tokens and turn it into an abstract syntax tree (AST). An AST is a tree representation of the source code. It's a data structure that is easier to work with than the raw source code.
