<script setup>

import projects from '@/projects.json'
import categories from '@/categories.json'

const props = defineProps({
 projectId: Number
});


// Function to filter objects based on category
function filterByCategory(projectId, projects) {
  return projects.filter(project => project.id === projectId);
}

// Filter objects with category number 1
const filteredProjects = filterByCategory(props.projectId, projects);

/*
const props = defineProps({
  projectTitle: String,
  projectSubtitle: String,
  projectCategory: String,
  projectYear: String,
  projectHeaderImagePath: String,
});*/

/*
//DARK MODE
let bodyEl = document.querySelector('body');
bodyEl.style.backgroundColor = "#000000";

let logoEl = document.querySelector('.logo');
logoEl.src = "../src/assets/logo-w.svg";
*/


// DARK MODE

if(process.client){
let bodyEl = document.querySelector('body');
bodyEl.style.transition = 'background-color 0.5s ease'; // Apply transition to background-color

// Wait for the transition to finish before changing the background color
setTimeout(() => {
  bodyEl.style.backgroundColor = "#000000"; // Set background color to black
  bodyEl.style.backgroundImage = "url('media/background-pattern-b.png')"
  bodyEl.style.transition = 'background-image 1s ease';
}, 100);

let headerOverlayEl = document.querySelector('.header-darkmode-overlay');
headerOverlayEl.style.pointerEvents = 'auto';
headerOverlayEl.style.transition = 'opacity 1s ease';
setTimeout(() => {
    headerOverlayEl.style.opacity = '100';
}, 100);

let standardHeader = document.querySelector('.standard-header');
setTimeout(() => {
    standardHeader.style.opacity = '0';
}, 100);
}


// let standardHeader = document.querySelector('.standard-header');
// setTimeout(() => {
//     standardHeader.style.opacity = '0';
// }, 100);

</script>

<template>

<div class="highlight-carousel case-card case-card-container-wide project-page-header">
    <div :style="{ backgroundImage: 'url(' + filteredProjects[0].headerImagePath + ')' }" class="case-card case-card-wide">
        <div class="back-button drop-shadow-lg">
            <a href="/"><p :style="{ color: filteredProjects[0].titleColor }">Tilbage</p></a>
        </div>    
        
        
        <div class="case-card-typo-container drop-shadow-lg">
                <h2 :style="{ color: filteredProjects[0].titleColor }">{{ filteredProjects[0].title }}</h2>
                <h4 :style="{ color: filteredProjects[0].titleColor }">{{ filteredProjects[0].subtitle }}</h4>
            </div>
    </div>
</div>



</template>


<style>
.project-page-element-container{
    margin: 3rem;
    max-width: 30rem;
}
</style>


<style scoped>

.project-page-header{
    padding: 0;
}

.project-page-header .case-card-wide{
    border-radius: 0;
}

.project-page-header .case-card-wide .case-card-typo-container{
    left: 3rem;
}

.case-card-typo-container h2{
    font-size: 6rem;
}

.case-card-typo-container h4{
    font-size: 1.4rem;
}

.back-button{
    position:absolute;
    top: 1rem;
    left: 3rem;
    color: var(--kb-gray-3)
}

</style>