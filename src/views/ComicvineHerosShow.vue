<script>
import axios from "axios";

export default {
  data: function () {
    return {
      hero: {
        first_appeared_in_issue: {
          api_detail_url: "",
          id: 0,
          name: "",
          issue_number: "",
        },
        description: "",
        image: {
          super_url: "",
        },
      },
      searchCharacterParams: {
        input_name: "",
      },
      marvel_hero: {
        thumbnail: {
          path: "",
        },
        url: ""
      },
    };
  },
  created: function () {
    if (this.$route.query.q) {
      this.searchCharacterParams.input_name = this.$route.query.q;
      this.showComicvineHero();
      this.showMarvelHero();

      
    }
  },
  methods: {
    showComicvineHero: function () {
      console.log(this.searchCharacterParams);
      axios.get("/comicvine/characters_by_name.json", { params: this.searchCharacterParams }).then((response) => {
        console.log("Retrieved Hero from Comicvine", response.data);
        this.hero = response.data;
      });
    },
    showMarvelHero: function () {
      axios.get("/comicvine/character_by_id.json").then((response) => {
        console.log("Retreived Hero From Marvel", response.data);
        this.marvel_hero.url = response.data;
      });
    },
  },
};
</script>

<template>
  <div class="home">
    <div class="for_header"></div>
      <div class="container">
        <div class="image-fita" :style="{ 'background-image': `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url(${hero.image.super_url})` }">
        <div class="text-center">
          Character Name:
          <input v-model="searchCharacterParams.input_name" type="text" />
          <button
            v-on:click="
              showComicvineHero();
              showMarvelHero();
            "
          >
            Submit
          </button>

        </div> 
        <div>
          <div>
            <h1 class="display-2 fw-bolder text-center" >{{ hero.name }}</h1>
            <h2 class="display-5 fw-bolder text-center">{{ hero.real_name }}</h2>
            <div v-html="hero.aliases" class="display-6 text-center"></div>
            <!-- <h2>Aliases: {{ hero.aliases }}</h2> -->
            <hr class="rounded">
            <h3>Origin Story: {{ hero.deck }}</h3>
            <hr class="rounded">
            <h4>First Appearance Issue: {{ hero.first_appeared_in_issue.name }} # {{ hero.first_appeared_in_issue.issue_number}}</h4>
            <hr class="rounded">
            <!-- <p>{{marvel_hero.url}}</p> -->
            <a class="display-5 fw-bolder text-center" :href="`${marvel_hero.url}`" target="_blank">{{hero.name}} Comics Available Now at Marvel.com</a>
            <div v-html="hero.description"></div>
            
            
            
            

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.image-fita {
  /* background-repeat: no-repeat; */

  /* width: 100%;
  background-size: cover;
  min-height: 700px; */
  background-position: center;
  background-color: black;
  min-height: 80vh;
  /* border: 1px solid pink; */
  color: white;
}

.home {
  background-color: black;
}
</style>
