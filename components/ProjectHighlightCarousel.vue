<script setup>
import ProjectHighlightCarouselCard from './ProjectHighlightCarouselCard.vue'


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

  // Assuming you have fetched all stories and stored them in an array called 'stories'

// Use the filter method to filter out objects with the specified category ID
const filteredProjects = stories.filter(story => {
  // Assuming 'category_id' is the key in each story object containing the category ID
  return story.content.highlighted == true;
});

// Now 'filteredStories' contains only the stories with the specified category ID
// console.log(filteredProjects);



</script>


<template>
<div>

    <div class="carousel highlight-carousel drop-shadow-lg" data-flickity='{"autoPlay": 5000, "wrapAround": true, "arrowShape": "m72.58,60.84l18.84,6.41v20.25S0,52.9,0,52.9v-17.65S91.42.85,91.42.85v20.25s-18.84,6.35-18.84,6.35l-15.26,5.14-34.22,11.49,34.22,11.62,15.26,5.14Z"}'>
        
      <div class="carousel-cell">
          <div class="case-card case-card-container-wide">
                
                  <div class="bio-case-card case-card">

                  <div class="bio-card-typo-container">
                    <NuxtLink external to="AboutView">
                    <h1>Visuel designstuderende med kode som materiale</h1>
                    <h4>Søger praktik i perioden 20. oktober 2025 – 6. marts 2026</h4>
                  
                  
                  </NuxtLink>
                  </div>

                  </div>
                
              </div>
      </div>
      
      
      
      <div class="carousel-cell" v-for="(item, index) in filteredProjects" :key="index">
        <ProjectHighlightCarouselCard :projectId="filteredProjects[index].content.id"></ProjectHighlightCarouselCard>
      </div>
    </div>

</div>
</template>




<style>

.highlight-carousel{
margin: 0rem 0 2rem 0;
}

.bio-case-card{
  padding: 0rem;
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 1fr;
  /* justify-content: center;
  align-items: center; */
  background-image: url('https://www.media.karlbager.dk/media/karl-portrait_ext.jpg');
  width: 100%;
  height: 100%;
  border-radius: var(--kb-corner-radius);
  background-size: cover;
  background-position: left 26% top 50%;
  position: relative;
}


.bio-card-typo-container{
color: white;
padding: 0rem;
grid-column-start: 2;
grid-column-end: 4;

}

.bio-case-card h1{
  font-size: 1.6rem;
  line-height: 1.0;
  color: var(--kb-green-1);
}

.bio-case-card h3{
  margin-left: 0.4rem;
  margin-top: 0.2rem;
  font-size: 1rem;
  font-style: italic;
  line-height: 1;
}

.bio-case-card h4{
  margin-left: 2rem;
  margin-top: 1rem;
  font-size: 1rem;
  font-weight: 400;
  color: var(--kb-green-3);
}


.flickity-prev-next-button.previous{
  left: 0.2rem;
}


.flickity-prev-next-button.next{
  right: 0.2rem;
}


.flickity-page-dots{
  position: relative;
  bottom: 20px;  
  mix-blend-mode: difference;
}


.flickity-page-dot.is-selected{
  background: rgba(255,255,255, 100%) !important;
}

.flickity-page-dot{
  background: rgba(255,255,255, 30%) !important;
}

.flickity-button-icon{
  fill: white !important;
}

.flickity-button{
  mix-blend-mode: difference;
}




@media only screen and (min-width: 600px) {


.highlight-carousel{
margin: 0rem 0 3rem 0;
}


  .flickity-page-dots{
  position: relative;
  bottom: 30px;  
}


.flickity-prev-next-button.previous{
  left: 3rem;
}


.flickity-prev-next-button.next{
  right: 3rem;
}

.bio-case-card{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: center;
  align-items: center;
  background-image: url('https://www.media.karlbager.dk/media/karl-portrait_ext.jpg');
  width: 100%;
  height: 100%;
  border-radius: var(--kb-corner-radius);
  background-size: cover;
  background-position: left 30% top 50%;
  position: relative;
}


.bio-card-typo-container{
color: white;
padding: 1rem;
grid-column-start: 2;
grid-column-end: 4;
}

.bio-case-card h1{
  font-size: 2rem;
  line-height: 1;
}

.bio-case-card h3{
  margin-left: 0.4rem;
  font-size: 1rem;
  font-style: italic;
  line-height: 1;
}

.bio-case-card h4{
  margin-left: 6rem;
  margin-top: 2rem;
  font-size: 1rem;
}
}

@media only screen and (min-width: 835px) {
  .bio-case-card h4{
  margin-left: 2rem;
  margin-top: 2rem;
  font-size: 1rem;
}



.bio-card-typo-container{
color: white;
padding: 5rem;
}
}

@media only screen and (min-width: 1000px) {

  .bio-case-card h1{
font-size: 3rem;
}

}

.header-portrait-container{
  width: 15rem;
  overflow: hidden;
  border-radius: var(--kb-corner-radius);
}

.disabled {
  pointer-events: none; /* Disable pointer events */
  cursor: default; /* Change cursor to default */
  opacity: 0.5; /* Optionally reduce opacity to indicate disabled state */
}



.flickity-button-icon{

opacity: 0.3;
}

.flickity-button-icon:hover{
opacity: 1;
}

.flickity-button, .flickity-button:hover{
  background: none;
}

.flickity-prev-next-button .flickity-button-icon{
  height: 40%;
}

.flickity-button:focus{
  outline: 0;
  box-shadow: none;
}

</style>