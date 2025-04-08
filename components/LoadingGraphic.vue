<script setup>

let currentLoadingLogo = ref(0);
let loadingLogoSrc = ref('https://media.karlbager.dk/media/kb-loading-logo-01.png');
let interval;


onBeforeMount(()=>{
startAnimation();
})

onUnmounted(()=>{
stopAnimation();
})


function startAnimation(){
    console.log('starting animation')
interval = setInterval(switchImage, 500);
}

function stopAnimation(){
    clearInterval(interval);
}

function switchImage(){
    if(currentLoadingLogo.value == 0){
        currentLoadingLogo.value = 1;
        loadingLogoSrc.value = 'https://media.karlbager.dk/media/kb-loading-logo-02.png';
        return
    }
    if(currentLoadingLogo.value == 1){
        currentLoadingLogo.value = 0;
        loadingLogoSrc.value = 'https://media.karlbager.dk/media/kb-loading-logo-01.png';
    }
}



</script>

<template>

<div class="loading-graphic-container">
    <img class="loading-graphic" :src="loadingLogoSrc">
</div>



</template>


<style>

.loading-graphic-container{
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 100;
    display: flex;
    justify-content: center;
    align-items: center;
}

.loading-graphic{
    width: 20rem;
    margin-bottom: 6rem;
    margin-left: 1rem;
}


</style>