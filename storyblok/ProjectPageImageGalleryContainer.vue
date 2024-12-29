<script setup>

const props = defineProps({
    imgPath1: String,
    imgPath2: String,
    blok: Object,
});

const images = ref([]); // Array to hold selected image URLs
const visibleRef = ref(false); // Control lightbox visibility
const indexRef = ref(0); // Current image index

// Function to show the selected image in the lightbox
const showImg = (imageUrl) => {
  indexRef.value = images.value.indexOf(imageUrl); // Set the current index based on clicked image
  visibleRef.value = true; // Show the lightbox
};

// Function to handle lightbox hide event
const onHide = () => (visibleRef.value = false);

// Add all image URLs to the array when the component mounts
onMounted(() => {
  // Assuming blok.Imageblock is an array of objects with Image properties
  for (const blok of props.blok.Imageblock) {
    // Check for each image property and add to the images array
    for (let i = 1; i <= 4; i++) {
      const imageKey = `Image${i}`;
      if (blok[imageKey] && blok[imageKey].filename) {
        images.value.push(blok[imageKey].filename);
      }
    }
  }
});
</script>




<template>

<div class="project-page-element-container">
    
    <!-- <h1 style="color: white">{{ blok.Imageblock }}</h1> -->

    <StoryblokComponent @imageSelected="showImg" v-for="blok in blok.Imageblock" :key="blok._uid" :blok="blok" />


    <VueEasyLightbox
      :visible="visibleRef"
      :imgs="images"
      :index="indexRef"
      @hide="onHide"
    />

</div>

</template>


<style>


.twoup-image{
    margin: 0.2rem;
    height: 25rem;
    background-size: cover;
    background-position: center;
}

@media only screen and (max-width: 600px){
  .twoup-image{
    margin: 0.2rem;
    height: 12rem;
    background-size: cover;
    background-position: center;
}
}

.contain-image{
background-size: contain !important;
background-repeat: no-repeat;
}


</style>


<style scoped>

.project-page-twoup-container{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}



</style>