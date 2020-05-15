<template>
    <div>
      <!--Error Message if the user doesn't select a service-->
      <v-alert v-if = "error" type="error">
        Please Select A Service.
      </v-alert>
      <!--Navigation bar to navigate through the questions-->
        <!--<v-app-bar flat class = "grey text-center">
            <v-btn v-if= "step_number >0" v-on:click="back()"> Back</v-btn>
            <v-spacer class="black--text display-1">{{header[step_number]}}</v-spacer>
            <v-btn v-if = "step_number < 3 &  step_number > 0" v-on:click="next()"> Next</v-btn>
            <v-btn v-if = "step_number == 3" v-on:click="finish_questionaire()"> Finish Questionaire</v-btn>
        </v-app-bar>-->
          <br>
        <!--Container for conditional rendering by step number-->
        
        <v-scale-transition>
        <v-container>
        <v-row>
        <v-col cols = 12>
                <b><i>Process Overview:</i></b>
                <p>
                 Please fill out the following questionaire about the details of your manufacturing campaign. We will use this information to determine what information we will need to 
                 get your process started. 
                </p>
            </v-col>
        </v-row> 
        <br>
        <v-divider></v-divider>
        <br>
        <v-row>
            <v-col>
                <v-spacer class="black--text display-1">{{header[step_number]}}</v-spacer>
            </v-col>
        </v-row>
        <v-row v-if= "step_number == 0">
                <v-col 
                cols = "4"
                @click = "fill_selected('vial')">
                    <v-img
                    alt="Vuetify Logo"
                    class="shrink mr-2"
                    contain
                    src= "../assets/vial.svg"
                    transition="scale-transition"
                    width="200"
                    />
                    <h3>Vial</h3>
                </v-col>
                <v-col 
                cols = "4"
                @click = "fill_selected('syringe')">
                    <v-img
                    alt="Vuetify Logo"
                    class="shrink mr-2"
                    contain
                    src= "../assets/syringe.svg"
                    transition="scale-transition"
                    width="200"
                    />
                    <h3>Syringe</h3>
                </v-col>
                <v-col 
                cols = "4"
                @click = "fill_selected('cartridge')">
                    <v-img
                    alt="Vuetify Logo"
                    class="shrink mr-2"
                    contain
                    src= "../assets/cartridge.svg"
                    transition="scale-transition"
                    width="200"
                    />
                    <h3>Cartridge</h3>
                </v-col>
            </v-row>
        </v-container>
        </v-scale-transition>

        <v-scale-transition>
        <!-- Keep the selected fill type symbol in the first column and render questions based on step in the other columns.-->
        <v-container v-if= "step_number > 0">
        <v-row>
            <v-col cols = "2">
                <v-img
                alt="../assets/cartridge.svg"
                class="shrink mr-2"
                contain
                :src= selected_image_path
                transition="scale-transition"
                width="200"
                /> 
                <h3>{{fill_type}}</h3>
            </v-col>

            <!-- Fill Information -->
            <v-col 
            cols = "10"
            v-if= "step_number == 1">
                
                <v-row>
                    <v-col>
                        <v-text-field 
                        label = "Number of Batches"
                        type = "number"
                        v-model = "getState.fill_specifications.number_of_fills">
                        </v-text-field>
                    </v-col>
                    <v-col>
                        <v-text-field 
                        label = "Target Batch Size(Units)"
                        type = "number"
                        v-model = "getState.fill_specifications.batch_size">
                        </v-text-field>
                    </v-col>
                </v-row> 
                <v-row>
                    <v-col>
                        <v-select 
                        label = "Final Product State"
                        :items = final_product_state
                        :disabled = "getState.fill_specifications.selected_fp_state_disabled "
                        v-model = "getState.fill_specifications.selected_fp_state"
                        @change = "reset_fill_sterility()">
                        </v-select>
                    </v-col>
                    <v-col>
                        <v-select 
                        label = "Fill Sterility"
                        :items = fill_sterility
                        v-if = "getState.fill_specifications.selected_fp_state == 'Liquid'"
                        v-model = "getState.fill_specifications.selected_fill_sterility"
                        :disabled = "getState.fill_specifications.selected_fill_sterility_disabled"
                        >
                        </v-select>
                    </v-col>
                </v-row> 
            </v-col>

            <!-- Fill Specifications -->
            <v-col
             cols = "10"
             v-if= "step_number == 2">
                <v-row>
                    <v-text-field label = "Drug Name" v-model = "getMoleculeData.Drug_Name" ></v-text-field>
                </v-row>
                <v-row>
                    <v-select label = "Molecule Type" v-model = "getMoleculeData.Product_Type" :items = product_types></v-select>
                </v-row>
                <v-row>
                    <v-text-field v-if = "getMoleculeData.Product_Type == 'Other'"   label = "Other Molecule Type"   v-model = "getMoleculeData.Other_Product_Type" ></v-text-field>
                </v-row>
                <v-row>
                    <v-text-field label = "Disease Indication Ex. Alzheimers" v-model = "getMoleculeData.Disease_Indication"></v-text-field>
                </v-row>
                <v-row>
                    <v-select label = "Development Phase" v-model = "getMoleculeData.Development_Phase" :items = development_phases></v-select>
                </v-row>
                <v-row>
                    <v-select v-if = "getMoleculeData.Development_Phase != null && getMoleculeData.Development_Phase != 'PPQ/Commercial'" label = "Clinical Trial Location" v-model = "getMoleculeData.Trial_Location" :items = clinical_trial_locations></v-select>
                </v-row>
                <v-row>
                    <v-text-field v-if = "getMoleculeData.Trial_Location == 'Other' && getMoleculeData.Development_Phase != null && getMoleculeData.Development_Phase != 'PPQ/Commercial'" label = "Other Clinical Trial Location" v-model = "getMoleculeData.Other_Location"></v-text-field>
                </v-row>   
            </v-col>
            
            
            <!-- Stability Testing-->
            <v-col 
            cols = "10"
            v-if= "step_number == 3">
                <v-row>
                    <v-col cols = 8>
                        <v-select
                            label = "Will Aji Bio-Pharma provide stability testing for your product?"
                            :items = yes_no
                            v-model = "getState.stability_sampling_plan.stability_sampling"
                        >
                        </v-select>
                    </v-col>
               </v-row>  
            </v-col>
        </v-row>
        <!-- Navigation Buttons -->
        <v-row>
            <v-col cols = 2>
                <v-btn color = "secondary" v-if= "step_number >0" v-on:click="back()"> Back</v-btn>
            </v-col>
            <v-col cols = 8>
            </v-col>
            <v-col cols = 2>
                <v-btn color = "secondary" v-if = "step_number < 3 &  step_number > 0" v-on:click="next()"> Next</v-btn>
                <v-btn color = "secondary" v-if = "step_number == 3" v-on:click="finish_questionaire()"> Finish Questionaire</v-btn>
            </v-col>
        </v-row>
        
        <!--<v-row>
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
        </v-row>-->
        </v-container>
        </v-scale-transition>
        <!--<v-btn depressed @click = "product_page()">
          <span>Product Page</span>
          <v-icon right>mdi-arrow-left-bold-outline</v-icon>
      </v-btn>-->
    </div>

