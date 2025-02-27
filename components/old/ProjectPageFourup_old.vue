<script setup>

const props = defineProps({
    imgPath1: String,
    imgPath2: String,
    imgPath3: String,
    imgPath4: String,
    cols: String,
});


</script>




<template>

    <div :style="{gridTemplateColumns: cols}" class="project-page-twoup-container">
        <div :style="{ backgroundImage: 'url(' + imgPath1 + ')' }" class="twoup-image">
        </div>
        <div :style="{ backgroundImage: 'url(' + imgPath2 + ')' }" class="twoup-image">
        </div>
        <div :style="{ backgroundImage: 'url(' + imgPath3 + ')' }" class="twoup-image">
        </div>
        <div :style="{ backgroundImage: 'url(' + imgPath4 + ')' }" class="twoup-image">
        </div>
    </div>


</template>



<style scoped>

.project-page-twoup-container{
    display: grid;
}

</style>