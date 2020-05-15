<template>
  
  <v-app >
    <Navbar @change_form = "selectform"/>
    
    <v-content v-if = "getState.authentication_data.client_portal_questionaire">
        <process_overview/>
    </v-content>
   
    <v-content v-else class = "ma-4" elevation = 2>
        <v-scale-transition>
          <home_icon v-if= "home"/>
      </v-scale-transition>
      <!--
        <v-scale-transition>
        <process_overview v-if= "process_overview"/>
      </v-scale-transition>
      -->
      <v-scale-transition>
        <program_info v-if= "program_info"/>
      </v-scale-transition>

      <v-scale-transition>
        <manufacturing v-if= "manufacturing"/>
      </v-scale-transition>

      <v-scale-transition>
        <logistics  v-if= "logistics"/>
      </v-scale-transition>

      <v-scale-transition>
        <safety v-if= "safety"/>
      </v-scale-transition>

      <v-scale-transition>
        <qc_testing v-if= "qc_testing"/>
      </v-scale-transition>
      
      <v-scale-transition>
        <quality v-if= "quality"/>
      </v-scale-transition>

      <v-scale-transition>
        <uploads v-if= "file_uploads"/>
      </v-scale-transition>

    <!--
    <Basic_Info v-if = "Basic_Info" @client_info_complete = "selectPath"/>
    <DP_Info v-if="DP_Services" />
    <div v-if="Development_Services"><h1>Development</h1><br><h5>Questionaire in development</h5></div>
    <div v-if="DS_Services"><h1 > Drug Substance </h1><br><h5>Questionaire in development</h5></div>
    <div v-if="Peptide_Services"><h1 > Peptide </h1><br><h5>Questionaire in development</h5></div>
    <div v-if="SmallMolecule_Services"><h1 > Small Molecule </h1><br><h5>Questionaire in development</h5></div>
    <div v-if="ADC_Services"><h1 > ADC </h1><br><h5>Questionaire in development</h5></div>
    -->

    </v-content>
  </v-app>
  
</template>

<script>
//import Basic_Info from './components/Basic_Info/Basic_Info.vue'
//import DP_Info from './components/DP_Forms/DP_Info.vue'
import Navbar from  './components/Navbar.vue'
import process_overview from './components/Process_Overview.vue'
import program_info from  './components/Client_Program_Info.vue'
import logistics from './components/Logistics.vue'
import safety from './components/Health_and_Safety.vue'
import manufacturing from './components/Manufacturing.vue'
import qc_testing from './components/QC_Testing.vue'
import home_icon from './components/Home.vue'
import uploads from './components/Uploads.vue'
import quality from  './components/Quality.vue'
//import sign_in from './components/Sign_In.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'App',
  computed: mapGetters(['getState']),

  components: {
    //Basic_Info,
    //DP_Info,
    Navbar,
    program_info,
    logistics,
    safety,
    manufacturing,
    qc_testing,
    home_icon,
    uploads,
    process_overview,
    quality
    //sign_in
  },
  
  data: () => ({

        //Boolean variable to show or hide the various forms within v-content.
        process_overview: false,
        program_info: false,
        logistics:false,
        safety:false,
        manufacturing: false,
        qc_testing: false,
        file_uploads: false,
        home:true,
        quality:false,

        //Variable to contain the currently displayed form within v-content.
        displayed: "Home",

        Basic_Info:false,
        DP_Services:false,
        DS_Services:false,
        Development_Services:false,
        ADC_Services:false,
        Peptide_Services:false,
        SmallMolecule_Services:false,
        authenticated:false,
        /*items: [
        { title: 'Process Overview', icon: 'mdi-view-dashboard' },
        { title: 'Program Information', icon: 'mdi-image' },
        { title: 'Manufacturing', icon: 'mdi-help-box' },
        { title: 'Logistics', icon: 'mdi-help-box' },
        { title: 'Health and Safety', icon: 'mdi-help-box' },
        { title: 'Quality Control Testing', icon: 'mdi-help-box' },
        { title: 'Document Uploads', icon: 'mdi-help-box' }
      ],*/
  }),
  methods:{
  selectform(e) {
      //Reset All Service Logic Gates
      switch(this.displayed){
       //Set Conditional Rendering based on the selected service offering.
            case "Process Overview":
              this.process_overview = false;
              break
            case "Program Information":
              this.program_info = false;
              break
            case "Manufacturing":
              this.manufacturing = false;
              break
            case "Logistics":
              this.logistics = false;
              break
            case "Health and Safety":
              this.safety = false;
              break
            case "Quality Control Testing":
              this.qc_testing = false;
              break
            case "Home":
              this.home = false;
              break
            case "Document Uploads":
              this.file_uploads = false;
              break
            case "Quality/Compliance":
              this.quality = false;
              break
        }
      switch(e){
      //Set Conditional Rendering based on the selected service offering.
            case "Process Overview":
              this.process_overview = true;
              break
            case "Program Information":
              this.program_info = true;
              break
            case "Manufacturing":
              this.manufacturing = true;
              break
            case "Logistics":
              this.logistics = true;
              break
            case "Health and Safety":
              this.safety = true;
              break
            case "Quality Control Testing":
              this.qc_testing = true;
              break
            case "Home":
              this.home = true;
              break
            case "Document Uploads":
              this.file_uploads = true;
              break
            case "Quality/Compliance":
              this.quality = true;
              break
        }
    this.displayed = e;
      
  },
  
    selectPath: function(){
      //Reset All Service Logic Gates
        this.Basic_Info = false;
        this.DP_Services = false;
        this.DS_Services = false;
        this.Development_Services = false;
        this.ADC_Services = false;
        this.Peptide_Services = false;
        this.SmallMolecule_Services = false;

      switch(this.getState.Service.service){//Set Conditional Rendering based on the selected service offering.
            case "ADC Services":
              this.ADC_Services = true;
              break;
            case "Development Services":
              this.Development_Services = true;
              break;
            case "Drug Product Manufacturing":
              this.DP_Services = true;
              break;  
            case "Large Molecule Manufacturing":
              this.DS_Services = true;
              break;
            case "Peptide Synthesis":
              this.Peptide_Services = true;
              break;
            case "Small Molecule Manufacturing":
              this.SmallMolecule_Services = true;
              break;
        }

  },
  //Function to navigate back to basic information entry from Tech Transfer questions
    basic:function(){
        this.Basic_Info = true;
        this.DP_Services = false;
        this.DS_Services = false;
        this.Development_Services = false;
        this.ADC_Services = false;
        this.Peptide_Services = false;
        this.SmallMolecule_Services = false;
    },
    user_authenticated: function(){
        this.authenticated = true
    }
			}
};
</script>
