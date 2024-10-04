<script setup>
import projects from '@/projects.json'
import categories from '@/categories.json'


const props = defineProps({
  projectId: String,
})


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


const carouselCategory = getCategory(props.categoryId, categories);

</script>



<template>
  <div class="case-card case-card-container-wide">
    <a :href="filteredProjects[0].slug">
      <div
        :style="{ backgroundImage: 'url(' + filteredProjects[0].content.ProjectPageHeaderBlock[0].headerImagePath + ')' }"
        class="case-card case-card-wide">

        <div v-if="filteredProjects[0].content.ProjectPageHeaderBlock[0].headerVideo"
          class="pointer-events-none case-card-wide-video-overlay">
          <div class="video">
            <video class="headerVideo" preload="none" playsinline autoplay muted loop>
              <source :src="filteredProjects[0].content.ProjectPageHeaderBlock[0].headerVideoPath" type="video/mp4">
            </video>
          </div>
        </div>

        <div class="case-card-wide-hover-overlay">
        </div>

        <div class="flex case-card-typo-container drop-shadow-lg" :style="'text-decoration-color:' + filteredProjects[0].content.ProjectPageHeaderBlock[0].titleColor">
          <div>
            <h2 :style="{ color: filteredProjects[0].content.ProjectPageHeaderBlock[0].titleColor }">{{
      filteredProjects[0].content.ProjectPageHeaderBlock[0].title }}</h2>
            <h4 :style="{ color: filteredProjects[0].content.ProjectPageHeaderBlock[0].titleColor }">{{
      filteredProjects[0].content.ProjectPageHeaderBlock[0].subtitle }},
              {{ filteredProjects[0].content.ProjectPageHeaderBlock[0].year}}</h4>
            </div>
        </div>

      </div>
    </a>
    
  </div>
</template>




<style>

/* Add this to your component's style section or a global style file */
.flickity-buttons-light {
  fill: #ffffff; /* or any light color you prefer */
}


 video.headerVideo{
  display: none;
}


.case-card-typo-container {
  position: absolute;
  bottom: 2rem;
  left: 2rem;
  line-height: 1;
  color: black;
}


.case-card-wide-hover-overlay {
  opacity: 0;
  width: 100%;
  height: 100%;
  border-radius: 15px;
  position: relative;
  z-index: 10;
}


.case-card-wide-video-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 15px;
  overflow: hidden;
}

.case-card-wide-hover-overlay:hover {
  opacity: 100;
  background-color: rgba(0, 0, 0, 0.1);
  transition: opacity 0.3s ease;
}


.case-card-typo-container h2 {
  font-size: 3rem;
  font-family: "roboto", sans-serif;
}

.case-card-wide {
  background-color: var(--kb-green-3);
  width: 100%;
  height: 100%;
  border-radius: 15px;
  background-size: cover;
  background-position: center;
  position: relative;
}

.case-card-container-wide {
  width: 100vw;
  padding: 0 0.5rem;
  height: 20rem;
}

@media only screen and (min-width: 600px) {

  video.headerVideo{
  display: block;
  min-width: 100vw;
  }


.case-card-container-wide {
  width: 100vw;
  padding: 0 3rem;
  height: 25rem;
}


.case-card-typo-container h2 {
  font-size: 3rem;
  font-family: "roboto", sans-serif;
}

}


</style>