<template>
  <div class="content">
    <Nav></Nav>
    <MainShow></MainShow>
  </div>
</template>

<script setup lang="ts">
defineOptions({
    name:'Home'
})
import {ref} from 'vue';
import Nav from './nav.vue';
import MainShow from './mainShow.vue';
</script>

<style scoped>
.content{
    width:100vw;
    min-height:100vh;
    background-color:#fbf6f0;
    display: flex;
    flex-direction: row;
}

@media (max-width:768px){
  .content{
    flex-direction: column;
  }
}

</style>