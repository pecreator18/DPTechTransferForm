<template>
<div>
    <h2 >Stability Testing</h2>
    <h5>Please specify a product stability plan.</h5>

    <v-tabs
        dark
        background-color="RGB(91,103,112)"
        show-arrows
        v-model="tab"
      >    
            <v-tab
            v-for="stability_module in getStabilityInfo.stability_sample_modules"
            :key="stability_module.index"
            @click ="set_module_index(getStabilityInfo.stability_sample_modules.indexOf(stability_module))" 
            >
            Storage Condition No. {{getStabilityInfo.stability_sample_modules.indexOf(stability_module)}}
            </v-tab>

            
            <v-icon @click="add_stablility_module()">mdi-plus</v-icon>
    </v-tabs>

    <v-tabs-items v-model="stability_module_index">
        <v-tab-item v-for="stability_module in getStabilityInfo.stability_sample_modules" :key="stability_module.index">
            <v-row>
            <v-col cols="3" >
                <v-select 
                    label = "Temperature"
                    v-model ="stability_module.temperature"
                    :items = temperatures
                    >
                    </v-select>
            </v-col>
            <v-col cols="3">
                <v-text-field
                label = "Other Temperature"
                v-if = "stability_module.temperature == 'Other'"
                >

                </v-text-field>

            </v-col>
            <v-col cols="3">
                <v-select 
                    label = "Orientations"
                    v-model ="stability_module.orientation"
                    :items = orientations
                    >
                    </v-select>
            </v-col>
            <v-col cols="3" >
                <v-icon @click = "remove_stability_module(stability_module_index)">mdi-delete</v-icon>
                Delete Stability Module
            </v-col>
        <v-divider inset = false></v-divider>
        </v-row>
        <v-row>
            <v-textarea
            label = "Additional Comments"
            filled
            outlined
            clearable
            auto-grow
            v-model="stability_module.comments"
            >

            </v-textarea>
        </v-row>

        <v-row v-for="sample in stability_module.stability_samples" :key ="sample.index">
                
                <v-col cols="6">
                    <v-select 
                    label = "Assay"
                    v-model = sample.assay
                    :items = assays
                    >
                    </v-select>
                </v-col>
                <v-col cols="4"></v-col>
                <v-col cols="2">
                    <br>
                    <v-btn small color = "error" @click="remove_component(stability_module.stability_samples.indexOf(sample))"> 
                    Remove Assay
                    </v-btn>
                </v-col>

                <v-col cols="1"></v-col>
                <v-col cols="1" class="text-center font-weight-bold" v-for = "freq in sample_frequencies" :key = "freq">{{freq}}</v-col>
                
                <v-col cols="1"></v-col>
                <v-col cols="1">
                    <v-checkbox class="align-center justify-center"
                    v-model = sample.frequency[0]
                    >
                    </v-checkbox>
                </v-col>
                <v-col cols="1" v-for = "i in sample.frequency.length - 1" :key = "i">
                    <v-checkbox class="align-center justify-center"
                    v-model = sample.frequency[i]
                    >
                    </v-checkbox>
                </v-col >
                <v-divider inset = false></v-divider>
        </v-row>
        <br>
        <v-btn class = "primary" v-on:click = "add_component()"> 
            Add Assay
        </v-btn>
            </v-tab-item>
        </v-tabs-items>
</div>
  
</template>

<script>
import { mapGetters } from 'vuex'


