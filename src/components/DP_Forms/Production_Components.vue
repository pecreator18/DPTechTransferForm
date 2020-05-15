<template>
<div>

    <h2 >Production Components</h2>
    <!--v-select
    label = "Pleasse Select Drug Product Container"
    :items = containers
    v-model = getComponents.container
    >
    </v-select-->
    <v-container  v-if = "getComponents.container != ''">
        <v-row class="text-center font-weight-bold" > 
            <v-col>Component</v-col>
             <v-col>Size</v-col>
              <v-col>Description</v-col>
               <v-col> Manufacturer</v-col>
                <v-col>Manufacturer P/N</v-col>
                 <v-col>Quantity Required</v-col>
                 <v-flex md-1><v-col></v-col></v-flex>
        </v-row>
        <!--Container Row this is dynamic based on selection above-->
        <v-row class="text-center" >          
                    <v-col class="text-left" >

                        {{getComponents.container}}
                    </v-col>
                        <v-col>
                            <v-text-field
                            v-model = getComponents.container_size
                            >
                            </v-text-field>
                        </v-col> 
                        <v-col>
                            <v-text-field
                            v-model = getComponents.container_description
                            >
                            </v-text-field>
                        </v-col>
                    <v-col>
                        <v-text-field
                        v-model = getComponents.container_manufacurer
                        >
                        </v-text-field>
                    </v-col> 
            
                    <v-col>
                        <v-text-field
                        v-model = getComponents.container_manufacturer_pn
                        >
                        </v-text-field>
                    </v-col> 

                    <v-col>
                        <v-text-field
                        type = "number"
                        v-model = getComponents.container_quantity_required
                        >
                        </v-text-field>
                    </v-col> 


                <v-col>
                </v-col>
        </v-row>
        <!--Seal Row-->
        <v-row v-if = "getComponents.container == 'Vial'">     
            <v-col>
                Seal
            </v-col>
                <v-col>
                    <v-text-field
                    v-model = getComponents.seal_size
                    >
                    </v-text-field>
                </v-col> 
                
                
                <v-col>
                    <v-text-field
                    v-model = getComponents.seal_description
                    >
                    </v-text-field>
                </v-col>
                
                
                <v-col>
                    <v-text-field
                    v-model = getComponents.seal_manufacurer
                    >
                    </v-text-field>
                </v-col> 
                
                
                <v-col>
                    <v-text-field
                    v-model = getComponents.seal_manufacturer_pn
                    >
                    </v-text-field>
                </v-col> 
                
                
                <v-col>
                    <v-text-field
                    type = "number"
                    v-model = getComponents.seal_quantity_required
                    >
                    </v-text-field>
                </v-col> 
                
                
                <v-col></v-col>
        </v-row>
        <v-row>
            <v-col>
                Bioburden Reduction Filter
            </v-col>
            
            
                <v-col>
                    <v-text-field
                    v-model = getComponents.bioburden_size
                    >
                    </v-text-field>
                </v-col> 
                
                
                <v-col>
                    <v-text-field
                    v-model = getComponents.bioburden_description
                    >
                    </v-text-field>
                </v-col>
                
                
                <v-col>
                    <v-text-field
                    v-model = getComponents.bioburden_manufacurer
                    >
                    </v-text-field>
                </v-col> 
                
                
                <v-col>
                    <v-text-field
                    v-model = getComponents.bioburden_manufacturer_pn
                    >
                    </v-text-field>
                </v-col> 
                
                
                <v-col>
                    <v-text-field
                    v-model = getComponents.bioburden_quantity_required
                    type = "number"
                    >
                    </v-text-field>
                </v-col> 
                
                
                <v-col></v-col>
        </v-row>
        <v-row v-for = "row in getComponents.components" v-bind:key = "row.component">
                
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
        <v-row v-for = "row in getComponents.other_components" v-bind:key = "row.index">
            
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
                    <v-btn small color = "error" v-on:click = "remove_component(getComponents.other_components.indexOf(row))"> 
                    Remove {{index}}
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

    name: "Production Components",
    computed: mapGetters(['getComponents']),
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
          this.getComponents.other_components.push(
              {component: "", size: "", description: "", manufacturer: "", manufacturer_pn: "", quantity_required: ""}
          );
      },
      remove_component: function(index){
          this.getComponents.other_components.splice(index,1);
      }


  }

}
</script>

<style>

</style>