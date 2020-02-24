<template>
<div>

    <h2 >Commercial Serialization</h2>
    <v-container>
        <v-row>
            <v-col>
                <v-text-field
                    label = "Please describe any additional information required in the product bar code.(2D barcode, GTIN, etc.)"
                    v-model = getComSerialInfo.additional_information
                ></v-text-field>

            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-select multiple
                    label = "Required Serialization Levels"
                    :items = serialization_levels
                    v-model = getComSerialInfo.serialization_levels
                ></v-select>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-select
                    label = "Serial Number Provider Preference"
                    :items = serial_number_providers
                    v-model = getComSerialInfo.serial_number_provider
                ></v-select>
            </v-col>
            <v-col>
                <v-text-field
                    label = "Other Serial Number Provider"
                    v-if = " getComSerialInfo.serial_number_provider == 'Other'"  
                ></v-text-field>
            </v-col>
        </v-row>
    </v-container>
</div>
  
</template>

<script>
import { mapGetters } from 'vuex'


export default {

    name: "Commercial Serialization",
    computed: mapGetters(['getComSerialInfo']),
    
    components: {
    
  },
  data(){
			return {
                //v-select options
                serialization_levels: ['Unit of Sale', 'Multi-Pack','Case', 'Pallet'],
                serial_number_providers: ['QAD Aji Bio-Pharma Provider', 'TracerLink', 'Other'],         
      }
  
  },
  methods: {}

}
</script>

<style>

</style>