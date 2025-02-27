<script setup>

const props = defineProps({
    videoPath: String,
});


</script>




<template>

<div class="project-page-element-container">
    <div class="project-page-video-container">
        <video controls autoplay>
            <source :src="videoPath" type="video/mp4">
        </video>
    </div>
</div>

</template>



<style scoped>

.project-page-video-container{
    display: flex;
    justify-content: space-between;
}

.video-window{
    margin: 2rem;
    width: 30rem;
    height: 20rem;
    background-size: contain;
    background-position: center;
}


</style>