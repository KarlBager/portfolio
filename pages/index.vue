<script setup>

import ProjectHighlightCarousel from '../components/ProjectHighlightCarousel.vue'
import ProjectCarousel from '../components/ProjectCarousel.vue'

const story = await useAsyncStoryblok('home', { version: 'draft' })


definePageMeta({
  name: 'Projekter'
})

</script>

<template>

<div class="homepage-container">

<ProjectHighlightCarousel />

<ProjectCarousel :categoryId="1" />

<ProjectCarousel :categoryId="2" />

<ProjectCarousel :categoryId="3" />


</div>
</template>



<script>

export default {
  updated() {
    this.$nextTick(() => {
      // Code to run after the component has been updated
      this.runScript();
    });
  },
  methods: {
    runScript() {
      
    }
  }
}


</script>


<style scoped>

/* 
.homepage-container{
  opacity: 0;
  animation: fade 1s forwards;
} */

</style>