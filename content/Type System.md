---
title: Type System
---
```rust
typedef void* Thread<'fn, 'args>;
```

```cpp
resource std::Thread<FN, ARGS> thread<N: usize>(Function<T, void> fn, T args)
[
	T : (Any; N),
	FN = lifetime(fn),
	ARGS = lifetime(args),
	lifetime(return) < min(FN, ARGS),
]
```

```cpp
void join(move std::Thread this)
```

```cpp
void detach(move std::Thread<static, static> this)
```

```cpp
void thread_fn(u8 foo) {
	// ...
}

std::Thread create(u8 foo) {
	std::thread(thread_fn, foo)
}

(std::Thread, u8) start() {
	u8 foo = 0;
	std::Thread th = create(foo);
	(th, foo)
}

u8 patata() {
	(std::Thread, u8) (th, foo) = start();
	th.detach();
	foo
}

i32 main() {
	let foo = patata();
}
```