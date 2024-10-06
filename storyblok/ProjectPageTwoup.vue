<script setup>

const props = defineProps({
    imgPath1: String,
    imgPath2: String,
    cols: String,
    blok: Object,
});


// You can also compute class bindings
const imageClass1 = computed(() => ({
    'twoup-image': true,
    'contain-image': props.blok.contain1
}));

const imageClass2 = computed(() => ({
    'twoup-image': true,
    'contain-image': props.blok.contain2
}));




import { defineEmits } from 'vue';

// Define emits to communicate with the parent
const emit = defineEmits();

// Function to send the image URL to the parent
const sendImage = (imageUrl) => {
  emit('imageSelected', imageUrl); // Emit the image URL when clicked
};
</script>




<template>
    <div :style="{gridTemplateColumns: blok.Fractions}" class="project-page-twoup-container">
        <div @click="sendImage(blok.Image1.filename)" :style="{ backgroundImage: 'url(' + blok.Image1.filename + ')' }" :class="imageClass1">
        </div>


        <div @click="sendImage(blok.Image2.filename)" :style="{ backgroundImage: 'url(' + blok.Image2.filename + ')' }" :class="imageClass2">
        </div>

    </div>
</template>



<style scoped>

.project-page-twoup-container{
    display: grid;
}


</style>