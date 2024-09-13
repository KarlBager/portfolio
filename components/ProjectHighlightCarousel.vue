<script setup>
import ProjectHighlightCarouselCard from './ProjectHighlightCarouselCard.vue'

// import Flickity from 'flickity';
// import 'flickity/dist/flickity.min.css';


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

                    <div>
                    <div class="header-portrait-container">
                      <img src="https://www.portfolio.karlbager.dk/media/karl-portrait.jpg" />
                  </div>
                  </div>

                  <div class="bio-card-typo-container">
                    <h2>Karl E. Bager</h2>
                    <h3>– mediemand & digital designer under udvikling</h3>
                    <NuxtLink to="AboutView"><h4>Læs mere >></h4></NuxtLink>
                  </div>

<!-- 
                    <div class="case-card-wide-hover-overlay">
                    </div> -->

                  </div>
   
              </div>
      </div>
      
      
      
      <div class="carousel-cell" v-for="(item, index) in filteredProjects" :key="index">
        <ProjectHighlightCarouselCard :projectId="filteredProjects[index].content.id"></ProjectHighlightCarouselCard>
      </div>
    </div>

</div>
</template>


<script>



// "arrowShape": "m72.58,60.84l18.84,6.41v20.25S0,52.9,0,52.9v-17.65S91.42.85,91.42.85v20.25s-18.84,6.35-18.84,6.35l-15.26,5.14-34.22,11.49,34.22,11.62,15.26,5.14Z"}


// export default {
//   mounted() {
//     if (process.client) {
//       // Only import Flickity on the client-side
//       import('flickity').then((Flickity) => {
//         // Initialize Flickity here using the component's ref
//         new Flickity.default(this.$refs.carouselContainer, {
//           // Flickity options
//         });
//       });
//     }
//   }
// }


</script>


<style>

.bio-case-card{
  padding: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url('https://www.portfolio.karlbager.dk/media/pattern.png');
  width: 100%;
  height: 100%;
  border-radius: 15px;
  background-size: cover;
  background-position: center;
  position: relative;
}


.bio-card-typo-container{
color: white;
padding: 1rem;
}

.bio-case-card h2{
  font-size: 2.3rem;
  line-height: 1.0;
}

.bio-case-card h3{
  margin-left: 0.4rem;
  margin-top: 0.2rem;
  font-size: 1rem;
  font-style: italic;
  line-height: 1;
}

.bio-case-card h4{
  margin-left: 0.4rem;
  margin-top: 2rem;
  font-size: 1rem;
  font-weight: 600;
  color: var(--kb-red-3);
}

@media only screen and (min-width: 600px) {

.bio-case-card{
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url('https://www.portfolio.karlbager.dk/media/pattern.png');
  width: 100%;
  height: 100%;
  border-radius: 15px;
  background-size: cover;
  background-position: center;
  position: relative;
}


.bio-card-typo-container{
color: white;
padding: 1rem;
}

.bio-case-card h2{
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
  margin-left: 0.4rem;
  margin-top: 2rem;
  font-size: 1rem;
  font-weight: 600;
  color: var(--kb-red-3);
}
}

@media only screen and (min-width: 835px) {
.bio-case-card h2{
font-size: 6rem;
}


.bio-card-typo-container{
color: white;
padding: 5rem;
}
}



.header-portrait-container{
  width: 15rem;
  overflow: hidden;
  border-radius: 15px;
}

.disabled {
  pointer-events: none; /* Disable pointer events */
  cursor: default; /* Change cursor to default */
  opacity: 0.5; /* Optionally reduce opacity to indicate disabled state */
}


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