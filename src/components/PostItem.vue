<template>
  <div class="card">
    <div class="postItem">
      <textarea disabled>{{ title }}</textarea>
      <hr size="1px" width="88%" color="grey" />
      <div class="functions">
        <div
          class="default"
          :style="{
            display: isShow === true ? 'none' : isShow === false ? 'flex' : '',
          }"
        >
          <Button
            text="Комментарии"
            bgc="blue"
            height="avg"
            @click="openComments"
          ></Button>
          <p class="commentLength">Количество комментарий - {{ comments.length }}</p>
          <div class="twobuttons">
            <Button
              text="Изменить"
              bgc="blue"
              height="avg"
              @click="openModal(title)"
            ></Button>
            <Button
              text="Удалить"
              bgc="pink"
              height="avg"
              @click="postStore.deletePost(id)"
            ></Button>
          </div>
        </div>
        <div
          class="comments"
          :style="{
            display: isShow === false ? 'none' : isShow === true ? 'flex' : '',
          }"
        >
          <div class="commentsForm">
            <input v-model="commentInputVal" />
            <Button
              text="Добавить"
              height="avg"
              bgc="blue"
              @click="commentInputVal.length > 0 && postStore.addComment(id, commentInputVal), commentInputVal=''"
            ></Button>
          </div>
          <div class="commentsList">
            <div
              v-for="(comment, index) in comments"
              :key="index"
              class="comment"
            >
              <p>{{ comment.text }}</p>
              <Button text="Удалить" bgc="pink" height="avg" @click="postStore.deleteComment(id, comment.id)"></Button>
            </div>
          </div>
          <Button text="Спрятать" bgc="blue" height="avg" @click="isShow = false" class="closeComments"></Button>
        </div>
      </div>
    </div>
    <div
      class="modal"
      :style="{
        display:
          isShowModal === false ? 'none' : isShowModal === true ? 'flex' : '',
      }"
    >
      <textarea v-model="newTitleVal" class="textModel"></textarea>
      <div class="modalButtons">
        <Button
          text="подтвердить"
          bgc="blue"
          height="avg"
          @click="postStore.changePost(id, newTitleVal), (isShowModal = false)"
          class="accept"
        ></Button>
        <Button
          text="закрыть"
          bgc="pink"
          height="avg"
          @click="isShowModal = false"
        ></Button>
      </div>
    </div>
  </div>
</template>
<script setup>
import { defineProps, ref } from "vue";
import Button from "@/UI/Button.vue";
import { usePostsStore } from "@/stores/post";
defineProps({
  id: Number,
  title: String,
  comments: Array,
});

const postStore = usePostsStore();
let isShowModal = ref(false);
let isShow = ref(false);
const newTitleVal = ref("");
const commentInputVal = ref("");

function openModal(title) {
  newTitleVal.value = title;
  isShowModal.value = !isShowModal.value;
}
function openComments() {
  isShow.value = !isShow.value;
}
</script>
<style>
.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
}
.postItem {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 60vw;
  box-sizing: border-box;
  border: 2px solid rgb(0, 148, 255);
  border-radius: 15px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  background: rgb(252, 251, 251);
  padding: 20px;
}
textarea {
  resize: none;
  outline: none;
  background-color: transparent;
  border: none;
  color: rgb(0, 0, 0);
  font-size: 24px;
  width: 50vw;
}
p {
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0%;
  text-align: left;
  box-sizing: border-box;
  border: 1px solid rgb(110, 110, 110);
  border-radius: 15px;
  background: rgb(255, 255, 255);
  width: 83%;
  height: 43px;
  display: flex;
  align-items: center;
  padding-left: 10px;
  margin: 15px 0 15px 0;
}
.commentLength{
  border: none;
  background: none;
  width: fit-content;
}
.default {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 50vw;
}
.comments {
  width: 50vw;
  margin-top: 15px;
  height: fit-content;
  display: flex;
  flex-direction: column;
}
.commentsForm {
  display: flex;
  justify-content: space-between;
}
.commentsForm > input {
  box-sizing: border-box;
  border: 1px solid rgb(110, 110, 110);
  border-radius: 15px;
  background: rgb(252, 251, 251);
  height: 43px;
  font-size: 16px;
  padding-left: 10px;
  margin-right: 25px;
  width: 41vw;
}
.comment{
  display: flex;
  align-items: center;
}
.functions {
  display: flex;
  justify-content: space-between;
  width: 50vw;
  align-items: center;
}
.twobuttons {
  width: 220px;
  display: flex;
  justify-content: space-between;
}
.modal {
  position: absolute;
  width: 50vw;
  height: 220px;
  border: 2px solid rgb(0, 148, 255);
  border-radius: 15px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  background: rgb(252, 251, 251);
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.modalButtons {
  display: flex;
  justify-content: space-between;
  padding-right: 10px;
  margin-top: 16px;
  align-self: flex-end;
}
.accept {
  margin-right: 32px;
}
.textModel {
  box-sizing: border-box;
  border: 1px solid rgb(110, 110, 110);
  border-radius: 15px;
  background: rgb(255, 255, 255);
  height: 113px;
}
.comments {
  width: 50vw;
}
.comment {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
.closeComments{
  align-self: flex-start;
}
</style>
