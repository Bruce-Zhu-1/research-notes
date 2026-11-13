---
title: Vision Transformer
description: 从图像分块到分类 token，理解视觉 Transformer 的输入、读出与归纳偏置。
---

[Dosovitskiy 等，An Image is Worth 16×16 Words，ICLR 2021](https://arxiv.org/abs/2010.11929)

## 把图像写成序列

对 $224\times224$ 的图像使用 $16\times16$ 的分块，会得到 $14\times14=196$ 个 patch。ViT 将每个 patch 展平并投影到同一维度，再加入位置嵌入。分类版本还在序列前加入一个可学习的分类 token，最终用它的输出做分类。

## 注意力与归纳偏置

卷积通过局部感受野与权重共享，把空间结构写进模型。ViT 的标准自注意力允许远距离 patch 直接交换信息，位置嵌入则让模型区分 token 在图像里的位置。阅读结果时，应同时关注训练数据规模、预训练方式和下游评估协议。

## 阅读延伸

如果改用平均池化读出，可以对比冻结主干、线性探针和完整微调下的差异。有关冻结表征的实验设计，见 [CLIP × Flow](../projects/clip-flow.md)。
