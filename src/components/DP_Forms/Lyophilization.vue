<template>
  <div>
      <!--<h2 >Lyophilization</h2>


        <v-select
        label = "Will filled product be lyophilized? "
        :items = yes_no
        v-model = "getLyoInfo.lyophilization"
        >

        </v-select>-->

      <!--<v-container v-if = "getLyoInfo.lyophilization == 'Yes'">-->
      <v-container>
      <v-row>
            <v-col cols = 12>
                <b><i>Lyophilization:</i></b>
                <p>
                    Aji Bio-Pharma does not perform lyophilization cycle development and requires specifications for lyophilization cycles.  If you have not yet developed your product's 
                    lyophilization cycle Aji Bio-Pharma can recommend a 3rd party lyophilization cycle development vendor. 
                </p>
                <br>
                </v-col>
            <!--
                Use this once we develop the content for the application. 
                <v-col cols = 6>
                  <video width="320" height="240" controls>
                  <source src="movie.mp4" type="video/mp4">
                  <source src="movie.ogg" type="video/ogg">
                    Your browser does not support the video tag.
                  </video>
            </v-col>-->
        </v-row>
         <h2>Lyophilization Cycle Development</h2>
        <v-row>
            <v-col>
                <v-select 
                    label = "Do you need cycle development?"
                    v-model = "getLyoInfo.lyophilization"
                    :items = yes_no>
                </v-select>
          </v-col>
          <v-col>
                <v-select 
                    label = "Would you like a list of Aji Bio-Pharma recommended lyophilization cycle development vendors?"
                    v-model = "getLyoInfo.vender_list"
                    :items = yes_no
                    v-if = "getLyoInfo.lyophilization == 'Yes'">
                </v-select>
          </v-col>
        </v-row>
        <br>
        <v-divider></v-divider>
        <br>
        <span v-if = "getLyoInfo.lyophilization == 'No'">
       <h2>Lyophilization Cycle Specifications</h2>
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
      <v-row>
      <v-textarea
      label = "Please Specify Instructions for Drug Product Lyophilization"
      v-model= "getLyoInfo.instructions"
       filled
            outlined
            clearable
            auto-grow
      >
      </v-textarea>
      </v-row>
      <v-row>
                    <v-col>
                        <v-file-input 
                                accept="image/*" 
                                label="Lyophilization Development Documentation" 
                                multiple
                                >
                        </v-file-input>
                    </v-col>
              </v-row>
      <br>
        <v-divider></v-divider>
        <br>
        </span>
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