<script setup>

import ProjectCarouselCard from '../components/ProjectCarouselCard.vue'

import projects from '@/projects.json'
import categories from '@/categories.json'


let stories = useState(() => ({})); // Initialize state to store all stories
const storyblokApi = useStoryblokApi(); // Get the Storyblok API instance


  try {
    const { data } = await storyblokApi.get('cdn/stories', {
      version: 'draft',
      per_page: 100 // Set to a value that fits your needs, maximum is 100
    });

stories = data.stories;


  } catch (error) {
    console.error('Error fetching stories:', error);
  }



const props = defineProps({
    categoryId: Number,
});


// console.log(props.categoryId);

// Assuming you have fetched all stories and stored them in an array called 'stories'

// Define the category ID you want to filter by
const categoryIdToFilter = props.categoryId;

// Use the filter method to filter out objects with the specified category ID
const filteredProjects = stories.filter(story => {
  // Assuming 'category_id' is the key in each story object containing the category ID
  return story.content.category == categoryIdToFilter;
});

// Now 'filteredStories' contains only the stories with the specified category ID
// console.log(filteredProjects);


function getCategory(categoryId, categories) {
  return categories.filter(category => category.categoryId === categoryId);
}
const carouselCategory =  getCategory(props.categoryId, categories);

</script>





<template>

<div class="carousel-container">
<h4 class="carousel-category-title">{{ carouselCategory[0].categoryName }}</h4>


<div class="main-carousel drop-shadow-lg" data-flickity='{"cellAlign": "left", "contain": true, "freeScroll": true, "pageDots": false, "prevNextButtons": false}'>
      <div class="carousel-cell" v-for="(item, index) in filteredProjects" :key="index">
        <ProjectCarouselCard :projectId="filteredProjects[index].content.id" />
      </div>
    </div>


</div>

</template>



<script>



export default {
  mounted() {
    if (process.client) {
      // Only import Flickity on the client-side
      import('flickity').then((Flickity) => {

        // // Initialize Flickity here using the component's ref
        // new Flickity.default(this.$refs.carouselContainer, {
        //   // Flickity options
        // });

        document.body.classList.add('loaded');

      });
    }
  }
}

// if (process.client) {
// var elem = document.querySelector('.main-carousel');
// var flkty = new Flickity( elem, {
//   // options
//   cellAlign: 'left',
//   contain: true,
//   freeScroll: true,
//   pageDots: false,
//   prevNextButtons: false,
// });
// }


</script>



<style>


.carousel-category-title{
font-size: 1rem;
text-transform: uppercase;
font-weight: 700;
color: var(--kb-gray-3);
margin-bottom: 1rem;
margin-left: 1rem;
}

.flickity-page-dots{
  position: absolute;
  bottom: 20px;  
}


.carousel-container{
    padding: 0 0.5rem 3rem;
}


@media only screen and (min-width: 600px) {
.carousel-container{
    padding: 0 3rem 3rem;
}

.carousel-category-title{
font-size: 1rem;
text-transform: uppercase;
font-weight: 700;
color: var(--kb-gray-3);
margin-bottom: 1rem;
}

}
</style>