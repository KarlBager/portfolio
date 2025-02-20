<template>

      <div class="highlight-carousel case-card case-card-container-wide project-page-header">
    <div :style="{ backgroundImage: 'url(' + blok.headerImagePath + ')' }" class="case-card case-card-wide">
        <div class="back-button drop-shadow-lg">
            <NuxtLink to="/"><div class="back-button-el">< Tilbage</div></NuxtLink>
        </div>   
    </div>
</div>


<div class="project-page-title-container drop-shadow-lg">
                <h2 v-if="blok.showTitle">{{ blok.title }}</h2>
                <h4>{{ blok.subtitle }}, {{ blok.year }}</h4>
        </div>


  </template>
  

<script setup>
defineProps({ blok: Object })
</script>




<style>

.back-button-el{
  display: inline-block;
  padding: 0 1rem;
  color: black;
  height: 2rem;
  border-radius: 8px;
  margin-right: 0.25rem;
  text-align: center;
  align-content: center;
  transition: all .2s;
  background: linear-gradient(145deg, #e6e6e6, #ffffff);
  box-shadow:  0px 2px 10px #0000000a;
  font-weight: 400;
}




.project-page-element-container{
    margin: 3rem auto;
    max-width: 75rem;
    padding: 0 1rem;
}

@media only screen and (min-width: 600px) {
    .project-page-element-container{
    padding: 0 0rem;
    }
}


</style>



<style scoped>

.case-card-wide {
  background-color: var(--kb-green-3);
  width: 100%;
  height: 100%;
  border-radius: 15px;
  background-size: cover;
  background-position: center;
  position: relative;
}

.project-page-title-container{
    padding: 1rem;
}


.highlight-carousel{
    margin-bottom: 2rem;
}

.project-page-header{
    padding: 0;
    max-width: 100wv;
}

.project-page-header .case-card-wide{
    border-radius: 0;
}

.project-page-header .case-card-wide .project-page-title-container{
    left: 3rem;
}

.project-page-title-container h2{
    font-size: 3rem;
}

.project-page-title-container h4{
    font-size: 1.4rem;
}


.project-page-title-container{
    color: black;
    line-height: 1;
    pointer-events: none;
    max-width: 35rem;
    margin: 0 auto;
}


.back-button{
    position:absolute;
    top: 1rem;
    left: 3rem;
    color: var(--kb-gray-3)
}


@media only screen and (min-width: 600px) {

    .project-page-title-container h2{
        font-size: 5rem;
    }

    .case-card-container-wide {
    width: 100vw;
    aspect-ratio: 16 / 6;
    }

}

@media only screen and (min-width: 1080px) {
  .case-card-container-wide{
  aspect-ratio: 16 / 4;
  }
}






</style>
