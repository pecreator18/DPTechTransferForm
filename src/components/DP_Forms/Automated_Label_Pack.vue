<template>
<div>

    <h2 >Automated Packaging and Labeling</h2>
    <v-container>
    
    <v-row>
    <v-col>
    <v-select
    label = "Cap Coding Required(Vials Only)?"
    :items = yes_no
    v-model = getAutoPack.cap_coding
    v-if = "getState.fill_specifications.fill_type == 'Vial'"
    ></v-select>
    </v-col>
    <v-col>
        <v-select
        label = "Opaque White Unit Label Acceptable(Only applicable for vials)?"
        :items = yes_no
        v-model = getAutoPack.opaque_label
        v-if = "getState.fill_specifications.fill_type == 'Vial'"
    ></v-select>
    </v-col>
    </v-row>
    
    <v-row>
        <v-col>
            <v-select
            label = "Side Loading and Reverse Tuck Configuration Compatible?"
            :items = yes_no
            v-model = getAutoPack.side_loading
            >
            </v-select>
        </v-col>
        <v-col>
            <v-select
            label = "Tamper Proof Seal Required?"
            :items = yes_no
            v-model = getAutoPack.tamper_proof
            >
            </v-select>
        </v-col>
    </v-row>
    
    <v-row>
        <v-col>
                <v-text-field
                label = "No. of Product Inserts(IFU) Required per Carton"
                type = number
                v-model = getAutoPack.num_inserts
                ></v-text-field>
        </v-col>
        <v-col>
                <v-text-field
                label = "No. of Units Required per Carton"
                type = number
                v-model = getAutoPack.num_units
                ></v-text-field>
        </v-col>
    </v-row>
    <v-row>
        <v-col>Dimensions of Closed Carton</v-col>
        <v-col>
                <v-text-field
                label = "Width(inch.)"
                type = number
                v-model = getAutoPack.carton_dimensions.width
                ></v-text-field>
        </v-col>
        <v-col>
                <v-text-field
                label = "Length(inch.)"
                type = number
                v-model = getAutoPack.carton_dimensions.length
                ></v-text-field>
        </v-col>
        <v-col>
                <v-text-field
                label = "Height(inch.)"
                type = number
                v-model = getAutoPack.carton_dimensions.height
                ></v-text-field>
        </v-col>
    </v-row>
    <v-row>
         <v-col>
            <v-select
            label = "Preferred Pallet Configuration"
            :items = pallet_configurations
            v-model = getAutoPack.pallet_configuration
            >
            </v-select>
        </v-col>
        <v-col >
                <v-text-field
                label = "Other Pallet Configuration"
                v-model = getAutoPack.other_pallet_configuration
                v-if = "getAutoPack.pallet_configuration == 'Other'"
                ></v-text-field>
        </v-col>
    </v-row>
    <v-row>
         <v-col>
            <v-select
            label = "Preferred Shipping Method"
            :items = shipping_methods
            v-model = getAutoPack.shipping_method
            >
            </v-select>
        </v-col>
        <v-col>
                <v-text-field
                label = "Other Shipping Method"
                v-model = getAutoPack.other_shipping_method
                v-if = "getAutoPack.shipping_method == 'Other'"
                ></v-text-field>
        </v-col>
    </v-row>
    </v-container>
</div>
  
</template>

<script>
import { mapGetters } from 'vuex'


export default {

    name: "Automated Labeling and Packaging",
    computed: mapGetters(['getAutoPack', 'getState']),
    
    components: {
    
  },
  data(){
			return {
                //v-select options
                yes_no: [ 'Yes', 'No'],
                pallet_configurations: ['6x4 Aji Bio-Pharma Standard', 'Unknown', 'Other'],
                shipping_methods: ['C-Safe Aji Bio-Pharma Standard','Other'],
                
      }
  
  },
  methods: {}

}
</script>

<style>

</style>