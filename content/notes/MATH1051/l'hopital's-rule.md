---
title: "L'Hôpital's Rule"
publishdate: "2022-07-05"
tags:
- "MATH1051"
---

Let $f$ and $g$ be [differentiable functions](notes/MATH1051/derivative.md) on some interval near some point $c \in \mathbb{R}$, except possibly at $c$ itself. If $\displaystyle\lim_{x \to c} f(x) = \displaystyle\lim_{x \to c} g(x) = 0$ or $\pm \infty$ and $g'(x) \neq 0$ for all $x$ in the interval except $x = c$, and $\displaystyle\lim_{x \to c} \frac{f'(x)}{g'(x)}$ exists, then

$$\lim_{x \to c} \frac{f(x)}{g(x)} = \lim_{x \to c} \frac{f'(x)}{g'(x)}.$$

L'Hôpital's Rule cannot be directly applied to limits, but in some cases we can extend a [sequence](notes/MATH1051/sequences.md) to a [continuous function](notes/MATH1051/continuity.md) in order to apply the rule. Let $f$ be a function on the real numbers such that $\displaystyle\lim_{x\to\infty} f(x)$ exists, and let $f(n) = a_n$ for $n \in \mathbb{N}$. Then we have

$$\lim_{n\to\infty} f(n) = \lim_{x\to\infty} f(x) = \mathscr{l}.$$

> 💭 The rule can generally only be applied to limits of *indeterminate forms*. An indeterminate form does not contain enough information to algebraically determine the limit (hence the name indeterminate). Some common indeterminate forms are $\frac{0}{0}$, $\frac{\infty}{\infty}$, $0 \times \infty$, and $\infty - \infty$.