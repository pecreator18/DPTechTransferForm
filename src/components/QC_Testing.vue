<template>
  <div>
      <v-container style = "background-color: RGBA(0,0,0,0)">
        
          <v-tabs>
                        <v-tab @click = "change_form('Sampling Plan')">Sampling Plan</v-tab>
                        <v-tab @click = "change_form('Stability Testing')">Stability Testing</v-tab>
                        <v-tab @click = "change_form('Freeze Thaw')">Freeze/Thaw Stability</v-tab>
          </v-tabs>
          
          <br>

          <v-scale-transition>
            <Sampling_Plan v-if = "sampling_plan"/>
          </v-scale-transition>

          <v-scale-transition>
            <Stability_Testing v-if = "stability_testing"/>
          </v-scale-transition>

          <v-scale-transition>
            <Freeze_Thaw v-if = "freeze_thaw"/>
          </v-scale-transition>

      </v-container>
  </div>
</template>

<script>

import Sampling_Plan from "./DP_Forms/Sampling_Plan.vue"
import Stability_Testing from "./DP_Forms/Stability_Testing.vue"
import Freeze_Thaw from "./DP_Forms/Freeze_Thaw.vue"

export default {
    name: "Program and Client Info",
    components: {
       Sampling_Plan,
       Stability_Testing,
       Freeze_Thaw
  },

  data(){
			return {
                sampling_plan: true,//Default: Sampling Plan form will be displayed on opening. 
                stability_testing:false,
                freeze_thaw: false,
                displayed: "Sampling Plan"
            }
  
  },
  methods: {
      //Method to change data viewed
      change_form(form){

        //transition out current data form
        switch(this.displayed){
            case "Sampling Plan":
              this.sampling_plan = false;
              break
            case "Stability Testing":
              this.stability_testing = false;
              break
            case "Freeze Thaw":
              this.freeze_thaw = false;
              break
            
        }

       //transition in select form from tab selection. 
      switch(form){
            case "Sampling Plan":
              this.sampling_plan = true;
              break
            case "Stability Testing":
              this.stability_testing = true;
              break
            case "Freeze Thaw":
              this.freeze_thaw = true;
              break
            
        }

        this.displayed = form;


      }
  }

}
</script>

<style>

</style>