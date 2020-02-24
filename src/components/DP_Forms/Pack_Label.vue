<template>
<div>

    <h2 >Packaging and Labeling</h2>
    <v-select
    label = "Is Primary Unit(Vial or Syringe) Labeling Required?"
    :items = yes_no
    v-model = "pack_label_info.primary_unit_label"
    >
    </v-select>
    <v-text-field
    label = "Please Specify any Additional Packaging Requirements"
    v-model = "pack_label_info.additional_requirements"
    ></v-text-field>
    <p>Note: Aji Bio-Pharma cannot support packaging for blinded studies or for randomization of a Drug Product Lot.</p>

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
                pack_label_info: {
                    primary_unit_label: "",
                    additional_requirements: ""
                }
                
      }
  
  },
  methods: {}

}
</script>

<style>

</style>