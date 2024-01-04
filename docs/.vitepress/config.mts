import { DefaultTheme, defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'en-US',
  base: "/",
  title: "CSA CW - Game of Life",
  description: "Computer System A Coursework - University of Bristol",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/', activeMatch: '^\/[^\/]*$|^\/?$' },
      { text: 'Golang Coursework', link: '/golang/overview', activeMatch: '^\/golang\/.*$' },
      { text: 'Rust Coursework', link: '/rust/overview', activeMatch: '^\/rust\/.*$' },
    ],

    sidebar: {
      '/' : { base: '/', items: homeDocs().concat(golangDocs()) },
      '/golang/' : { base: '/', items: homeDocs().concat(golangDocs()) },
      '/rust/' : { base: '/', items: homeDocs().concat(rustDocs()) }
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/orcharddu/gol-docs' }
    ],

    search: {
      provider: 'local'
    }
  }
})

function homeDocs(): DefaultTheme.SidebarItem[] {
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
