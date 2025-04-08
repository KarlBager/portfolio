<script setup>
import { useNuxtApp } from '#app';
import { useRouter } from 'vue-router';
import { onMounted, onUnmounted } from 'vue';

const router = useRouter();
let loadingTimeout;
let cursorTimeout;

const loading = ref(true);

let siteContentEl;

onMounted(() => {

  siteContentEl = document.querySelector('.site-content');

  // // Show loading cursor when navigation starts
  // router.beforeEach((to, from, next) => {
  //   loadingTimeout = setTimeout(() => {
  //     siteContentEl.classList.add('cursor-loading');
  //     siteContentEl.classList.remove('loaded');
  //   }, 200);  // Optional delay to prevent flickering on fast transitions
  //   next();
  // });


});

const nuxtApp = useNuxtApp();

nuxtApp.hook('page:finish', () => {
    clearTimeout(loadingTimeout);  // Ensure no duplicate timeouts are active
    cursorTimeout = setTimeout(() => {
      siteContentEl.classList.remove('cursor-loading');
      siteContentEl.classList.add('loaded');
      loading.value = false;
    }, 500);
});

onUnmounted(() => {
  // Cleanup timeouts when the component is destroyed
  clearTimeout(loadingTimeout);
  clearTimeout(cursorTimeout);
});

</script>


<template>


<div class="site-content fade-in">
    <header class="standard-header">
      
    <div class="w-full flex"> 
      <div class="nav-container">
      <NuxtLink to="/"><img class="logo-new" src="https://www.media.karlbager.dk/media/logo.svg"/></NuxtLink>
      <div class="navbar navbar-container">
        <NuxtLink active-class="navbar-item-active" to="/"><div class="navbar navbar-item">Projekter</div></NuxtLink>
        <NuxtLink active-class="navbar-item-active" to="/AboutView"><div class="navbar navbar-item">Om</div></NuxtLink>
        <NuxtLink active-class="navbar-item-active" to="/KontaktView"><div class="navbar navbar-item">Kontakt</div></NuxtLink>
      </div>
    </div>
    </div>
      
    </header>
    

    <header class="darkmode-header pointer-events-none header-darkmode-overlay absolute opacity-0 top-0 left-0">
      <div class="grid relative grid-cols-24">
        <a class="logo max-w-[100%] max-h-9 col-span-2 self-center" href="/"><img class="logo max-w-[100%] max-h-9 col-span-2 self-center" src="https://www.media.karlbager.dk/media/logo-w.svg" /></a>
          <img
          class="header-arrow float-left max-h-4 h-[100%] justify-self-center self-center"
          src="https://www.media.karlbager.dk/media/single-arrow-forward.svg" />
          <div class="current-view-heading-hover-box w-fit col-start-6 self-center bg-[var(--kb-gray-3)] rounded-lg p-2"><h3 class="leading-[0.8] current-view-heading col-span-2 col-start-8 self-center">{{
          $route.name }}</h3></div>
      </div>
    </header>

    
    <NuxtPage />




  <footer class="py-12 px-12">


  <p class="footer-info">
  <strong>Karl Bager Media</strong><br>
  CVR: 42 54 28 30<br>
  <br>
  Pladehals Allé 25, 1. tv<br>
  2450 København SV<br>
  </p>



  </footer>
</div>


<Transition>
    <LoadingGraphic v-if="loading"></LoadingGraphic>
</Transition>

</template>




<style scoped>

.logo-new{
  width: 8rem;
  margin-right: 1rem;
}

.navbar-container{
  display: inline-block;
  margin: 0 auto;
  padding: 0.5rem 0.25rem 0.5rem 0.5rem;
  border-radius: 10px;
background: #ffffff;
box-shadow:  6px 6px 16px #d9d9d9,
             -6px -6px 16px #ffffff;
}

.nav-container{
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}

.navbar-item{
  display: inline-block;
  padding: 0 1rem;
  height: 2rem;
  border-radius: 8px;
  margin-right: 0.25rem;
  text-align: center;
  align-content: center;
  transition: all .2s;
}


.navbar-item:hover{
  font-weight: 600;
  transition: all .2s;
}


.navbar-item-active div{
  background: linear-gradient(145deg, #e6e6e6, #ffffff);
  box-shadow:  5px 5px 10px #d9d9d9,
             -5px -5px 10px #ffffff;
}




.standard-header{
    padding: 1.5rem 3rem;
}

.darkmode-header{
    padding: 1.5rem 3rem;
}

.logo{
  grid-column: span 5 / span 5;
  max-height: 2.25rem;
  max-width: 100%;
  align-self: center;
}

.header-arrow{
  grid-column-start: 7;
}

.current-view-heading-hover-box{
  grid-column-start: 9;
}


footer{
  padding: 3rem 0.5rem;
}


@media only screen and (min-width: 600px) {
.standard-header{
    padding: 1.5rem 3rem;
}

.logo{
  grid-column: span 2 / span 2;
  max-height: 2.25rem;
  max-width: 100%;
  align-self: center;
}

.header-arrow{
  grid-column-start: 4;
}


.current-view-heading-hover-box{
  grid-column-start: 6;
}


footer{
  padding: 3rem;
}


}


.footer-info{
  line-height: 1.2;
  font-size: 1rem;
  font-weight: 300;
  color: var(--kb-gray-3)
}

.footer-info strong{
  font-weight: 600;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}


.nav-slide-enter-from{
  transform: translateX(-50vw);
}
/* .nav-slide-enter-to{} */
.nav-slide-enter-active{
  transition: all 0.5s ease;
}

/* .nav-slide-leave-from{} */
.nav-slide-leave-to{
  transform: translateX(-50vw);
}
.nav-slide-leave-active{
  transition: all 0.5s ease;
}


.current-view-heading {
  font-size: 1.2rem;
  text-transform: uppercase;
  font-family: "roboto", sans-serif;
  font-weight: 400;
  letter-spacing: -1px;
}

  .current-view-heading-hover-box{
    background-color: transparent;
    color: var(--kb-gray-3);
  }

  .current-view-heading-hover-box:hover{
    opacity: 1;
    background-color: var(--kb-gray-3);
    color: white;
    transition: all 0.5s ease;
}


@media only screen and (max-width: 600px) {

.standard-header{
  padding: 2rem 0.5rem;
}

.navbar-item{
padding: 0 0.4rem;
}

}

</style>