</template>
<script>
import { mapGetters } from 'vuex'
/*import Molecule_Info from './Basic_Info/Molecule_Info.vue'

import CSM_Safety from "./DP_Forms/API_BDS_Safety_Info"
import CSM_Info from "./DP_Forms/CSM_Info"
import Formulation_Info from "./DP_Forms/Formulation_Info"
import Filtration_Info from "./DP_Forms/Filtration"
import Lyo_Info from "./DP_Forms/Lyophilization"
import Terminal_Info from "./DP_Forms/Terminal_Sterilization"
import Inspection_Info from "./DP_Forms/Inspection"
import Pack_Label_Info from "./DP_Forms/Pack_Label"
import Production_Components from "./DP_Forms/Production_Components"
import Required_Excipients from "./DP_Forms/Required_Excipients"
import Auto_Label_Pack from "./DP_Forms/Automated_Label_Pack"
import Commercial_Pack_Components from "./DP_Forms/Commercial_Pack_Components.vue"
import Commercial_Serialization from "./DP_Forms/Commercial_Serialization.vue"
import Qualification_Validation from "./DP_Forms/Qualification_Validation.vue"
import CPPs from "./DP_Forms/CPPs.vue"
import Sampling_Plan from "./DP_Forms/Sampling_Plan.vue"
import Stability_Testing from "./DP_Forms/Stability_Testing.vue"
*/

