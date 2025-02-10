---
title: Strings
created: 2025-02-10T00:00:00
modified: 2025-02-10T02:20:00
order: 100
---

# Strings

Strings are just a bunch of bytes from a simplistic perspective, but working with ASCII, UTF-8 or other character sets can be annoying if we don't scaffold properly.

## Just a bunch of bytes

Just like in C, we can use `u8*` and call it a day, sure, but don't cry when a `SEGFAULT` or a `Buffer Overflow` occurs.

> [!warning]
> There are no guarantees about the format of the string or its encoding. It's just a bunch of bytes piled up.

## Null-Terminated

In C, strings are [[getting-started/Strings#just-a-bunch-of-bytes|just a bunch of bytes]] with the `\0` byte at the end. In osta we can assert that at the type level using **Sentinel Termination**.

```osta
typedef u8[:0] c_str;
```

## Fat Pointer

A fat pointer is a general solution to a common problem that also applies to strings: references to unsized data.
A fat pointer is a 2-tuple with a pointer and the length in bytes `(u8*, usize)`. Since `FatPtr<T>` is already defined in the `stdlib` as

```osta
typedef (T*, usize) FatPtr<T>;
```

and a reference of an unsized type `T` is always a `FatPtr<T>` we can define `str` as a reference to `u8[]`.

```osta
// stdlib
typedef str u8[];

// your code
str& i_love_osta = "I ❤️ Osta!";
```

> [!info]  
> `"I ❤️ Osta!"` is a string literal with type `u8[9:0]`. We hate implicit casts, but here we have one: since `str` is `u8[]`, the `u8[9:0]` can be **upcasted** implicitly into `u8[:0]`, which is a refinement type of `u8[]`.

> [!tip]
> The **Sentinel Termination** is dropped by the compiler during the implicit upcasts when using `str` because it's not needed since we know the length.
