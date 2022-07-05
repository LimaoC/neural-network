---
title: "Limits"
publishdate: "2022-07-02"
tags:
- "MATH1051"
---

## Limit of a Sequence
Let $\{a_n\}_{n=0}^\infty$ be a [sequence](notes/MATH1051/sequences.md). If $a_n$ approaches some number $\mathscr{l} \in \mathbb{R}$ as $n$ gets larger and larger, we write

$$\lim_{n\to\infty} a_n = \mathscr{l}.$$

If a sequence $\{a_n\}$ has limit $\mathscr{l} \in \mathbb{R}$, we say that $a_n$ *converges* to $\mathscr{l}$, and that the sequence is *convergent*. Otherwise, $a_n$ *diverges* and the sequence is *divergent*.

## Limit of a Function

Let $f(x)$ be a [function](notes/MATH1051/functions.md) and $\mathscr{l} \in \mathbb{R}$. We say $f(x)$ *converges to* $\mathscr{l}$ or $f(x)$ *approaches the limit* $\mathscr{l}$ as $x$ approaches $a$ or $x$ tends to $a$, if we can get $f(x)$ to be arbitrarily close to $\mathscr{l}$ by taking $x$ arbitrarily close but not equal to $a$. We write

$$\lim_{x \to a}f(x) = \mathscr{l}.$$

### Infinite Limits

Let $f$ be a function that diverges, that is its value grows without bound. In this case we can define

$$\lim_{x \to a} f(x) = \infty$$

if $f$ diverges in the positive direction as we take $x$ arbitrarily and sufficiently close to $a$, and

$$\lim_{x \to a} f(x) = -\infty$$

if $f$ diverges in the negative direction as we take $x$ arbitrarily and sufficiently close to $a$. We also say that the limit *does not exist*.