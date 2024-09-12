<template>

  <StoryblokComponent :blok="blok.ProjectPageHeaderBlock[0]" />

  <!-- <h1 style="color:white;">{{ blok.ProjectContent[1].component }}</h1> -->

  <StoryblokComponent v-for="blok in blok.ProjectContent" :key="blok._uid" :blok="blok" />

</template>

<script setup>
defineProps({ blok: Object });
</script>
