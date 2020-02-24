<template>
  <div>
      <h2 >Terminal Sterilization</h2>

    <v-select
    lebel = "Is Terminal Sterilization Required?"
    :items = yes_no
    v-model = "getTermInfo.required"
    >
    </v-select>
    <v-container v-if = "getTermInfo.required == 'Yes'">
      <v-row>
          <v-col>
          <v-select
          label = "Product is expected to be sterile prior to Terminal Sterilization.(i.e. product is aseptically filled)"
          :items = yes_no
          v-model = "getTermInfo.aseptically_filled"

          ></v-select>
          </v-col>
      </v-row>
      <v-row>
          <v-col>
          <v-select
          label = "Feasibility Material is Available for Study"
          :items = yes_no
          v-model = "getTermInfo.feasibility_material_available"

          ></v-select>
          </v-col>
          <v-col>
              <p v-if = "getTermInfo.feasibility_material_available == 'Yes'"> Date Material Will Be Available</p>
              <v-date-picker
              v-model = "getTermInfo.date_material_available"
              v-if = "getTermInfo.feasibility_material_available == 'Yes'">
              </v-date-picker>
          </v-col>
      </v-row>
      <v-row>
          <v-col>
          <v-text-field
          label = "Number of Samples Required Per Text Exposure"
          v-model = "getTermInfo.text_exposure"

          ></v-text-field>
          </v-col>
      </v-row>
      <v-row>
          <v-col>
          <v-text-field
          label = "Describe any previous accelerated stability outcomes"
          v-model = "getTermInfo.stability_outcomes"

          ></v-text-field>
          </v-col>
      </v-row>
      <v-row>
          <v-col>
          <v-text-field
          label = "Describe any previous heat exposure outcomes"
          v-model = "getTermInfo.exposure_outcomes" 

          ></v-text-field>
          </v-col>
      </v-row>
      <v-row>
          <v-col>
          <v-text-field
          label = "Target Sterilzation Time"
          v-model = "getTermInfo.target_sterilization_time" 

          ></v-text-field>
          </v-col>
      </v-row>
      <v-row>
          <v-col>
          <v-text-field
          label = "Target Sterilization Temperature"
          v-model = "getTermInfo.target_sterilization_temperature"

          ></v-text-field>
          </v-col>
      </v-row>

      </v-container>
      <p>Note: All Phase III Products Undergoing Terminal Sterilization Require Cycle Development and Validation</p>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'


export default {

    name: "Terminal_Sterilization",
    computed: mapGetters(['getTermInfo']),
    
    components: {
    
  },
  data(){
			return {
                //v-select options
                yes_no: [ 'Yes', 'No'],
                

                
                
      }
  
  },
  methods: {}

}
</script>

<style>

</style>