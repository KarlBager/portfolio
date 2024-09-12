<script setup>

const props = defineProps({
    imgPath1: String,
    imgPath2: String,
    cols: String,
    blok: Object,
});

</script>




<template>
    <div :style="{gridTemplateColumns: blok.Fractions}" class="project-page-twoup-container">
        <div :style="{ backgroundImage: 'url(' + blok.Image1.filename + ')' }" class="twoup-image">
        </div>
        <div :style="{ backgroundImage: 'url(' + blok.Image2.filename + ')' }" class="twoup-image">
        </div>
    </div>


</template>



<style scoped>

.project-page-twoup-container{
    display: grid;
}


</style>