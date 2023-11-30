import type { NavbarConfig } from '@vuepress/theme-default'

export const navbarEn: NavbarConfig = [
  { text: 'Home', link: '/' },
  { text: 'Guide', link: '/guide/guide.md' },
  {
    text: 'Academics',
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
    text: 'Develop',
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
    text: 'Journal',
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
    text: 'Notes',
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
    text: 'About', link: '/about/about.md'
  }
]
