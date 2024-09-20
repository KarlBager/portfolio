<template>


    <div class="pointer-events-none nav-overlay-container absolute top-0 left-0 grid grid-cols-24+2">

        


        <div class="nav-overlay-grid pointer-events-auto z-10 nav-overlay pl-12 py-8 grid grid-cols-5 h-screen
        bg-[color:var(--kb-green-1)]">
          <a href="/" class="logo col-span-4" @click="$emit('close-nav')" to="/"><img
                    class="logo w-[100%] col-span-4" src="https://www.media.karlbager.dk/media/logo-w.svg" width="125" height="125" /> </a>


            <nav @click="$emit('close-nav')" class="row-start-3 self-center text-white">
                <ul>
                    <li>
                        <a href="/">Projekter</a>
                    </li>
                    <li>
                        <NuxtLink to="/AboutView">Om</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/KontaktView">Kontakt</NuxtLink>
                    </li>
                </ul>
            </nav>


            <div class="items-end social-list flex row-start-4">
                  
                        <a href="https://www.linkedin.com/in/karl-emil-bager-jakobsen-87485a1a1/">
                            <div class="social-list-item linkedin-nav-link"></div>
                        </a>
                        <a href="https://www.instagram.com/karlbager">
                            <div class="social-list-item instagram-nav-link"></div>
                        </a>
            </div>

        </div>

    </div>


</template>


<style scoped>
</style>

<style>

.nav-overlay-grid{
    width: 100vw;
    max-height: 100vh;
}

@media only screen and (min-width: 600px) {
.nav-overlay-grid{
    grid-column-start: 1;
    grid-column-end: 7;
    position: static;
    width: auto;
}

}


.social-list-item{
height: 2rem;
width: 2rem;
margin: 0.3rem;
}


.linkedin-nav-link{
    background-image: url('https://www.media.karlbager.dk/media/linkedin-w.png');
    background-size: cover;
}

.instagram-nav-link{
background-image: url('https://www.media.karlbager.dk/media/instagram-w.png');
background-size: cover;
}


.nav-overlay-grid{
    background-image: url('https://www.media.karlbager.dk/media/pattern.png');
    background-size: 300%;
    grid-template-rows: 42px minmax(0, 1fr) 2fr 2fr;
}


.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

nav ul li {
    font-family: "roboto", sans-serif;
    font-weight: 400;
    text-transform: uppercase;
    font-size: 1.2rem;
}
</style>