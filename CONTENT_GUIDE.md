# 作品集内容模块说明

当前网站的内容按数据模块组织，页面结构负责渲染，内容负责更新。建议后续只修改数据，不直接改 HTML 布局。

## 模块结构

| 模块 | 字段 | 用途 |
| --- | --- | --- |
| `profile` | `name`, `role`, `eyebrow`, `summary`, `about`, `email`, `contact` | 首屏、关于我和联系方式 |
| `notes` | `[数值, 标签]` | 关于我区域的统计卡片 |
| `projects` | `title`, `type`, `category`, `description`, `tags`, `image`, `link`, `featured` | 作品集卡片、筛选和项目入口 |
| `experience` | `[时间, 职位, 描述]` | 工作经历时间线 |
| `skills` | `[技能名称, 百分比]` | 技能进度条，百分比范围为 0 到 100 |

## 更新现有内容

在 `index.html` 的 `portfolioData` 对象中找到对应模块，修改字段值即可：

```js
profile: {
  name: '黄博文',
  summary: '更新后的首屏简介。'
}
```

## 增加一个项目

把下面对象追加到 `projects` 数组中：

```js
{
  title: '新项目名称',
  type: '产品设计 · 前端',
  category: '产品',
  description: '一句话说明项目价值和结果。',
  tags: ['React', 'TypeScript'],
  image: 'https://example.com/project-cover.jpg',
  link: '/#projects',
  featured: true
}
```

`category` 会自动生成作品筛选按钮。`tags` 可以任意增加或减少。`image` 建议使用 1000px 以上宽度的横向图片。

## 增加一段经历

```js
[
  '2024 — 至今',
  '公司名称 · 职位',
  '负责范围、协作对象和可量化成果。'
]
```

## 增加一项技能

```js
['用户研究', 82]
```

## 推荐维护方式

1. 先复制 `portfolio-data.template.js` 作为内容草稿。
2. 更新 `index.html` 中的对应数据模块。
3. 启动 `npm.cmd run dev`，在 `http://localhost:5174` 检查页面。
4. 检查移动端、项目筛选和外部链接后再提交 GitHub。

`zpp.html` 当前是独立子页面。它展示主作品集中的精选项目，新增主项目后可在其中补充一张作品卡片。
