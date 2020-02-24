<template>
  <div>
      <h2 >Lyophilization</h2>

        <v-select
        label = "Will filled product be lyophilized? "
        :items = yes_no
        v-model = "getLyoInfo.lyophilization"
        >

        </v-select>

      <v-container v-if = "getLyoInfo.lyophilization == 'Yes'">
      <v-row>
      <v-textarea
      label = "Please Specify Instructions for Drug Product Lyophilization"
      v-model= "getLyoInfo.instructions"
      >
      </v-textarea>
      </v-row>

      <v-row>
          <v-col>
      <v-text-field 
              label = "Freeze Temperature (C)"
              type = "number"
              v-model = "getLyoInfo.freeze_temperature">
          </v-text-field>
          </v-col>
          <v-col>
      <v-text-field 
              label = " Additional Freeze Time (min)"
              type = "number"
              v-model = "getLyoInfo.additional_freeze_time">
          </v-text-field>
          </v-col>
      </v-row>

      <v-row>
          <v-col>
      <v-text-field 
              label = "Condenser Temperature (C)"
              type = "number"
              v-model = "getLyoInfo.condenser_temperature">
          </v-text-field>
          </v-col>
          <v-col>
      <v-text-field 
              label = "Vacuum Pressure (mTorr)"
              type = "number"
              v-model = "getLyoInfo.vacuum_pressure">
          </v-text-field>
          </v-col>
      </v-row>
      </v-container>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'


export default {

    name: "Lyo_Info",
    computed: mapGetters(['getLyoInfo']),
    
    components: {
    
  },
  data(){
			return {
                //v-select options
                yes_no: [ 'Yes', 'No'],

                
                
      }
  
  },
  methods: {}

}
</script>

<style>

</style>