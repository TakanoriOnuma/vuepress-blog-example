module.exports = {
  title: 'Vuepress blog-plugin example',
  description: 'An example for using Vuepress blog plugin',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Tags', link: '/tag/' },
      { text: 'Categories', link: '/category/' },
    ]
  },

  plugins: ['@vuepress/blog']
}
