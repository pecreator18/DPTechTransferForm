<template>
<div>
    <v-container>
        <v-row class="text-center font-weight-bold" > 
            <v-col >Process Component</v-col>
            <v-col >Excipient</v-col>
            <!--<v-col>Grade</v-col>
            <v-col> Manufacturer</v-col>
            <v-col>Manufacturer P/N</v-col>
            <v-col>Formulation Requirements(g/L)</v-col>-->
            <v-col>Total Quantity Required per Batch(g)</v-col>
            <!-- <v-flex md-1><v-col></v-col></v-flex>Column placeholder to have a remove button-->
        </v-row>
        <v-row v-for = "row in getExcipients.formulation_excipients" v-bind:key = "row.index">
                <v-col>
                    <v-text-field
                    label = "Component"
                    v-model = row.process_component
                    >
                    </v-text-field>
                </v-col>
                <v-col>
                    <v-text-field
                    v-if = "row.excipient != 'Other'"
                    label = "Excipient"
                    v-model = row.excipient
                    >
                    </v-text-field>
                    <v-text-field
                    v-else
                    label = "Excipient"
                    v-model = row.other_excipient
                    >
                    </v-text-field>
                </v-col>
                <!--
                <v-col>
                    <v-text-field
                    label = "Grade"
                    v-model = row.grade
                    >
                    </v-text-field>
                </v-col>
                 
                <v-col>
                    <v-text-field
                    label = "Manufacturer"
                    v-model = row.manufacturer
                    >
                    </v-text-field>
                </v-col>
                 
                <v-col>
                    <v-text-field
                    label = "Mfg. Part Number"
                    v-model = row.manufacturer_pn
                    >
                    </v-text-field>
                </v-col>  
                
                <v-col>
                    <v-text-field
                    label = "Formulation Requirement"
                    v-model = row.formulation_requirement
                    type = "number"
                    >
                    </v-text-field>
                </v-col>-->
                <v-col>
                    <v-text-field
                    label = "Total Quantity"
                    v-model = row.total_quantity
                    type = "number"
                    append-outer-icon = "mdi-delete"
                    @click:append-outer = "remove_component(getExcipients.formulation_excipients.indexOf(row))"
                    >
                    </v-text-field>
                </v-col>
        </v-row>
        <!--<v-btn depressed @click = "add_component">
              <span>Add Excipeint</span>
              <v-icon right>mdi-plus-box</v-icon>
        </v-btn>-->  
    </v-container>
    
</div>
  
</template>

<script>
import { mapGetters } from 'vuex'


export default {

    name: "Excipeints",
    computed: mapGetters(['getExcipients']),
    components: {
    
  },
  data(){
			return {
                    
                    
                }

                
      },
  methods: {
      add_component: function(){
          this.getExcipients.formulation_excipients.push(
              {excipient: "", grade: "", manufacturer: "", manufacturer_pn: "", formulation_requirement: "", total_quantity:""}
          );
      },
      remove_component: function(index){
          this.getExcipients.formulation_excipients.splice(index,1);
      }


  }

}
</script>