<script>
  import axios from "axios";

  export default {
    data: function () {
      return {
        my_heros: [],

      };
    },
    created: function () {
      axios
        .get("/my_heroes.json")
        .then((response) => {
          console.log("gathering my heroes", response);
          this.my_heros = response.data;
        })
    },
    methods: {},
  };
</script>

<template>
  <div class="myHeros">
    <h1>My Heroes</h1>
    <div v-for="my_hero in my_heros" v-bind:key="my_hero.id">
      <div>
        <h2>{{my_hero.first_power_count}}</h2>
        <h2>{{my_hero.second_power_count}}</h2>
        <h2>{{my_hero.third_power_count}}</h2>
      </div>
      <div class="my_heroesInfo">
        <img v-bind:src="my_hero.hero.cover_url" alt="">
        <img v-bind:src="my_hero.hero.mpq_art_url" alt="">
        <h1>{{my_hero.hero.name}} - {{my_hero.hero.subname}}</h1>
        <div class="Game Description">
          <p>{{my_hero.hero.game_description}}</p>
        </div>
        <div>
          <h2>{{my_hero.hero.stars}} Star</h2>
          <div class="Base Powers">
            <div class="First Base Power">
              <h3 class="Power Title">{{my_hero.hero.first_power_name}}: {{my_hero.hero.first_power_color}} - {{my_hero.hero.first_power_cost}}</h3>
              <p class="Power Description">{{my_hero.hero.first_power_description}}</p>
            </div>
            <div class="First Base Power Alt">
              <h3 class="Power Title">{{my_hero.hero.first_power_name_alt}}: {{my_hero.hero.first_power_color_alt}} - {{my_hero.hero.first_power_cost_alt}}</h3>
              <p class="Power Description">{{my_hero.hero.first_power_description_alt}}</p>
            </div>
            <div class="Second Base Power">
              <h3 class="Power Title">{{my_hero.hero.second_power_name}}: {{my_hero.hero.second_power_color}} - {{my_hero.hero.second_power_cost}}</h3>
              <p class="Power Description">{{my_hero.hero.second_power_description}}</p>
            </div>
            <div class="Second Base Power Alt">
              <h3 class="Power Title">{{my_hero.hero.second_power_name_alt}}: {{my_hero.hero.second_power_color_alt}} - {{my_hero.hero.second_power_cost_alt}}</h3>
              <p class="Power Description">{{my_hero.hero.second_power_description_alt}}</p>
            </div>
            <div class="Third Base Power">
              <h3 class="Power Title">{{my_hero.hero.third_power_name}}: {{my_hero.hero.third_power_color}} - {{my_hero.hero.third_power_cost}}</h3>
              <p class="Power Description">{{my_hero.hero.third_power_description}}</p>
            </div>
            <div class="Third Base Power Alt">
              <h3 class="Power Title">{{my_hero.hero.third_power_name_alt}}: {{my_hero.hero.third_power_color_alt}} - {{my_hero.hero.third_power_cost_alt}}</h3>
              <p class="Power Description">{{my_hero.hero.third_power_description_alt}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>