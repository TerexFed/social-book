<template>
  <NewPost></NewPost>
  <PostList></PostList>
</template>
<script setup>
import NewPost from "./components/NewPost.vue";
import PostList from "./components/PostList.vue";
</script>
<style>
*{
  font-family: Montserrat;
}
body {
  background: rgb(225, 248, 255);
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Montserrat;
}
::placeholder{
  color: black;
}
input{
  outline: none;
}
</style>
