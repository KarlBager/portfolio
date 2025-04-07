<script setup>

const props = defineProps({
    imgPath: String,
    blok: Object,
});

</script>




<template>


        <div @click="sendImage(blok.Image3.filename)" class="twoup-image">
            <img class="grid-image" loading="lazy" :src="blok.Image1.filename">
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