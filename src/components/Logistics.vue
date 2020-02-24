<template>
  <v-container style = "background-color: RGBA(0,0,0,0)">
      <v-tabs>
                <v-tab @click = "change_form('Incoming BDS Information')">Incoming BDS Information</v-tab>
                <!--v-tab-- @click = "change_form('Final Product Shipping Information')">Final Product Shipping Information</!--v-tab-->
      </v-tabs>
    <br>
    <v-fade-transition>
        <csm_info v-if = "csm_info"/>
    </v-fade-transition>

    <v-fade-transition>
        <h3 v-if = "shipping_info">Under Development </h3>
    </v-fade-transition>

  </v-container>
</template>

<script>

import csm_info from './DP_Forms/CSM_Info.vue'

export default {
    components:{
        csm_info
    },
    
  data(){
			return {
                csm_info: true,//Default: Formulation form will be displayed on opening.
                shipping_info: false, 
                displayed: "Incoming BDS Information"
            }
  
  },
  methods: {
      //Method to change data viewed
      change_form(form){

        //transition out current data form
        switch(this.displayed){
            case "Incoming BDS Information":
              this.company_info = false;
              break
            case "Final Product Shipping Information":
              this.shipping_info = false;
              break
        }

       //transition in select form from tab selection. 
      switch(form){
            case "Incoming BDS Information":
              this.company_info = true;
              break
            case "Final Product Shipping Information":
              this.shipping_info = true;
              break
        }

        this.displayed = form;


      }
  }

}
</script>

<style>

</style>