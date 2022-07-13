<script>
  import axios from "axios";
  import StarRating from 'vue-star-rating'

  export default {
    data: function () {
      return {
        my_heros: [],
        rating: 0,
        editMyHeroParams: {}
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
    methods: {
      editMyHero: function(my_hero) {
        axios
          .patch("/my_heroes/" + my_hero.id + ".json", my_hero)
          .then((response) => {
            console.log("Updated Rating", response.data);

          })
      },
      destroyMyHero: function(my_hero) {
        axios
          .delete("/my_heroes/" + my_hero.id)
          .then((response) => {
            console.log("Destroyed My Hero", response);
            this.$router.push("/my_heroes")
          })
      },
      setRating: function(rating, my_hero) {
        console.log(rating, my_hero)
        this.editMyHero(my_hero)
        this.rating = rating;
      }
    },
    components: {
      StarRating
    }
  };
</script>



<template>
  <div class="myHeros">
    <!-- <h1>My Heroes</h1> -->
    <div v-for="my_hero in my_heros" v-bind:key="my_hero.id">
      <div>
        <!-- <div class="row">
          <span class="border border-dark">
            <div class="col-md-3"><img :href="`${my_hero.cover_url}`"></div>
          </span>
          <span class="border border-dark">
            <div class="col-md-6">.col-md-6</div>
          </span>
          <span class="border border-dark">
            <div class="col-md-3">.col-md-3</div>
          </span>
        </div> -->

        <div>
          <div class="row">
            <div class="col-md-2"><img v-bind:src="my_hero.hero.cover_url" class="img-fluid" alt=""></div>
            
            
            
            <div class="col-md-8">
              <div class="row"><h2>{{my_hero.hero.name}} - {{my_hero.hero.subname}}</h2></div>          
              <h5>{{my_hero.hero.game_description}}</h5>

              <div class="power-row">
                <div class="row">
                  <div class="col-md2">
                    <div class="row"><star-rating v-model:rating=my_hero.first_power_count @update:rating ="setRating(rating,my_hero)" v-bind:star-size="17"></star-rating></div>
                    <div class="row">{{my_hero.hero.first_power_color}} {{my_hero.hero.first_power_cost}}</div>
                  </div>
                  <div class="col-md2">
                    <div class="row">{{my_hero.hero.first_power_name}}</div>
                  </div>
                  <div class="col-md4">
                    <div class="row">{{my_hero.hero.first_power_description}}</div>
                  </div>
                </div>
              </div>

              <div class="power-row">
                <div class="row">
                  <div class="col-md2">
                    <div class="row"><star-rating v-model:rating=my_hero.second_power_count @update:rating ="setRating(rating,my_hero)" v-bind:star-size="17"></star-rating></div>
                    <div class="row">{{my_hero.hero.second_power_color}} {{my_hero.hero.second_power_cost}}</div>
                  </div>
                  <div class="col-md2">
                    <div class="row">{{my_hero.hero.second_power_name}}</div>
                  </div>
                  <div class="col-md4">
                    <div class="row">{{my_hero.hero.second_power_description}}</div>
                  </div>
                </div>
              </div>

              <div class="power-row">
                <div class="row">
                  <div class="col-md2">
                    <div class="row"><star-rating v-model:rating=my_hero.third_power_count @update:rating ="setRating(rating,my_hero)" v-bind:star-size="17"></star-rating></div>
                    <div class="row">{{my_hero.hero.third_power_color}} {{my_hero.hero.third_power_cost}}</div>
                  </div>
                  <div class="col-md2">
                    <div class="row">{{my_hero.hero.third_power_name}}</div>
                  </div>
                  <div class="col-md4">
                    <div class="row">{{my_hero.hero.third_power_description}}</div>
                  </div>
                </div>
              </div>

            </div>





            <div class="col-md-2"><img v-bind:src="my_hero.hero.mpq_art_url" class="img-fluid" alt=""></div>
          </div>
          
          <div class="links">
            <button v-on:click="destroyMyHero(my_hero)">Destroy Hero</button>
            <a :href="`/comicvine/?q=${my_hero.hero.name}`">Hero Achievements</a>
          </div>
          <br>
          <br>
        </div>





      </div>
      <!-- <div class="my_heroesInfo">
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

          <button v-on:click="destroyMyHero(my_hero)">Destroy Hero</button>
        </div>
      </div> -->
    </div>
  </div>
</template>

<style>
.myHeros {
  margin-top: 0;
}

.links {
  text-align: center;
}
</style>