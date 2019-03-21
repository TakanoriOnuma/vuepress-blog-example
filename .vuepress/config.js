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


  plugins: [
    [
      '@vuepress/blog', 
      { 
        // A custom theme is needed to use any options changing a layout used.

        // Override to specify which pages should be rendered using a custom 'Post' layout.
        postsDir: 'blog',  
        // Override to specify the url to use with the 'Categories' layout
        categoryIndexPageUrl: "/categories/",
        // Override to specify the url to use with the 'Tags' layout
        tagIndexPageUrl: "/tags/",
        // Override to specify the 
        permalink: "/:year/:month/:day/:slug"
      }
    ]
  ]
}
