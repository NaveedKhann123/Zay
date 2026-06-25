<template>
  <div class="brands">

    <h1>Our Brands</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</p>

    <div class="logo-carousel-container">

      <button 
        @click="prevSlide"
        class="carousel-arrow"
      >
        &#10094;
      </button>


      <div class="logo-slider">

        <div 
          class="logo-track"
          :style="{ transform:`translateX(-${current * transformOffset}%)` }"
        >

          <div
            v-for="(logo,index) in logos"
            :key="index"
            class="logo-item"
            :style="{ flex:`0 0 ${transformOffset}%` }"
          >

            <img 
              :src="logo.src"
              :alt="logo.alt"
            >

          </div>
        </div>
      </div>
      <button 
        @click="nextSlide"
        class="carousel-arrow"
      >
        &#10095;
      </button>
    </div>
  </div>
</template>

<script setup>
import {ref, computed, onMounted, onUnmounted} from "vue"
const current = ref(0)
const itemsPerPage = ref(4)
const logos = [
{
src:"/brand_01.png",
alt:"Levi"
},
{
src:"/brand_02.png",
alt:"Adidas"
},
{
src:"/brand_03.png",
alt:"Nike"
},
{
src:"/brand_04.png",
alt:"H&M"
},
]
const maxSlides = computed(()=>{
return Math.max(
logos.length - itemsPerPage.value,
0
)
})
const transformOffset = computed(()=>{
return 100 / itemsPerPage.value
})

function nextSlide(){
if(current.value >= maxSlides.value){
current.value = 0
}

else{

current.value++

}

}




function prevSlide(){

if(current.value <= 0){

current.value = maxSlides.value

}

else{

current.value--

}

}




function resize(){

if(window.innerWidth <= 480){

itemsPerPage.value = 1

}

else if(window.innerWidth <= 768){

itemsPerPage.value = 2

}

else{

itemsPerPage.value = 4

}


if(current.value > maxSlides.value){

current.value = 0

}

}



onMounted(()=>{

resize()

window.addEventListener(
"resize",
resize
)

})



onUnmounted(()=>{

window.removeEventListener(
"resize",
resize
)

})


</script>




<style scoped>


.brands{

width:100%;
padding:60px 0;
background:#E9EEF5;
text-align:center;

}



.brands h1{

color:#333;

}



.brands p{

color:#666;
margin-bottom:30px;

}



.logo-carousel-container{

display:flex;
align-items:center;
justify-content:center;

max-width:900px;
margin:auto;

padding:40px 20px;

}



.logo-slider{

overflow:hidden;
flex:1;

}



.logo-track{

display:flex;
transition:0.5s;

}



.logo-item{

display:flex;
justify-content:center;
align-items:center;

}



.logo-item img{

width:110px;

filter:grayscale(100%);
opacity:.5;

transition:.3s;

}



.logo-item img:hover{

filter:none;
opacity:1;
transform:scale(1.1);

}




.carousel-arrow{

border:none;
background:none;

font-size:30px;

color:#59AB6E;

cursor:pointer;

padding:10px;

}



@media(max-width:768px){


.logo-item img{

width:90px;

}

}



@media(max-width:480px){


.brands{

padding:40px 10px;

}


.logo-item img{

width:80px;

}


}

</style>