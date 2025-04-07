<script setup>

import { useTools } from '@/composables/useTools.js';

const { toolbox } = useTools();

const props = defineProps({ blok: Object });
let tools = [];

if(props.blok.tools){
tools = props.blok.tools.split(', ');
}


// Reactive state for hover image
const hoveredTool = ref(null);


// Function to change image on hover
const hoverImage = (toolKey, event) => {
    hoveredTool.value = toolKey;
};

// Function to reset image when hover ends
const resetImage = () => {
  hoveredTool.value = null;
};

const currentImage = (toolKey) => {
  if (hoveredTool.value === toolKey) {
    return toolbox[toolKey]?.hoverSrc || toolbox[toolKey]?.src; // Use hover image if hovered
  }
  return toolbox[toolKey]?.src; // Default image
};




</script>




<template>

<div  class="highlight-carousel case-card case-card-container-wide project-page-header">
    <div :style="{ backgroundImage: 'url(' + blok.headerImagePath + ')' }" class="case-card case-card-wide">
        <div class="back-button drop-shadow-lg">
            <NuxtLink to="/"><div class="back-button-el">< Tilbage</div></NuxtLink>
        </div>   
    </div>
</div>


<div class="project-page-title-container drop-shadow-lg">
                <h2>{{ blok.title }}</h2>
                <h4>{{ blok.subtitle }}, {{ blok.year }}</h4>

                <div class="toolbox-container">
                    
                    <div v-for="toolKey in tools" :key="toolKey" class="tool-container" @mouseover="hoverImage(toolKey)"
                    @mouseleave="resetImage(toolKey)">
                        <img loading="lazy" class="tool" :src="currentImage(toolKey)" 
                        :alt="toolbox[toolKey]?.name">


                    <Transition>
                        <div class="tool-hoverbox" v-if="hoveredTool == toolKey"><p>{{ toolbox[toolKey]?.name }}</p></div>
                    </Transition>

                    </div>
                </div>


              
</div>


</template>
  






<style>


.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}


.tool-hoverbox{
color: white;
background-color: #333333;
border-radius: var(--kb-corner-radius);
display: flex;
align-items: center;
padding: 0.5rem;
z-index: 100;
position: absolute;
}

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


.toolbox-container{
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-top: 1rem;
}

.tool{
    max-width: 2rem;
    max-height: 2rem;
    object-fit: contain;
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
    padding: 1rem 0;
    position: static;
}

.highlight-carousel{
    margin-bottom: 2rem;
}

.project-page-header{
    padding: 0;
    width: 100%;
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
    margin: 0 1rem;
}




.back-button{
    position:absolute;
    top: 1rem;
    left: 1rem;
    color: var(--kb-gray-3)
}


@media only screen and (min-width: 600px) {

    .project-page-title-container h2{
        font-size: 5rem;
    }

    .case-card-container-wide {
    width: 100%;
    aspect-ratio: 16 / 6;
    }

    .project-page-title-container{
    max-width: 35rem;
    margin: 0 auto;
}



}

@media only screen and (min-width: 1080px) {
  .case-card-container-wide{
  aspect-ratio: 16 / 4;
  }
}




</style>
