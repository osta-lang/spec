---
title: Hello World
order: 0
---
## The Main Function
Like in C, Osta uses the `main` functions as the entry point for the program. The common syntax is already known to all C devs.
```osta
i32 main(usize argc, u8** argv) {
	/*
	* This is a classic C-style main function,
	* where argc is the amount of CLI arguments
	* and argv are the arguments themselves as
	* an array of arrays of chars.
	*/
}
```
Even if this is perfectly valid **osta** code, we prefer to use other more refined signatures. Let's look alternatives.
```osta
i32 main(str[]& args) {
	/*
	* This is something more similar to Java's main function.
	* It receives by reference an array of strings which has
	* runtime out-of-bounds checks.
	*/
}
```
We will discuss `str` and his alternatives later on [[Strings]].