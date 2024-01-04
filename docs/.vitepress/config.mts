import { DefaultTheme, defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'en-US',
  // base: "/gol-docs/",
  title: "CSA CW - Game of Life",
  description: "Computer System A Coursework - University of Bristol",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: nav(),

    sidebar: {
      '/' : { base: '/', items: home().concat(golangDocs()) },
      '/golang/' : { base: '/', items: home().concat(golangDocs()) },
      '/rust/' : { base: '/', items: home().concat(rustDocs()) }
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],

    search: {
      provider: 'local'
    }
  }
})

function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: 'Home',
      link: '/',
      activeMatch: '^\/?$'
    },
    {
      text: 'Golang Coursework',
      link: 'golang/overview',
      activeMatch: '/golang/'
    },
    {
      text: 'Rust Coursework',
      link: 'rust/overview',
      activeMatch: '/rust/'
    },
  ]
}

function home(): DefaultTheme.SidebarItem[] {
  return [
      {
      items: [
        { text: 'Home', link: "index" },
        { text: 'Submission', link: 'submission' },
      ]
    },
  ]
}

function golangDocs(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Golang Coursework',
      items: [
        { text: 'Overview', link: 'golang/overview' },
      ]
    }
  ]
}

function rustDocs(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Rust Coursework',
      items: [
        { text: 'Overview', link: 'rust/overview' },
        { text: 'Setup Guide', link: 'rust/setup-guide' },
      ]
    }
  ]
}
