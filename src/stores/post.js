import { ref } from "vue";
import { defineStore } from "pinia";

export const usePostsStore = defineStore("posts", () => {
  const posts = ref([]);

  function addPost(title) {
    let newPost = {
      id: Date.now(),
      title,
      comments: [],
    };
    posts.value.push(newPost);
  }

  function changePost(id, newVal) {
    posts.value.filter((el) => el.id === id)[0].title = newVal;
  }

  function deletePost(id) {
    posts.value = posts.value.filter((el) => el.id !== id);
  }

  function addComment(id, comment) {
    const newComment = {
      id: Date.now(),
      text: comment,
    };
    posts.value.filter((el) => el.id === id)[0].comments.push(newComment);
  }

  function deleteComment(postId, commentId) {
    const post = posts.value.find(post => post.id === postId);
    if (post) {
      post.comments = post.comments.filter(el => el.id !== commentId)
    }
  }

  return { posts, addPost, changePost, deletePost, addComment, deleteComment };
});
