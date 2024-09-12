
<template>


<div class="about-container">
  <div class="about-portrait-container">
    <img class="about-portrait" src="@/public/media/karl-portrait.jpg" />

    <h3>Karl Emil Bager Jakobsen</h3>
    <p>– det er mig. Velkommen til.<br><br>Jeg er 22 år, bosat i København, og jeg elsker at arbejde med medieproduktion og digitalt design.<br><br>Jeg studerer i øjeblikket Visuel Kommunikation på studieretningen Coded Design ved Danmarks Medie- og Journalisthøjskole.<br><br>Derudover arbejder jeg freelance – primært som produktionsassistent – samt med alt, hvad jeg ellers kan komme i nærheden af.</p>
  
  </div>

  
  <div class="about-timeline-container">
    <img src="@/public/media/timeline.svg" />
  </div>
  
</div>



</template>


<script setup>

definePageMeta({
  name: 'Om'
})

</script>

<script>

document.body.classList.add('loaded');


</script>


<style>

.about-container{
  padding: 3rem;
  margin: 0;
  justify-items: center;
}

.about-portrait-container{
  max-width: auto;
  margin-right: 0rem;
  opacity: 0;
  animation: fade 1s forwards;
}

.about-timeline-container img{
  width: 100%;
  display: none;
}


@media only screen and (min-width: 600px) {

  .about-container{
  padding: 3rem;
  margin: 0 4rem;
  display: flex;
  justify-items: center;
}


.about-portrait-container{
  max-width: 17rem;
  margin-right: 2rem;
  opacity: 0;
  animation: fade 1s forwards;
}


.about-timeline-container img{
  width: 100%;
  max-width: 700px;
  display: block;
}

}

.about-portrait{
  max-width: auto;
  border-radius: 15px;
}



@keyframes fade {
  0% {
    opacity: 0; /* Start with the height at 0 */
  }
  100% {
    opacity: 100; /* End with the desired height */
  }
}



.about-portrait-container h3{
  margin-top: 2rem;
  margin-bottom: 0.2rem;
  font-weight: 600;
  font-size: 1.2rem;
}

.about-portrait-container p{
  font-weight: 200;
  font-style: italic;
}

.about-timeline-container{
  width: 100%;
}


.about-timeline-container {
  overflow: hidden; /* Hide the content initially */
  max-height: 0; /* Set the initial height to 0 */
  animation: reveal 4s forwards; /* Apply the reveal animation */
}

@keyframes reveal {
  0% {
    max-height: 0; /* Start with the height at 0 */
  }
  100% {
    max-height: 150vh; /* End with the desired height */
  }
}
</style>