export default {

    name: "Sampling Plan",
    computed: mapGetters(['getStabilityInfo']),
    components: {
    
  },
  data(){
			return {
                //Select Options
                temperatures:["25 C/60% RH","40 C/75% RH","-80 C","-20 C","2-8 C", "Other"],
                orientations: ["Upright", "Inverted", "Both Upright and Inverted", "Horizontal(Syringes Only)"],
                sample_frequencies: ["2 Weeks", "1 Mo.", "3 Mo.", "6 Mo.", "9 Mo.", "12 Mo.", "18 Mo.", "24 Mo.", "36 Mo.", "48 Mo.", "60 Mo."],
                assays: [    
                                        "Break and Glide Force",
                                         "Capillary Isoelectric Focusing",
                                         "Host Cell Protein by ELISA",
                                         "ELISA Product",
                                         "Glycan Analysis",
                                         "Anion Exchange HPLC",
                                         "Cation Exchange HPLC",
                                         "HIC HPLC",
                                         "Reverse Phase HPLC",
                                         "Size Exclusion HPLC",
                                         "Size Exclusion MALS",
                                         "Drug Antibody Ratio(UV-Vis)",
                                         "Drug Antibody Ratio(HPLC)",
                                         "Drug Antibody Ratio(Mass Spec)",
                                         "Free Drug/Free Drug Linker(RP-HPLC)",
                                         "CE-SDS(Non-Gel Sieving)Reduced",
                                         "CE-SDS(Non-Gel Sieving)Non-Reduced",
                                         "SDS-Page Reduced",
                                         "SDS-Page Non-Reduced",
                                         "AGE",
                                         "Carbohydrate Structure",
                                         "Western Blot",
                                         "Intact Mass(QToF)",
                                         "Peptide Map(HPLC)",
                                         "Peptide Map(LCMS)",
                                         "Potency",
                                         "Particle Analysis(Microscopic Flow Imaging)",
                                         "Dynamic Light Scattering",
                                         "FlowCAM",
                                         "Protein Concentration by A280 (SoloVPE)",
                                         "Protein Concentration by A280 (Conventional)",
                                         "Sequence Confirmation by LCMS/MS",
                                         "Disulfide Bond Confirmation",
                                         "Intrinsic Flouresence",
                                         "Extrinsic Flouresence",
                                         "Circular Dichroism(Far UV)",
                                         "Circular Dichroism(Near UV)",
                                         "Reconstitution Time",
                                         "Field Flow Fractionation with Light Scattering",
                                         "Lyo Cake Appearence",
                                         "FT=IR",
                                         "RAWMAN",
                                         "FT-NIR",
                                         "Differential Scanning Calorimetry",
                                         "AUC",//End non-compendials
                                         "pH/Conductivity USP<791>",
                                         "Osmolality,Freezing Point USP<785>",
                                         "Osmolality, Vapor Pressure",
                                         "Viscosity USP <911>",
                                         "Density",
                                         "Volume in Container/Extractable Volume, USP <697>",
                                         "Elemental Impurities",
                                         "Moisture Content, USP <921>",
                                         "Bioburden, USP <61>",
                                         "Endotoxin, USP <85>",
                                         "Particulate Matter, USP <787> <788> or <789> (3rd Party)",
                                         "Sterility, USP <71> <1208> (3rd Party)",
                                         "Color, Clarity, Appearance (Visual)",
                                         "Color, Clarity, Appearance (EP)",
                                         "CCIT (HVLD)",
                                         "CCIT (Dye Ingress, 3rd Party)",
                                         "CCIT (Helium Leak, 3rd Party)",
                                         "CCIT (Vacuum Decay, 3rd Party)",
                                         "UP Appearance",
                                         "Uniformity of Dosage"
                                     ],
                
                stability_module_index: 0,//This is the main index variable for accessing the stability module data. 
                }                       
  },
  
  
  methods: {
      // Function to set the stability_module_index
      set_module_index: function(i){
            this.stability_module_index = i
      },
    //Add a tab and stability module
      add_stablility_module: function(){
            //Append a stability module to stability modules
             this.getStabilityInfo.stability_sample_modules.push(
                    {
                        temperature: "",
                        orientation: "",
                        comments: "",
                        stability_samples: [
                            
                        ]
                    }
            
          );
          
          this.tab = this.getStabilityInfo.stability_sample_modules.length - 1;//Set the current tab to the new module
          this.stability_module_index = this.getStabilityInfo.stability_sample_modules.length - 1; //Set the module index to the current tab.


      },

      remove_stability_module: function(){
            
            this.getStabilityInfo.stability_sample_modules.splice(this.stability_module_index,1);
            if( this.stability_module_index > 0){
                    this.stability_module_index = this.stability_module_index - 1 //Set the module tab index
                    this.tab = this.stability_module_index; //Set the current tab to the new module

            }else{
                this.stability_module_index = 0 //Set the module tab index
                this.tab = 0;//Set the current tab to the new module

            } 
            
            
      },
        //Add a sample to the stability module.
      add_component: function(){
          this.getStabilityInfo.stability_sample_modules[this.stability_module_index].stability_samples.push(
              {
                        assay: "",
                        frequency:[
                         false,
                         false,
                         false,
                         false,
                         false,
                         false,
                         false,
                         false,
                         false,
                         false,
                         false]
                         }
          );
      },
      //Remove a sample from stability module.
      remove_component: function(sample_index){
          this.getStabilityInfo.stability_sample_modules[this.stability_module_index].stability_samples.splice(sample_index,1)
      }


  }

}
</script>

<style>

</style>