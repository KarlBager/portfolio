
<template>

  <StoryblokComponent v-if="story" :blok="story.content" />

  
        <div class="backbutton-bottom drop-shadow-lg">
          <NuxtLink to="/"><div class="back-button-el">< Tilbage</div></NuxtLink>
        </div>    



</template>



<script setup>


const { slug } = useRoute().params

definePageMeta({
  name: 'projekter'
})

const story = await useAsyncStoryblok(
  slug && slug.length > 0 ? slug.join('/') : '',
  { version: 'draft' }
  )


</script>
 



<style scoped>

.backbutton-bottom{
  margin-top: 2rem;
  padding: 0rem 5rem 3rem 3rem;

}

@media only screen and (max-width: 600px){
  .backbutton-bottom{
  padding: 0rem var(--mobile-horizontal-padding);
  }
}


.backbutton-bottom p{
  color: black;
}

.navbar-item-active div{
            background: linear-gradient(145deg, #e6e6e6, #ffffff);
            box-shadow:  5px 5px 10px #d9d9d9,
             -5px -5px 10px #ffffff;
}


</style>