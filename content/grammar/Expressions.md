---
title: Expressions
tags:
  - grammar
  - syntax
draft: true
---

```ebnf
EXPR = ASSIGNMENT;

ASSIGNMENT
	= CONDITIONAL
	| UNARY ASSIGN_OP ASSIGNMENT
	;

CONDITIONAL
	= LOGICAL_OR
	| LOGICAL_OR "?" EXPR ":" CONDITIONAL
	;

LOGICAL_OR
	= LOGICAL_AND
	| LOGICAL_OR "||" LOGICAL_AND
	;

LOGICAL_AND
	= INCLUSIVE_OR
	| LOGICAL_AND "&&" INCLUSIVE_OR
	;

INCLUSIVE_OR
	= EXCLUSIVE_OR
	| INCLUSIVE_OR "|" EXCLUSIVE_OR
	;

EXCLUSIVE_OR
	= AND
	| EXCLUSIVE_OR "^" AND
	;

AND
	= EQUALITY
	| AND "&" EQUALITY
	;

EQUALITY
	= RELATIONAL
	| EQUALITY ("==" | "!=") RELATIONAL
	;

RELATIONAL
	= SHIFT
	| RELATIONAL ("<" | ">" | "<=" | ">=") SHIFT
	;

SHIFT
	= ADDITIVE
	| SHIFT ("<<" | ">>") ADDITIVE
	;

ADDITIVE
	= MULTIPLICATIVE
	| ADDITIVE ("+" | "-") MULTIPLICATIVE
	;

MULTIPLICATIVE
	= CAST
	| MULTIPLICATIVE ("*" | "/" | "%") CAST
	;

CAST
	= UNARY
	| "(" TYPE ")" CAST
	;

UNARY
	= POSTFIX
	| ("++" | "--") UNARY
	| UNARY_OP CAST

POSTFIX
	= PRIMARY
	| POSTFIX "[" EXPR "]"
	| POSTFIX "(" (ASSIGNMENT ",")* ASSIGNMENT? ")"
	| POSTFIX ("." | "->") MEMBER
	| POSTFIX ("++" | "--")
	;

PRIMARY
	= IDENTIFIER
	| CONSTANT
	| STRING
	| "(" EXPR ")"
	;

ASSIGN_OP = ("=" | "*=" | "/=" | "%=" | "+=" | "-=" | "<<=" | ">>=" | "&=" | "^=" | "|=")

UNARY_OP = ("&" | "*" | "+" | "-" | "~" | "!")
```
