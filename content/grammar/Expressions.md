---
title: Expressions
tags:
  - grammar
  - syntax
---
```ebnf
EXPR =
	(* left 0 *)
	ATOM
	(* left 1 *)
	| IDENTIFIER ("++" | "--")
	| FUNC_CALL
	| ARR_SUB
	| MEMBER_ACCESS
	| PTR_MEMBER_ACCESS
	(* right 2 *)
	| ("++" | "--") IDENTIFIER
	| ("+" | "-") ATOM
	| ("!" | "~") ATOM
	| "(" TYPE ")" EXPR
	| "*" ATOM
	| "&" IDENTIFIER
	(* left 3 *)
	| EXPR ("*" | "/" | "%") EXPR
	(* left 4 *)
	| EXPR ("+" | "-") EXPR
	(* left 5 *)
	

ATOM = LITERAL
	 | IDENTIFIER
	 | "(" EXPR ")"
```