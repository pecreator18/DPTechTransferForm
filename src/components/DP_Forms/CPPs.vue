<template>
<div>

    <h2 >Critical Process Parameters</h2>
    <h5>Please provide all critical process parameters(CPP) required.</h5>
    <v-container>
        <v-row class="text-center font-weight-bold" > 
            <v-col >Process</v-col>
             <v-col>CPP Description</v-col>
               <v-col> Target</v-col>
                <v-col>Upper Limit</v-col>
                 <v-col>Lower Limit</v-col>
                 <v-col>Units</v-col>
                 <v-flex md-1><v-col></v-col></v-flex><!-- Column placeholder to have a remove button-->
        </v-row>
        <v-row v-for = "cpp in getCPPs.cpps" v-bind:key = "cpp.index">
            
                <v-col>
                    <v-select
                    label = "Process"
                    v-model = cpp.process
                    :items = processes
                    >
                    </v-select>
                </v-col>
                <v-col>
                    <v-text-field
                    label = "Description"
                    v-model = cpp.description
                    >
                    </v-text-field>
                </v-col>
                 
                <v-col>
                    <v-text-field
                    label = "Target"
                    v-model = cpp.target
                    type = "number"
                    >
                    </v-text-field>
                </v-col>
                 
                <v-col>
                    <v-text-field
                    label = "CPP Upper Limit"
                    v-model = cpp.upper_limit
                    type = "number"
                    >
                    </v-text-field>
                </v-col>  
                
                <v-col>
                    <v-text-field
                    label = "CPP Lower Limit"
                    v-model = cpp.lower_limit
                    type = "number"
                    >
                    </v-text-field>
                </v-col>
                <v-col>
                    <v-select
                    label = "Units"
                    v-model = cpp.units
                    :items = units
                    >
                    </v-select>
                </v-col>
                
                <v-col>
                    <v-btn small color = "error" v-on:click = "remove_component(getCPPs.cpps.indexOf(row))"> 
                    Remove
                    </v-btn>
                </v-col>
        </v-row>
        <v-btn class = "primary" v-on:click = "add_component"> 
            Add CPP
        </v-btn>
    </v-container>
    
</div>
  
</template>

<script>
import { mapGetters } from 'vuex'


export default {

    name: "CPPs",
    computed: mapGetters(['getCPPs']),
    components: {
    
  },
  data(){
			return {
                //Select Options
                units: ["L","mL","g","mg","kg","mg/mL","g/L"],
                processes: ["Formulation", "Filtration", "Aseptic Fill", "Visual Inspection"]
                }         
      },
  methods: {
      add_component: function(){
          this.getCPPs.cpps.push(
              {
                        process: "",
                        description: "",
                        target: "",
                        upper_limit: "",
                        lower_limit: "",
                        units: ""
                         }
          );
      },
      remove_component: function(index){
          this.getCPPs.cpps.splice(index,1);
      }


  }

}
</script>

<style>

</style>