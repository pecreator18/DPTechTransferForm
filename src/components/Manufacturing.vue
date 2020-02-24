<template>
        <v-container>
                    <v-tabs>
                        
                        <v-tab>Formulation</v-tab>
                        <v-tab >Filtration</v-tab>
                        <v-tab >Terminal Sterilization</v-tab>
                        <v-tab >Lyophilization</v-tab>
                        <v-tab >Inspection</v-tab>
                        <v-tab >Packaging and Labeling</v-tab>
                        <v-tab >Commercial Serialization</v-tab>
                        <v-tab >Validation</v-tab>
                        <v-tab >Production Components</v-tab>
                        <v-tab >CPP</v-tab>

                              <v-tab-item>
                                  <Formulation_Info />
                                  <Required_Excipients/>
                              </v-tab-item>
                              <v-tab-item>
                                  <Filtration_Info />
                              </v-tab-item>
                              <v-tab-item>
                                  <Terminal_Info/>
                              </v-tab-item>
                              <v-tab-item>
                                  <Lyo_Info/>
                              </v-tab-item>
                              <v-tab-item>
                                  <Inspection_Info/>
                              </v-tab-item>
                              <v-tab-item>
                                  <Pack_Label_Info/>
                                  <Auto_Label_Pack/>
                                  <Commercial_Pack_Components/>
                              </v-tab-item>
                              <v-tab-item>
                                  <Commercial_Serialization/>
                              </v-tab-item>
                              <v-tab-item>
                                  <Qualification_Validation/>
                              </v-tab-item>
                              <v-tab-item>
                                  <Production_Components/> 
                              </v-tab-item>
                              <v-tab-item>
                                  <CPPs/>
                              </v-tab-item>
                              
                        </v-tabs>
        </v-container>
</template>
<script>

import { mapGetters } from 'vuex'
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

export default {
    name: "Manufacturing",
    computed: mapGetters(['getServices']),
    components: {
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
        CPPs
  },
  data(){
			return {
            }
  
  },
  methods: {

    
  },

}
</script>

<style>

</style>