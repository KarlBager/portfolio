<script setup>

const props = defineProps({
    imgPath: String,
    blok: Object,
});

</script>




<template>

        <div class="oneup-container">
            <div @click="sendImage(blok.Image3.filename)" class="twoup-image">
                <img class="grid-image" loading="lazy" :src="blok.Image1.filename">
            </div>
        </div>
        <VueEasyLightbox
      :visible="visibleRef"
      :imgs="blok.Image1.filename"
      :index="indexRef"
      @hide="onHide"
    />
    


</template>



<style scoped>

.oneup-container{
    display: flex;
    justify-content: center;
}

.twoup-image{
    background-size: contain;
    background-repeat: no-repeat;
}
</style>