import type { SidebarConfig } from '@vuepress/theme-default'


export const sidebarEn: SidebarConfig = {
  '/guide/': [
    {
      text: 'Getting Started',
      collapsible: true,
      children: [ ],
    },
    {
      text: 'Tutorial',
      collapsible: true,
      children: [
        '/guide/tutorial/vuepress-tutorial.md'
      ],
    },
  ],

  '/academics/': [
    {
      text: 'CS',
      collapsible: true,
      children: [ '/academics/cs/cs.md' ],
    },
    {
      text: 'Math',
      collapsible: true,
      children: [ '/academics/math/math.md' ],
    },
    {
      text: 'GIS',
      collapsible: true,
      children: [ '/academics/gis/gis.md' ],
    },
  ],

  '/intro/': [
    {
      text: 'Introduction',
      children: [ '/intro/intro.md' ],
    },
    {
      text: 'About',
      children: [ '/intro/about.md' ],
    },
    {
      text: 'Contact',
      children: [ '/intro/contact.md' ],
    },
  ],

  '/journal/': [
    {
      text: '🗒️ Journal',
      collapsible: true,
      children: [
        '/journal/journal.md', 
      ],
    },
    {
      text: '🎼 Music',
      collapsible: true,
      children: [
        '/journal/music/music.md',
        '/journal/music/HansZimmer.md',
      ],
    },
    {
      text: '📽️ Movie',
      collapsible: true,
      children: [
        '/journal/movie/movie.md',
      ],
    },
    {
      text: '📚 Reading',
      collapsible: true,
      children: [
        '/journal/reading/reading.md',
        '/journal/reading/poem/poem.md',
      ],
    },

  ]

}
