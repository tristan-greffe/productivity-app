<template>
  <div class="home-page">
    <h1>Productivity App</h1>
    <Carousel @set-index="updateIndex" :numberSlide="slides.length">
      <CarouselSlide v-for="(slide, i) in slides" :index="i" :carouselIndex="carouselIndex" :image="slide.image" :key="i"/>
    </Carousel>
    <button @click.prevent="addSlide">Add Slide</button>
    <button @click.prevent="deleteSlide">Delete Slide</button>
  </div>
</template>

<script>
import Carousel from '../components/Carousel.vue';
import CarouselSlide from '../components/CarouselSlide.vue';

export default {
  name: 'home-page',
  components: {
    Carousel,
    CarouselSlide,
  },
  data() {
    return {
      slides: [
        { image: 'https://picsum.photos/id/0/1000/300' },
        { image: 'https://picsum.photos/id/1/1000/300' },
        { image: 'https://picsum.photos/id/2/1000/300' },
      ],
      carouselIndex: 0,
    };
  },
  methods: {
    updateIndex(index) {
      this.carouselIndex = index;
    },
    addSlide() {
      if (this.slides.length === 0) {
        this.carouselIndex = 0;
      }
      this.slides.push({ image: `https://picsum.photos/id/${this.slides.length}/1000/300` });
    },
    deleteSlide() {
      this.slides.splice(-1);
      if (this.carouselIndex === this.slides.length) {
        this.carouselIndex -= 1;
      }
    },
  },
};
</script>
