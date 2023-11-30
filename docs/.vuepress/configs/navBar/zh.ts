import type { NavbarConfig } from '@vuepress/theme-default'

export const navbarZh: NavbarConfig = [
  { text: '主页', link: '/zh/' },
  { text: '指南', link: '/zh/guide/guide.md' },

  {
    text: '学术',
    children: [
      {
        text: 'CS',
        children: ['/academics/cs/cs.md'],
      },
      {
        text: 'GIS',
        children: ['/academics/gis/gis.md'],
      },
      {
        text: 'Math',
        children: ['/academics/math/math.md'],
      },
    ]
  },

  {
    text: '开发',
    children: [
      {
        text: 'Code Space',
        children: ['/develop/codespace/codespace.md'],
      },
      {
        text: 'Back-end',
        children: ['/develop/backend/backend.md'],
      },
      {
        text: 'Front-end',
        children: ['/develop/frontend/frontend.md'],
      },
      {
        text: 'Database',
        children: ['/develop/database/database.md'],
      },
      {
        text: 'Tools',
        children: ['/develop/tools/tools.md'],
      },
    ]
  },

  {
    text: '碎记',
    children: [
      '/journal/journal.md',
      {
        text: 'Movie',
        children: ['/journal/movie/movie.md',],
      },
      {
        text: 'Music',
        children: ['/journal/music/music.md',],
      },
      {
        text: 'Movie',
        children: ['/journal/reading/reading.md',],
      },
    ]
  },
  {
    text: '笔记',
    children: [
      '/notes/notes.md',
      {
        text: 'Notion',
        children: ['/notes/notion/notion.md'],
      },
      {
        text: 'Tencent Docs',
        children: ['/notes/tencent/tencent.md'],
      },
    ],
  },

  {
    text: '关于', link: '/zh/about/about.md'
  }
]