export default {
    name: "DP_Info",
    computed: mapGetters(['getAuthenticationData','getMoleculeData','getComponents','getState']),
    components: {
        /*
        Molecule_Info
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
        */
  },
  data(){
			return {
    
        header: ["Select Your Fill Type","Fill Specifications","Molecule Information","Stability Testing","Drug Product Dosage","Container Labeling", "Inspection","Packaging","Finished Product Shipping Country"],
        error:false,
        step_number: 0,
        fill_type:"",
        selected_image_path: require("../assets/vial.svg"),
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
                              },


        //v-select items
        final_product_state: ["Liquid", "Solid(Lyophilized)"],
        fill_sterility: ["Aseptic Fill Only", "Aseptic Fill with Terminal Sterilization"],
        yes_no: ["Yes", "No"],

        //data
        clinical_trial_location: ""
      }
  
  },
  methods: {
    fill_selected: function(selected_fill){
        this.fill_type = selected_fill
        switch(selected_fill){
            case "vial":
              this.selected_image_path = require("../assets/vial.svg");
              this.getComponents.container = "Vial"
              this.getState.fill_specifications.fill_type = "Vial"
              //When a vial fill is selected don't disable anything.
              //Set final product state to liquid
              this.getState.fill_specifications.selected_fp_state = ""
              this.getState.fill_specifications.selected_fill_sterility = ""
              this.getState.fill_specifications.selected_fp_state_disabled = false
              this.getState.fill_specifications.selected_fill_sterility_disabled = false
              break
            case "syringe":
              this.selected_image_path = require("../assets/syringe.svg");
              this.getComponents.container = "Syringe"
              this.getState.fill_specifications.fill_type = "Syringe"
              //Syringe fills are only liquid fills but can have termninal sterilization. Disable final state but not fill sterility.

              //Set final product state to liquid
              this.getState.fill_specifications.selected_fp_state = "Liquid"
              this.getState.fill_specifications.selected_fill_sterility = ""
              //Disable final product state selection
              this.getState.fill_specifications.selected_fp_state_disabled = true
              break
            case "cartridge":
              this.selected_image_path = require("../assets/cartridge.svg");
              this.getComponents.container = "Cartridge"
              this.getState.fill_specifications.fill_type = "Cartridge"
              //Cartridge Fills are only liquid.  Can they have terminal sterilization?  

              //Set final product state to liquid
              this.getState.fill_specifications.selected_fp_state = "Liquid"
              this.getState.fill_specifications.selected_fill_sterility = ""
              //Disable final product state selection
              this.getState.fill_specifications.selected_fp_state_disabled = true
              break
        }
        this.next()

    },
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
    product_page(){
        this.getAuthenticationData.client_portal_form = false;
        this.getAuthenticationData.client_portal_questionaire = false;
      },
    finish_questionaire(){
        //this.getAuthenticationData.client_portal_form = true;
        this.getAuthenticationData.client_portal_questionaire = false;
      },
    reset_fill_sterility(){
        this.getState.fill_specifications.selected_fill_sterility = "";
    }
    
  },

}
</script>

<style>

</style>