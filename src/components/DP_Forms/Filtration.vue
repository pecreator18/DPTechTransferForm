<template>
  <div>
      <h3>Filtration Information</h3>
      <h5>Please provide us with the following filtraiont information. </h5>
      <v-row>
        <v-col>
      <v-select
      label = "Is Bioburden Reduction Filtration Required During Formulation?"
      v-model = "getFiltrationInfo.bioburden_required"
      :items = yes_no
      >
      </v-select>
      </v-col>
      <v-col>
      <v-select 
      multiple
      label = "Select Componenets for bioburden filtration?"
      v-model = "getFiltrationInfo.bioburden_filtrations"
      :items = bioburden_filtration_options
      v-if = "getFiltrationInfo.bioburden_required == 'Yes'"
      >
      </v-select>
      </v-col>
      </v-row>
      <v-row>
          <v-col>
      <v-select
      label = "Do you require a specific filter for sterile filtration?"
      v-model = "getFiltrationInfo.customer_specific_sterile_filter"
      :items = yes_no
      >
      </v-select>
      </v-col>
      <v-col>
      <p>Unless otherwise specified two(2) in-line .22um filters are used. <br><i>Please note that bulk drug substance batch sizes exceeding 50 L require continuous sterile filtration.</i></p>
      </v-col>
      </v-row>
      <v-row>
          <v-col>
              <v-select
                label = "Is Re-Filtration Data Available?"
                v-model = "getFiltrationInfo.refiltration_data_available"
                :items = yes_no
                >
             </v-select>
          </v-col>
          <v-col>
              <v-select
                label = "BDS intermediate storage condition after filtration."
                v-model = "getFiltrationInfo.intermediate_storage_conditions"
                :items = intermediate_storage_conditions
                >
             </v-select>
          </v-col>
          <v-col>
              <v-text-field
              label = "Maximum Filtered BDS Hold Time."
              v-if = "getFiltrationInfo.intermediate_storage_conditions.includes('No Intermediate Storage') == false"
              v-model = "getFiltrationInfo.intermediate_storage_time"
              >
              </v-text-field>
              <p v-if = "getFiltrationInfo.intermediate_storage_conditions.includes('No Intermediate Storage') == false  "> <i> Stability Information Must Be Provided.</i></p>
          </v-col>
      </v-row>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: "Filtration_Info",
    computed: mapGetters(['getFiltrationInfo']),
    
    components: {
    
  },
  data(){
			return {
                //v-select options
                bioburden_filtration_options:[ "Bioburden Reduction on Formulated Drug Substance", "Bioburden Reduction on Formulated Buffers" ],
                yes_no: [ 'Yes', 'No'],
                intermediate_storage_conditions: ["Ambient", "2-8 C", "No Intermediate Storage"],
                
      }
  
  },
  methods: {}
}
</script>

<style>

</style>