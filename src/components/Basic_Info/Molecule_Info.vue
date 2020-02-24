<template>
<div class="hello">
        <h3>Molecule Information</h3>
        <h5>Please enter the drug molecule information</h5> 
    <v-form>
        <v-text-field label = "Drug Name" v-model = "getMoleculeData.Drug_Name" ></v-text-field>
        <v-select label = "Molecule Type" v-model = "getMoleculeData.Product_Type" :items = product_types></v-select>
        <v-text-field v-if = "getMoleculeData.Product_Type == 'Other'"   label = "Other Molecule Type"   v-model = "getMoleculeData.Other_Product_Type" ></v-text-field>
        <v-text-field label = "Disease Indication Ex. Alzheimers" v-model = "getMoleculeData.Disease_Indication"></v-text-field>
        <v-select label = "Development Phase" v-model = "getMoleculeData.Development_Phase" :items = development_phases></v-select>

        <v-select v-if = " getMoleculeData.Development_Phase != null && getMoleculeData.Development_Phase != 'PPQ/Commercial'" label = "Clinical Trial Location" v-model = "getMoleculeData.Trial_Location" :items = clinical_trial_locations></v-select>
        <v-text-field v-if = "getMoleculeData.Trial_Location == 'Other'" label = "Other Clinical Trial Location" v-model = "getMoleculeData.Other_Location"></v-text-field>
        
    </v-form>  
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Molecule_Info',
  computed: mapGetters(['getMoleculeData']),
  created(){
   //this.molecule_info = this.getMoleculeData;//connect the view component to the global variables. 
  },
  props: {
      
  },
  data(){
			return {
                development_phases: [ 'Pre-Clinical', 'Phase I', 'Phase II', 'Phase III', 'PPQ/Commercial'],
                clinical_trial_locations: ["United States","EU","Japan","Canada","Other"],
                product_types:["Monoclonal Antibody (mAb)","Monoclonal Antibody (mAb)","Recombinant Protein","Adjuvant","Plasmid DNA","Peptide","Vaccine","Small Molecule" ,"Oligonucleotide","Suspension","Other"],
                molecule_info:{
                                Drug_Name:"",
                                Disease_Indication: "",
                                Development_Phase: "",
                                Trial_Location:"",
                                Other_Location:"",
                                Product_Type: "",
                                Other_Product_Type: ""
                              }
			}
},
methods: {	
			
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>