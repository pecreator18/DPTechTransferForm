<template>

  <div>
      <h3>Client API/BDS Safety Information</h3>
      <h5>Please provide as much infomation about the API/BDS as possible. </h5> 
  <v-row>
      <v-col>
        <v-select 
        multiple
        :items = "available_reports"
        label = "Available Reports"
        v-model = "getAPIBDSSafety.available_reports"
        ></v-select>
      </v-col>
 </v-row>
 <v-row>
     <v-col cols = 6 v-if = "getAPIBDSSafety.available_reports.includes('Safety Data Sheets')">
            <v-file-input 
                                    accept="image/*" 
                                    label="Safety Data Sheets" 
                                    multiple
                                    
                                    >
            </v-file-input>
         </v-col>
         <v-col cols = 6 v-if = "getAPIBDSSafety.available_reports.includes('OEL Monograph')">
            <v-file-input 
                                    accept="image/*" 
                                    label="OEL Monograph" 
                                    multiple
                                    
                                    >
            </v-file-input>
         </v-col>
         <v-col cols = 6 v-if = "getAPIBDSSafety.available_reports.includes('Occupational Health Categorization')">
            <v-file-input 
                                    accept="image/*" 
                                    label="Occupational Health Categorization" 
                                    multiple
                                    
                                    >
            </v-file-input>
         </v-col>
         <v-col cols = 6 v-if = "getAPIBDSSafety.available_reports.includes('Investigators Brochure')">
            <v-file-input 
                                    accept="image/*" 
                                    label="Investigator's Brochure" 
                                    multiple
                                    
                                    >
            </v-file-input>
      </v-col>
 </v-row>
 <v-row>
    <v-col>
        <p><i>If an OEL Monograph or Occupational Health Categorization is not provided at tech transfer, Aji Bio-Pharma will require a copy of the Investigator's Brochure so that an Occupational Health Categorization can be written. </i></p>
    </v-col>
  </v-row>
  <v-select 
    multiple
    :items = "safety_characteristics"
    label = "API/BDS Safety Characteristics(Mark all that apply)"
    v-model = "getAPIBDSSafety.safety_characteristics"
    ></v-select>
    <v-select 
    :items = "oel_range"
    label = "OEL Range"
    v-model = "getAPIBDSSafety.oel_range"
    ></v-select>

    <v-text-field
    label = "Dose"
    v-model = "getAPIBDSSafety.dose"
    >
    </v-text-field>

    <v-text-field
    label = "Molecular Weight"
    v-model = "getAPIBDSSafety.mw"
    >
    </v-text-field>

    <v-text-field
    label = "List OEL"
    v-model = "getAPIBDSSafety.list_oel"
    >
    </v-text-field>

    <v-text-field
    label = "Permissable Daily Exposure(ADE/PDE)"
    v-model = "getAPIBDSSafety.ade_pde"
    >
    </v-text-field>

    <v-text-field
    label = "Solubility (g/mL)"
    v-model = "getAPIBDSSafety.solubility"
    >
    </v-text-field>

    <v-text-field
    label = "Octanol/Water Coefficient"
    v-model = "getAPIBDSSafety.oct_water_coef"
    >
    </v-text-field>
            <v-select
            :items= yes_no
            label = "Can API be absorbed across the skin?"
            v-model = "getAPIBDSSafety.skin_absorption"
            
            ></v-select>
    <v-container v-if = "(getAPIBDSSafety.available_reports.includes('OEL Monograph') || getAPIBDSSafety.available_reports.includes( 'Occupational Health Categorization') )== false">
    <v-row>
        <v-col>
            Hazard
        </v-col>

        <v-col>
            Status
        </v-col>

        <v-col>
            Has this been tested
        </v-col>

        <v-col>
            NOAEL or LOAEL
        </v-col>
        <v-col>
            Exposure Limit
        </v-col>
    </v-row>

    <v-row>
        <v-col>Toxic</v-col>
        <v-col><v-select
            :items= yes_no
            v-model = "getAPIBDSSafety.hazards.toxic.status"
            ></v-select></v-col>
        <v-col><v-select
            :items= tested
            v-model = "getAPIBDSSafety.hazards.toxic.tested"
            ></v-select></v-col>
        <v-col><v-select
            :items= noael_loael
            v-model = "getAPIBDSSafety.hazards.toxic.noael_loael"
            ></v-select></v-col>
        <v-col><v-text-field 
            label = "Enter Exposure Limit"
            v-model = "getAPIBDSSafety.hazards.toxic.exposure_limit"
            >
            </v-text-field></v-col>    
    </v-row>
    <v-row>
        <v-col>Genotoxic</v-col>
        <v-col><v-select
            :items= yes_no
            v-model = "getAPIBDSSafety.hazards.genotoxic.status"
            ></v-select></v-col>
        <v-col><v-select
            :items= tested
            v-model = "getAPIBDSSafety.hazards.genotoxic.tested"
            ></v-select></v-col>
        <v-col><v-select
            :items= noael_loael
            v-model = "getAPIBDSSafety.hazards.genotoxic.noael_loael"
            ></v-select></v-col>
        <v-col><v-text-field 
        label = "Enter Exposure Limit"
        v-model = "getAPIBDSSafety.hazards.genotoxic.exposure_limit"
        ></v-text-field></v-col>    
    </v-row>
    <v-row>
        <v-col>Carcinogen</v-col>
        <v-col><v-select
            :items= yes_no
            v-model = "getAPIBDSSafety.hazards.carcinogen.status"
            ></v-select></v-col>
        <v-col><v-select
            :items= tested
            v-model = "getAPIBDSSafety.hazards.carcinogen.tested"
            ></v-select></v-col>
        <v-col><v-select
            :items= noael_loael
            v-model = "getAPIBDSSafety.hazards.carcinogen.noael_loael"
            ></v-select></v-col>
        <v-col><v-text-field 
        label = "Enter Exposure Limit"
        v-model = "getAPIBDSSafety.hazards.carcinogen.exposure_limit"
        
        ></v-text-field></v-col>    
    </v-row>
    <v-row>
        <v-col>Reproductive Toxin</v-col>
        <v-col><v-select
            :items= yes_no
            v-model = "getAPIBDSSafety.hazards.reproductive_toxin.status"
            ></v-select></v-col>
        <v-col><v-select
            :items= tested
            v-model = "getAPIBDSSafety.hazards.reproductive_toxin.tested"
            ></v-select></v-col>
        <v-col><v-select
            :items= noael_loael
            v-model = "getAPIBDSSafety.hazards.reproductive_toxin.noael_loael"
            ></v-select></v-col>
        <v-col><v-text-field 
        label = "Enter Exposure Limit"
        v-model = "getAPIBDSSafety.hazards.reproductive_toxin.exposure_limit"
        ></v-text-field></v-col>    
    </v-row>
    <v-row>
        <v-col>Teratogen</v-col>
        <v-col><v-select
            :items= yes_no
            v-model = "getAPIBDSSafety.hazards.teratogen.status"
            ></v-select></v-col>
        <v-col><v-select
            :items= tested
            v-model = "getAPIBDSSafety.hazards.teratogen.tested"
            ></v-select></v-col>
        <v-col><v-select
            :items= noael_loael
            v-model = "getAPIBDSSafety.hazards.teratogen.noael_loael"
            ></v-select></v-col>
        <v-col><v-text-field 
        label = "Enter Exposure Limit"
        v-model = "getAPIBDSSafety.hazards.teratogen.exposure_limit"
        ></v-text-field></v-col>    
    </v-row>
    <v-row>
        <v-col>Sensitizer</v-col>
        <v-col><v-select
            :items= yes_no
            v-model = "getAPIBDSSafety.hazards.sensitizer.status"
            ></v-select></v-col>
        <v-col><v-select
            :items= tested
            v-model = "getAPIBDSSafety.hazards.sensitizer.tested"
            ></v-select></v-col>
        <v-col>Type: </v-col>
        <v-col><v-select
            :items= sensitizer
            v-model = "getAPIBDSSafety.hazards.sensitizer.type"
            ></v-select></v-col>    
    </v-row>
    </v-container>
        </div>
