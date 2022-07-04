---
title: "Squeeze Theorem"
tags:
- "MATH1051"
---

## Squeeze Theorem (sequences)
Let $a_n, b_n, c_n$ be [sequences](notes/MATH1051/sequences.md) such that, for some $N \in \mathbb{N}$, we have $a_n \leq b_n \leq c_n$ for all $n \geq N$ and $\displaystyle\lim_{n\to\infty} a_n = \displaystyle\lim_{n\to\infty} c_n = \mathscr{l}$. Then

$$\lim_{n\to\infty} b_n = \lim_{n\to\infty} a_n = \lim_{n\to\infty} b_n = \mathscr{l}.$$

## Squeeze Theorem (functions)
Let $f$, $g$, and $h$ be [functions](notes/MATH1051/functions.md) such that, for $a \in \mathbb{R}$, we have $h(x) \leq f(x) \leq g(x)$ for $x$ close to $a$ (i.e. $f$ is bounded by $h$ and $g$ around $x = a$) and $\displaystyle\lim_{x \to a} g(x) = \displaystyle\lim_{x \to a} h(x) = \mathscr{l}$. Then

$$\lim_{x \to a} f(x) = \mathscr{l}.$$