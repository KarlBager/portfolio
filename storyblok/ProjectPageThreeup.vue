<script setup>

const props = defineProps({
    imgPath1: String,
    imgPath2: String,
    imgPath3: String,
    cols: String,
    blok: Object,
});


// Compute the IDs directly, might as well make them reactive in case props change
const imageId1 = computed(() => props.blok.Image1.filename.split('/')[7].split('.')[0]);
const imageId2 = computed(() => props.blok.Image2.filename.split('/')[7].split('.')[0]);
const imageId3 = computed(() => props.blok.Image3.filename.split('/')[7].split('.')[0]);

// You can also compute class bindings
const imageClass1 = computed(() => ({
    'twoup-image': true,
    'contain-image': props.blok.contain1
}));

const imageClass2 = computed(() => ({
    'twoup-image': true,
    'contain-image': props.blok.contain2
}));

const imageClass3 = computed(() => ({
    'twoup-image': true,
    'contain-image': props.blok.contain3
}));




</script>




<template>

    <div :style="{gridTemplateColumns: blok.Fractions}" class="project-page-twoup-container">
        <div :id="{ imageId1 }" :class="imageClass1" :style="{ backgroundImage: 'url(' + blok.Image1.filename + ')' }">
        </div>
        <div :id="{ imageId2 }" :class="imageClass2" :style="{ backgroundImage: 'url(' + blok.Image2.filename + ')' }">
        </div>
        <div :id="{ imageId3 }" :class="imageClass3" :style="{ backgroundImage: 'url(' + blok.Image3.filename + ')' }">
        </div>
    </div>


</template>



<style scoped>

.project-page-twoup-container{
    display: grid;
}


</style>