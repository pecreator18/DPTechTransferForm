<template>
<div>
    <v-container>
      <v-row>
            <v-col cols = 12>
                <b><i>Inspection Overview:</i></b>
                <p>
                    Each vial, syringe, or cartridge is visually inspected for container integrity, particles, color and a variety of other specifications before they are released from our
                 manufacturing site.  Once the drug product is filled, it is stored at an intermediate storage condition before and during visual inspection.  Once the entire lot
                 has been inspected and any unacceptable units are identified and removed, it is transferred to its final storage condition until release and shipment.  
                </p>
                <ol>
                  <li>
                      <b>Intermediate Storage Temperature-</b> Intermediate storage temperature of the filled product while being processed through visual inspection.
                  </li>
                  <br>
                  <li>
                      <b>Time Out of Refrigeration(TOR)-</b>   The time that filled product should be out of intermediate storage for inspection purposes.
                  </li>
                  <br>
                  <li>
                      <b>Time to Final Storage Temperature-</b> The time the filled drug product can be held in inspection at the intermediate storage temperature.
                  </li>
                </ol>
                <br>
                <p style = "font-size: 12px;">*Note: All visual inspection activities take place at <b>AMBIENT</b> temperature. Data must be provided to support time requirements.</p>
            </v-col>
            <!--<v-col cols = 6>
                  <video width="320" height="240" controls>
                  <source src="movie.mp4" type="video/mp4">
                  <source src="movie.ogg" type="video/ogg">
                    Your browser does not support the video tag.
                  </video>
            </v-col>-->
        </v-row>

    <v-row>
      <v-col> 
        <v-select
        label = "Intermediate Storage Condition"
        :items = storage_conditions
        v-model = "getInspectionInfo.inspection_temperature"
        >
        </v-select>
      </v-col>
      <v-col>
        <v-text-field
        label = "Time Out of Refrigeration(TOR)"
        v-model = "getInspectionInfo.tor"
        v-if = "getInspectionInfo.inspection_temperature != 'Ambient'"
        ></v-text-field>
      </v-col>
      <v-col>
        <v-text-field
        label = "Time to Final Storage Temperature"
        v-model = "getInspectionInfo.final_storage_temperature"
        ></v-text-field>
      </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-textarea
          label = "Please provide a product description (Product Appearance) for visual inspection"
          filled
            outlined
            clearable
            auto-grow
          v-model = "getInspectionInfo.appearance_description"
          ></v-textarea>
        </v-col>
    </v-row>
    <v-row>
                    <v-col>
                        <v-file-input 
                                accept="image/*" 
                                label="Please upload data/documents for TOR data." 
                                multiple
                                >
                        </v-file-input>
                    </v-col>
              </v-row>
  </v-container>
</div>
  
</template>

<script>
import { mapGetters } from 'vuex'


export default {

    name: "Inspection",
    computed: mapGetters(['getInspectionInfo']),
    
    components: {
    
  },
  data(){
			return {
                //v-select options
                yes_no: [ 'Yes', 'No'],
                storage_conditions: ["Ambient", "2-8 C"],                
                
      }
  
  },
  methods: {}

}
</script>

<style>

</style>