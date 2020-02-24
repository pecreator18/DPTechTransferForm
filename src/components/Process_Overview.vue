<template>
    <div>
      <!--Error Message if the user doesn't select a service-->
      <v-alert v-if = "error" type="error">
        Please Select A Service.
      </v-alert>
      <!--Navigation bar to navigate through the questions-->
        <v-app-bar flat class = "red text-center">
            <v-btn v-if= "step_number >0" v-on:click="back()"> Back</v-btn>
            <v-spacer class="white--text display-1">{{header[step_number]}}</v-spacer>
            <v-btn v-if = "step_number < 5" v-on:click="next()"> Next</v-btn>
            <v-btn v-else v-on:click="product_page()"> Finish Questionaire</v-btn>
        </v-app-bar>
          <br>
        <!--Container for conditional rendering by step number-->
        <v-scale-transition>
        <v-container v-if= "step_number == 0"> 
        <v-row >
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
            <!-- Fill Specifications -->
            <v-col
             cols = "10"
             v-if= "step_number == 1">
                <v-row>
                    <v-text-field 
                    label = "Number of Batches"
                    type = "number">
                    </v-text-field>
                </v-row>
                <v-row>
                    <v-text-field 
                    label = "Target Batch Size(Units)"
                    type = "number">
                    </v-text-field>
                </v-row> 
                <v-row>
                    <v-col>
                        <v-select 
                        label = "Final Product State"
                        :items = final_product_state
                        v-model = selected_fp_state>
                        </v-select>
                    </v-col>
                    <v-col>
                        <v-select 
                        label = "Fill Sterility"
                        :items = fill_sterility
                        v-model = selected_fill_sterility
                        v-if = "selected_fp_state == 'Liquid'"
                        >
                        </v-select>
                    </v-col>
                </v-row>    
            </v-col>
            <!-- Dosage -->
            <v-col 
            cols = "10"
            v-if= "step_number == 2">
                <v-row>
                    <v-col cols="6">
                        <br>
                        <p><strong>Drug Product per Container(mg): </strong></p>
                    </v-col>
                    <v-col cols="2">
                        <v-text-field 
                        label = "Target"
                        type = "number">
                        </v-text-field>
                    </v-col>
                    <v-col cols="2">
                        <v-text-field 
                        label = "Lower Limit"
                        type = "number">
                        </v-text-field>

                    </v-col>
                    <v-col cols="2">
                        <v-text-field 
                        label = "Upper Limit"
                        type = "number">
                        </v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="6">
                        <br>
                        <p><strong>Final Formulated Drug Product Concentration (mg/mL): </strong></p>
                    </v-col>
                    <v-col cols="2">
                        <v-text-field 
                        label = "Target"
                        type = "number">
                        </v-text-field>
                    </v-col>
                    <v-col cols="2">
                        <v-text-field 
                        label = "Lower Limit"
                        type = "number">
                        </v-text-field>

                    </v-col>
                    <v-col cols="2">
                        <v-text-field 
                        label = "Upper Limit"
                        type = "number">
                        </v-text-field>
                    </v-col>
                </v-row>    
            </v-col>
            <!-- Container Labeling -->
            <v-col 
            cols = "10"
            v-if= "step_number == 3">
                <v-row>
                    <v-col>
                        <v-select
                            label = "Is Primary Unit(Vial or Syringe) Labeling Required?"
                            :items = yes_no
                        ><!--v-model = "pack_label_info.primary_unit_label"-->
                        </v-select>
                    </v-col>
                    <v-col>
                        <v-select
                            label = "Cap Coding Required(Vials Only)?"
                            :items = yes_no
                                
                        > <!--v-model = getAutoPack.cap_coding--></v-select>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <v-select
                            label = "Opaque White Unit Label Acceptable(Only applicable for vials)?"
                            :items = yes_no
                            
                        ><!--v-model = getAutoPack.opaque_label--></v-select>
                    </v-col>
                    <v-col>
                        <v-select
                            label = "Tamper Proof Seal Required?"
                            :items = yes_no
                        ><!--v-model = getAutoPack.tamper_proof-->
                        </v-select>
                    </v-col>
                </v-row>

                <v-row>
                    <v-col
                        v-if= "step_number == 3"
                    >
                        <v-textarea
                            label = "Please Specify any Additional Packaging Requirements"
                            filled
                            outlined
                            clearable
                            auto-grow  
                        ><!--v-model = "pack_label_info.additional_requirements"--></v-textarea>
                        <p><strong>Note: </strong><i>Aji Bio-Pharma cannot support packaging for blinded studies or for randomization of a Drug Product Lot.</i></p>
                    
                    </v-col>    
                </v-row>  
            </v-col>
            <!--Inspection-->
            <v-col 
            v-if ="step_number == 4"
            cols = "10">
                        <v-textarea
                            label = "Please provide a product appearance descriptio for visual inspection"
                            filled
                            outlined
                            clearable
                            auto-grow  
                        ><!--v-model = "pack_label_info.additional_requirements"--></v-textarea>
            </v-col>
            <!--Packaging-->
            <v-col 
            v-if ="step_number == 5"
            cols = "10">
                        <v-row>
                            <v-text-field 
                            label = "Number of Units per Carton"
                            type = "number">
                            </v-text-field>
                        </v-row>
                        <v-row>
                            <v-select
                            label = "Pallet Configuration"
                            :items = yes_no>
                            </v-select>
                        </v-row>

            </v-col>
            <!--Final Product Shipping-->
            <v-col 
            v-if ="step_number == 6"
            cols = "10">
                        <v-row>
                            <v-select 
                            label = "Clinical Trial Location"  
                            :items = clinical_trial_locations
                            v-model = clinical_trial_location
                            ></v-select>
                            <!--v-select 
                            v-if = " getMoleculeData.Development_Phase != null && getMoleculeData.Development_Phase != 'PPQ/Commercial'" 
                            label = "Clinical Trial Location" 
                            v-model = "getMoleculeData.Trial_Location" 
                            :items = clinical_trial_locations></v-select-->
                            </v-row>
                            <v-row>
                            <v-text-field 
                            v-if = "clinical_trial_location == 'Other'" 
                            label = "Other Clinical Trial Location" ></v-text-field>
                        </v-row>

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
        <v-btn depressed @click = "product_page()">
          <span>Product Page</span>
          <v-icon right>mdi-arrow-left-bold-outline</v-icon>
      </v-btn>
    </div>

</template>
<script>
import { mapGetters } from 'vuex'
/*
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
    computed: mapGetters(['getAuthenticationData']),
    components: {
        /*
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
    
        header: ["Select Your Fill Type","Fill Specifications","Drug Product Dosage","Container Labeling", "Inspection","Packaging","Finished Product Shipping Country"],
        error:false,
        step_number: 0,
        fill_type:"",
        selected_image_path: require("../assets/vial.svg"),
        selected_fp_state:"",
        selected_fill_sterility:"",
        clinical_trial_locations: ["United States","EU","Japan","Canada","Other"],


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
              break
            case "syringe":
              this.selected_image_path = require("../assets/syringe.svg");
              break
            case "cartridge":
              this.selected_image_path = require("../assets/cartridge.svg");
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
      }
  },

}
</script>

<style>

</style>