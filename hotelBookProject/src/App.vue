<template>
  <div class="content">
    <Home></Home>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name:'App'
})
import Home from './home.vue'
</script>

<style scoped>
  .content{
    width:100vw;
    min-height: 100vh;
  }
</style>