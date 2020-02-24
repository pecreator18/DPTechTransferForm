<template>
    <div>
      <!--Error Message if the user doesn't select a service-->
      <v-alert v-if = "error" type="error">
        Please Select A Service.
      </v-alert>
      <!--Navigation bar to navigate through the questions-->
        <v-app-bar flat class = "red text-center">
            <v-btn v-if = "step_number > 0" v-on:click="back()"> Back</v-btn>
            <v-spacer class="white--text display-1">Client Information</v-spacer>
            <v-btn v-if = "step_number < 1" v-on:click="next()"> Next</v-btn>
            <v-btn v-else v-on:click="info_complete()"> Finish Client Info</v-btn>
        </v-app-bar>
          <br>
        <!--Container for all basic client info components-->
        <v-container>
                <Client_Info v-if="step_number == 0"/>
                <Molecule_Info v-if="step_number == 1"/>
        </v-container>
    </div>
</template>
<script>
import Client_Info from './Client_Team_Info.vue'
import Molecule_Info from './Molecule_Info.vue'
import { mapGetters } from 'vuex'

export default {
    name: "Basic_Info",
    computed: mapGetters(['getServices']),
    components: {
    Client_Info,
    Molecule_Info
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
            if(this.step_number < 2){
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
            this.getServices.service = "Drug Product Manufacturing"
            this.$emit('client_info_complete');
            /*Use this to create a navigation to multiple service offerings.  
            if(this.getServices.service === ""){
                this.error = true;
            }else{
                    this.error = false;
                    this.$emit('client_info_complete');
            }*/
            
    },
    
  },

}
</script>

<style>

</style>