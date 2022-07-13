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
        urls: [],
      },
    };
  },
  created: function () {
    if (this.$route.query.q) {
      this.searchCharacterParams.input_name = this.$route.query.q;
      this.showComicvineHero();
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
      axios.get("/comicvine/character_by_id.json", { character_id: 1009610 }).then((response) => {
        console.log("Retreived Hero From Marvel", response.data);
        this.marvel_hero = response.data;
      });
    },
  },
};
</script>

<template>
  <div class="home">
    <div class="backgrounder" :style="{ 'background-image': `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${hero.image.super_url})` }">
      <div class="container">
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
        <div>
          <div>
            <h1>{{ hero.name }}</h1>
            <h2>{{ hero.real_name }}</h2>
            <h2>{{ hero.aliases }}</h2>
            <h3>{{ hero.deck }}</h3>
            <img v-bind:src="`${marvel_hero.thumbnail.path}/detail.jpg`" alt="" />
            <p>{{ marvel_hero.thumbnail.path }}</p>
            <br />
            <p>{{ hero.first_appeared_in_issue.name }} # {{ hero.first_appeared_in_issue.issue_number }}</p>
            <a v-bind:href="`${hero.api_detail_url} + {}`">Hero Page Comicvine - No APIKEY</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.backgrounder {
  background-repeat: no-repeat;
  width: 100%;
  background-size: cover;
  background-position: center;
  background-color: black;
  min-height: 100vh;
  /* border: 1px solid pink; */
  color: white;
}
</style>
