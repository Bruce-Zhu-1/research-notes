---
title: DALL·E 2
description: 理解 CLIP 图像嵌入、条件先验与扩散解码器如何组成两阶段生成系统。
---

[Ramesh 等，Hierarchical Text-Conditional Image Generation with CLIP Latents，2022](https://arxiv.org/abs/2204.06125)

## 先验与解码

系统先用文本条件预测一个 CLIP 图像嵌入，再由扩散解码器根据该嵌入生成图像。这将「希望生成什么」与「如何把条件变成像素」分成了两个建模问题。

## 图像嵌入表达什么

CLIP 的对比学习把相配的图像和文字拉近。同一嵌入可以容纳多种外观变化，所以解码阶段仍有生成多样性的空间。另一方面，嵌入的语义相似性也不保证能精确表达空间关系、计数与物体属性绑定。

## 阅读延伸

分别考虑先验与解码器的失误。文本条件缺失、嵌入预测偏差和像素生成偏差会产生不同类型的失败案例。相关的速度场训练可参见 [Flow Matching](flow-matching.md)。
