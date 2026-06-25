<template>
  <div class="slider-wrapper">
    
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
      
      <swiper-slide>
        <div class="slide-content">
          <div class="text-side">
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
          <div class="image-side">
            <img src="/banner_img_01.jpg" alt="Banner 1" />
          </div>
        </div>
      </swiper-slide>

      <swiper-slide>
        <div class="slide-content">
          <div class="text-side">
            <h1 class="text-h11">Proident occaecat</h1>
            <p class="text-p1">Aliquip ex ea commodo consequat</p>
            <p class="text-pp">We bring you 100% free CSS templates for your websites. If you wish to support TemplateMo, please make a small contribution via PayPal or tell your friends about our website. Thank you.</p>
          </div>
          <div class="image-side">
            <img src="/banner_img_02.jpg" alt="Banner 2" />
          </div>
        </div>
      </swiper-slide>

      <swiper-slide>
        <div class="slide-content">
          <div class="text-side">
            <h1 class="text-h11">Repr in voluptate.</h1>
            <p class="text-p1">Ullamco laboris nisi ut</p>
            <p class="text-pp">We bring you 100% free CSS templates for your websites. If you wish to support TemplateMo, please make a small contribution via PayPal or tell your friends about our website. Thank you.</p>
          </div>
          <div class="image-side">
            <img src="/banner_img_03.jpg" alt="Banner 3" />
          </div>
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
  min-height: 550px; 
}

.slide-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 40px;
  min-height: 550px;
  padding: 40px 80px; 
  box-sizing: border-box;
  background: #efefef;
}

.text-side {
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.image-side {
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.image-side img {
  max-width: 100%;
  height: auto;
  max-height: 450px;
  object-fit: contain; 
}

.text-h1 {
  font-size: 42px;
  font-weight: 700;
  color: #59AB6E;
  margin: 0 0 10px 0;
}

.text-h11 {
  font-size: 42px;
  font-weight: 300;
  color: #212529;
  margin: 0 0 10px 0;
}

.tex-p {
  font-size: 30px;
  font-weight: 300;
  color: #212529;
  margin: 0 0 20px 0;
  line-height: 1.3;
}

.text-p1 {
  font-size: 30px;
  font-weight: 300;
  color: #212529;
  margin: 0 0 20px 0;
}

.text-pp {
  color: #495057;
  font-size: 18px;
  line-height: 1.6;
  margin: 0;
}

a {
  color: #59AB6E;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

:deep(.swiper-button-next),
:deep(.swiper-button-prev) {
  color: #59AB6E !important;
  font-weight: bolder;
}


@media (max-width: 991px) {
  .slide-content {
    padding: 40px;
  }
  .text-h1, .text-h11 { font-size: 32px; }
  .tex-p, .text-p1 { font-size: 24px; }
  .text-pp { font-size: 16px; }
}

@media (max-width: 768px) {
  .slide-content {

    flex-direction: column-reverse; 
    justify-content: center;
    text-align: center;
    padding: 50px 25px;
    gap: 20px;
  }

  .text-side, .image-side {
    width: 100%;
  }

  .image-side img {
    max-height: 250px; 
  }

  .text-h1, .text-h11 {
    font-size: 28px;
    margin-top: 10px;
  }

  .tex-p, .text-p1 {
    font-size: 20px;
  }

  .text-pp {
    font-size: 14px;
  }

  br {
    display: none;
  }
  
  :deep(.swiper-button-next),
  :deep(.swiper-button-prev) {
    transform: scale(0.6);
  }
}
</style>