<template>

  <v-app>
    <router-view></router-view>
    <!--
    <v-app-bar
      app
      color="secondary"
      dark
    >
      <div class="d-flex align-center">
        
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src= "./assets/Aji_BioPharma.jpg"
          transition="scale-transition"
          width="200"
        />
        <p align-center>Client Tech Transfer Form</p>
        <v-spacer>    </v-spacer>
        <div style="padding: 25px;">
        <v-btn align-center v-if = "!Basic_Info" class = "primary" v-on:click = "basic">Client Information</v-btn>
        </div>
        <v-spacer>    </v-spacer>
        <a href="#">Signcd Out</a>
      </div>

    </v-app-bar>

    <v-content class = "ma-4" elevation = 2>
    <Basic_Info v-if = "Basic_Info" @client_info_complete = "selectPath"/>
    <DP_Info v-if="DP_Services" />
    <div v-if="Development_Services"><h1>Development</h1><br><h5>Questionaire in development</h5></div>
    <div v-if="DS_Services"><h1 > Drug Substance </h1><br><h5>Questionaire in development</h5></div>
    <div v-if="Peptide_Services"><h1 > Peptide </h1><br><h5>Questionaire in development</h5></div>
    <div v-if="SmallMolecule_Services"><h1 > Small Molecule </h1><br><h5>Questionaire in development</h5></div>
    <div v-if="ADC_Services"><h1 > ADC </h1><br><h5>Questionaire in development</h5></div>
    </v-content>-->
    
  </v-app>
  
</template>

<script>
//import Basic_Info from './components/Basic_Info/Basic_Info.vue'
//import DP_Info from './components/DP_Forms/DP_Info.vue'
//import sign_in from './components/Sign_In.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'App',
  computed: mapGetters(['getState']),

  components: {
    //Basic_Info,
    //DP_Info,
    //sign_in
  },
  
  data: () => ({
        Basic_Info:true,
        DP_Services:false,
        DS_Services:false,
        Development_Services:false,
        ADC_Services:false,
        Peptide_Services:false,
        SmallMolecule_Services:false,
        authenticated:false
  }),
  methods:{
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
