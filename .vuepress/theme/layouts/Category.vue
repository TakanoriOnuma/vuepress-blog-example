<template>
  <div>
    <!-- Found at `/category/<topic>.html` -->
    <h3>{{ $page.frontmatter.title }}</h3> 
    <Content />
    <ul v-for="post in $category.posts">
      <li>        
          <a :href="post.path">{{post.title}}</a>
      </li>
    </ul>
  </div>
</template>