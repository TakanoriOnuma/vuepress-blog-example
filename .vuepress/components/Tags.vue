<template>
  <div>
    <ul v-for="tag in Object.keys($tags._metaMap)">
      <h3><a :href="$tags._metaMap[tag].path">{{ tag }}</a></h3>        
      <li v-for="post in $tags._metaMap[tag].posts">        
          <a :href="post.path">{{post.title}}</a>
      </li>
    </ul>
  </div>
</template>