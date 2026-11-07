<template>
  <div class="content">
    <Home></Home>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name:'app'
})
import Home from './home.vue';
</script>

<style scoped>
  .content{
    width:100%;
    min-height:100vh;
  }
</style>
