<template>
<div>
    <v-container>
        <v-row>
            <v-col cols = 12>
                <b><i>Formulation Overview:</i></b>
                <p>
                 Drug Product formulations start with your material and are formulated to your specifications before it is sterile filtered in preparation for filling.
                 Depending on your manufacturing process, this formulation can be as simple as thawing your BDS from its storage condition before sterile filtration 
                 or the formulation can involve multiple steps and sampling.
                 In order for us to determine the logistics, safety, quality and compliance considerations for your manufacturing process we'll need a
                 synopsis of your formulation.  Please complete this module about the equipment, starting material, formulation process and sterile filtration details.
                </p>
            </v-col>
            <!--<v-col cols = 6>
                  <video width="320" height="240" controls>
                  <source src="movie.mp4" type="video/mp4">
                  <source src="movie.ogg" type="video/ogg">
                    Your browser does not support the video tag.
                  </video>
            </v-col>-->
        </v-row>
    <h2>Equipment</h2>
      <v-row>
            <v-col>
                <v-select
                    label = "Is Special Formulation Equimpent Required"
                    :items = yes_no
                    v-model= "getFormulationInfo.special_equipment_required"
                    >
                </v-select>
            </v-col>
            <v-col>
                <v-select
                    label = "Will Aji-BioPharma Purchase Special Equipment?"
                    :items = yes_no
                    v-model= "getFormulationInfo.equipment_purchase"
                    v-if = "getFormulationInfo.special_equipment_required == 'Yes' "
                    >
                </v-select>
            </v-col>
          </v-row>
          <v-row>
                <v-col>
                    <v-select multiple
                        label = "Special Equipment"
                        :items = special_equipment
                        v-model= "getFormulationInfo.special_equipment"
                        v-if = "getFormulationInfo.special_equipment_required == 'Yes'"
                        >
                        </v-select>
                </v-col>
                <v-col>
                    <v-text-field 
                    label = "Other Equipment"
                    v-model = "getFormulationInfo.other_special_equipment"
                    v-if = "getFormulationInfo.special_equipment_required == 'Yes' && getFormulationInfo.special_equipment.includes('Other')">
                    </v-text-field>
                </v-col>
         </v-row>
      <v-row>
          <v-col cols = 6>
              <v-select
                label = "Do you have a required/preferred cleaning method for the equipment?"
                :items = yes_no
                v-model = "getFormulationInfo.preferred_cleaning"
                v-if = "getFormulationInfo.special_equipment_required == 'Yes' "
                >
                </v-select>
          </v-col>
          <v-col cols = 3>
              <v-select
                label = "Is the cleaning method validated?"
                :items = yes_no
                v-model = "getFormulationInfo.validated_cleaning"
                v-if = "getFormulationInfo.special_equipment_required == 'Yes'  && getFormulationInfo.preferred_cleaning == 'Yes'"
                >
                </v-select>
          </v-col>
      </v-row>
      <v-row>
          <v-col>
              <v-file-input 
              accept="image/*" 
              label="Upload Equipment Cleaning Validation Documentation" 
              multiple
              v-if = "getFormulationInfo.validated_cleaning == 'Yes'">
              </v-file-input>
          </v-col>
      </v-row>
        <br>
        <v-divider></v-divider>
        <br>
        <h2>Starting Material</h2>
        <v-row>
            <v-col>
            <v-text-field
                label="Total API/BDS Quantity per Batch"
                v-model = "getCSMInfo.total_batch_quantity"
                type = "number"
            >
            </v-text-field>
                </v-col>
                    <v-col><v-select
                :items = units
                label = "BDS Unit of Measure"
                v-model= "getCSMInfo.bds_uom"
                >
                </v-select>
                </v-col>
            <v-col>
              <v-text-field 
              label = "Concentration(mg/mL)"
              v-model = "getCSMInfo.concentration">
            </v-text-field>
          </v-col>
          </v-row>
          <v-row>
            <v-col><v-text-field
          label="Appearence"
          v-model = "getCSMInfo.appearance"
          >
          </v-text-field>
          </v-col>
            <v-col> 
          <v-select
          :items = physical_state
          label = "Physical State"
          v-model= "getCSMInfo.physical_state"
          >  </v-select>
          <v-text-field 
              label = "Other State"
              v-model = "getCSMInfo.other_state"
              v-if= "getCSMInfo.physical_state == 'Other'">
              </v-text-field>
          </v-col>
            <v-col>
              <v-text-field 
              label = "Density(g/L)"
              v-model = "getCSMInfo.density"
              type = "number">
              </v-text-field>
          </v-col>
          </v-row>
          <v-row>
            <v-col><v-text-field 
              label = "Number of Storage Containers"
              type = "number"
              v-model = "getCSMInfo.number_of_storage_containers">
          </v-text-field></v-col>
            <v-col><v-text-field 
              label = "Container Type"
              v-model = "getCSMInfo.container_type">
          </v-text-field></v-col>
            <v-col><v-select 
              label = "Storage Condition"
              v-model = "getCSMInfo.storage_condition"
              :items = storage_conditions>
          </v-select>
          </v-col>
          </v-row>
          <v-row>
              <v-col cols = 4>
                  <v-select
                  multiple
                  label = "Product Sensitivities"
                  :items = sensitivities>
                  </v-select>
              </v-col>
              <v-col cols = 8>
                    <v-textarea
                                            label = "Please describe your product's sensitivities and any other special considerations"
                                            filled
                                            outlined
                                            clearable
                                            auto-grow>
                    </v-textarea>
              </v-col>
              </v-row>
              <v-row>
                    <v-col>
                        <v-file-input 
                                accept="image/*" 
                                label="Please upload any product sensitivity documents" 
                                multiple
                                >
                        </v-file-input>
                    </v-col>
              </v-row>
              <v-row>
              <v-col>
                <v-checkbox
                    label = "Nitrogen Sparge Required During Formulation"
                    v-model= "getFormulationInfo.formulation_instructions.nitrogen_sparge"
                ></v-checkbox>
                </v-col>
          </v-row>

            <br>
            <v-divider></v-divider>
            <br>  
          
          <h2>Formulation Process</h2> 
          <h4>Please provide a step by step synopsis of your formulation and upload any process flow diagrams or any other relevant documentation.</h4>
          
        <!--For each step in the formulation-->   
        <v-row v-for = "step in getState.formulation" v-bind:key = "step.index">  
            
            <!-- Step Identification -->
                <v-col cols = 2>
                        <!--Delete Step Button-->
                        <v-icon 
                            @click = "remove_step(getState.formulation.indexOf(step), step.step_excipient_uids, step.step_cpp_uids, step.step_sample_uids,step.step_waste_stream_uids)"
                            right>
                            mdi-delete
                        </v-icon>
                     <!--Step Number(Same as array index + 1)-->   
                     
                    <span><b>{{getState.formulation.indexOf(step) +1}}.</b>  {{step.step_type}}</span><br><br><br>

                    <!--Use this for more advanced formulation characterization to derive component quantities and waste stream quantities.-->
                    <!--<span><b>Final Step Volume: </b></span><br>
                    <span>{{step.step_volume}}mL</span><br>
                    <span><b>Product Mass: </b></span><br>
                    <span>{{step.step_product_mass}}mg</span><br>-->

                </v-col>
            
            <!--Start Conditional Rendering of Step Data Needed -->


            <!--Sample Step-->
                <v-col cols = 10 v-if = "step.step_type === 'Sample'">
                    <!--Sample Header Row-->
                    <v-row class="text-center font-weight-bold text-size-sm" > 
                        <v-col cols = 5>Assay</v-col>
                        <v-col cols = 2>Number of Samples</v-col>
                        <v-col cols = 2>Volume per Sample(mL)</v-col>
                        <v-col cols = 3>Storage Temp.</v-col>
                        <!--v-col cols = 2>Sample Type</v-col>
                        <v-col>Testing Lab</v-col-->
                    </v-row>
        
                    <v-row v-for = "sample in getSampleInfo.formulation_sampling_plan.filter(sample => sample.step_uid === step.step_uid)" v-bind:key = "sample.index">
                        <v-col cols = 5>
                            <v-select
                            label = "Assay"
                            v-model = sample.assay
                            :items = assays
                            disable-lookup = false
                            >
                            </v-select>
                        </v-col>
                        <v-col cols = 2>
                            <v-text-field
                            label = "Number"
                            v-model = sample.number_of_samples
                            type = "number"
                            >
                            </v-text-field>
                        </v-col>
                        <v-col cols = 2>
                            <v-text-field
                            label = "Volume"
                            v-model = sample.sample_volume
                            type = "number"
                            >
                            </v-text-field>
                        </v-col>  
                        <v-col cols = 3>
                            <v-select
                            label = "Temp."
                            v-model = sample.storage_condition
                            :items = storage_conditions
                            append-outer-icon = "mdi-delete"
                            @click:append-outer = "remove_sample(getSampleInfo.formulation_sampling_plan.indexOf(sample))"
                            >
                            </v-select>
                            
                        </v-col>
                        <!--
                        <v-col cols = 2>
                            <v-select
                            label = "Sample Type"
                            v-model = sample.sample_type
                            :items = sample_type
                            >
                            </v-select>
                        </v-col>
                        <v-col cols = 2>
                            <v-select
                            label = "Testing Lab"
                            :items = labs
                            v-model = sample.lab
                            append-outer-icon = "mdi-delete"
                            @click:append-outer = "remove_sample(getSampleInfo.formulation_sampling_plan.indexOf(sample))"
                            ></v-select>
                            <v-text-field
                            v-if = "sample.lab == 'Client Preferred Lab'"
                            label = "Lab"
                            v-model = sample.contract_lab
                            >
                            </v-text-field>
                        </v-col-->
                    </v-row>
                <!--Add Sample Button-->
                <v-btn depressed @click = "add_sample(step.step_uid)">
                    <span>Add Sample</span>
                    <v-icon right>mdi-plus-box</v-icon>
                </v-btn>
                <br>
                <br>
                <v-divider inset></v-divider>    
        </v-col>
        <!-- End Sample Step -->

            <!-- Dilution Step-->
            <v-col cols = 10 v-if = "step.step_type === 'Dilution'">
                <h4>Diluent:</h4>
                        <v-row> 
                                <v-col>
                                <v-text-field 
                                label = "Diluent"
                                v-model = "getExcipients.formulation_excipients[getExcipients.formulation_excipients.indexOf(getExcipients.formulation_excipients.find((excipient) => {return excipient.excipient_uid == step.step_excipient_uids[0]}))].excipient"
                                >
                                </v-text-field>
                                </v-col>
                        </v-row>
                
                <h4>Final Diluted Material Concentration Specification(mg/mL):</h4>
                        <v-row>
                            <v-col>
                                <v-text-field 
                                label = "Target"
                                v-model= "getCPPs.formulation_cpps[getCPPs.formulation_cpps.indexOf(getCPPs.formulation_cpps.find((cpp) => {return cpp.cpp_uid == step.step_cpp_uids[0]}))].target"
                                type = "number">
                                </v-text-field>
                            </v-col>
                            <v-col>
                                <v-text-field 
                                label = "Lower Limit"
                                v-model= "getCPPs.formulation_cpps[getCPPs.formulation_cpps.indexOf(getCPPs.formulation_cpps.find((cpp) => {return cpp.cpp_uid == step.step_cpp_uids[0]}))].lower_limit"
                                type = "number">
                                </v-text-field>
                            </v-col>
                            <v-col>
                                <v-text-field 
                                label = "Upper Limit"
                                v-model= "getCPPs.formulation_cpps[getCPPs.formulation_cpps.indexOf(getCPPs.formulation_cpps.find((cpp) => {return cpp.cpp_uid == step.step_cpp_uids[0]}))].upper_limit"
                                type = "number">
                                </v-text-field>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-expansion-panels>
                                <v-expansion-panel>
                                    <v-expansion-panel-header>Comments</v-expansion-panel-header>

                                        <v-expansion-panel-content>
                                            <v-textarea
                                            label = "Please describe any details pertinent to this step."
                                            v-model = "step.step_comments">
                                            </v-textarea>
                                        </v-expansion-panel-content>

                                </v-expansion-panel>
                            </v-expansion-panels>
                        </v-row>
                        <br>
                <br>
                <v-divider inset></v-divider>  
            </v-col>
            <!-- End Dilution Step-->

            <!--pH Adjustment Step-->
      <v-col cols = 10 v-else-if = "step.step_type === 'pH Adjustment'">    
      <h4>pH Specifications:</h4>
      <v-row>
          <v-col>
              <v-text-field 
              label = "Target pH"
              v-model= "getCPPs.formulation_cpps[getCPPs.formulation_cpps.indexOf(getCPPs.formulation_cpps.find((cpp) => {return cpp.cpp_uid == step.step_cpp_uids[0]}))].target"
              type = "number">
              </v-text-field>
          </v-col>
          <v-col>
              <v-text-field 
              label = "pH Range Lower Limit"
              v-model= "getCPPs.formulation_cpps[getCPPs.formulation_cpps.indexOf(getCPPs.formulation_cpps.find((cpp) => {return cpp.cpp_uid == step.step_cpp_uids[0]}))].lower_limit"
              type = "number">
              </v-text-field>
          </v-col>
          <v-col>
              <v-text-field 
              label = "pH Range Upper Limit"
               v-model= "getCPPs.formulation_cpps[getCPPs.formulation_cpps.indexOf(getCPPs.formulation_cpps.find((cpp) => {return cpp.cpp_uid == step.step_cpp_uids[0]}))].upper_limit"
              type = "number">
            </v-text-field>
          </v-col>
      </v-row>
      <h4>Acid Adjustment Solution:</h4>
        <v-row>
            <v-col><v-select
                label = "Required pH Adjustment Buffers"
                :items = acids
                v-model = "getExcipients.formulation_excipients[getExcipients.formulation_excipients.indexOf(getExcipients.formulation_excipients.find((excipient) => {return excipient.excipient_uid == step.step_excipient_uids[0]}))].excipient"
                >
                </v-select></v-col>
            <v-col><v-text-field 
              label = "Other Acid Solution"
              v-model = "getExcipients.formulation_excipients[getExcipients.formulation_excipients.indexOf(getExcipients.formulation_excipients.find((excipient) => {return excipient.excipient_uid == step.step_excipient_uids[0]}))].other_excipient"
              v-if = "getExcipients.formulation_excipients[getExcipients.formulation_excipients.indexOf(getExcipients.formulation_excipients.find((excipient) => {return excipient.excipient_uid == step.step_excipient_uids[0]}))].excipient == 'Other'">
            </v-text-field></v-col>
        </v-row>
        <h4>Base Adjustment Solution:</h4>
        <v-row>
            <v-col><v-select
                label = "Required pH Adjustment Buffers"
                :items = bases
                v-model = "getExcipients.formulation_excipients[getExcipients.formulation_excipients.indexOf(getExcipients.formulation_excipients.find((excipient) => {return excipient.excipient_uid == step.step_excipient_uids[1]}))].excipient"
                >
                </v-select></v-col>
            <v-col><v-text-field 
              label = "Other Base Solution"
               v-model = "getExcipients.formulation_excipients[getExcipients.formulation_excipients.indexOf(getExcipients.formulation_excipients.find((excipient) => {return excipient.excipient_uid == step.step_excipient_uids[1]}))].other_excipient"
              v-if = "getExcipients.formulation_excipients[getExcipients.formulation_excipients.indexOf(getExcipients.formulation_excipients.find((excipient) => {return excipient.excipient_uid == step.step_excipient_uids[1]}))].excipient == 'Other'">
            </v-text-field></v-col>
        </v-row>

        <v-row>
                            <v-expansion-panels flat>
                                <v-expansion-panel>
                                    <v-expansion-panel-header><b>Comments:</b></v-expansion-panel-header>

                                    <v-expansion-panel-content>
                                        <v-textarea
                                        label = "Please describe any details pertinent to this step."
                                        v-model = "step.step_comments">
                                        </v-textarea>
                                    </v-expansion-panel-content>

                                </v-expansion-panel>
                            </v-expansion-panels>
        </v-row>
        <br>
                <br>
                <v-divider inset></v-divider>  
        </v-col>
        <!--End pH Adjustment Step-->

        <!--Concentration -->
        <v-col cols = 10 v-if = "step.step_type === 'Concentration(TFF)'">
                <h4>Final Concentration(mg/mL):</h4>
                        <v-row>
                            <v-col>
                                <v-text-field 
                                label = "Target"
                                v-model= "getCPPs.formulation_cpps[getCPPs.formulation_cpps.indexOf(getCPPs.formulation_cpps.find((cpp) => {return cpp.cpp_uid == step.step_cpp_uids[0]}))].target"
                                type = "number">
                                </v-text-field>
                            </v-col>
                            <v-col>
                                <v-text-field 
                                label = "Lower Limit"
                                v-model= "getCPPs.formulation_cpps[getCPPs.formulation_cpps.indexOf(getCPPs.formulation_cpps.find((cpp) => {return cpp.cpp_uid == step.step_cpp_uids[0]}))].lower_limit"
                                type = "number">
                                </v-text-field>
                            </v-col>
                            <v-col>
                                <v-text-field 
                                label = "Upper Limit"
                                v-model= "getCPPs.formulation_cpps[getCPPs.formulation_cpps.indexOf(getCPPs.formulation_cpps.find((cpp) => {return cpp.cpp_uid == step.step_cpp_uids[0]}))].upper_limit"
                                type = "number">
                                </v-text-field>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-expansion-panels>
                                <v-expansion-panel>
                                    <v-expansion-panel-header>Comments</v-expansion-panel-header>

                                        <v-expansion-panel-content>
                                            <v-textarea
                                            label = "Please describe any details pertinent to this step."
                                            v-model = "step.step_comments">
                                            </v-textarea>
                                        </v-expansion-panel-content>

                                </v-expansion-panel>
                            </v-expansion-panels>
                        </v-row> 
                        <br>
                <br>
                <v-divider inset></v-divider>        
        </v-col>
        <!--End Concentration Step -->

        <!--Thaw Step-->
        <v-col cols = 10 v-if = "step.step_type === 'Thaw'">
                <h4>Thaw Temperature(C):</h4>
                        <v-row>
                            <v-col>
                                <v-text-field 
                                label = "Target"
                                v-model= "getCPPs.formulation_cpps[getCPPs.formulation_cpps.indexOf(getCPPs.formulation_cpps.find((cpp) => {return cpp.cpp_uid == step.step_cpp_uids[0]}))].target"
                                type = "number">
                                </v-text-field>
                            </v-col>
                            <v-col>
                                <v-text-field 
                                label = "Lower Limit"
                                v-model= "getCPPs.formulation_cpps[getCPPs.formulation_cpps.indexOf(getCPPs.formulation_cpps.find((cpp) => {return cpp.cpp_uid == step.step_cpp_uids[0]}))].lower_limit"
                                type = "number">
                                </v-text-field>
                            </v-col>
                            <v-col>
                                <v-text-field 
                                label = "Upper Limit"
                                v-model= "getCPPs.formulation_cpps[getCPPs.formulation_cpps.indexOf(getCPPs.formulation_cpps.find((cpp) => {return cpp.cpp_uid == step.step_cpp_uids[0]}))].upper_limit"
                                type = "number">
                                </v-text-field>
                            </v-col>
                        </v-row>
                        <h4>Thaw Time(Min):</h4>
                        <v-row>
                            <v-col>
                                <v-text-field 
                                label = "Target"
                                v-model= "getCPPs.formulation_cpps[getCPPs.formulation_cpps.indexOf(getCPPs.formulation_cpps.find((cpp) => {return cpp.cpp_uid == step.step_cpp_uids[1]}))].target"
                                type = "number">
                                </v-text-field>
                            </v-col>
                            <v-col>
                                <v-text-field 
                                label = "Lower Limit"
                                v-model= "getCPPs.formulation_cpps[getCPPs.formulation_cpps.indexOf(getCPPs.formulation_cpps.find((cpp) => {return cpp.cpp_uid == step.step_cpp_uids[1]}))].lower_limit"
                                type = "number">
                                </v-text-field>
                            </v-col>
                            <v-col>
                                <v-text-field 
                                label = "Upper Limit"
                                v-model= "getCPPs.formulation_cpps[getCPPs.formulation_cpps.indexOf(getCPPs.formulation_cpps.find((cpp) => {return cpp.cpp_uid == step.step_cpp_uids[1]}))].upper_limit"
                                type = "number">
                                </v-text-field>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-expansion-panels>
                                <v-expansion-panel>
                                    <v-expansion-panel-header>Comments</v-expansion-panel-header>
                                        <v-expansion-panel-content>
                                            <v-textarea
                                            label = "Please describe any details pertinent to this step."
                                            v-model = "step.step_comments">
                                            </v-textarea>
                                        </v-expansion-panel-content>

                                </v-expansion-panel>
                            </v-expansion-panels>
                        </v-row> 
                        <br>
                <br>
                <v-divider inset></v-divider>        
        </v-col>
        <!-- End Thaw Step-->

        <!--Component Addition-->
        <v-col cols = 10 v-if = "step.step_type === 'Component Addition'">
             <h4>Component:</h4>
                        <v-row> 
                                <v-col>
                                <v-text-field 
                                label = "Component"
                                v-model = "getExcipients.formulation_excipients[getExcipients.formulation_excipients.indexOf(getExcipients.formulation_excipients.find((excipient) => {return excipient.excipient_uid == step.step_excipient_uids[0]}))].excipient"
                                >
                                </v-text-field>
                                </v-col>
                        </v-row>
                <!--<h4>Quantity:</h4>
                        <v-row>
                            <v-col>
                                <v-text-field 
                                label = "Target"
                                v-model= "getCPPs.formulation_cpps[getCPPs.formulation_cpps.indexOf(getCPPs.formulation_cpps.find((cpp) => {return cpp.cpp_uid == step.step_cpp_uids[0]}))].target"
                                type = "number">
                                </v-text-field>
                            </v-col>
                            <v-col>
                                <v-text-field 
                                label = "Lower Limit"
                                v-model= "getCPPs.formulation_cpps[getCPPs.formulation_cpps.indexOf(getCPPs.formulation_cpps.find((cpp) => {return cpp.cpp_uid == step.step_cpp_uids[0]}))].lower_limit"
                                type = "number">
                                </v-text-field>
                            </v-col>
                            <v-col>
                                <v-text-field 
                                label = "Upper Limit"
                                v-model= "getCPPs.formulation_cpps[getCPPs.formulation_cpps.indexOf(getCPPs.formulation_cpps.find((cpp) => {return cpp.cpp_uid == step.step_cpp_uids[0]}))].upper_limit"
                                type = "number">
                                </v-text-field>
                            </v-col>
                        </v-row>-->
                        <v-row>
                            <v-expansion-panels>
                                <v-expansion-panel>
                                    <v-expansion-panel-header>Comments</v-expansion-panel-header>
                                        <v-expansion-panel-content>
                                            <v-textarea
                                            label = "Please describe any details pertinent to this step."
                                            v-model = "step.step_comments">
                                            </v-textarea>
                                        </v-expansion-panel-content>

                                </v-expansion-panel>
                            </v-expansion-panels>
                        </v-row>     
                        <br>
                <br>
                <v-divider inset></v-divider>    
        </v-col>
        <!-- Bioburden Reduction Filtration Step-->
            <v-col cols = 10 v-if = "step.step_type === 'Bioburden Reduction Filtration'">

                <v-textarea
                                            label = "Please describe any details pertinent to this step."
                                            v-model = "step.step_comments"
                                            filled
                                            outlined
                                            clearable
                                            auto-grow>
                </v-textarea>
                    <br>
                <br>
                <v-divider inset></v-divider>  
            </v-col> 
        <!-- End Bioburden Reduction Filtration-->

        <!-- Other Step-->
        <v-col cols = 10 v-if = "step.step_type === 'Other'">
                    <v-textarea
                                            label = "Please describe any details pertinent to this step."
                                            v-model = "step.step_comments"
                                            filled
                                            outlined
                                            clearable
                                            auto-grow>
                    </v-textarea>
                    <br>
                <br>
                <v-divider inset></v-divider>  
            </v-col>
        <!--End Other Step-->

        <!-- Mix Step-->
        <v-col cols = 10 v-if = "step.step_type === 'Mix'">
                    <v-textarea
                                            label = "Please describe any details pertinent to this step."
                                            v-model = "step.step_comments"
                                            filled
                                            outlined
                                            clearable
                                            auto-grow>
                    </v-textarea>
                    <br>
                <br>
                <v-divider inset></v-divider>  
            </v-col>
        <!--End Mix Step-->

        <!-- Heat Step-->
        <v-col cols = 10 v-if = "step.step_type === 'Heat'">
                <h4>Final Temperature(C):</h4>
                        <v-row>
                            <v-col>
                                <v-text-field 
                                label = "Target"
                                v-model= "getCPPs.formulation_cpps[getCPPs.formulation_cpps.indexOf(getCPPs.formulation_cpps.find((cpp) => {return cpp.cpp_uid == step.step_cpp_uids[0]}))].target"
                                type = "number">
                                </v-text-field>
                            </v-col>
                            <v-col>
                                <v-text-field 
                                label = "Lower Limit"
                                v-model= "getCPPs.formulation_cpps[getCPPs.formulation_cpps.indexOf(getCPPs.formulation_cpps.find((cpp) => {return cpp.cpp_uid == step.step_cpp_uids[0]}))].lower_limit"
                                type = "number">
                                </v-text-field>
                            </v-col>
                            <v-col>
                                <v-text-field 
                                label = "Upper Limit"
                                v-model= "getCPPs.formulation_cpps[getCPPs.formulation_cpps.indexOf(getCPPs.formulation_cpps.find((cpp) => {return cpp.cpp_uid == step.step_cpp_uids[0]}))].upper_limit"
                                type = "number">
                                </v-text-field>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-expansion-panels>
                                <v-expansion-panel>
                                    <v-expansion-panel-header>Comments</v-expansion-panel-header>
                                        <v-expansion-panel-content>
                                            <v-textarea
                                            label = "Please describe any details pertinent to this step."
                                            v-model = "step.step_comments">
                                            </v-textarea>
                                        </v-expansion-panel-content>

                                </v-expansion-panel>
                            </v-expansion-panels>
                        </v-row> 
                        <br>
                <br>
                <v-divider inset></v-divider>  
            </v-col>
        <!--End Heat Step-->

        <!-- Cool Step-->
        <v-col cols = 10 v-if = "step.step_type === 'Cool'">
                    <h4>Final Temperature(C):</h4>
                        <v-row>
                            <v-col>
                                <v-text-field 
                                label = "Target"
                                v-model= "getCPPs.formulation_cpps[getCPPs.formulation_cpps.indexOf(getCPPs.formulation_cpps.find((cpp) => {return cpp.cpp_uid == step.step_cpp_uids[0]}))].target"
                                type = "number">
                                </v-text-field>
                            </v-col>
                            <v-col>
                                <v-text-field 
                                label = "Lower Limit"
                                v-model= "getCPPs.formulation_cpps[getCPPs.formulation_cpps.indexOf(getCPPs.formulation_cpps.find((cpp) => {return cpp.cpp_uid == step.step_cpp_uids[0]}))].lower_limit"
                                type = "number">
                                </v-text-field>
                            </v-col>
                            <v-col>
                                <v-text-field 
                                label = "Upper Limit"
                                v-model= "getCPPs.formulation_cpps[getCPPs.formulation_cpps.indexOf(getCPPs.formulation_cpps.find((cpp) => {return cpp.cpp_uid == step.step_cpp_uids[0]}))].upper_limit"
                                type = "number">
                                </v-text-field>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-expansion-panels>
                                <v-expansion-panel>
                                    <v-expansion-panel-header>Comments</v-expansion-panel-header>
                                        <v-expansion-panel-content>
                                            <v-textarea
                                            label = "Please describe any details pertinent to this step."
                                            v-model = "step.step_comments">
                                            </v-textarea>
                                        </v-expansion-panel-content>

                                </v-expansion-panel>
                            </v-expansion-panels>
                        </v-row>
                        <br>
                <br>
                <v-divider inset></v-divider>  
            </v-col>
        <!--End Mix Step-->


        <!-- Buffer Exchange Step-->
        <v-col cols = 10 v-if = "step.step_type === 'Buffer Exchange(TFF)'">
                    <h4>Diafiltration Buffer:</h4>
                    <v-row> 
                                <v-col>
                                <v-text-field 
                                label = "Diafiltration Buffer"
                                v-model = "getExcipients.formulation_excipients[getExcipients.formulation_excipients.indexOf(getExcipients.formulation_excipients.find((excipient) => {return excipient.excipient_uid == step.step_excipient_uids[0]}))].excipient"
                                >
                                </v-text-field>
                                </v-col>
                        </v-row>
                    <h4>Filtrate Composition:</h4>
                    <v-row> 
                                <v-col>
                                <v-text-field 
                                label = "Filtrate"
                                v-model = "getState.formulation_waste_streams.find((waste_stream) => {return waste_stream.waste_stream_uid == step.step_waste_stream_uids[0]}).composition"
                                >
                                </v-text-field>
                                </v-col>
                        </v-row>
                       <v-row>
                            <v-expansion-panels>
                                <v-expansion-panel>
                                    <v-expansion-panel-header>Comments</v-expansion-panel-header>
                                        <v-expansion-panel-content>
                                            <v-textarea
                                            label = "Please describe any details pertinent to this step."
                                            v-model = "step.step_comments">
                                            </v-textarea>
                                        </v-expansion-panel-content>

                                </v-expansion-panel>
                            </v-expansion-panels>
                        </v-row>
                        <br>
                <br>
                <v-divider inset></v-divider>  
            </v-col>
        <!--End Buffer Exchange Step-->

        <v-col cols = 10 v-else>

            </v-col>         
        </v-row>
        <br>
        
        <br>
        <v-row>
                    <v-col cols = 5>
                    <v-select
                    :items = actions
                    v-model = step_type
                    ></v-select>
                    </v-col>
                    <v-col cols = 3>
                       
                        
                        
                    <v-btn depressed @click = "add_step()">
                        <span>Insert Step</span>
                        
                        <v-icon right>mdi-plus-box</v-icon>
                        
                    </v-btn>
                   
                    </v-col>
                    <v-col cols = 4>
                        <v-select
                        label = "Insert Step At"
                        :items = formulation_steps
                        v-model = formulation_step
                        >
                        </v-select>
                    </v-col>
                    
                    <!--Use this for more advanced formulation characterization to derive component quantities and waste stream quantities.-->
                    <!--<v-col cols = 2>
                    <v-btn depressed @click = "update_volumes()">
                        <span>Update Volumes</span>
                        <v-icon right>mdi-plus-box</v-icon>
                    </v-btn>
                    </v-col>-->             
        </v-row>
        <v-row>
          <v-col>
              <v-file-input 
              accept="image/*" 
              label="Upload Formulation Documentation" 
              multiple>
              </v-file-input>
          </v-col>
        </v-row>

        <br>
        <v-divider></v-divider>
        <br> 

        <h2>Sterile Filtration</h2>
      <v-row>
          <v-col>
      <v-select
      label = "Do you require a specific filter for sterile filtration?"
      v-model = "getFiltrationInfo.customer_specific_sterile_filter"
      :items = yes_no
      >
      </v-select>
      </v-col>
      <v-col>
      <p>Unless otherwise specified two(2) in-line .22um filters are used. <br><i>Please note that bulk drug substance batch sizes exceeding 50 L require continuous sterile filtration.</i></p>
      </v-col>
      </v-row>
      <v-row>
          <v-col>
              <v-select
                label = "Is Re-Filtration Data Available?"
                v-model = "getFiltrationInfo.refiltration_data_available"
                :items = yes_no
                >
             </v-select>
          </v-col>
          <v-col>
              <v-select
                label = "BDS intermediate storage condition after filtration."
                v-model = "getFiltrationInfo.intermediate_storage_conditions"
                :items = intermediate_storage_conditions
                >
             </v-select>
          </v-col>
          <v-col>
              <v-text-field
              label = "Maximum Filtered BDS Hold Time."
              v-if = "getFiltrationInfo.intermediate_storage_conditions.includes('No Intermediate Storage') == false"
              v-model = "getFiltrationInfo.intermediate_storage_time"
              clearable
              >
              </v-text-field>
          </v-col>
          
      </v-row>
      <v-row>
          <v-col>
              <v-file-input 
              accept="image/*" 
              label="Upload Filter BDS Hold Time Stability Documentation" 
              multiple
              v-if = "getFiltrationInfo.intermediate_storage_conditions.includes('No Intermediate Storage') == false || getFiltrationInfo.intermediate_storage_conditions == ''">
              </v-file-input>
          </v-col>
          <v-col>
              <v-file-input 
              accept="image/*" 
              label="Upload Re-Filtration Documentation" 
              multiple
              v-if = "getFiltrationInfo.refiltration_data_available == 'Yes'">
              </v-file-input>
          </v-col>
      </v-row>

      <br>
                                  <v-divider></v-divider>
                                  <br>
                                  <v-expansion-panels>
                                        <v-expansion-panel>
                                            <v-expansion-panel-header><b>Formulation Excipients</b></v-expansion-panel-header>
                                                    <v-expansion-panel-content>
                                                            <Formulation_Excipients/>
                                                    </v-expansion-panel-content>
                                        </v-expansion-panel>
                                        <v-expansion-panel>
                                            <v-expansion-panel-header><b>Formulation Critical Process Parameters</b></v-expansion-panel-header>
                                                    <v-expansion-panel-content>
                                                            <Formulation_CPPs/>
                                                    </v-expansion-panel-content>
                                        </v-expansion-panel>
                                        <v-expansion-panel>
                                            <v-expansion-panel-header><b>Formulation Sampling</b></v-expansion-panel-header>
                                                    <v-expansion-panel-content>
                                                        <Formulation_Sampling/>
                                                    </v-expansion-panel-content>
                                        </v-expansion-panel>
                                        <v-expansion-panel>
                                            <v-expansion-panel-header><b>Formulation Waste Streams</b></v-expansion-panel-header>
                                                    <v-expansion-panel-content>
                                                        <Formulation_Waste/>
                                                    </v-expansion-panel-content>
                                        </v-expansion-panel>
                                    </v-expansion-panels>
                                        
                
    </v-container>
    
