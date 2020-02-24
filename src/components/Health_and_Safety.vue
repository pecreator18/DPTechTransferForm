<template>

  <v-container style = "background-color: RGBA(0,0,0,0)">

          <v-tabs>
                        <v-tab @click = "change_form('BDS Safety')">BDS Safety</v-tab>
          </v-tabs>
          
          <br>

          <v-fade-transition>
            <api_safety v-if = "api_safety"/>
          </v-fade-transition>
          
  </v-container>

</template>

<script>

import api_safety from './DP_Forms/API_BDS_Safety_Info.vue'

export default {
    components:{
        api_safety
    },

    data(){
			return {
                api_safety: true,//Default: Formulation form will be displayed on opening. 
                displayed: "BDS Safety"
            }
  
    },

    methods: {
      //Method to change data viewed
      change_form(form){

        //transition out current data form
        switch(this.displayed){
            case "Company Information":
              this.api_safety = false;
              break
            
        }

       //transition in select form from tab selection. 
      switch(form){
            case "Company Information":
              this.api_safety = false;
              break
        }

        this.displayed = form;


      }
  }

}
</script>

<style>

</style>