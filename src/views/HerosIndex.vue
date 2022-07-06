<script>
  import axios from "axios";

  export default {
    data: function () {
      return {
        heros: []
      };
    },
    created: function () {
      axios
        .get("/heroes.json")
        .then((response) => {
          console.log("indexing heroes", response.data);
          this.heros = response.data;
        })
    },
    methods: {
      createMyHero: function(hero) {
        axios
          .post("/my_heroes.json", {hero_id: hero.id})
          .then((response) => {
            console.log("Adding hero to roster", response);
            this.$router.push("/my_heroes");
          })
          .catch((error) => {
            console.log("my_heros create error", error.response);
          });
      }
    },
  };
</script>

<template>
  <div class="home">
    <h1>Heroes Index</h1>
    <div v-for="hero in heros" v-bind:key="hero.id">
      <div>
        <img v-bind:src="hero.cover_url" alt="">
        <img v-bind:src="hero.mpq_art_url" alt="">
        <h1>{{hero.name}} - {{hero.subname}}</h1>
        <div class="Game Description">
          <p>{{hero.game_description}}</p>
          <h2>{{hero.stars}} Star</h2>
        </div>
        <div>
          <div class="Base Powers">
            <div class="First Base Power">
              <h3 class="Power Title">{{hero.first_power_name}}: {{hero.first_power_color}} - {{hero.first_power_cost}}</h3>
              <p class="Power Description">{{hero.first_power_description}}</p>
            </div>
            <div class="First Base Power Alt">
              <h3 class="Power Title">{{hero.first_power_name_alt}}: {{hero.first_power_color_alt}} - {{hero.first_power_cost_alt}}</h3>
              <p class="Power Description">{{hero.first_power_description_alt}}</p>
            </div>
            <div class="Second Base Power">
              <h3 class="Power Title">{{hero.second_power_name}}: {{hero.second_power_color}} - {{hero.second_power_cost}}</h3>
              <p class="Power Description">{{hero.second_power_description}}</p>
            </div>
            <div class="Second Base Power Alt">
              <h3 class="Power Title">{{hero.second_power_name_alt}}: {{hero.second_power_color_alt}} - {{hero.second_power_cost_alt}}</h3>
              <p class="Power Description">{{hero.second_power_description_alt}}</p>
            </div>
            <div class="Third Base Power">
              <h3 class="Power Title">{{hero.third_power_name}}: {{hero.third_power_color}} - {{hero.third_power_cost}}</h3>
              <p class="Power Description">{{hero.third_power_description}}</p>
            </div>
            <div class="Third Base Power Alt">
              <h3 class="Power Title">{{hero.third_power_name_alt}}: {{hero.third_power_color_alt}} - {{hero.third_power_cost_alt}}</h3>
              <p class="Power Description">{{hero.third_power_description_alt}}</p>
            </div>
          </div>
        </div>
        <button v-on:click="createMyHero(hero)">Add to Roster</button>
        <a v-bind:href="`/heroes/${hero.id}.json`">Click for More</a>
      </div>
    </div>
  </div>
</template>

<style></style>