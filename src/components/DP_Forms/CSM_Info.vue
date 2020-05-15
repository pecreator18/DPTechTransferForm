<template>
      <div id="CSM">
          <h3>Client API/BDS Information</h3>
          <h5>Please provide as much infomation about the API/BDS as possible. </h5> 
          <v-row>
            <v-col>
                <v-text-field
                label="Material Name"
                v-model = "getCSMInfo.material_name"
                >
                </v-text-field>
            </v-col>
            <v-col>
                <v-text-field
                label="Material Synonyms"
                v-model = "getCSMInfo.material_synonyms"
                >
                </v-text-field>
            </v-col>
          </v-row>
          <v-row>
                <v-col>
                  <v-text-field
                  label="Manufacturer"
                  v-model = "getCSMInfo.manufacturer"
                  >
                  </v-text-field>
                </v-col>
                <v-col>
                  <v-text-field
                  label="Manufacturer Part Number"
                  v-model = "getCSMInfo.manufacturer_pn"
                  >
                  </v-text-field>
                </v-col>
          </v-row>

          <v-row>
              <v-col>
                <v-text-field
                label="Supplier Name"
                v-model = "getCSMInfo.supplier_name"
                >
                </v-text-field>
              </v-col>
              <v-col>
                <v-text-field
                label="Supplier Part Number"
                v-model = "getCSMInfo.supplier_pn"
                >
                </v-text-field>
              </v-col>
          </v-row>

          <v-row>
            <v-col><v-text-field
          label="Total API/BDS Quantity per Batch"
          v-model = "getCSMInfo.total_batch_quantity"
          disabled
          >
          </v-text-field>
          </v-col>
            <v-col><v-select
          :items = units
          label = "BDS Unit of Measure"
          v-model= "getCSMInfo.bds_uom"
          disabled
          >
          </v-select>
          </v-col>
            <v-col>
              <v-text-field 
              label = "Concentration"
              v-model = "getCSMInfo.concentration"
              disabled>
            </v-text-field>
          </v-col>
          </v-row>
          <v-row>
            <v-col><v-text-field
          label="Appearence"
          v-model = "getCSMInfo.appearance"
          disabled
          >
          </v-text-field>
          </v-col>
            <v-col> 
          <v-select
          :items = physical_state
          label = "Physical State"
          v-model= "getCSMInfo.physical_state"
          disabled
          >  </v-select>
          <v-text-field 
              label = "Other State"
              v-model = "getCSMInfo.other_state"
              v-if= "getCSMInfo.physical_state == 'Other'"
              disabled>
              </v-text-field>
          </v-col>
            <v-col>
              <v-text-field 
              label = "Density"
              v-model = "getCSMInfo.density"
              disabled>
              </v-text-field>
          </v-col>
          </v-row>
          <v-row>
            <v-col><v-text-field 
              label = "Number of Storage Containers"
              type = "number"
              v-model = "getCSMInfo.number_of_storage_containers"
              disabled>
          </v-text-field></v-col>
            <v-col><v-text-field 
              label = "Container Type"
              v-model = "getCSMInfo.container_type"
              disabled>
          </v-text-field></v-col>
            <v-col><v-text-field 
              label = "Storage Condition"
              v-model = "getCSMInfo.storage_condition"
              disabled>
          </v-text-field></v-col>
          </v-row>
          <!--
          <v-text-field 
              label = "Thaw Temperature"
              v-model = "getCSMInfo.thaw_temperature"
              disabled>
          </v-text-field>
          <v-text-field 
              label = "Thaw Duration"
              v-model = "getCSMInfo.thaw_duration"
              disabled>
          </v-text-field>
          -->
      </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: mapGetters(['getCSMInfo']),
  created(){
     
  },
  data() {
    return{
        //Select Input Items
    units: ["L","mL","g","mg","kg"],
    physical_state: ["Frozen Liquid","Liquid", "Powder", "Sterile","Other"],

    
  }
  }


}
</script>

<style scoped>

</style>