</div>
  
</template>

<script>
import { mapGetters } from 'vuex'
import { v4 as uuidv4 } from 'uuid';
import Formulation_CPPs from "./Formulation_CPPs.vue"
import Formulation_Excipients from "./Formulation_Excipients"
import Formulation_Sampling from "./Formulation_Sampling"
import Formulation_Waste from "./Formulation_Waste"

export default {
    
    name: "Formulation Builder",
    computed: mapGetters(['getSampleInfo','getCPPs','getExcipients','getCSMInfo','getFiltrationInfo', 'getState', 'getFormulationInfo']),
    components: {
        
        Formulation_CPPs,
        Formulation_Excipients,
        Formulation_Sampling,
        Formulation_Waste
    
  },
  data(){
			return {
                //v-select options
                formulation_steps: ["Start","End"],
                formulation_step: "End",
                sensitivities: ["Oxygen", "Light","Stainless Steel", "Silicone/Elastomers/Polymers","Hygroscopic","Shear", "Other"],
                special_equipment: ["TFF","Homogenizer","High Shear Mixer","Stainless Steel Tank(s)", "Heating/Cooling", "Other"],
                bioburden_filtration_options:[ "Bioburden Reduction on Formulated Drug Substance", "Bioburden Reduction on Formulated Buffers" ],
                yes_no: [ 'Yes', 'No'],
                intermediate_storage_conditions: ["Ambient", "2-8 C", "No Intermediate Storage"],
                units: ["L","mL","g","mg","kg"],
                physical_state: ["Frozen Liquid","Liquid", "Powder", "Sterile","Other"],
                formulation: [],
                actions: ["Thaw","Dilution", "Concentration(TFF)","Buffer Exchange(TFF)","Component Addition","pH Adjustment","Bioburden Reduction Filtration","Heat","Cool","Sample","Mix","Other"],
                step_type: "",
                acids:["0.1 N Hydrochloric Acid","1N Hydrochloric Acid","5N Hydrochloric Acid","Other"],  
                bases:["0.1 N Sodium Hydroxide","1 N Sodium Hydroxide","5 N Sodium Hydroxide","Other"],
                //Select Options
                storage_conditions:["-80 C","-20 C","2-8 C", "Room Temperature"],
                sample_type: ["In-Process Testing", "Client Retain"],
                labs: ["Client Preferred Lab", "Aji BioPharma"],
                assays: [    
                                        "Client Retain",
                                        "Break and Glide Force",
                                         "Capillary Isoelectric Focusing",
                                         "Host Cell Protein by ELISA",
                                         "ELISA Product",
                                         "Glycan Analysis",
                                         "Anion Exchange HPLC",
                                         "Cation Exchange HPLC",
                                         "HIC HPLC",
                                         "Reverse Phase HPLC",
                                         "Size Exclusion HPLC",
                                         "Size Exclusion MALS",
                                         "Drug Antibody Ratio(UV-Vis)",
                                         "Drug Antibody Ratio(HPLC)",
                                         "Drug Antibody Ratio(Mass Spec)",
                                         "Free Drug/Free Drug Linker(RP-HPLC)",
                                         "CE-SDS(Non-Gel Sieving)Reduced",
                                         "CE-SDS(Non-Gel Sieving)Non-Reduced",
                                         "SDS-Page Reduced",
                                         "SDS-Page Non-Reduced",
                                         "AGE",
                                         "Carbohydrate Structure",
                                         "Western Blot",
                                         "Intact Mass(QToF)",
                                         "Peptide Map(HPLC)",
                                         "Peptide Map(LCMS)",
                                         "Potency",
                                         "Particle Analysis(Microscopic Flow Imaging)",
                                         "Dynamic Light Scattering",
                                         "FlowCAM",
                                         "Protein Concentration by A280 (SoloVPE)",
                                         "Protein Concentration by A280 (Conventional)",
                                         "Sequence Confirmation by LCMS/MS",
                                         "Disulfide Bond Confirmation",
                                         "Intrinsic Flouresence",
                                         "Extrinsic Flouresence",
                                         "Circular Dichroism(Far UV)",
                                         "Circular Dichroism(Near UV)",
                                         "Reconstitution Time",
                                         "Field Flow Fractionation with Light Scattering",
                                         "Lyo Cake Appearence",
                                         "FT=IR",
                                         "RAWMAN",
                                         "FT-NIR",
                                         "Differential Scanning Calorimetry",
                                         "AUC",//End non-compendials
                                         "pH/Conductivity USP<791>",
                                         "Osmolality,Freezing Point USP<785>",
                                         "Osmolality, Vapor Pressure",
                                         "Viscosity USP <911>",
                                         "Density",
                                         "Volume in Container/Extractable Volume, USP <697>",
                                         "Elemental Impurities",
                                         "Moisture Content, USP <921>",
                                         "Bioburden, USP <61>",
                                         "Endotoxin, USP <85>",
                                         "Particulate Matter, USP <787> <788> or <789> (3rd Party)",
                                         "Sterility, USP <71> <1208> (3rd Party)",
                                         "Color, Clarity, Appearance (Visual)",
                                         "Color, Clarity, Appearance (EP)",
                                         "CCIT (HVLD)",
                                         "CCIT (Dye Ingress, 3rd Party)",
                                         "CCIT (Helium Leak, 3rd Party)",
                                         "CCIT (Vacuum Decay, 3rd Party)",
                                         "UP Appearance",
                                         "Uniformity of Dosage"
                                     ],    
                }         
      },
  methods: {


       update_formulation_step_list: function(){
          //Update selection list for where to insert step
        this.formulation_steps = []; //Clear array
        this.formulation_steps.push("Start") 
        for(var i = 1; i < this.getState.formulation.length; i++){
            this.formulation_steps.push(i) 
        
        }
        this.formulation_steps.push("End") 
        this.formulation_step = "End"

      },
      add_step: function(){
          
        //Set empty data needed for the formulation step that is chosen.
          var data_card;
          var number_of_excipients;
          var number_of_cpps;
          var number_of_waste_streams; 

        //Set empty data_card var the data card for the formulation step that is required. 
          switch(this.step_type){
             case "Dilution":
                  number_of_excipients = 1;
                  number_of_cpps = 1;
                  number_of_waste_streams = 0;
                  data_card =  {
                      excipient_process_component: ["Diluent"],
                      cpp_descriptions: ["Final Dilution Concentration"],
                      waste_stream_descriptions: [],
                      units: ["mg/mL"]
                  }
                  break;
             case "pH Adjustment":

                  number_of_excipients = 2;
                  number_of_cpps = 1;
                  number_of_waste_streams = 0;
                  data_card =  {
                      excipient_process_component: ["pH Adjustment Buffer(Acid)","pH Adjustment Buffer(Base)"],
                      cpp_descriptions: ["Final pH"],
                      waste_stream_descriptions: [],
                      units: ["pH"]
                  }
                  break;
            case "Concentration(TFF)":

                  number_of_excipients = 0;
                  number_of_cpps = 1;
                  number_of_waste_streams = 0;
                  data_card =  {
                      excipient_process_component: [],
                      cpp_descriptions: ["Final TFF Concentration"],
                      waste_stream_descriptions: [],
                      units: ["mg/mL"]
                  }
                  break;
            case "Buffer Exchange(TFF)":
                  
                  number_of_excipients = 1;
                  number_of_cpps = 0;
                  number_of_waste_streams = 1;
                  data_card =  {
                      excipient_process_component: ["Diafiltration Buffer"],
                      cpp_descriptions: [],
                      waste_stream_descriptions: ["Diafiltration Filtrate"],
                      units: ["mg/mL"]
                  }
                  break;
            case "Thaw":

                  number_of_excipients = 0;
                  number_of_cpps = 2;
                  number_of_waste_streams = 0;
                  data_card =  {
                      excipient_process_component: [],
                      cpp_descriptions: ["Thaw Temperature","Thaw Duration"],
                      waste_stream_descriptions: [],
                      units: ["C","min"]
                  }
                  break;
            case "Component Addition":

                  number_of_excipients = 1;
                  number_of_cpps = 0;
                  number_of_waste_streams = 0;
                  data_card =  {
                      excipient_process_component: ["Component Addition"],
                      cpp_descriptions: [],
                      waste_stream_descriptions: [],
                      units: ["g"]
                  }
                  break;
            case "Other":

                  number_of_excipients = 0;
                  number_of_cpps = 0;
                  number_of_waste_streams = 0;
                  data_card =  {
                      excipient_process_component: [],
                      cpp_descriptions: [],
                      waste_stream_descriptions: [],
                      units: []
                  }
                  break;
            case "Mix":

                  number_of_excipients = 0;
                  number_of_cpps = 0;
                  number_of_waste_streams = 0;
                  data_card =  {
                      excipient_process_component: [],
                      cpp_descriptions: [],
                      waste_stream_descriptions: [],
                      units: []
                  }
                  break;
            case "Heat":

                  number_of_excipients = 0;
                  number_of_cpps = 1;
                  number_of_waste_streams = 0;
                  data_card =  {
                      excipient_process_component: [],
                      cpp_descriptions: ["Heating Temperature"],
                      waste_stream_descriptions: [],
                      units: ["C"]
                  }
                  break;
            case "Cool":

                  number_of_excipients = 0;
                  number_of_cpps = 1;
                  number_of_waste_streams = 0;
                  data_card =  {
                      excipient_process_component: [],
                      cpp_descriptions: ["Cooling Temperature"],
                      waste_stream_descriptions: [],
                      units: ["C"]
                  }
                  break;
          }

          var step_uid = uuidv4();//Create a unique identifier for the step that will be created.
                  
          var step_cpps = [];//Create an array for critical process parameter unique identifiers.

          var i = 0
          //Add CPP to formulation based on formulation step
          for(i = 0; i < number_of_cpps; i++){

            var cpp_uid = uuidv4();//Create unique identifier
            step_cpps.push(cpp_uid);//Add to step_cpps array

            this.getCPPs.formulation_cpps.push(
                                                    {
                                                        description: data_card.cpp_descriptions[i],
                                                        target: 0,
                                                        upper_limit: 0,
                                                        lower_limit: 0,
                                                        units: data_card.units[i],
                                                        step_uid: step_uid,
                                                        cpp_uid: cpp_uid,
                                                    }

                                                        );
        }
                 
        var step_excipients = [];//Create an array for excipient unique identifiers.

        //Add Excipeints to formulation based on formulation step
        for(i = 0; i < number_of_excipients; i++){

            var excipient_uid = uuidv4();//Create unique identifier for excipient that can be referred to in the step. 
            step_excipients.push(excipient_uid);//Add excipient uid to step excipient's array

            this.getExcipients.formulation_excipients.push(
                                                            {
                                                             process_component: data_card.excipient_process_component[i],
                                                             other_excipient:"",
                                                             excipient: "",
                                                             grade: "",
                                                             manufacturer: "",
                                                             manufacturer_pn: "",
                                                             formulation_requirement: "",
                                                             total_quantity:"",
                                                             step_uid: step_uid,
                                                             excipient_uid: excipient_uid,
                                                            }
                                                        );
                 }

        var step_waste_streams = []; //Create an array for waste stream uids.

        //Add Waste Streams to Waste Stream Table
        for(i = 0; i < number_of_waste_streams; i++){

            var waste_stream_uid = uuidv4();//Create unique identifier for excipient that can be referred to in the step. 
            step_waste_streams .push(waste_stream_uid);//Add excipient uid to step excipient's array

            this.getState.formulation_waste_streams.push(
                                                            {
                                                             description: data_card.waste_stream_descriptions[i],
                                                             composition: "",
                                                             volume: "",
                                                             step_uid: step_uid,
                                                             waste_stream_uid: waste_stream_uid,
                                                            }
                                                        );
                 }

        //Transform selected step to insert at into an integer
        if(this.formulation_step === "Start"){
            this.formulation_step = 0;
        }else if(this.formulation_step === "End"){
            this.formulation_step = this.getState.formulation.length;
        }



        //Append step to formulation array.
        this.getState.formulation.splice(this.formulation_step,0,
                                            {
                                                step_type: this.step_type,
                                                step_uid: step_uid,
                                                step_data: data_card,
                                                step_excipient_uids: step_excipients,
                                                step_cpp_uids: step_cpps,
                                                step_sample_uids:[],
                                                step_waste_stream_uids: step_waste_streams,
                                                step_comments:"",
                                                step_volume: 0,
                                                step_product_mass:0
                                            }
                                        );
        //Update selection list for where to insert step
        this.update_formulation_step_list()

      },
      //Remove step from formulation array. 
      remove_step: function(step_index, step_excipient_uids, step_cpp_uids, step_sample_uids,step_waste_stream_uids){

          var i = 0
          
          //Remove cpps from cpp list
          for(i = 0; i < step_cpp_uids.length; i++){
            var cpp_index = this.getCPPs.formulation_cpps.indexOf(this.getCPPs.formulation_cpps.find((cpp) => {return cpp.cpp_uid == step_cpp_uids[i]}))
            this.getCPPs.formulation_cpps.splice(cpp_index,1);
          }
          //Remove excipients excipient table and remove step
          for(i = 0; i < step_excipient_uids.length; i++){
              var excipient_index = this.getExcipients.formulation_excipients.indexOf(this.getExcipients.formulation_excipients.find((excipient) => {return excipient.excipient_uid == step_excipient_uids[i]}))
              this.getExcipients.formulation_excipients.splice(excipient_index,1)
          }
          //Remove samples from sample table
          for(i = 0; i < step_sample_uids.length; i++){
              var sample_index = this.getSampleInfo.formulation_sampling_plan.indexOf(this.getSampleInfo.formulation_sampling_plan.find((sample) => {return sample.sample_uid == step_sample_uids[i]}))
              this.getSampleInfo.formulation_sampling_plan.splice(sample_index,1)
          }
          //Remove waste stream from waste stream table
          for(i = 0; i < step_waste_stream_uids.length; i++){
              var stream_index = this.getState.formulation_waste_streams.indexOf(this.getState.formulation_waste_streams.find((stream) => {return stream.waste_stream_uid == step_waste_stream_uids[i]}))
              this.getState.formulation_waste_streams.splice(stream_index,1)
          }
          //Remove step from formulation steps
          this.getState.formulation.splice(step_index,1);
          
          //Update selection list for where to insert step
          this.update_formulation_step_list();
      },
     
      add_sample: function(step_uid){
          var sample_uid = uuidv4()//Generate UID for sample

          this.getSampleInfo.formulation_sampling_plan.push(//Add Sample to formulation sample table
              {
                        sample_type: "",
                        description: "",
                        number_of_samples: "",
                        volume_per_sample: "",
                        storage_condition: "",
                        assay: "",
                        contract_lab: "",
                        lab: "",
                        step_uid: step_uid,
                        sample_uid: sample_uid 

             },
        
          );
          //Add Sample UID to step sample uid array
          this.getState.formulation[this.getState.formulation.indexOf(this.getState.formulation.find(step => step.step_uid === step_uid))].step_sample_uids.push(sample_uid)
      },
      remove_sample: function(index){
          this.getSampleInfo.formulation_sampling_plan.splice(index,1);
      },


        //Functions to characterize the formulation process. 
      update_volumes: function(){
          
          //Loop through all steps in the formulation and update the volumes. 

          for(var i = 0; i < this.getState.formulation.length; i++){
            //Declare variables for previous step volume and concentration
            var prev_volume = 10;
            var prev_product_mass;
            
            //Set the variables
            if(i === 0){
                prev_volume = this.getCSMInfo.total_batch_quantity
                prev_product_mass = this.getCSMInfo.concentration * prev_volume
            }else{
                prev_volume = this.getState.formulation[i-1].step_volume
                prev_product_mass = this.getState.formulation[i-1].step_product_mass
            }
            //Calculate step volume based on step type.
            switch(this.getState.formulation[i].step_type){
             case "Dilution":
                  var final_concentration = this.getCPPs.formulation_cpps.find(cpp => cpp.cpp_uid === this.getState.formulation[i].step_cpp_uids[0]).target
                  this.getState.formulation[i].step_volume = this.dilution_volume_change(prev_product_mass,final_concentration)
                  this.getState.formulation[i].step_product_mass = prev_product_mass
                  break;
            }
            //Need to figure out how to update the excipient quantities. This might be unfeasible. 

          }
          


      },

      dilution_volume_change: function( previous_step_product_mass,final_concentration){
          //This function will take the previous step's volume and concentration and return the new volume. 
          //Dilution Equation: C1 x V1 = C2 x V2
          //var c1 = previous_step_concentration;
          //var v1 = previous_step_volume;
          //var c2 = final_concentration;

          var final_volume = previous_step_product_mass/final_concentration//(c1)/c2;

          return final_volume

      }
  }

}
</script>

<style scoped>
    .v-select-input{
        font-size: 1em;
    }

</style>