<template>
<div>
    <v-container>
        <v-row class="text-center font-weight-bold" > 
             <v-col cols = 4>Waste Description</v-col>
             <v-col cols = 4> Composition</v-col>
             <v-col cols = 4>Volume(L)</v-col>
        </v-row>

        <v-row v-for = "waste in getState.formulation_waste_streams" v-bind:key = "waste.index">
                <v-col cols = 4>
                    <v-text-field
                    label = "Description"
                    v-model = waste.description
                    >
                    </v-text-field>
                </v-col>
                <v-col cols = 4>
                    <v-text-field
                    label = "Composition"
                    v-model = waste.composition
                    >
                    </v-text-field>
                </v-col>
                <v-col cols = 4>
                    <v-text-field
                    label = "Volume"
                    v-model = waste.volume
                    type = "number"
                    append-outer-icon = "mdi-delete"
                    @click:append-outer = "remove_component(getCPPs.formulation_cpps.indexOf(cpp))"
                    >
                    </v-text-field>
                </v-col>
        </v-row>
        <v-btn depressed @click = "add_component">
              <span>Add Waste Stream</span>
              <v-icon right>mdi-plus-box</v-icon>
        </v-btn>
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
                
                }         
      },
  methods: {
      add_component: function(){
          this.getState.formulation_waste_streams.push(
              {
                        description: "",
                        composition: "",
                        volume: ""
                         }
          );
      },
      remove_component: function(index){
          this.getState.formulation_waste_streams.splice(index,1);
      }


  }

}
</script>

<style>

</style>