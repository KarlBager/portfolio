<script setup>

definePageMeta({
  name: 'Kontakt'
})


</script>



<template>

  <div id="contact-cell" class="carousel-cell">
    <div class="case-card case-card-container-wide">


      <div class="contact-card case-card">

        <img id="lille-karl" src="https://media.karlbager.dk/media/karl-portrait.jpg">

        <div class="contact-card-typo-container">
          

          
          <h2>Her kan jeg kontaktes:</h2>
          <p>
            <a href="mailto:kb@karlbager.dk">kb@karlbager.dk</a>
          </p>

          <div class="flex social-link-container">


            <div>
              <a href="https://www.linkedin.com/in/karl-emil-bager-jakobsen-87485a1a1/">
                <div class="social-link linkedin-link">
                </div>
              </a>
            </div>

            <div>
              <a href="https://www.instagram.com/karlbager">
                <div class="social-link instagram-link">
                </div>
              </a>
            </div>



          </div>

        </div>

        <!-- 
                    <div class="case-card-wide-hover-overlay">
                    </div> -->

      </div>


    </div>

  </div>


</template>



<script>


</script>






<style scoped>
#contact-cell{
  height: 64vh;
}

.case-card{
  height: 100%;
}

#lille-karl{
  width: 16rem;
  border-radius: 15px;
  margin-bottom: 4px;
}

.contact-card {
  padding: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-image: url('https://www.media.karlbager.dk/media/lille-karl.jpg'); */
  width: 100%;
  height: 100%;
  min-height: 10rem;
  border-radius: 15px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
  gap: 2rem;
}


@media (max-width: 636px) {
  #lille-karl{
  display: none;
}

.contact-card{
  padding: 0rem;
}

}


.contact-card-typo-container {
  color: #000000;
  padding: 1rem 0;
}

.contact-card-typo-container h2{
  text-align: left;
  font-size: 1.8rem;
  margin-bottom: 2px;
  line-height: 1.2;
}

.contact-card p {
  font-size: 1rem;
  line-height: 1.3;
  text-align: left;
}

.contact-card h3 {
  margin-left: 0.4rem;
  margin-top: 0.5rem;
  font-size: 1rem;
  font-style: italic;
  line-height: 1;
}

.contact-card h4 {
  margin-left: 0.4rem;
  margin-top: 2rem;
  font-size: 1rem;
  font-weight: 600;
  color: var(--kb-red-3);
}





@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }


  .contact-card-typo-container h2{
  font-size: 2rem;
}
}

.social-link-container {
  margin-top: 1rem;
  justify-content: left;
  opacity: 0;
  animation: fade 1s forwards;
  gap: 0.6rem;
}

.social-link {
  width: 1.8rem;
  height: 1.8rem;
}

.linkedin-link {
  background-image: url('https://www.media.karlbager.dk/media/linkedin.png');
  background-size: cover;
}

.instagram-link {
  background-image: url('https://www.media.karlbager.dk/media/instagram.png');
  background-size: cover;
}

.linkedin-link:hover {
  background-image: url('https://www.media.karlbager.dk/media/linkedin-inv.png');
  background-size: cover;
  transition: background-image 0.3s ease;
}

.instagram-link:hover {
  background-image: url('https://www.media.karlbager.dk/media/instagram-inv.png');
  background-size: cover;
  transition: background-image 0.3s ease;
}


</style>
