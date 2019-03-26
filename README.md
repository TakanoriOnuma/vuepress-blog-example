# vuepress-blog-plugin-example
An example for using Vuepress blog plugin.  This plugin adds variables with posts grouped according to their category and tag frontmatter.  Pages are then rendured with this information for easier site navigation.

View the tags or categories by appending [/tag/](/tag/) or [/category/](/category/) to the local webserver's path.

## Setup the config.js
Enable the plugin in the `.vuepress/config.js` file.  An option may be used to change the posts folder name, index urls, or permalink pattern.

## Components
The plugin will automatically search the theme's layouts folder for layouts named `Categories.vue`, `Category.vue`, `Tags.vue`, and `Tag.vue`.  The Categories and Tags layouts will be available at the index url defined in the config.js.  The Category and Tag layouts will be used for an individual topic and found when appending that topic to the url.  For example, the 'Tag1' tag will be found at [/tag/Tag1.html](/tag/Tag1.html).

The plugin creates four different objects for blog information:

* $tags/$categories - A list of tags/categories and their associated posts.
* $tag/$category - The current tag/category and its posts.  Only available on individual tag/category pages.
