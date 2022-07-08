<script>
import axios from "axios"

  export default {
    data: function () {
      return {
        hero: {},
        searchCharacterParams: {
          input_name: "",
        }
      };
    },
    created: function () {},
    methods: {
      showComicvineHero: function() {
        axios
          .get("/comicvine/characters_by_name.json", {params: this.searchCharacterParams})
          .then((response) => {
            console.log("Retrieved Hero from Comicvine", response.data);
            this.hero = response.data;
          })
      }
    },
  };
</script>

<template>
  <div class="home">
    Character Name:
    <input v-model="searchCharacterParams.input_name" type="text">
    <button v-on:click="showComicvineHero()">Submit</button>
    <div>
        <h1>{{hero.aliases}}</h1>
    </div>

  </div>
</template>

<style></style>