<script setup>
import NavOverlay from './components/NavOverlay.vue'
</script>




<script>

export default {
  components: {
    NavOverlay
  },
  data() {
    return {
      navOverlayActive: false,
      showBox: false,
    }
  }
}


</script>


<template>

  <header class="standard-header">
    <div class="grid grid-cols-24">

      <a class="logo self-center" href="/"><img class="logo self-center" src="https://www.portfolio.karlbager.dk/media/logo.svg" /></a>

      <img @click="navOverlayActive = true"
        class="header-arrow float-left max-h-4 h-[100%] justify-self-center self-center"
        src="https://www.portfolio.karlbager.dk/media/single-arrow-forward.svg" />
      <div class="current-view-heading-hover-box w-fit self-center bg-[var(--kb-gray-3)] rounded-lg p-2"><h3 @click="navOverlayActive = true" class="leading-[0.8] current-view-heading col-span-2 col-start-8 self-center">{{
        $route.name }}</h3></div>
    </div>
  </header>


  <header class="darkmode-header pointer-events-none header-darkmode-overlay absolute opacity-0 top-0 left-0">
    <div class="grid relative grid-cols-24">
      <a class="logo max-w-[100%] max-h-9 col-span-2 self-center" href="/"><img class="logo max-w-[100%] max-h-9 col-span-2 self-center" src="https://www.portfolio.karlbager.dk/media/logo-w.svg" /></a>
        <img @click="navOverlayActive = true"
        class="header-arrow float-left max-h-4 h-[100%] justify-self-center self-center"
        src="https://www.portfolio.karlbager.dk/media/single-arrow-forward.svg" />
        <div class="current-view-heading-hover-box w-fit col-start-6 self-center bg-[var(--kb-gray-3)] rounded-lg p-2"><h3 @click="navOverlayActive = true" class="leading-[0.8] current-view-heading col-span-2 col-start-8 self-center">{{
        $route.name }}</h3></div>
    </div>
  </header>

  
  <NuxtPage />

  <!-- <RouterView v-slot="{ Component }">
    <Transition name="route" mode="out-in">
      <component :is="Component"></component>
    </Transition>
  </RouterView> -->


<div class="pointer-events-none h-screen w-screen fixed top-0 left-0">
  <Transition name="fade">
    <div v-if="navOverlayActive" @click="navOverlayActive = false" class="pointer-events-auto nav-overlay-darken w-screen h-screen fixed top-0 left-0 bg-black opacity-20">
     </div>
  </Transition>

  

  <Transition name="nav-slide">
    <NavOverlay v-if="navOverlayActive" @close-nav="navOverlayActive = false" />
  </Transition>
</div>
  




<footer class="py-12 px-12">


<p class="footer-info">
<strong>Karl Bager Media</strong><br>
CVR: 42 54 28 30<br>
<br>
Pladehals Allé 25, 1. tv<br>
2450 København SV<br>
</p>



</footer>

</template>




<style scoped>


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



/* 
.route-enter-from{
  opacity: 0;
}
.route-enter-to{
  opacity: 100;
}
.route-enter-active{
  transition: all 2s ease-out;
}

.route-leave-from{}
.route-leave-to{
  opacity: 0;
}
.route-leave-active{
  transition: all 2s ease-in;
} */

</style>
