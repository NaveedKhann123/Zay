<template>
  <div class="slider-wrapper">
    
    <!-- Swiper -->
    <swiper
      :modules="modules"
      :slides-per-view="1"
      :space-between="30"
      :loop="true"
      :autoplay="{
        delay: 5000,
        disableOnInteraction: false
      }"
      navigation
      @swiper="onSwiper"
      @slideChange="onSlideChange"
      class="main-swiper"
    >
      
      <!-- Slide 1 -->
      <swiper-slide>
        <div class="slide-content">
     
          <div class="text">
            <h1 class="text-h1">Zay Commerce</h1>
            <p class="tex-p">Tiny and Perfect Commerce <br> Template</p>
           <p class="text-pp">
           Zay Shop is an eCommerce HTML5 CSS template with latest version of Bootstrap 5 (beta 1).
           This template is 100% free provided by 
           <a href="https://templatemo.com/" target="_blank">TemplateMo</a>.
            Image credits go to 
             <a href="https://stories.freepik.com/" target="_blank">Freepik</a>, 
             <a href="https://stories.freepik.com" target="_blank">Stories</a>, 
             <a href="https://unsplash.com" target="_blank">Unsplash</a> and 
            <a href="https://icons8.com" target="_blank">Icons8</a>.
            </p>
          </div>
        <img src="/banner_img_01.jpg" />
        </div>
      </swiper-slide>

      <!-- Slide 2 -->
      <swiper-slide>
        <div class="slide-content">
        
          <div class="text">
            <h1 class="text-h11">Proident occaecat</h1>
            <p class="text-p1">Aliquip ex ea commodo consequat</p>
            <p class="text-pp">We bring you 100% free CSS templates for your websites. If you wish to support TemplateMo, please make a small contribution via PayPal or tell your friends about our website. Thank you.</p>
          </div>
            <img src="/banner_img_02.jpg" alt="image" />
        </div>
      </swiper-slide>

      <!-- Slide 3 -->
      <swiper-slide>
        <div class="slide-content">
     
          <div class="text">
            <p class="text-h11">Repr in voluptate.</p>
            <p class="text-p1">Ullamco laboris nisi ut</p>
             <p class="text-pp">We bring you 100% free CSS templates for your websites. If you wish to support TemplateMo, please make a small contribution via PayPal or tell your friends about our website. Thank you.</p>
          </div>
               <img src="/banner_img_03.jpg" alt="image" />
        </div>
      </swiper-slide>

    </swiper>

  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Navigation } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'

export default {
  components: {
    Swiper,
    SwiperSlide
  },

  setup() {
    const modules = [Autoplay, Navigation]

    const onSwiper = (swiper) => {
      console.log(swiper)
    }

    const onSlideChange = () => {
      console.log('slide changed')
    }

    return {
      modules,
      onSwiper,
      onSlideChange
    }
  }
}
</script>

<style scoped>
.slider-wrapper {
  width: 100%;

}

.main-swiper {
  width: 100%;
   height: 600px;
}


.slide-content {
  display: flex;
  justify-content: space-between;
  gap: 30px;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
  background: #EFEFEF;
}

/* Image */
.slide-content img {
  width: 50%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px;
}


.text-h1{
  font-size: 32px;
  margin-bottom: 10px;
  color: #59AB6E;
  margin-left: 110px;
  margin-top: 130px;
  
}
.text-h11{
   font-size: 32px;
  margin-bottom: 10px;
  color: #212529;
  margin-left: 110px;
  margin-top: 130px;
}

.tex-p{
  font-size: 32px;
  color: #212529;
  margin-left:110px ;
  
}
.text-pp{
  color: #212529;
  margin-left:110px ;
  color: #2F3336;
  font-size: 22px;
}
.text-p1{
   font-size: 32px;
  margin-bottom: 10px;
  color: #212529;
  margin-left: 110px;
}
a{
  color: #59AB6E;
}
/* Navigation buttons style (Swiper default override) */
:deep(.swiper-button-next),
:deep(.swiper-button-prev) {
  color: #59AB6E !important;
  font-weight: bolder;



}
</style>