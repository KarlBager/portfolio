<script setup>

const props = defineProps({
    imgPath1: String,
    imgPath2: String,
    blok: Object,
});

console.log(props.imgPath1);

</script>




<template>

<div class="project-page-element-container">
    
    <!-- <h1 style="color: white">{{ blok.Imageblock }}</h1> -->

    <StoryblokComponent v-for="blok in blok.Imageblock" :key="blok._uid" :blok="blok" />


</div>

</template>


<style>

.contain-image{
background-size: contain !important;
background-repeat: no-repeat;
}

.twoup-image{
    margin: 0.2rem;
    height: 25rem;
    background-size: cover;
    background-position: center;
}

</style>


<style scoped>

.project-page-twoup-container{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}



</style>