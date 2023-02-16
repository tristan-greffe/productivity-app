<template>
  <transition name="slide-right">
    <div class="carousel-slide" v-show="visible">
    <img :src="image" alt="test" style="width: 100%;"/>
    <slot></slot>
  </div>
  </transition>

</template>

<script>

export default {
  name: 'carousel-slide',
  props: {
    index: Number,
    carouselIndex: Number,
    image: String,
  },
  computed: {
    visible() {
      return this.index === this.carouselIndex;
    },
  },
};
</script>

<style>
.slide-right-enter-active {
  animation: slideRightIn 1s;
}

.slide-right-leave-active {
  animation: slideRightOut 1s;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
}

@keyframes slideRightIn {
  from { transform: translateX(100%); }
  to { transform: translateX(0); }
}

@keyframes slideRightOut {
  from { transform: translateX(0); }
  to { transform: translateX(100%); }
}
</style>