</template>

<script>
import { mapGetters } from 'vuex'
  

export default {
    computed: mapGetters(['getAPIBDSSafety']),
    
    data() {
    return{
    //select field items
     available_reports: ["Safety Data Sheets","OEL Monograph","Occupational Health Categorization","Investigators Brochure"],
     safety_characteristics: ["Radioactive", "DEA Controlled", "Penicillin", "Beta-Lactam", "Cephalosporin", "Spores", "Hormone"],
     oel_range:["greater than  500 \u00B5g/m³", "10 \u00B5g/m³ - 500 \u00B5g/m³", "1 \u00B5g/m³ - 10 \u00B5g/m³", "5 ng/m³ - 1 \u00B5g/m³", "less than 5 ng/m³"],
     yes_no: [ 'Yes', 'No', 'Unknown' ] ,
     tested: ["Tested", "Theoretical"],
     noael_loael: ["LOAEL","NOAEL"],
     sensitizer: ["Skin", "Respiratory"],
     //Input data
     api_bds_safety_info: {
        available_reports: [],
        safety_characteristics: [],
        oel_range: "",
        dose: "",
        mw:"",
        list_oel:"",
        ade_pde: "",
        solubility:"",
        oct_water_coef: "",
        skin_absorption:"",
        hazards: {
            toxic:{
                status:"",
                tested:"",
                noael_loael:"",
                exposure_limit:""

            },
            genotoxic:{
                status:"",
                tested:"",
                noael_loael:"",
                exposure_limit:""

            },
            carcinogen:{
                status:"",
                tested:"",
                noael_loael:"",
                exposure_limit:""

            },
            reproductive_toxin:{
                status:"",
                tested:"",
                noael_loael:"",
                exposure_limit:""

            },
            teratogen:{
                status:"",
                tested:"",
                noael_loael:"",
                exposure_limit:""

            },
            sensitizer:{
                status:"",
                tested:"",
                type:""

            }

        }
     }
  }
  },
methods: {
			
			
}
  

}
</script>

<style scoped>

</style>