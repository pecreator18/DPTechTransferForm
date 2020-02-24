<template>
<div>

    <h2 >Required Excipients</h2>
    <v-container>
        <v-row class="text-center font-weight-bold" > 
            <v-col >Excipient</v-col>
             <v-col>Grade</v-col>
               <v-col> Manufacturer</v-col>
                <v-col>Manufacturer P/N</v-col>
                 <v-col>Formulation Requirements(g/L)</v-col>
                 <v-col>Total Quantity Required per Batch(g)</v-col>
                 <v-flex md-1><v-col></v-col></v-flex><!-- Column placeholder to have a remove button-->
        </v-row>
        <v-row v-for = "row in getExcipients.excipients" v-bind:key = "row.index">
            
                <v-col>
                    <v-text-field
                    label = "Excipient"
                    v-model = row.excipient
                    >
                    </v-text-field>
                </v-col>
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
                </v-col>
                <v-col>
                    <v-text-field
                    label = "Total Quantity"
                    v-model = row.total_quantity
                    type = "number"
                    >
                    </v-text-field>
                </v-col>
                
                <v-col>
                    <v-btn small color = "error" v-on:click = "remove_component(getExcipients.excipients.indexOf(row))"> 
                    Remove
                    </v-btn>
                </v-col>
        </v-row>
        <v-btn class = "primary" v-on:click = "add_component"> 
            Add Excipient
        </v-btn>
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
          this.getExcipients.excipients.push(
              {excipient: "", grade: "", manufacturer: "", manufacturer_pn: "", formulation_requirement: "", total_quantity:""}
          );
      },
      remove_component: function(index){
          this.getExcipients.excipients.splice(index,1);
      }


  }

}
</script>

<style>

</style>