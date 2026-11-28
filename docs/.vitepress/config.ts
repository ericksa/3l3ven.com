import { defineConfig, DefaultTheme } from 'vitepress'

export default defineConfig({
  title: '3l3ven.com',
  description: 'DJ & Entertainment Booking | Eleven Entertainment',
  base: '/',
  themeConfig: {
    name: '3l3ven.com',
    logo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudmV0MS5vcmcvMjAwMC9wZCI+PHBhdGggZD0iTTI4IDJMMTMuMjkgMjQuNjdDMzkuNjkgMjguNDVDNTMuODUgMzkuMDcgNTMuODUgNDYuNDMgMzkuNjkgNTYuMjEgMjggNjMuMThDMTEuMzEgNjYuMjEgNS41NiA1Ni40NyA1LjU2IDQ2LjQzTDA0LjI5IDM4LjY1Qy0wLjY2IDM0LjI4IDAuNjYgMjkuNzIgMTAuMjkgMjUuNDVDMjIuMTcgMjAuNDcgMzcuNDggMjAuNDcgNTAuMjkgMjUuNDVDNTYuMTMgMjcuNjIgNjIuNDIgMzMuNDggNjYuNDQgNDAuMjVDNjYuNDQgNDcuMDcgNjIuMDMgNTUuNDUgNTUuNDUgNjEuMDhDMzguMTcgNjYuNDcgMjggNjYuNDcgMjggNjIuNDdaIiBmaWxsPSIjZmY2ZTMiLz48L3N2Zz4=',
    author: {
      name: 'Eleven Entertainment',
      link: 'https://3l3ven.com',
    },
    nav: [
      { text: 'Home', link: '/', activeMatch: '^/([^/]*)$' },
      { text: 'Services', link: '/services' },
      { text: 'Packages', link: '/packages' },
      { text: 'Book Online', link: '/booking' },
      { text: 'Contact', link: '/contact' },
    ],
    sidebar: [
      {
        text: 'Content',
        items: [
          { text: 'Home', link: '/' },
          { text: 'About', link: '/about' },
          { text: 'Services', link: '/services' },
          { text: 'Packages', link: '/packages' },
          { text: 'Booking', link: '/booking' },
          { text: 'Contact', link: '/contact' },
        ],
      },
    ],
    socialPreview: {
      image: '/og-image.png',
      title: '3l3ven.com - DJ & Entertainment Booking',
      description: 'Premium DJ services for weddings, corporate events, parties, and special occasions in West Michigan.',
    },
  },
  theme: './theme/index.js',
  cleanUrls: true,
  rollupSingleDependencies: false,
})