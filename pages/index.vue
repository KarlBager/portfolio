<script setup>

import ProjectHighlightCarousel from '../components/ProjectHighlightCarousel.vue'
import ProjectCarousel from '../components/ProjectCarousel.vue'

import { onMounted } from 'vue';

// Function to load Flickity CSS and JS
const loadFlickity = () => {

  // Load Flickity JS
  const script = document.createElement('script');
  script.src = '/flickity/dist/flickity.pkgd.min.js'; // Static path to JS
  script.id = 'flickity-script';
  document.body.appendChild(script);
};

const destroyFlickity = () => {
  const oldScript = document.querySelector('#flickity-script');
  oldScript.remove();
};


const reloadFlickity = () => {
  const oldScript = document.querySelector('#flickity-script');
  oldScript.remove();

// Load Flickity JS
const script = document.createElement('script');
script.src = '/flickity/dist/flickity.pkgd.min.js'; // Static path to JS
script.id = 'flickity-script';
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


<ProjectGrid :categoryId=1 />




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