<script>
import axios from 'axios';

  export default {
    data: function () {
      return {
        newHeroParams: {}
      };
    },
    created: function () {},
    methods: {
      createHero: function () {
        axios
          .post("/heroes", this.newHeroParams)
          .then((response) => {
            console.log("creating hero", response);
            this.$router.push("/heroes");
          })
      }
    },
  };
</script>

<template>
  <div class="Hero Create">
    <h1>Heroes Creation Page</h1>
    <div class="Hero Params">
      <div>
        <div class="Create Hero Main">
          <div>
            Hero Name: 
            <input v-model="newHeroParams.name" type="text">
          </div>
          <div>
            Subname: 
            <input v-model="newHeroParams.subname" type="text">
          </div>        
          <div>
            Stars: 
            <input v-model="newHeroParams.stars" type="text">
          </div>        
          <div>
            Marvel Character ID: 
            <input v-model="newHeroParams.character_id" type="text">
          </div>        
          <div>
            Marvel Cover Art ID: 
            <input v-model="newHeroParams.cover_art_id" type="text">
          </div>        
          <div>
            MPQ Description:  
            <input v-model="newHeroParams.game_description" type="text">
          </div>
        </div>

        <div class="Image Inputs">
          <div>
            Cover Art URL:  
            <input v-model="newHeroParams.cover_url" type="text">
          </div>        
          <div>
            MPQ Art URL: 
            <input v-model="newHeroParams.mpq_art_url" type="text">
          </div>  
        </div>

        <div class="Create First Powers">
          <div>
            First Power Name:  
            <input v-model="newHeroParams.first_power_name" type="text">
          </div>        
          <div>
            First Power Color: 
            <input v-model="newHeroParams.first_power_color" type="text">
          </div>   
          <div>
            First Power Cost: 
            <input v-model="newHeroParams.first_power_cost" type="text">
          </div>    
          <div>
            First Power Description: 
            <input v-model="newHeroParams.first_power_description" type="text">
          </div>   
        </div>  
        <div class="Create Alt First Powers">
          <div>
            Alternate First Power Name:  
            <input v-model="newHeroParams.first_power_name_alt" type="text">
          </div>        
          <div>
            Alternate First Power Color: 
            <input v-model="newHeroParams.first_power_color_alt" type="text">
          </div>   
          <div>
            Alternate First Power Cost: 
            <input v-model="newHeroParams.first_power_cost_alt" type="text">
          </div>    
          <div>
            Alternate First Power Description: 
            <input v-model="newHeroParams.first_power_description_alt" type="text">
          </div>   
        </div>  

        <div class="Create Second Powers">
          <div>
            Second Power Name:  
            <input v-model="newHeroParams.second_power_name" type="text">
          </div>        
          <div>
            Second Power Color: 
            <input v-model="newHeroParams.second_power_color" type="text">
          </div>   
          <div>
            Second Power Cost: 
            <input v-model="newHeroParams.second_power_cost" type="text">
          </div>    
          <div>
            Second Power Description: 
            <input v-model="newHeroParams.second_power_description" type="text">
          </div>   
        </div>  
        <div class="Create Alt Second Powers">
          <div>
            Alternate Second Power Name:  
            <input v-model="newHeroParams.second_power_name_alt" type="text">
          </div>        
          <div>
            Alternate Second Power Color: 
            <input v-model="newHeroParams.second_power_color_alt" type="text">
          </div>   
          <div>
            Alternate Second Power Cost: 
            <input v-model="newHeroParams.second_power_cost_alt" type="text">
          </div>    
          <div>
            Alternate Second Power Description: 
            <input v-model="newHeroParams.second_power_description_alt" type="text">
          </div>   
        </div>  


        <div class="Create Third Powers">
          <div>
            Third Power Name:  
            <input v-model="newHeroParams.third_power_name" type="text">
          </div>        
          <div>
            Third Power Color: 
            <input v-model="newHeroParams.third_power_color" type="text">
          </div>   
          <div>
            Third Power Cost: 
            <input v-model="newHeroParams.third_power_cost" type="text">
          </div>    
          <div>
            Third Power Description: 
            <input v-model="newHeroParams.third_power_description" type="text">
          </div>   
        </div>  
        <div class="Create Alt Third Powers">
          <div>
            Alternate Third Power Name:  
            <input v-model="newHeroParams.third_power_name_alt" type="text">
          </div>        
          <div>
            Alternate Third Power Color: 
            <input v-model="newHeroParams.third_power_color_alt" type="text">
          </div>   
          <div>
            Alternate Third Power Cost: 
            <input v-model="newHeroParams.third_power_cost_alt" type="text">
          </div>    
          <div>
            Alternate Third Power Description: 
            <input v-model="newHeroParams.third_power_description_alt" type="text">
          </div>   
        </div>  

        <button v-on:click="createHero()">Create Hero</button>




      </div>
    </div>
  </div>
</template>

<style></style>