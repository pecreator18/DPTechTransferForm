<template>
        <v-container>
                    <v-tabs>
                        <v-tab>Formulation</v-tab>
                        <v-tab >Aseptic Fill</v-tab>
                        <v-tab v-if = "getState.fill_specifications.selected_fill_sterility == 'Aseptic Fill with Terminal Sterilization'">Terminal Sterilization</v-tab>
                        <v-tab v-if = "getState.fill_specifications.selected_fp_state == 'Solid(Lyophilized)'">Lyophilization</v-tab>
                        <v-tab >Inspection</v-tab>
                        <v-tab >Packaging and Labeling</v-tab>
                              <v-tab-item>
                                  <Formulation_Builder />
                                  <!--<Formulation_Info />
                                  <br>
                                  <v-divider inset></v-divider>
                                  <br>
                                  <Filtration_Info />
                                  <br>
                                  <v-divider inset></v-divider>
                                  <br>-->      
                              </v-tab-item>
                              <v-tab-item>
                                  <Fill_Specifications/>
                                  <!--<Production_Components/>--> 
                              </v-tab-item>
                              <v-tab-item v-if = "getState.fill_specifications.selected_fill_sterility == 'Aseptic Fill with Terminal Sterilization'">
                                  <Terminal_Info/>
                              </v-tab-item>
                              <v-tab-item v-if = "getState.fill_specifications.selected_fp_state == 'Solid(Lyophilized)'"> 
                                  <Lyo_Info/>
                              </v-tab-item>
                              <v-tab-item>
                                  <Inspection_Info/>
                              </v-tab-item>
                              <v-tab-item>
    <v-container>
      <v-row>
            <v-col cols = 12>
                <b><i>Package and Labeling:</i></b>
                <p>
                    Your filled drug product can be labeled in a variety of ways depending on what stage of development you are in.  
                    Please answer the following questions packaging requirements for your product.  
                </p>
                <br>
                </v-col>
            <!--<v-col cols = 6>
                  <video width="320" height="240" controls>
                  <source src="movie.mp4" type="video/mp4">
                  <source src="movie.ogg" type="video/ogg">
                    Your browser does not support the video tag.
                  </video>
            </v-col>-->
        </v-row>
        <!-- Use this for testing logic<v-row>
            
        <v-select label = "Development Phase" v-model = "getMoleculeData.Development_Phase" :items = development_phases></v-select>
        </v-row>-->
        </v-container>
                                  <Pack_Label_Info v-if = "getMoleculeData.Development_Phase == 'Pre-Clinical' || getMoleculeData.Development_Phase == 'Phase I' || getMoleculeData.Development_Phase =='Phase II' " />
                                  <Auto_Label_Pack v-if = "getMoleculeData.Development_Phase ==  'PPQ/Commercial' || getMoleculeData.Development_Phase == 'Phase III' " />
                                  <Commercial_Serialization v-if = "getMoleculeData.Development_Phase ==  'PPQ/Commercial' || getMoleculeData.Development_Phase == 'Phase III' "/>
                                  <Commercial_Pack_Components/>

                              </v-tab-item>
                              
                        </v-tabs>
        </v-container>
</template>
<script>

import { mapGetters } from 'vuex'
//import Formulation_Info from "./DP_Forms/Formulation_Info"
//import Filtration_Info from "./DP_Forms/Filtration"
import Lyo_Info from "./DP_Forms/Lyophilization"
import Terminal_Info from "./DP_Forms/Terminal_Sterilization"
import Inspection_Info from "./DP_Forms/Inspection"
import Pack_Label_Info from "./DP_Forms/Pack_Label"
//import Production_Components from "./DP_Forms/Production_Components"
//import Required_Excipients from "./DP_Forms/Required_Excipients"
import Auto_Label_Pack from "./DP_Forms/Automated_Label_Pack"
import Commercial_Pack_Components from "./DP_Forms/Commercial_Pack_Components.vue"
import Commercial_Serialization from "./DP_Forms/Commercial_Serialization.vue"

import Formulation_Builder from "./DP_Forms/Formulation_Builder"
import Fill_Specifications from './Basic_Info/Fill_Specifications.vue'

export default {
    name: "Manufacturing",
    computed: mapGetters(['getServices','getComponents','getMoleculeData','getState']),
    components: {
        //Formulation_Info,
        //Filtration_Info,
        Lyo_Info,
        Terminal_Info,
        Inspection_Info,
        Pack_Label_Info,
        //Production_Components,
        //Required_Excipients,
        Auto_Label_Pack,
        Commercial_Pack_Components,
        Commercial_Serialization,
        Formulation_Builder,
        Fill_Specifications
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
}
</script>