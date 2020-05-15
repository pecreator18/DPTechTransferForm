<template>
<div>
    <v-container>
      <v-row>
            <v-col cols = 12>
                <b><i>Aseptic Fill Overview:</i></b>
                <p>
                    Drug Product can be filled in almost any volume and vial size. Our state-of-the-art line of automated filling machines ensure that each vial of your drug product is filled
                    precisely to your fill volume specification. In this module please provide us information on your fill specifications and your fill container components.  
                </p>
                <br>
            </v-col>
            <!--<v-col cols = 6>
                  <video width="320" height="240" controls>
                  <source src="movie.mp4" type="video/mp4">
                  <source src="movie.ogg" type="video/ogg">
                    Your browser does not support the video tag.
                  </video>
            </v-col>-->
        </v-row>
        <h2>Fill Processing</h2>
        <v-row>
                <v-col>
                        <v-select 
                        label = "Fill Type"
                        :items = fill_type
                        v-model = "getState.fill_specifications.fill_type"
                        disabled
                        >
                        </v-select>
                </v-col>
                <!--<v-col>
                        <v-select 
                        label = "Additional Fill Processing"
                        :items = additional_fill_processing
                        v-model = "getState.fill_specifications.additional_fill_process"
                        >
                        </v-select>
                </v-col>-->
                <v-col>
                    <v-select 
                    label = "Final Product State"
                    :items = final_product_state
                    v-model = "getState.fill_specifications.selected_fp_state"
                    disabled
                    >
                    </v-select>
                </v-col>
                <v-col>
                        <v-select 
                        label = "Fill Sterility"
                        :items = fill_sterility
                        v-if = "getState.fill_specifications.selected_fp_state == 'Liquid'"
                        v-model = "getState.fill_specifications.selected_fill_sterility"
                        disabled
                        >
                        </v-select>
                    </v-col>
                </v-row> 
            <v-row>
                <v-col>
                    <v-text-field 
                    label = "Target Batch Size(Units)"
                    type = "number"
                    v-model = "getState.fill_specifications.batch_size"
                    disabled
                    >
                    </v-text-field>
                </v-col>
                <v-col>
                    <v-text-field 
                    label = "Number of Batches"
                    type = "number"
                    v-model = "getState.fill_specifications.number_of_fills"
                    disabled
                    >
                    </v-text-field>
                </v-col>
            </v-row>
            
            <h2>Fill Specifications</h2>
            
                        <v-row>
                            <v-col  cols = 4>
                                <h4>Final Drug Product Dosage Per Vial(mg):</h4>
                            </v-col>
                            <v-col cols = 4>
                                <v-text-field 
                                label = "Target Dosage (mg)"
                               type = "number">
                                </v-text-field>
                            </v-col>
                            <v-col cols = 2>
                                <v-text-field 
                                label = "Lower Limit (mg)"
                                type = "number">
                                </v-text-field>
                            </v-col>
                            <v-col cols = 2>
                                <v-text-field 
                                label = "Upper Limit (mg)"
                                type = "number">
                                </v-text-field>
                            </v-col>
                        </v-row>

            <h2>Fill Components</h2>

            <v-row class="text-center font-weight-bold" > 
            <v-col>Component</v-col>
             <v-col>Size</v-col>
              <v-col>Description</v-col>
               <v-col> Manufacturer</v-col>
                <v-col>Manufacturer P/N</v-col>
                 <!--<v-col>Quantity Required</v-col>
                 <v-flex md-1><v-col></v-col></v-flex>-->
        </v-row>
        </v-container>
        <v-container v-if = "getState.fill_specifications.fill_type === 'Syringe'" >
            <v-row  v-for = "row in getState.fill_specifications.syringe_fill_components" v-bind:key = "row.index">
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
                 
                <!--<v-col>
                    <v-text-field
                    v-model = row.quantity_required
                    type = "number"
                    >
                    </v-text-field>
                </v-col>
                
                <v-col></v-col>-->       
            </v-row>
        </v-container>

        <v-container v-if = "getState.fill_specifications.fill_type === 'Vial'" >
         <v-row v-for = "row in getState.fill_specifications.vial_fill_components" v-bind:key = "row.index">
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
                 
                <!--<v-col>
                    <v-text-field
                    v-model = row.quantity_required
                    type = "number"
                    >
                    </v-text-field>
                </v-col>
                
                <v-col></v-col>-->       
        </v-row>
        </v-container>
        <v-container v-if = "getState.fill_specifications.fill_type === 'Cartridge'" >
         <v-row v-for = "row in getState.fill_specifications.cartridge_fill_components" v-bind:key = "row.index">
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
                 
                <!--<v-col>
                    <v-text-field
                    v-model = row.quantity_required
                    type = "number"
                    >
                    </v-text-field>
                </v-col>
                
                <v-col></v-col>-->       
        </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
computed: mapGetters(['getAuthenticationData','getComponents','getState']),

    data: () => ({
        //v-select items
        final_product_state: ["Liquid", "Solid(Lyophilized)"],
        fill_sterility: ["Aseptic Fill Only", "Aseptic Fill with Terminal Sterilization"],
        fill_type: ["Vial", "Syringe", "Cartridge"],
        additional_fill_processing: ["Terminal Sterilization", "Lyophilization"],
        
  }),
  methods:{
      

  }

}
</script>
<style scoped>

</style>
