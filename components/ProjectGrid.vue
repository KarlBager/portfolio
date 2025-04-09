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


let categoryIdToFilter;
let filteredProjects;
let carouselCategory;


if(props.categoryId != 4){

// Define the category ID you want to filter by
categoryIdToFilter = props.categoryId;

// Use the filter method to filter out objects with the specified category ID
filteredProjects = stories.filter(story => {
  // Assuming 'category_id' is the key in each story object containing the category ID
  return story.content.category == categoryIdToFilter;
});

// Now 'filteredStories' contains only the stories with the specified category ID
// console.log(filteredProjects);



function getCategory(categoryId, categories) {
  return categories.filter(category => category.categoryId === categoryId);
}
carouselCategory =  getCategory(props.categoryId, categories);

} else{

// Use the filter method to filter out objects with the specified category ID
filteredProjects = stories;
carouselCategory = [{categoryName: ''}];
}


// 🔥 Shuffle `filteredProjects` based on index positions
const customOrder = [6, 3, 9, 2, 5, 0, 8, 4, 7, 1]; // The desired index order

const orderedItems = customOrder.map(i => filteredProjects[i] || null); // Keep placeholders
const remainingItems = filteredProjects.filter(item => !orderedItems.includes(item));

filteredProjects = [...orderedItems.filter(Boolean), ...remainingItems]; // Boolean filter removes nulls

const filteredProjectsRef = ref(filteredProjects);

</script>




<template>
<div class="grid-container">

      <div class="grid-cell" v-for="(item, index) in filteredProjectsRef" :key="index">
        <ProjectGridCard :projectId="index" :filteredProjects="filteredProjectsRef" />
      </div>

</div>
</template>



<script>


</script>



<style>

.grid-cell{
  overflow: hidden;
    white-space: nowrap;       /* Don't allow line breaks */
    text-overflow: ellipsis;   /* Show "..." when it overflows */
}

.grid-container{
  padding: 0 var(--mobile-side-padding);
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
}

@media only screen and (min-width: 600px) {
  .grid-container{
  padding: 0 3rem 3rem;
  gap: 2rem;
  }
}


@media only screen and (min-width: 1270px) {
.grid-container{
    grid-template-columns: repeat(3, 1fr);
}
}

</style>
