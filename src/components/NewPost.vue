<template>
  <div class="newPost">
    <input placeholder="Новый пост ..." v-model="inputVal" />
    <Button
      text="Добавить"
      fontsize="24px"
      height="big"
      bgc="blue"
      @click="inputVal.length > 0 && postStore.addPost(inputVal), inputVal=''"
    ></Button>
  </div>
</template>
<script setup>
import Button from "@/UI/Button.vue";
import { usePostsStore } from "@/stores/post";
import { ref } from "vue";

const postStore = usePostsStore();
const inputVal = ref("");
</script>
<style scoped>
.newPost {
  display: flex;
  justify-content: center;
  margin-top: 30px;
  box-sizing: border-box;
  border: 2px solid rgb(0, 148, 255);
  border-radius: 15px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  background: rgb(252, 251, 251);
  padding: 20px 0 20px 0;
  width: 60vw;
}
input {
  box-sizing: border-box;
  border: 1px solid rgb(110, 110, 110);
  border-radius: 15px;
  background: rgb(252, 251, 251);
  height: 51px;
  font-size: 24px;
  padding-left: 10px;
  margin-right: 25px;
  width: 40vw;
}
</style>
