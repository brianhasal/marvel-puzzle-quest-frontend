<script>
import axios from 'axios';

  export default {
    data: function () {
      return {
        hero: {},
      };
    },
    created: function () {
      axios
        .get("/heroes/" + this.$route.params.id)
        .then((response) => {
          console.log("retrieving hero", response);
          this.hero = response.data;
        })
    },
    methods: {
      destroyHero: function(hero) {
        axios
          .delete("/heroes/" + hero.id)
          .then((response) => {
            console.log("destroying hero", response);
            this.$router.push("/heroes");
          })
          
      }
    },
  };
</script>

<template>
  <div class="home container">
    <h1 class="text-center">Hero Show</h1>
      <div>
        <div class="image_container">
          <img class="show_images" v-bind:src="hero.cover_url" alt="">
          <img class="show_images" v-bind:src="hero.mpq_art_url" alt="">
        </div>
        <h1>{{hero.name}} - {{hero.subname}}</h1>
        <div class="Game Description">
          <p>{{hero.game_description}}</p>
        </div>
        <div>
          <h2>{{hero.stars}} Star</h2>
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
          <div>
            <button v-on:click="destroyHero(hero)">Delete Hero</button>
            <br>
            <a v-bind:href="`/heroes/${hero.id}/edit`">Edit Hero</a>
            <br>
            <a href="/heroes">All Heroes</a>
          </div>
        </div>
      </div>
  </div>
</template>

<style>
.show_images {
  max-height: 740px;
  align-self: auto;
}

.image_container {
  margin: auto;
  display: block;
}
</style>