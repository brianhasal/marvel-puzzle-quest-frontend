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
    <div class="row row-cols-1 row-cols-md-3 g-4">
      <div v-for="hero in heros" v-bind:key="hero.id">
        <div class="col">
          <div class="card" >
            <div @mouseover="hero.hover = !hero.hover" @mouseleave="hero.hover = !hero.hover">
              <img v-if="hero.hover" class="card-img-top" :src="`${hero.mpq_art_url}`" alt="">
              <img v-else class="card-img-top" :src="`${hero.cover_url}`" alt="">
            </div>

            <!-- ############################ -->

            <div class="modal fade" :id="`hero${hero.id}`" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog modal-dialog-scrollable">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">{{hero.name}} - {{hero.subname}}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    <div class="row">
                      <span class="border border-2">

                        <div class="col-3">{{hero.first_power_color}}: {{hero.first_power_cost}}</div>
                      </span>
                      <span class="border border-2">

                        <div class="col-9">{{hero.first_power_name}}: {{hero.first_power_description}}</div>
                      </span>
                    </div>
                    <div class="row">
                      <div class="col-3">{{hero.second_power_color}}: {{hero.second_power_cost}}</div>
                      <div class="col-9">{{hero.second_power_name}}: {{hero.second_power_description}}</div>
                    </div>
                    <div class="row">
                      <div class="col-3">{{hero.third_power_color}}: {{hero.third_power_cost}}</div>
                      <div class="col-9">{{hero.third_power_name}}: {{hero.third_power_description}}</div>
                    </div>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  </div>
                </div>
              </div>
            </div>

              <!-- ############################ -->
              
            <div class="card-body">
              <h5 class="card-title">{{hero.name}} <h6>{{hero.stars}} Stars</h6></h5> 
              <!-- if subname exists, add subname here -->

              <button>Add to Roster</button>
              <p>{{hero.modal}}</p>
              <button type="button" class="btn btn-primary" data-bs-toggle="modal" :data-bs-target="`#hero${hero.id}`">Powers</button>



              <!-- <button v-on:click="hero.modal = !hero.modal">Stats</button> -->
              <br>
              <a v-bind:href="`/heroes/${hero.id}.json`">Click for More</a>
              <!-- <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> -->
            </div>
          </div>
        </div>
        <!-- <div class="col">
          <div class="card">
            <img src="..." class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="..." class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="..." class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
          </div>
        </div> -->
      </div>
      <!-- <div>
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
      </div> -->
    </div>
  </div>
</template>

<style>
  .card-img-top {
    max-width: 200px;
  }

  .card {
    max-width: 202px;
    
  }
</style>