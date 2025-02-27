<script setup>

const props = defineProps({
    imgPath1: String,
    imgPath2: String,
});

console.log(props.imgPath1);

</script>




<template>

<div class="project-page-element-container">
       <slot></slot>
</div>

</template>


<style>

.twoup-image{
    margin: 0.2rem;
    height: 25rem;
    background-size: cover;
    background-position: center;
}

</style>


<style scoped>


.project-page-twoup-container{
    display: flex;
    justify-content: space-between;
}



</style>