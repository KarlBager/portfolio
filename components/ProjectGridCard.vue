<script setup>
import projects from '@/projects.json'
import categories from '@/categories.json'

const props = defineProps({projectId: Number, filteredProjects: Array})

const filteredProjects = props.filteredProjects;
const projectId = props.projectId;

const project = filteredProjects[projectId];

</script>

<template>
<div class="case-card case-card-container drop-shadow-lg">
    <NuxtLink :href="project.slug">
    <div class="case-card">
       
        <div v-if="project.content.ProjectPageHeaderBlock[0].headerVideo" class="case-card-video-overlay">
            <div class="video-container">
                <video loading="lazy" preload="none" playsinline autoplay muted loop>
                    <source :src="project.content.ProjectPageHeaderBlock[0].headerVideoPath" type="video/mp4">
                </video>
            </div>
        </div>

        <div class="image-wrapper">
            <img loading="lazy" class="grid-cell-image" :src="project.content.ProjectPageHeaderBlock[0].headerImagePath" />
        </div>

        <div class="case-card-hover-overlay">
        </div>
    </div>
    </NuxtLink>



</div>


<div class="case-card-label-container text-center">
    <h2>{{ project.content.ProjectPageHeaderBlock[0].title }}</h2>
    <h4>{{ project.content.ProjectPageHeaderBlock[0].subtitle }}, {{project.content.ProjectPageHeaderBlock[0].year}}</h4>
</div>

</template>




<style scoped>

.case-card-label-container{
    margin: 0.3rem 0;
    line-height: 1.1;
    color: var(--kb-gray-2);
    width: 100%;
}

.case-card-label-container h2{
    font-weight:600;
    font-size: 1.0rem;
    white-space: nowrap;       /* Don't allow line breaks */
    overflow: hidden;          /* Hide anything that overflows */
    text-overflow: ellipsis;   /* Show "..." when it overflows */
}


.case-card-label-container h4{
    font-size: 0.6rem;
    white-space: nowrap;       /* Don't allow line breaks */
    overflow: hidden;          /* Hide anything that overflows */
    text-overflow: ellipsis;   /* Show "..." when it overflows */
}


@media only screen and (min-width: 600px) {


.case-card-label-container h2{
    font-weight: 600;
    font-size: 1.1rem;
}

.case-card-label-container h4{
    font-size: 0.7rem;
}
}


.case-card-year-container{
    position:absolute;
    top: 0.2rem;
    right: 0.4rem;
}


.case-card-video-overlay{
    position: absolute;
    top:0;
    left:0;
    width: 100%;
    height: 100%;
    border-radius: var(--kb-corner-radius);
    overflow: hidden;
}


.video-container {
    position: relative;
    width: 100%;
    height: 100%; /* Fullscreen */
    overflow: hidden;
}

.video-container video {
    height: 100%;
    object-fit: cover; /* Ensures the video fills the div without distortion */
    z-index: 1;
}


.case-card-typo-container{
    color: black;
    position: absolute;
    bottom: 2rem;
    left: 2rem;
    line-height: 1;
    pointer-events: none;
}

.case-card-hover-overlay{
    opacity: 0;
    width: 100%;
    height: 100%;
    border-radius: var(--kb-corner-radius);
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
}

.case-card-hover-overlay:hover{
    opacity: 100;
    background-color: rgba(0,0,0,0.1);
    transition: opacity 0.3s ease;
}


.case-card-typo-container h2{
    font-size: 2.0rem;
    font-family: "roboto", sans-serif;
}


.case-card-typo-container h4{
    font-size: 0.8rem;
}

.case-card{
    background-color: var(--kb-green-3);
    width: 100%;
    aspect-ratio: 16 / 9;
    border-radius: var(--kb-corner-radius);
    background-size: cover;
    background-position: center;
    position: relative;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
}


.case-card-container{
    width: 100%;
}


.image-wrapper{
    width: 100%;
    height: 100%;
    inset: 0;
    align-items: center;
    display: flex
}


.grid-cell-image{
    min-height: 100%;
    object-fit: cover;
    overflow: hidden;
    display: block;
}


</style>