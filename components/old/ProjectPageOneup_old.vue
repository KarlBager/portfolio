<script setup>

const props = defineProps({
    imgPath: String,
});

</script>




<template>


        <div :style="{ backgroundImage: 'url(' + imgPath + ')' }" class="twoup-image">
        </div>
    


</template>



<style scoped>
.twoup-image{
    background-size: contain;
    background-repeat: no-repeat;
}

</style>