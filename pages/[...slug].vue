
<template>

  <StoryblokComponent v-if="story" :blok="story.content" />

  
        <div class="backbutton-bottom drop-shadow-lg">
            <NuxtLink to="/"><p>Tilbage</p></NuxtLink>
        </div>    



</template>

<script setup>


const { slug } = useRoute().params

definePageMeta({
  name: 'projekter'
})

const story = await useAsyncStoryblok(
  slug && slug.length > 0 ? slug.join('/') : '',
  { version: 'draft' }
  )


if(process.client){

// document.body.classList.add('loaded');


// let bodyEl = document.querySelector('body');
// bodyEl.style.transition = 'background-color 0.5s ease'; // Apply transition to background-color

// // Wait for the transition to finish before changing the background color
// setTimeout(() => {
//   bodyEl.style.backgroundColor = "#000000"; // Set background color to black
//   bodyEl.style.backgroundImage = "url('https://www.media.karlbager.dk/media/background-pattern-b.png')"
//   bodyEl.style.transition = 'background-image 1s ease';
// }, 100);

// let headerOverlayEl = document.querySelector('.header-darkmode-overlay');
// headerOverlayEl.style.pointerEvents = 'auto';
// headerOverlayEl.style.transition = 'opacity 1s ease';
// setTimeout(() => {
//     headerOverlayEl.style.opacity = '100';
// }, 100);

// let standardHeader = document.querySelector('.standard-header');
// setTimeout(() => {
//     standardHeader.style.opacity = '0';
// }, 100);


// //NY DARK MODE KODE
// let logoEl = document.querySelector('.logo-new');
// logoEl.src = "https://media.karlbager.dk/media/logo-w.svg";

// let navContainerEl = document.querySelector('.navbar-container');
//   navContainerEl.style.backgroundColor = "#222222";
//   navContainerEl.style.boxShadow = "none";
//   navContainerEl.style.color = "white";

// let homeItemEl = document.querySelector('.navbar-item');
// homeItemEl.classList.add("navbar-item-active");


}




</script>
 

<style scoped>

.backbutton-bottom{
  padding: 0rem 5rem 3rem 3rem;

}


.backbutton-bottom p{
  color: black;
}

.navbar-item-active div{
            background: linear-gradient(145deg, #e6e6e6, #ffffff);
            box-shadow:  5px 5px 10px #d9d9d9,
             -5px -5px 10px #ffffff;
}


</style>