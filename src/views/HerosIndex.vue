<script>
import axios from "axios";

export default {
  data: function () {
    return {
      heros: [],
    };
  },
  created: function () {
    axios.get("/heroes.json").then((response) => {
      console.log("indexing heroes", response.data);
      this.heros = response.data;
    });
  },
  methods: {
    createMyHero: function (hero) {
      axios
        .post("/my_heroes.json", { hero_id: hero.id })
        .then((response) => {
          console.log("Adding hero to roster", response);
          this.$router.push("/my_heroes");
        })
        .catch((error) => {
          console.log("my_heros create error", error.response);
        });
    },
  },
};
</script>

<template>
  <!-- <section class="py-5"> -->
    <div class="image-fix" :style="{ 'background-image': `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.6)), url(https://res.cloudinary.com/dvhdgjued/image/upload/v1657698797/capstone_images/main_image_star-forming_region_carina_nircam_final-5mb_xbth35.jpg)`}">
      <div class="row gx-5 justify-content-center">
        <div class="text-center">
          <h2 class="fw-bolder"></h2>
            <div class="row row-cols-1 row-cols-md-3 g-4">
              <div v-for="hero in heros" v-bind:key="hero.id">
                <div class="col">
                  <div class="card bg-info">
                    <div @mouseover="hero.hover = !hero.hover" @mouseleave="hero.hover = !hero.hover">
                      <img v-if="hero.hover" class="card-img-top" :src="`${hero.mpq_art_url}`" alt="" />
                      <img v-else class="card-img-top" :src="`${hero.cover_url}`" alt="" />
                    </div>
                    <div class="card-body p-4">
                      <h4 class="card-title mb-3">{{ hero.name }} </h4>
                      <h5>{{hero.subname}}</h5>
                      <h6>{{ hero.stars }} Stars</h6>

                    </div>
                    <div class="card-footer p-4 pt-0 border-top-0">
                      <div class="d-flex align-items-end justify-content-between">             
                        <button class="btn btn-primary" v-on:click="createMyHero(hero)">Add to Roster</button>                      
                        <button type="button" class="btn btn-primary" data-bs-toggle="modal" :data-bs-target="`#hero${hero.id}`">Powers</button>           
                      </div>
                    </div>              
      
                <!-- MODAL ############################ -->
      
                <div
                  class="modal fade"
                  :id="`hero${hero.id}`"
                  tabindex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div class="modal-dialog modal-dialog-scrollable">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">{{ hero.name }} - {{ hero.subname }}</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div class="modal-body">
                        <div class="row g-0 gy-0">
                          <div class="col-md-3">
                            <div class="modalBorders">{{ hero.first_power_color }}: {{ hero.first_power_cost }}</div>
                          </div>
      
                          <div class="col-md-9">
                            <div class="modalBorders">{{ hero.first_power_name }}: {{ hero.first_power_description }}</div>
                          </div>
                        </div>
                        <div class="row g-0 gy-0">
                          <div class="col-3">
                            <div class="modalBorders">{{ hero.second_power_color }}: {{ hero.second_power_cost }}</div>
                          </div>
      
                          <div class="col-9">
                            <div class="modalBorders">{{ hero.second_power_name }}: {{ hero.second_power_description }}</div>
                          </div>
                        </div>
      
                        <div class="row g-0 gy-0">
                          <div class="col-3">
                            <div class="modalBorders">{{ hero.third_power_color }}: {{ hero.third_power_cost }}</div>
                          </div>
      
                          <div class="col-9">
                            <div class="modalBorders">{{ hero.third_power_name }}: {{ hero.third_power_description }}</div>
                          </div>
                        </div>
                      </div>
                      <div class="modal-footer">
                        <a v-bind:href="`/heroes/${hero.id}.json`">Hi-Res Photos</a>
                        <div>
                          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              </div>
          
          </div>
        </div>
      </div>
      </div>
    </div>
  <!-- </section> -->
    
</template>

<style>



.image-fix {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-color: black;
  color: black;
}

.card-img-top {
  max-width: 300px;
}

.card {
  max-width: 300px;
}

.modalBorders {
  border: black thin solid;
  /* border-width: auto; */
  padding: 2px;
  padding-left: 4px;
}

.card .bg-info{
  max-height: 400px;
}


.row.row-cols-1.row-cols-md-3.g-4 {
  margin: auto;
  padding: 50px;
}

.row.gx-5.justify-content-center {
  margin-top: 0;
}


</style>
