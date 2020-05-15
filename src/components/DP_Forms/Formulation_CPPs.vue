<template>
<div>
    <v-container>
        <v-row class="text-center font-weight-bold" > 
             <!--<v-col cols = 1>Step</v-col>-->
             <v-col cols = 4>CPP Description</v-col>
             <v-col cols = 2> Target</v-col>
             <v-col cols = 2>Upper Limit</v-col>
             <v-col cols = 2>Lower Limit</v-col>
             <v-col cols = 2>Units</v-col>
        </v-row>

        <v-row v-for = "cpp in getCPPs.formulation_cpps" v-bind:key = "cpp.index">
                <!--<v-col text-align-center cols = 1>
                        <strong><p style = "position: relative; width: 100%; height: 100%; margin: auto; padding-top:30%; text-align: center; font-size: 16px; ">{{getState.formulation.indexOf(getState.formulation.find(step => {return step.step_uid === cpp.step_uid}))+1}}</p></strong>
                </v-col>-->
                <v-col cols = 4>
                    <v-text-field
                    label = "Description"
                    v-model = cpp.description
                    >
                    </v-text-field>
                </v-col>
                <v-col cols = 2>
                    <v-text-field
                    label = "Target"
                    v-model = cpp.target
                    type = "number"
                    >
                    </v-text-field>
                </v-col>
                 <v-col cols = 2>
                    <v-text-field
                    label = "CPP Lower Limit"
                    v-model = cpp.lower_limit
                    type = "number"
                    >
                    </v-text-field>
                </v-col>
                <v-col cols = 2>
                    <v-text-field
                    label = "CPP Upper Limit"
                    v-model = cpp.upper_limit
                    type = "number"
                    >
                    </v-text-field>
                </v-col>  
                <v-col cols = 2>
                    <v-select
                    label = "Units"
                    v-model = cpp.units
                    :items = units
                    append-outer-icon = "mdi-delete"
                    @click:append-outer = "remove_component(getCPPs.formulation_cpps.indexOf(cpp))"
                    >
                    </v-select>
                </v-col>
        </v-row>
        <!--<v-btn depressed @click = "add_component">
              <span>Add CPP</span>
              <v-icon right>mdi-plus-box</v-icon>
        </v-btn>-->
    </v-container>
    
</div>
  
</template>

<script>
import { mapGetters } from 'vuex'


export default {

    name: "CPPs",
    computed: mapGetters(['getCPPs','getState']),
    components: {
    
  },
  data(){
			return {
                //Select Options
                units: ["L","mL","g","mg","kg","mg/mL","g/L","pH","min","C"]
                }         
      },
  methods: {
      add_component: function(){
          this.getCPPs.formulation_cpps.push(
              {
                        description: "",
                        target: "",
                        upper_limit: "",
                        lower_limit: "",
                        units: ""
                         }
          );
      },
      remove_component: function(index){
          this.getCPPs.formulation_cpps.splice(index,1);
      }


  }

}
</script>

<style>

</style>