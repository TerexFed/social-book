<template>
  <button
    :style="{ fontSize: fontsize ? fontsize : '16px',
    height: height === 'big' ? '51px' : height === 'avg' ? '43px' : '',
    backgroundColor: bgc === 'blue' ? 'rgb(33, 108, 255)' : bgc === 'pink' ? 'rgb(255, 33, 139)' : '' }"
  >
    {{ text }}
  </button>
</template>
<script setup>
import { defineProps } from "vue";
defineProps({
  text: String,
  fontsize: String,
  height: String,
  bgc: String,
});
</script>
<style scoped>
button {
  border-radius: 15px;
  border: none;
  color: white;
  padding: 20px;
  display: flex;
  align-items: center;
  font-weight: 400;
}
</style>
