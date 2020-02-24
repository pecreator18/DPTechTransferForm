<template>
<div>

    <h2 >Inspection</h2>
    <v-select
    label = "What is the required storgae temperature prior to and between visual inspection activities?"
    :items = storage_conditions
    v-model = "getInspectionInfo.inspection_temperature"
    >
    </v-select>
    <p>Note: All visual inspection activities take place at AMBIENT temperature</p>
    <v-text-field
    label = "Time Out of Refrigeration(TOR) requirements"
    v-model = "getInspectionInfo.tor"
    ></v-text-field>
    <p>Must provide data to support TOR</p>
    <v-text-field
    label = "Time to Final Storage Temperature Requirements"
    v-model = "getInspectionInfo.final_storage_temperature"
    ></v-text-field>
    <p>Must provide data to support requirements</p>
    <v-text-field
    label = "Please provide a product description (Product Appearance) for visual inspection"
    v-model = "getInspectionInfo.appearance_description"
    ></v-text-field>

</div>
  
</template>

<script>
import { mapGetters } from 'vuex'


export default {

    name: "Inspection",
    computed: mapGetters(['getInspectionInfo']),
    
    components: {
    
  },
  data(){
			return {
                //v-select options
                yes_no: [ 'Yes', 'No'],
                storage_conditions: ["Ambient", "2-8 C"],                
                
      }
  
  },
  methods: {}

}
</script>

<style>

</style>