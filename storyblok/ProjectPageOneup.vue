<script setup>

const props = defineProps({
    imgPath: String,
    blok: Object,
});

</script>




<template>


        <div :style="{ backgroundImage: 'url(' + blok.Image1.filename + ')' }" class="twoup-image">
        </div>
        <VueEasyLightbox
      :visible="visibleRef"
      :imgs="blok.Image1.filename"
      :index="indexRef"
      @hide="onHide"
    />
    


</template>



<style scoped>
.twoup-image{
    background-size: contain;
    background-repeat: no-repeat;
}

</style>