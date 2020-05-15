<template>
  <div>
    <!--v-select
    lebel = "Is Terminal Sterilization Required?"
    :items = yes_no
    v-model = "getTermInfo.required"
    >
    </v-select
    <v-container v-if = "getTermInfo.required == 'Yes'">-->
    <v-container>
    <v-row>
            <v-col cols = 12>
                <b><i>Terminal Sterilization Overview:</i></b>
                <p>
                    All Phase III products undergoing Terminal Sterilization require cycle development and validation.  Please provide us with the details about any previous 
                    Terminal Sterilization development work outcomes, cycle specifications and material that we will use for cycle development and validation.   
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
        
      <h2>Previous Development Outcomes</h2>
      <br>
      <v-row>
          <v-col>
            <v-textarea
            label = "Describe any previous accelerated stability outcomes"
            v-model = "getTermInfo.stability_outcomes"
            filled
            outlined
            clearable
            auto-grow
            ></v-textarea>
          </v-col>
      </v-row>
      <v-row>
          <v-col>
            <v-textarea
            label = "Describe any previous heat exposure outcomes"
            v-model = "getTermInfo.exposure_outcomes" 
            filled
            outlined
            clearable
            auto-grow
            ></v-textarea>
          </v-col>
      </v-row>
      <v-divider></v-divider>
      <br>
      <h2>Development Cycle Specifications</h2>
      <br>
      <h4>Sterilization Time:</h4>
      <v-row>
                            <v-col>
                                <v-text-field 
                                label = "Target"
                                type = "number"
                                v-model = "getTermInfo.sterilization_time.target">
                                </v-text-field>
                            </v-col>
                            <v-col>
                                <v-text-field 
                                label = "Lower Limit"
                               type = "number"
                               v-model = "getTermInfo.sterilization_time.lower_limit">
                                </v-text-field>
                            </v-col>
                            <v-col>
                                <v-text-field 
                                label = "Upper Limit"
                                type = "number"
                                v-model = "getTermInfo.sterilization_time.upper_limit">
                                </v-text-field>
                            </v-col>
     </v-row>
     <h4>Sterilization Temperature:</h4>
      <v-row>
                            <v-col>
                                <v-text-field 
                                label = "Target"
                                type = "number"
                                v-model = "getTermInfo.sterilization_temperature.target">
                                </v-text-field>
                            </v-col>
                            <v-col>
                                <v-text-field 
                                label = "Lower Limit"
                               type = "number"
                               v-model = "getTermInfo.sterilization_temperature.lower_limit">
                                </v-text-field>
                            </v-col>
                            <v-col>
                                <v-text-field 
                                label = "Upper Limit"
                                type = "number"
                                v-model = "getTermInfo.sterilization_temperature.upper_limit">
                                </v-text-field>
                            </v-col>
     </v-row>
     <h4>Number of Samples Per Text Exposure:</h4>
      <v-row>
                            <v-col>
                                <v-text-field 
                                label = "Target"
                                type = "number"
                                v-model = "getTermInfo.text_exposure_samples.target">
                                </v-text-field>
                            </v-col>
                            <v-col>
                                <v-text-field 
                                label = "Lower Limit"
                               type = "number"
                               v-model = "getTermInfo.text_exposure_samples.lower_limit">
                                </v-text-field>
                            </v-col>
                            <v-col>
                                <v-text-field 
                                label = "Upper Limit"
                                type = "number"
                                v-model = "getTermInfo.text_exposure_samples.upper_limit">
                                </v-text-field>
                            </v-col>
     </v-row>
     <!--
      <v-row>
          <v-col>
          <v-text-field
          label = "Target Sterilzation Time"
          v-model = "getTermInfo.target_sterilization_time" 
          ></v-text-field>
          </v-col>
      </v-row>
      <v-row>
          <v-col>
          <v-text-field
          label = "Target Sterilization Temperature"
          v-model = "getTermInfo.target_sterilization_temperature"
          ></v-text-field>
          </v-col>
      </v-row>
      <v-row>
          <v-col>
          <v-text-field
          label = "Number of Samples Required Per Text Exposure"
          v-model = "getTermInfo.text_exposure"
          type = "number"
          ></v-text-field>
          </v-col>
      </v-row>-->
      <v-divider></v-divider>
      <br>
      <h2>Cycle Development Material</h2>
        <br>
      <v-row>
          <v-col cols = 7>
              <v-row>
                <v-col>
                    <v-select
                    label = "Feasibility Material is Available for Study"
                    :items = yes_no
                    v-model = "getTermInfo.feasibility_material_available"
                    ></v-select>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                    <v-select
                    label = "Feasibility Material is expected to be sterile prior to Terminal Sterilization.(i.e. product is aseptically filled)"
                    :items = yes_no
                    v-model = "getTermInfo.aseptically_filled"
                    v-if = "getTermInfo.feasibility_material_available == 'Yes'"
                    ></v-select>
                </v-col>
              </v-row>
          </v-col>
          <v-col cols = 1></v-col>
          <v-col cols = 4>
              <p v-if = "getTermInfo.feasibility_material_available == 'Yes'"> Date Material Will Be Available</p>
              <v-date-picker
              v-model = "getTermInfo.date_material_available"
              v-if = "getTermInfo.feasibility_material_available == 'Yes'">
              </v-date-picker>
          </v-col>
      </v-row>
        <v-divider></v-divider>
                                  <br>

      </v-container>
      

  </div>
</template>

<script>
import { mapGetters } from 'vuex'


export default {

    name: "Terminal_Sterilization",
    computed: mapGetters(['getTermInfo']),
    
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