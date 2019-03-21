# Vuepress Blog Plugin Example
An example for using Vuepress blog plugin

Run the example with `yarn install` and `vuepress dev`.

This repo shows three different methods I found for using the Vuepress blog plugin.  The plugin seems intended to be used with custom themes only.  Two of these methods will allow you to keep most of the default theme while the final method uses a custom theme.  Both methods using the default theme will require a README.md created in the category and tag folders.  See already existing files for an example.

Both methods to keep the default theme only work for a complete listing page.  They don't work if you wanted to drill further down in to topics. For example, navigating to `/tag/` will display every tag on your site but navigating to `/tag/specificTopic` will not load a page displaying tags of that specific tag.  The links on these headers are for the custom theming example.

Run the example using `vupress dev`.  If you are using a global install of Vuepress, make sure your version is atleast ^1.0.0-alpha.44.  The code for using the plugin can be found in the `.vuepress/components` and `.vuepress/theme/layouts` folders.  This code can be used on any page as desired.  These examples are just a few use cases for a quick setup.

## Layout keyword in frontmatter

Create a component in .vuepress/components.  In the front matter of your README.md, add a layout value to select this new component.  The custom component will replace the default page component and keep the default navbar, styling, etc.

This method is described in the Vuepress docs but doesn't seem to work correctly.  When used, the component completely replaces the layout rather than just the page section.

The example for this method uses `tag/README.md` and `.vuepress/components/Tags.vue`.

## Adding the component in markdown

Create the same component from the previous method but this time include it in your markdown as a component rather than using the layout front matter.

This is a work around I found for someone wanted to keep the default theme.  This was the simpliest way I found while keeping the default theme intact.

The example for this method uses `category/README.md` and `.vuepress/components/Categories.vue`.

## Creating layouts in a custom theme

To use this method in the example project, rename `.vuepress/themed` to `.vuepress/theme` and restart the dev server.  This will override the default theme with a custom theme with only the bare minimum.  This method no longer needs the tag and category `README.md` files but will pull from them if they exist.  When actually creating a theme, the example components should be moved from `.vuepress/components` to `theme/layouts`.  For this example, they can be left in place.

Adding the components to the theme's layout folder will cause the plugin to automatically load matching names when found.  This allows the layouts to be used when drilling down further in a toppic.  

Navigate to `/tag/` page and click on any of the tag headers.  They will now take you to a page that shows all of the posts for that tag.

The example for this method uses `category/README.md` and `.vuepress/components/Categories.vue`.