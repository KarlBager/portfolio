<script setup>

const props = defineProps({
    blok: Object,
});


</script>




<template>
    
<div class="project-page-element-container">
    <div class="project-page-video-container">
        <video controls :autoplay="blok.autoplay" loop>
            <source :src="blok.videoPath" type="video/mp4">
        </video>
    </div>
</div>

</template>



<style scoped>

.project-page-video-container{
    display: flex;
    justify-content: center;
    max-height: 30rem;
}

.video-window{
    margin: 2rem;
    width: 30rem;
    height: 20rem;
    background-size: contain;
    background-position: center;
}


</style>