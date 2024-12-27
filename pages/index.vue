<script setup>

import ProjectHighlightCarousel from '../components/ProjectHighlightCarousel.vue'
import ProjectCarousel from '../components/ProjectCarousel.vue'

import { onMounted } from 'vue';

// Function to load Flickity CSS and JS
const loadFlickity = () => {
  // // Load Flickity CSS if not already loaded
  // if (!document.querySelector('link[href="/flickity/dist/flickity.css"]')) {
  //   const link = document.createElement('link');
  //   link.rel = 'stylesheet';
  //   link.href = '/flickity/dist/flickity.css'; // Static path to CSS
  //   document.head.appendChild(link);
  // }

  // Load Flickity JS
  const script = document.createElement('script');
  script.src = '/flickity/dist/flickity.pkgd.min.js'; // Static path to JS
  document.body.appendChild(script);
};

// Function to handle route changes
const handleRouteChange = () => {
  const homepageContainer = document.querySelector('.homepage-container');
  if (homepageContainer) {
    loadFlickity(); // Call loadFlickity if the homepage-container is present
  }
};

onMounted(() => {
  loadFlickity();
});




const story = await useAsyncStoryblok('home', { version: 'draft' })


definePageMeta({
  name: 'Projekter'
})

</script>

<template>

<div class="homepage-container">

<ProjectHighlightCarousel />

<ProjectCarousel :categoryId=1 />




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