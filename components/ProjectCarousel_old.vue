<script setup>

import ProjectCarouselCard from '../components/ProjectCarouselCard.vue'

// import Flickity from 'flickity';
// import 'flickity/dist/flickity.min.css';

import projects from '@/projects.json'
import categories from '@/categories.json'


const props = defineProps({
    categoryId: Number,
});


// Function to filter objects based on category
function filterByCategory(categoryId, projects) {
  return projects.filter(project => project.category === categoryId);
}

function getCategory(categoryId, categories) {
  return categories.filter(category => category.categoryId === categoryId);
}

// Filter objects with category number 1
const filteredProjects = filterByCategory(props.categoryId, projects);

const carouselCategory =  getCategory(props.categoryId, categories);


const items = [
  { 
    title: "eko",
    subtitle: "Eksamensopgave",
    year: '2024',
    category: 1,
    link: '/projects/eko',
    imagePath: './src/assets/ekoHeaderImage.png'
  },
  { 
    link: '/destination2',
    imagePath: '/path/to/your/image2.jpg'
  },
  { 
    link: '/destination3',
    imagePath: '/path/to/your/image3.jpg'
  },
  { 
    link: '/destination4',
    imagePath: '/path/to/your/image4.jpg'
  }
];



</script>

<template>


<div class="carousel-container">
<h4 class="carousel-category-title">{{ carouselCategory[0].categoryName }}</h4>


<div class="main-carousel drop-shadow-lg" data-flickity='{"cellAlign": "left", "contain": true, "freeScroll": true, "pageDots": false, "prevNextButtons": false}'>
      <div class="carousel-cell" v-for="(item, index) in filteredProjects" :key="index">
        <ProjectCarouselCard :projectId="filteredProjects[index].id" />
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
}

.flickity-page-dots{
  position: absolute;
  bottom: 20px;  
}


.carousel-container{
    padding: 0 3rem 3rem;
}

</style>