<template>
<div>
    <v-container>

        <v-row class="text-center font-weight-bold" > 
            <!--<v-col>Sample Type</v-col>
            <v-col>Description</v-col>-->
            <v-col cols = 4>Assay</v-col>
            <v-col cols = 2>Number of Samples</v-col>
            <v-col cols = 2>Volume per Sample(mL)</v-col>
            <v-col cols = 2>Storage Condition</v-col>
            <v-col cols = 2>Testing Lab</v-col>
        </v-row>

        <v-row v-for = "sample in getSampleInfo.formulation_sampling_plan" v-bind:key = "sample.index">
                <!--<v-col>
                    <v-select
                    label = "Sample Type"
                    v-model = sample.sample_type
                    :items = sample_type
                    >
                    </v-select>
                </v-col>

                <v-col>
                    <v-text-field
                    label = "Description"
                    v-model = sample.description
                    >
                    </v-text-field>
                </v-col>-->
                <v-col cols = 4>
                    <v-select
                    label = "Assay"
                    v-model = sample.assay
                    :items = assays
                    >
                    </v-select>
                </v-col>

                <v-col cols = 2>
                    <v-text-field
                    label = "Number of Samples"
                    v-model = sample.number_of_samples
                    type = "number"
                    >
                    </v-text-field>
                </v-col>
                 
                <v-col cols = 2>
                    <v-text-field
                    label = "Volume per Sample"
                    v-model = sample.sample_volume
                    type = "number"
                    >
                    </v-text-field>
                </v-col>  
                
                <v-col cols = 2>
                    <v-select
                    label = "Storage Condition"
                    v-model = sample.storage_condition
                    :items = storage_conditions
                    >
                    </v-select>
                </v-col>

                <v-col cols = 2>
                    <v-select
                     label = "Testing Lab"
                     :items = labs
                     v-model = sample.lab
                     append-outer-icon = "mdi-delete"
                    @click:append-outer = "remove_component(getSampleInfo.formulation_sampling_plan.indexOf(sample))"
                    ></v-select>
                    <v-text-field
                    v-if = "sample.lab == 'Client Preferred Lab'"
                    label = "Lab"
                    v-model = sample.contract_lab
                    
                    >
                    </v-text-field>
                </v-col>
        </v-row>
        <!--<v-btn depressed @click = "add_component">
              <span>Add Sample</span>
              <v-icon right>mdi-plus-box</v-icon>
        </v-btn>-->
    </v-container>
    
</div>
  
</template>

<script scoped>
import { mapGetters } from 'vuex'


export default {

    name: "Formulation Sampling Plan",
    computed: mapGetters(['getSampleInfo']),
    components: {
    
  },
  data(){
			return {
                //Select Options
                storage_conditions:["-80 C","-20 C","2-8 C", "Room Temperature"],
                sample_type: ["In-Process Testing", "Client Retain", "Release Testing", "Stability Testing"],
                labs: ["Client Preferred Lab", "Aji BioPharma"],
                assays: [    
                                        "Client Retain",
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
          this.getSampleInfo.formulation_sampling_plan.push(
              {
                        sample_type: "",
                        description: "",
                        number_of_samples: "",
                        volume_per_sample: "",
                        storage_condition: "",
                        assay: "",
                        contract_lab: "",
                        lab: ""
                         }
          );
      },
      remove_component: function(index){
          this.getSampleInfo.formulation_sampling_plan.splice(index,1);
      }


  }

}
</script>

<style>

</style>