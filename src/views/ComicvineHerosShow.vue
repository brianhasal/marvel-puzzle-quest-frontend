<script>
import axios from "axios"

  export default {
    data: function () {
      return {
        hero: {
          first_appeared_in_issue: {
            api_detail_url: "",
            id: 0,
            name: "",
            issue_number: ""
          },
          image: {
            super_url: ""
          }
        },
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
    <div class="backgrounder" :style="{ 'background-image': `url(${hero.image.super_url})` }">
      Character Name:
      <input v-model="searchCharacterParams.input_name" type="text">
      <button v-on:click="showComicvineHero()">Submit</button>
      <div>
        <div>
          <h1>{{hero.aliases}}</h1>
          <h3>{{hero.deck}}</h3>
          <br>
          <p>{{hero.first_appeared_in_issue.name}} # {{hero.first_appeared_in_issue.issue_number}}</p>
          <a v-bind:href="`${hero.api_detail_url} + {}`">Hero Page Comicvine - No APIKEY</a>
        </div>









      </div>
    </div>
  </div>
</template>

<style>

  .backgrounder {
    background-repeat: no-repeat;
    width: 100%;
    /* background-size: contain; */
    background-position: center;
    background-color: black;
  }

</style>


