# Vuepress Blog Plugin Example
An example for using Vuepress blog plugin

View the tags or categories by appending `/tag/` or `/category/` to your local webserver's path.

## Folder structure
The plugin allows you to pass in the name of your posts folder.  Name this folder anything that make ssense to you.

## Setup your config.js
Enable the plugin in your `.vuepress/config.js` file.  You may pass in arguments to change your posts folder, index urls, or permalink pattern.  See the example config file.

## Components
The plugin will automatically search the theme's layouts folder for layouts named `Categories.vue`, `Category.vue`, `Tags.vue`, and `Tag.vue`.  The Categories and Tags layouts will be available at the index url defined in your config.js.  The Category and Tag layouts will be used for an individual topic and found when appending that topic to the url.  For example, the 'web' tag will be found at `/tag/web.html`.

The plugin creates four different objects for blog information:

* $tags/$categories - A list of tags/categories and their associated posts.
* $tag/$category - The current tag/category and its posts.  Only available on inidivual tag/category pages.