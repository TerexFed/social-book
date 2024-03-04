<template>
  <div class="postList">
    <PostItem v-for="(post, index) in postStore.posts" :key="index"
    :id="post.id"
    :title="post.title"
    :comments="post.comments"
    ></PostItem>
  </div>
</template>
<script setup>
import { usePostsStore } from "@/stores/post";
import PostItem from "./PostItem.vue";

const postStore = usePostsStore();
</script>
<style>
.postList{
  margin-top: 48px;
}
</style>
