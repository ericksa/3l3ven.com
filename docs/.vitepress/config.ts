import { defineConfig, DefaultTheme } from 'vitepress'

export default defineConfig({
  title: '3l3ven.com',
  description: 'DJ & Entertainment Booking | Eleven Entertainment',
  base: '/',
  themeConfig: {
    name: '3l3ven.com',
    logo: '/logo.svg',
    author: {
      name: 'Eleven Entertainment',
      link: 'https://3l3ven.com',
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about' },
      { text: 'Music', link: '/music' },
      { text: 'Events', link: '/events' },
      { text: 'Booking', link: '/booking' },
      { text: 'Contact', link: '/contact' },
    ],
    sidebar: [
      {
        text: 'Content',
        items: [
          { text: 'Home', link: '/' },
          { text: 'About', link: '/about' },
          { text: 'Music', link: '/music' },
          { text: 'Events', link: '/events' },
          { text: 'Booking', link: '/booking' },
          { text: 'Contact', link: '/contact' },
        ],
      },
    ],
    socialPreview: {
      image: '/og-image.png',
      title: '3l3ven.com',
      description: 'DJ & Entertainment Booking | Eleven Entertainment',
    },
  },
})