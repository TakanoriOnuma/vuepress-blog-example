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
        // The values used here are the same as the defaults but show how they can be changed.

        // Override to specify which pages should be rendered using a custom 'Post' layout.
        postsDir: '_posts',  
        // Override to specify the url to use with the 'Categories' layout
        categoryIndexPageUrl: "/category/",
        // Override to specify the url to use with the 'Tags' layout
        tagIndexPageUrl: "/tag/",
        // Override to specify the generated permalinks
        permalink: "/:year/:month/:day/:slug"
      }
    ]
  ]
}
