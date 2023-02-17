<template>
  <div class="film-page">
    <h1 class="title">Filminder</h1>
    <div class="container">
      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="E.g: Hunger Games" @keyup.enter="submit" ref="input">
        <div class="input-group-prepend">
          <button class="btn btn-primary" @click="submit">Submit -></button>
        </div>
      </div>
      <div class="d-flex flex-column justify-content-center">
        <div class="card m-2 py-2" style="width: 100%; height: 220px;" v-for="result in results" :key="result.Title" data-aos="fade-right">
          <div class="d-flex">
            <img :src="result.Poster" alt="" class="px-2" style="height: 200px;">
            <div>
              <h2>{{ result.Title }}</h2>
              <p>Type: {{ result.Type }}</p>
              <p>Released: {{ result.Released }}</p>
              <p>{{ result.Plot }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

export default {
  name: 'film-page',
  data() {
    return {
      results: [],
      infoMovi: {},
    };
  },
  methods: {
    async submit() {
      const result = await axios.get(`https://www.omdbapi.com/?apikey=1a2a82db&s=${this.$refs.input.value}`);
      this.results = result.data.Search;
      this.$refs.input.value = '';
      this.infoMovies();
    },
    infoMovies() {
      this.results.forEach(async (movie) => {
        const result = await axios.get(`https://www.omdbapi.com/?apikey=1a2a82db&i=${movie.imdbID}`);
        movie.Released = result.data.Released;
        movie.Runtime = result.data.Runtime;
        movie.Plot = result.data.Plot;
      });
    },
  },

};
</script>
