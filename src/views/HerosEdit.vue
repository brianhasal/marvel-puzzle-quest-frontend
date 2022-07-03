<script>
  import axios from "axios";

  export default {
    data: function () {
      return {
        hero: {},
        editHeroParams: {}
      };
    },
    created: function () {
      axios
        .get("/heroes/" + this.$route.params.id)
        .then((response) => {
          console.log("Gathering Hero", response);
          this.hero = response.data;
          this.editHeroParams = this.hero;
        })
    },
    methods: {
      updateHero: function(hero) {
        axios
          .patch("/heroes/" + hero.id, this.editHeroParams)
          .then((response) => {
            console.log("updating hero", response);
            this.$router.push(`/heroes/${hero.id}`);
          })
      }
    },
  };
</script>

<template>
  <div class="home">
    <h1>Update Hero Information</h1>
    <div class="Hero Params">
      <div>
        <div class="Edit Hero Main">
          <div>
            Hero Name: 
            <input v-model="editHeroParams.name" type="text">
          </div>
          <div>
            Subname: 
            <input v-model="editHeroParams.subname" type="text">
          </div>        
          <div>
            Stars: 
            <input v-model="editHeroParams.stars" type="text">
          </div>        
          <div>
            Marvel Character ID: 
            <input v-model="editHeroParams.character_id" type="text">
          </div>        
          <div>
            Marvel Cover Art ID: 
            <input v-model="editHeroParams.cover_art_id" type="text">
          </div>        
          <div>
            MPQ Description:  
            <input v-model="editHeroParams.game_description" type="text">
          </div>
        </div>

        <div class="Edit Image Inputs">
          <div>
            Cover Art URL:  
            <input v-model="editHeroParams.cover_url" type="text">
          </div>        
          <div>
            MPQ Art URL: 
            <input v-model="editHeroParams.mpq_art_url" type="text">
          </div>  
        </div>

        <div class="Edit First Powers">
          <div>
            First Power Name:  
            <input v-model="editHeroParams.first_power_name" type="text">
          </div>        
          <div>
            First Power Color: 
            <input v-model="editHeroParams.first_power_color" type="text">
          </div>   
          <div>
            First Power Cost: 
            <input v-model="editHeroParams.first_power_cost" type="text">
          </div>    
          <div>
            First Power Description: 
            <input v-model="editHeroParams.first_power_description" type="text">
          </div>   
        </div>  
        <div class="Edit Alt First Powers">
          <div>
            Alternate First Power Name:  
            <input v-model="editHeroParams.first_power_name_alt" type="text">
          </div>        
          <div>
            Alternate First Power Color: 
            <input v-model="editHeroParams.first_power_color_alt" type="text">
          </div>   
          <div>
            Alternate First Power Cost: 
            <input v-model="editHeroParams.first_power_cost_alt" type="text">
          </div>    
          <div>
            Alternate First Power Description: 
            <input v-model="editHeroParams.first_power_description_alt" type="text">
          </div>   
        </div>  

        <div class="Edit Second Powers">
          <div>
            Second Power Name:  
            <input v-model="editHeroParams.second_power_name" type="text">
          </div>        
          <div>
            Second Power Color: 
            <input v-model="editHeroParams.second_power_color" type="text">
          </div>   
          <div>
            Second Power Cost: 
            <input v-model="editHeroParams.second_power_cost" type="text">
          </div>    
          <div>
            Second Power Description: 
            <input v-model="editHeroParams.second_power_description" type="text">
          </div>   
        </div>  
        <div class="Edit Alt Second Powers">
          <div>
            Alternate Second Power Name:  
            <input v-model="editHeroParams.second_power_name_alt" type="text">
          </div>        
          <div>
            Alternate Second Power Color: 
            <input v-model="editHeroParams.second_power_color_alt" type="text">
          </div>   
          <div>
            Alternate Second Power Cost: 
            <input v-model="editHeroParams.second_power_cost_alt" type="text">
          </div>    
          <div>
            Alternate Second Power Description: 
            <input v-model="editHeroParams.second_power_description_alt" type="text">
          </div>   
        </div>  


        <div class="Edit Third Powers">
          <div>
            Third Power Name:  
            <input v-model="editHeroParams.third_power_name" type="text">
          </div>        
          <div>
            Third Power Color: 
            <input v-model="editHeroParams.third_power_color" type="text">
          </div>   
          <div>
            Third Power Cost: 
            <input v-model="editHeroParams.third_power_cost" type="text">
          </div>    
          <div>
            Third Power Description: 
            <input v-model="editHeroParams.third_power_description" type="text">
          </div>   
        </div>  
        <div class="Edit Alt Third Powers">
          <div>
            Alternate Third Power Name:  
            <input v-model="editHeroParams.third_power_name_alt" type="text">
          </div>        
          <div>
            Alternate Third Power Color: 
            <input v-model="editHeroParams.third_power_color_alt" type="text">
          </div>   
          <div>
            Alternate Third Power Cost: 
            <input v-model="editHeroParams.third_power_cost_alt" type="text">
          </div>    
          <div>
            Alternate Third Power Description: 
            <input v-model="editHeroParams.third_power_description_alt" type="text">
          </div>   
        </div>  

        <button v-on:click="updateHero(hero)">Update Hero</button>




      </div>
    </div>
  </div>
</template>

<style></style>