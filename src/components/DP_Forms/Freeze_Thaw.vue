<template>
<div>
    <h2>Freeze Thaw Stability Testing</h2>
    <h5>Please specify a stability freeze thaw plan.</h5>
    <v-container>
            <v-row>
            <v-col cols="3" >
                    <v-select 
                    label =" Freeze Temperature"
                    v-model ="getFreezeThawInfo.freeze_temperature"
                    :items = freeze_temperatures
                    >
                    </v-select>
            </v-col>
            <v-col cols="3">
                <v-text-field
                label = "Other Freeze Temperature"
                v-if = "getFreezeThawInfo.freeze_temperature == 'Other'"
                >
                </v-text-field>
            </v-col>
            <v-col cols="3">
                <v-select 
                    label = "Thaw Temperature"
                    v-model ="getFreezeThawInfo.thaw_temperature"
                    :items = thaw_temperatures
                    >
                    </v-select>
            </v-col>
            <v-col cols="3" >
                <v-text-field
                label = "Other Thaw Temperature"
                v-if = "getFreezeThawInfo.thaw_temperature == 'Other'"
                >
                </v-text-field>
                
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
            v-model ="getFreezeThawInfo.comments"
            >
            </v-textarea>
        </v-row>

        <v-row v-for="assay in getFreezeThawInfo.freeze_thaw_assays" :key ="assay.index">
                
                <v-col cols="6">
                    <v-select 
                    label = "Assay"
                    v-model = assay.assay
                    :items = assays
                    >
                    </v-select>
                </v-col>
                <v-col cols="4"></v-col>
                <v-col cols="2">
                    <br>
                    <v-btn small color = "error" @click="remove_component(getFreezeThawInfo.freeze_thaw_assays.indexOf(assay))"> 
                    Remove Assay
                    </v-btn>
                </v-col>

                <v-col cols="1"></v-col>
                <v-col cols="1" class="text-center font-weight-bold" v-for = "freq in sample_frequencies" :key = "freq">{{freq}}</v-col>
                <v-col cols="6"></v-col>
                
                <v-col cols="1"></v-col>
                <v-col cols="1">
                    <v-checkbox class="align-center justify-center"
                    v-model = assay.frequency[0]
                    >
                    </v-checkbox>
                </v-col>
                <v-col cols="1" v-for = "i in assay.frequency.length - 1" :key = "i">
                    <v-checkbox class="align-center justify-center"
                    v-model = assay.frequency[i]
                    >
                    </v-checkbox>
                </v-col >
                <v-col cols="6"></v-col>
                <v-divider inset = false></v-divider>
        </v-row>
        <br>
        <v-btn class = "primary" v-on:click = "add_component()"> 
            Add Assay
        </v-btn>
           </v-container>
</div>
  
</template>

<script>
import { mapGetters } from 'vuex'


export default {

    name: "Freeze Thaw",
    computed: mapGetters(['getFreezeThawInfo']),
    components: {
    
  },
  data(){
			return {
                //Select Options
                freeze_temperatures:["-80 C","-20 C","2-8 C", "Other"],
                thaw_temperatures: ["Ambient","2-8 C", "Other"],
                sample_frequencies: ["1 Cycle", "2 Cycles", "3 Cycles", "4 Cycles", "5 Cycles"],
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
                
                
                }                       
  },
  
  
  methods: {
      add_component: function(){
          this.getFreezeThawInfo.freeze_thaw_assays.push(
              {
                        assay: "",
                        frequency:[
                         false,
                         false,
                         false,
                         false,
                         false]
                         }
          );
      },
      remove_component: function(sample_index){
          this.getFreezeThawInfo.freeze_thaw_assays.splice(sample_index,1)
      }


  }

}
</script>

<style>

</style>