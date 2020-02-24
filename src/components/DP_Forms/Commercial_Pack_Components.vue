<template>
<div>

    <h2 >Commercial Packaging and Labeling Components</h2>
    <v-container>
        <v-row class="text-center font-weight-bold" > 
            <v-col >Component</v-col>
             <v-col>Size</v-col>
              <v-col>Description</v-col>
               <v-col> Manufacturer</v-col>
                <v-col>Manufacturer P/N</v-col>
                 <v-col>Quantity Required</v-col>
                 <v-flex md-1><v-col></v-col></v-flex>
        </v-row>
        <v-row v-for = "row in getCommercialComponents.components" v-bind:key = "row.component">
                
                <v-col>
                    {{row.component}}
                </v-col>
                

                
                <v-col>
                    <v-text-field
                    v-model = row.size
                    >
                    </v-text-field>
                </v-col> 
                
                <v-col>
                    <v-text-field
                    v-model = row.description
                    >
                    </v-text-field>
                </v-col> 
                
                <v-col>
                    <v-text-field
                    v-model = row.manufacturer
                    >
                    </v-text-field>
                </v-col>
                 
                <v-col>
                    <v-text-field
                    v-model = row.manufacturer_pn
                    >
                    </v-text-field>
                </v-col>
                 
                <v-col>
                    <v-text-field
                    v-model = row.quantity_required
                    type = "number"
                    >
                    </v-text-field>
                </v-col>
                
                <v-col></v-col>       
        </v-row>
        <v-row v-for = "row in getCommercialComponents.other_components" v-bind:key = "row.index">
            
                <v-col>
                    <v-text-field
                    v-model = row.component
                    >
                    </v-text-field>
                </v-col>
                
                <v-col>
                    <v-text-field
                    v-model = row.size
                    >
                    </v-text-field>
                </v-col>
                 
                <v-col>
                    <v-text-field
                    v-model = row.description
                    >
                    </v-text-field>
                </v-col>
                 
                <v-col>
                    <v-text-field
                    v-model = row.manufacturer
                    >
                    </v-text-field>
                </v-col> 
                
                <v-col>
                    <v-text-field
                    v-model = row.manufacturer_pn
                    >
                    </v-text-field>
                </v-col> 
                
                <v-col>
                    <v-text-field
                    v-model = row.quantity_required
                    type = "number"
                    >
                    </v-text-field>
                </v-col>
                
                <v-col>
                    <v-btn small color = "error" v-on:click = "remove_component(getCommercialComponents.other_components.indexOf(row))"> 
                    Remove
                    </v-btn>
                </v-col>
        </v-row>
        <v-btn class = "primary" v-on:click = "add_component"> 
            Add Component
        </v-btn>
    </v-container>
    
</div>
  
</template>

<script>
import { mapGetters } from 'vuex'


export default {

    name: "Commercial Packaging Components",
    computed: mapGetters(['getCommercialComponents']),
    components: {
    
  },
  data(){
			return {
                //v-select options
                yes_no: [ 'Yes', 'No'],
                storage_conditions: ["Ambient", "2-8 C"], 
                containers: ["Vial", "Syringe","Cartridge"],
                
                
                
      }
  
  },
  methods: {
      add_component: function(){
          this.getCommercialComponents.other_components.push(
              {component: "", size: "", description: "", manufacturer: "", manufacturer_pn: "", quantity_required: ""}
          );
      },
      remove_component: function(index){
          this.getCommercialComponents.other_components.splice(index,1);
      }


  }

}
</script>

<style>

</style>