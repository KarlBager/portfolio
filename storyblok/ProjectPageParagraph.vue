<script setup>

const props = defineProps({
    blok: Object,
});

</script>





<template>

<div class="project-page-element-container">
    <div class="project-page-paragraph-container">
        <p v-html="blok.Paragraph" class="project-page-paragraph"></p>
    </div>
</div>


</template>











<style scoped>

.project-page-paragraph{
    color: #bbbbbb;
}

.project-page-paragraph-container{
    max-width: 35rem;
    margin: 0 auto;
}

</style>