<script setup>

const props = defineProps({
    paragraphText: String,
});

</script>





<template>

<div class="project-page-element-container">
    <div class="project-page-paragraph-container">
        <p v-html="paragraphText" class="project-page-paragraph"></p>
    </div>
</div>


</template>











<style scoped>

.project-page-paragraph{
    color: #bbbbbb;
}
</style>