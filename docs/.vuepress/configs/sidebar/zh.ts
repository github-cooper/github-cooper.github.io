import type { SidebarConfig } from '@vuepress/theme-default'


export const sidebarZh: SidebarConfig = {
  '/zh/guide/': [
    {
      text: '介绍',
      collapsible: true,
      children: [],
    },
  ],

  '/zh/academics/': [
    {
      text: '计算机科学',
      collapsible: true,
      children: [],
    },
    {
      text: '数学',
      collapsible: true,
      children: [],
    },
    {
      text: '地理信息系统',
      collapsible: true,
      children: [],
    },
  ],
}
