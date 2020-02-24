<template>
    <div>
      <!--Error Message if the user doesn't select a service-->
      <v-alert v-if = "error" type="error">
        Please Select A Service.
      </v-alert>
      <!--Navigation bar to navigate through the questions-->
        <v-app-bar flat class = "red text-center">
            <v-btn v-if= "step_number >0" v-on:click="back()"> Back</v-btn>
            <v-spacer class="white--text display-1">Drug Product Manufacturing Information</v-spacer>
            <v-btn v-if = "step_number < 20" v-on:click="next()"> Next</v-btn>
            <v-btn v-else v-on:click="info_complete()"> Finish Drug Product Info</v-btn>
        </v-app-bar>
          <br>
        <!--Container for conditional rendering by step number-->
        <v-container>
            <CSM_Safety v-if= "step_number == 0" />
            <CSM_Info v-if= "step_number == 1" />
            <Formulation_Info v-if= "step_number == 2" />
            <Filtration_Info v-if= "step_number == 3" />
            <Lyo_Info v-if= "step_number == 4" />
            <Terminal_Info v-if= "step_number == 5" />
            <Inspection_Info v-if= "step_number == 6" />
            <Pack_Label_Info v-if= "step_number == 7" />
            <Production_Components v-if= "step_number == 8" /> 
            <Required_Excipients v-if= "step_number == 9" />
            <Auto_Label_Pack v-if= "step_number == 10" />
            <Commercial_Pack_Components v-if= "step_number == 11" />
            <Commercial_Serialization v-if= "step_number == 12" />
            <Qualification_Validation v-if= "step_number == 13" />
            <CPPs v-if= "step_number == 14" />
            <Sampling_Plan v-if= "step_number == 15" />
            <Stability_Testing v-if= "step_number == 16" />


        </v-container>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
import CSM_Safety from "./API_BDS_Safety_Info"
import CSM_Info from "./CSM_Info"
import Formulation_Info from "./Formulation_Info"
import Filtration_Info from "./Filtration"
import Lyo_Info from "./Lyophilization"
import Terminal_Info from "./Terminal_Sterilization"
import Inspection_Info from "./Inspection"
import Pack_Label_Info from "./Pack_Label"
import Production_Components from "./Production_Components"
import Required_Excipients from "./Required_Excipients"
import Auto_Label_Pack from "./Automated_Label_Pack"
import Commercial_Pack_Components from "./Commercial_Pack_Components.vue"
import Commercial_Serialization from "./Commercial_Serialization.vue"
import Qualification_Validation from "./Qualification_Validation.vue"
import CPPs from "./CPPs.vue"
import Sampling_Plan from "./Sampling_Plan.vue"
import Stability_Testing from "./Stability_Testing.vue"

export default {
    name: "DP_Info",
    computed: mapGetters(['getServices']),
    components: {
        CSM_Safety,
        CSM_Info,
        Formulation_Info,
        Filtration_Info,
        Lyo_Info,
        Terminal_Info,
        Inspection_Info,
        Pack_Label_Info,
        Production_Components,
        Required_Excipients,
        Auto_Label_Pack,
        Commercial_Pack_Components,
        Commercial_Serialization,
        Qualification_Validation,
        CPPs,
        Sampling_Plan,
        Stability_Testing
  },
  data(){
			return {
        error:false,
        step_number: 0
      }
  
  },
  methods: {
  //Function to navigate forward through basic info questions
    next: function(){
            if(this.step_number < 20){
                this.step_number += 1
            }
        },
    //Function to navigate back through basic info questions
		back: function(){
            if(this.step_number > 0){
                this.step_number -= 1
            }
        },

    //Function to emit to parent component(App.vue) that Client info is complete
    info_complete: function(){
            if(this.getServices.service === ""){

                this.error = true;
            }else{
                    this.error = false;
                    this.$emit('client_info_complete');
            }
            
    },
    
  },

}
</script>

<style>

</style>