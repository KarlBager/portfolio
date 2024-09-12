<script setup>

const props = defineProps({
    imgPath: String,
    blok: Object,
});

</script>




<template>


        <div :style="{ backgroundImage: 'url(' + blok.Image1.filename + ')' }" class="twoup-image">
        </div>
    


</template>



<style scoped>
.twoup-image{
    background-size: contain;
    background-repeat: no-repeat;
}

</style>