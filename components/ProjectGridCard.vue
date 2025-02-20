<script setup>

import projects from '@/projects.json'
import categories from '@/categories.json'

const props = defineProps({projectId: String})

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

// Define the category ID you want to filter by
const projectIdToFilter = props.projectId;

// Use the filter method to filter out objects with the specified category ID
const filteredProjects = stories.filter(story => {
  // Assuming 'category_id' is the key in each story object containing the category ID
  return story.content.id == projectIdToFilter;
});

// Now 'filteredStories' contains only the stories with the specified category ID
// console.log(filteredProjects);


function getCategory(categoryId, categories) {
  return categories.filter(category => category.categoryId === categoryId);
}


const carouselCategory =  getCategory(props.categoryId, categories);

</script>

<template>
<div class="case-card case-card-container drop-shadow-lg">
    <a :href="filteredProjects[0].slug">
    <div :style="{ backgroundImage: 'url(' + filteredProjects[0].content.ProjectPageHeaderBlock[0].headerImagePath + ')' }" class="case-card">
       
        <div v-if="filteredProjects[0].content.ProjectPageHeaderBlock[0].headerVideo" class="case-card-wide-video-overlay">
          <div class="video"><video playsinline class="video" autoplay muted loop>
                <source :src="filteredProjects[0].content.ProjectPageHeaderBlock[0].headerVideoPath" type="video/mp4">
                </video>
            </div>
        </div>
       
        <div class="case-card-hover-overlay">
        </div>
    </div>

</a>



</div>


<div class="case-card-label-container text-center">
    <h2>{{ filteredProjects[0].content.ProjectPageHeaderBlock[0].title }}</h2>
    <h4>{{ filteredProjects[0].content.ProjectPageHeaderBlock[0].subtitle }}, {{filteredProjects[0].content.ProjectPageHeaderBlock[0].year}}</h4>
</div>

</template>




<style scoped>

.case-card-label-container{
    margin: 0.3rem 0;
    line-height: 1.1;
    color: var(--kb-gray-2);
    width: 100%;
}

.case-card-label-container h2{
    font-weight:600;
    font-size: 1.0rem;
}


.case-card-label-container h4{
    font-size: 0.6rem;
}


@media only screen and (min-width: 600px) {
.case-card-label-container h2{
    font-weight:600;
    font-size: 1.1rem;
}

.case-card-label-container h4{
    font-size: 0.7rem;
}
}


.case-card-year-container{
    position:absolute;
    top: 0.2rem;
    right: 0.4rem;
}


.case-card-wide-video-overlay{
    position: absolute;
    top:0;
    left:0;
    width: 100%;
    height: 100%;
    border-radius: 15px;
    overflow: hidden;
}

.video{
    width: 130%;
}


.case-card-typo-container{
    color: black;
    position: absolute;
    bottom: 2rem;
    left: 2rem;
    line-height: 1;
    pointer-events: none;
}

.case-card-hover-overlay{
    opacity: 0;
    width: 100%;
    height: 100%;
    border-radius: 15px;
    position: relative;
    z-index: 10;
}

.case-card-hover-overlay:hover{
    opacity: 100;
    background-color: rgba(0,0,0,0.1);
    transition: opacity 0.3s ease;
}


.case-card-typo-container h2{
    font-size: 2.0rem;
    font-family: "roboto", sans-serif;
}


.case-card-typo-container h4{
    font-size: 0.8rem;
}

.case-card{
background-color: var(--kb-green-3);
width: 100%;
aspect-ratio: 16 / 9;
border-radius: 15px;
background-size: cover;
background-position: center;
position: relative;
}


.case-card-container{
    width: 100%;
}



@media only screen and (min-width: 600px) {

}

</style>