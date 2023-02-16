<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<template>
  <div class="carousel">
    <slot></slot>
    <button @click="back">&lt;  </button>
    <button @click="next">  ></button>
    <div class="carousel__pagination">
      <button v-for="n in numberSlide" :key="n" @click="goto(n - 1)" :class="{active: n - 1 === index}"></button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'carousel-app',
  props: {
    numberSlide: Number,
  },
  data() {
    return {
      index: 0,
    };
  },
  methods: {
    next() {
      this.index += 1;
      if (this.index >= this.numberSlide) {
        this.index = 0;
      }
      this.$emit('set-index', this.index);
    },
    back() {
      this.index -= 1;
      if (this.index < 0) {
        this.index = this.numberSlide - 1;
      }
      this.$emit('set-index', this.index);
    },
    goto(index) {
      this.index = index;
      this.$emit('set-index', this.index);
    },
  },
};
</script>

<style>
.carousel {
  text-align: center;
  position: relative;
}

.carousel__pagination {
  position: absolute;
  bottom: 25px;
  left: 0;
  right: 0;
  text-align: center;
}

.carousel__pagination button {
  display: inline-block;
  width: 10px;
  height: 10px;
  background-color: #fff;
  opacity: 0.8;
  border-radius: 10px;
  margin: 0 2px;
}

.carousel__pagination button.active {
  background-color: #000;

}
</style>
