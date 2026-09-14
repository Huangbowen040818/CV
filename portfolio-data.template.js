// 作品集内容模板：复制此文件为 portfolio-data.js 后按需修改。
// 页面模块建议只读取数据，不在 HTML 中重复维护文案。
const portfolioDataTemplate = {
  profile: {
    name: '你的名字',
    role: '设计工程师 / Frontend Engineer',
    eyebrow: '职业身份 · 城市 / 远程',
    summary: '用一句话说明你的工作方式和价值。',
    about: '用一段话介绍经历、专长和你希望解决的问题。',
    email: 'hello@example.com',
    contact: '目前开放合作、咨询或全职机会。'
  },

  notes: [
    ['08+', '年工作经验'],
    ['42', '个上线项目'],
    ['12', '个设计系统'],
    ['∞', '保持好奇']
  ],

  projects: [
    {
      title: '项目名称',
      type: '项目类型 · 角色',
      category: '产品',
      description: '项目解决了什么问题，产生了什么结果。',
      tags: ['React', 'TypeScript', 'Design System'],
      image: 'https://images.unsplash.com/photo-example?auto=format&fit=crop&w=1000&q=85',
      link: '/#projects',
      featured: true
    }
  ],

  experience: [
    [
      '2022 — 至今',
      '公司名称 · 职位',
      '负责的工作范围、协作方式和代表性成果。'
    ]
  ],

  skills: [
    ['产品设计', 92],
    ['前端开发', 88],
    ['设计系统', 94],
    ['动效与原型', 80]
  ]
};

// 增加内容时参考：
// portfolioDataTemplate.projects.push({
//   title: '新项目',
//   type: '品牌网站 · 设计',
//   category: '网站',
//   description: '项目简介。',
//   tags: ['Figma', 'Web'],
//   image: '图片地址',
//   link: '/#projects',
//   featured: false
// });
