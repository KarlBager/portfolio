<template>


	<div class="about-container">
		<div class="about-portrait-container">
			<img class="about-portrait" src="https://media.karlbager.dk/media/lille-karl.jpg" />

			<h3>Karl Emil Bager Jakobsen</h3>
			<p>– det er mig<br><br>Jeg er 23 år, bosat i København, og jeg har min passion i medieproduktion og digitalt design.<br><br>Jeg studerer i øjeblikket Visuel Kommunikation på studieretningen Coded Design ved
				Danmarks
				Medie- og Journalisthøjskole.<br><br>Derudover arbejder jeg freelance – primært som produktionsassistent samt som fotograf, billedbehandler og klipper krydret med lidt front-end og øvrigt grafisk design.</p>

		</div>

		<Timeline></Timeline>

	</div>



</template>


<script setup>

definePageMeta({
  name: 'Om'
})

</script>



<style>
.about-container {
  padding: 3rem;
  margin: 0;
  display: flex;
  justify-content: center;
}

.about-portrait-container {
  max-width: 24rem;
  margin-right: 0rem;
  opacity: 0;
  animation: fade 1s forwards;
  filter: grayscale();
}

.about-portrait-container:hover {
  transition: 1s;
  filter: none;
}

.about-timeline-container{
  display: none;
}

.about-timeline-container svg {
  max-width: 10rem;
  display: none;
}


@media only screen and (min-width: 930px) {

  .about-container {
    padding: 3rem;
    margin: 0 4rem;
	display: flex;
  }

  .about-portrait-container {
    max-width: 17rem;
    margin-right: 2rem;
    opacity: 0;
    animation: fade 1s forwards;
  }


  .about-timeline-container svg {
	display: block;
    width: 100%;
    max-width: 44rem;
	min-width: 28rem;
  }

  .about-timeline-container{
	display: flex;
    justify-content: center;
	align-items: center;
  }

}

.about-portrait {
  max-width: auto;
  border-radius: 15px;
}




@keyframes fade {
  0% {
    opacity: 0;
    /* Start with the height at 0 */
  }

  100% {
    opacity: 100;
    /* End with the desired height */
  }
}



.about-portrait-container h3 {
  margin-top: 2rem;
  margin-bottom: 0.2rem;
  font-weight: 600;
  font-size: 1.2rem;
}

.about-portrait-container p {
  font-weight: 200;
  max-width: 30rem;
}

.about-timeline-container {
  width: 100%;
}


/* .about-timeline-container {
  overflow: hidden;
  
  max-height: 0;
  
  animation: reveal 4s forwards;
  
}

@keyframes reveal {
  0% {
    max-height: 0;
   
  }

  100% {
    max-height: 150vh;
   
  }
} */


.st0 {
  fill: #377068;
}

.st1 {
  fill: #609D91;
}

.st2 {
  fill: none;
  stroke: #1D1D1B;
  stroke-width: 3;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-miterlimit: 10;
}

.st3 {
  fill: #1D1D1B;
}
</style>
