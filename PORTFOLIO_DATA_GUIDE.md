# 作品集数据维护指南

首页由 `index.html` 的渲染逻辑和 `portfolio-data.js` 的内容数据组成。日常更新只需要修改 `portfolio-data.js`，不需要改 HTML 结构。

## 数据结构

```js
const portfolioData = {
  profile: {
    name: '姓名',
    role: '职位 / English Title',
    eyebrow: '职业标签 · 城市 / 工作方式',
    summary: '首屏简介',
    about: '关于我正文',
    email: '邮箱',
    contact: '联系方式区域说明'
  },
  notes: [
    ['08+', '年工作经验']
  ],
  projects: [
    {
      title: '项目名称',
      type: '项目类型 · 角色',
      category: '产品',
      description: '项目简介',
      tags: ['React', 'TypeScript'],
      image: 'https://example.com/project-image.jpg'
    }
  ],
  experience: [
    ['2022 — 至今', '公司 · 职位', '工作内容和成果']
  ],
  skills: [
    ['技能名称', 90]
  ]
};
```

## 如何更新

- 修改姓名、职位、简介、邮箱：编辑 `profile`。
- 增加或删除统计卡片：在 `notes` 中增加或删除一行 `[数值, 标签]`。
- 增加作品：复制 `projects` 中任意对象，修改 `title`、`type`、`category`、`description`、`tags` 和 `image`。
- 增加经历：复制 `experience` 中任意数组，顺序就是页面显示顺序。
- 增加技能：复制 `skills` 中任意数组，第二项使用 0 到 100 的数字表示熟练度。

保存后运行 `npm.cmd run dev`，刷新 `http://localhost:5174` 即可看到更新。项目分类筛选会根据 `projects[].category` 自动生成。
