<script setup>

definePageMeta({
  name: 'Kontakt'
})


if(process.client){
document.body.classList.add('loaded');
}

</script>



<template>

  <div class="carousel-cell">
    <div class="case-card case-card-container-wide">


      <div class="contact-card case-card">

        <div class="contact-card-typo-container">
          <p>
            <a href="mailto:kontakt@karlbager.dk">kontakt@karlbager.dk</a>
            <br>
            <a href="tel:+4529827011">+45 29 82 70 11</a>
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






<style>
.contact-card {
  padding: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url('https://www.media.karlbager.dk/media/pattern.png');
  width: 100%;
  height: 100%;
  border-radius: 15px;
  background-size: cover;
  background-position: center;
  position: relative;
}


.contact-card-typo-container {
  color: white;
  padding: 1rem 0;
}

.contact-card p {
  font-size: 1.2rem;
  line-height: 1.3;
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
}

.social-link-container {
  margin-top: 1rem;
  justify-content: left;
  opacity: 0;
  animation: fade 1s forwards;
}

.social-link {
  width: 2rem;
  height: 2rem;
  margin-right: 1rem;
}

.linkedin-link {
  background-image: url('https://www.media.karlbager.dk/media/linkedin-inv.png');
  background-size: cover;
}

.instagram-link {
  background-image: url('https://www.media.karlbager.dk/media/instagram-inv.png');
  background-size: cover;
}

.linkedin-link:hover {
  background-image: url('https://www.media.karlbager.dk/media/linkedin.png');
  background-size: cover;
  transition: background-image 0.3s ease;
}

.instagram-link:hover {
  background-image: url('https://www.media.karlbager.dk/media/instagram.png');
  background-size: cover;
  transition: background-image 0.3s ease;
}


</style>
