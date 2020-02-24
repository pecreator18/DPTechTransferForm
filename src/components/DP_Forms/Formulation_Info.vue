<template>
  <div >
      <h3 >Formulation</h3>
      <h5>Please provide as much formulation information as possible.</h5>
      <v-textarea
      label = "Please Specify Instructions for Pooling or Compounding/Formulation"
      v-model= "getFormulationInfo.formulation_instructions.instructions"
      >
      </v-textarea>
       <v-checkbox
      label = "Nitrogen Sparge Required During Formulation"
      v-model= "getFormulationInfo.formulation_instructions.nitrogen_sparge"
      ></v-checkbox>
        <v-row>
                <v-col>
                    <v-select
                    label = "Are Flammable Liquids Required for Formulation?"
                    :items = yes_no
                    v-model = "getFormulationInfo.flammables"
                    >
                    </v-select>
                </v-col>
                <v-col>
                    <v-select
                    label = "Is heating required in the formulation?"
                    :items = yes_no
                    v-model = "getFormulationInfo.heating"
                    v-if = "getFormulationInfo.flammables == 'Yes'"
                    >
                    </v-select>
                </v-col>
      </v-row>
      <v-row>
          <v-col>
             <v-select
                label = "Special Formulation Equimpent Required"
                :items = yes_no
                v-model= "getFormulationInfo.special_equipment_required"
                >
            </v-select>
          </v-col>
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
          <v-col>
              <v-select
                label = "Will Aji-BioPharma Purchase Special Equipment?"
                :items = yes_no
                v-model= "getFormulationInfo.equipment_purchase"
                v-if = "getFormulationInfo.special_equipment_required == 'Yes' "
                >
                </v-select>
          </v-col>
          <v-col>
              <v-select
                label = "Do you have a required/preferred cleaning method for the equipment?"
                :items = yes_no
                v-model = "getFormulationInfo.preferred_cleaning"
                v-if = "getFormulationInfo.special_equipment_required == 'Yes' "
                >
                </v-select>
          </v-col>
          <v-col>
              <v-select
                label = "Is the cleaning method validated?"
                :items = yes_no
                v-model = "getFormulationInfo.validated_cleaning"
                v-if = "getFormulationInfo.special_equipment_required == 'Yes'  "
                >
                </v-select>
          </v-col>
      </v-row>
      <h4>Formulation Waste Streams:</h4>
      <v-row>
          <v-col>
              <v-checkbox
              label = "Solvent"
              v-model= "getFormulationInfo.waste.solvents.present"
              >
              </v-checkbox>
          </v-col>
          <v-col>
               <v-text-field 
              label = "Enter Solvent Composition"
              v-model= "getFormulationInfo.waste.solvents.composition"
              v-if = "getFormulationInfo.waste.solvents.present">
              </v-text-field>
          </v-col>
          <v-col>
              <v-text-field 
              label = "Estimated Solvent Volume" 
              v-model= "getFormulationInfo.waste.solvents.estimated_volume"
              v-if = "getFormulationInfo.waste.solvents.present">
            </v-text-field>
          </v-col>
      </v-row>
      <v-row>
          <v-col>
              <v-checkbox
              label = "Caustics/Acids"
              v-model= "getFormulationInfo.waste.caustics.present"
              >
              </v-checkbox>
          </v-col>
          <v-col>
               <v-text-field 
              label = "Enter Caustic Composition"
              v-model= "getFormulationInfo.waste.caustics.composition"
              v-if = "getFormulationInfo.waste.caustics.present">
            </v-text-field>
          </v-col>
          <v-col>
              <v-text-field 
              label = "Estimated Caustic Volume" 
              v-model= "getFormulationInfo.waste.caustics.estimated_volume"
              v-if = "getFormulationInfo.waste.caustics.present">
            </v-text-field>
          </v-col>
      </v-row>
      <v-row>
          <v-col>
              <v-checkbox
              label = "Excess Buffering Agents"
              v-model= "getFormulationInfo.waste.excess_buffer.present"
              >
              </v-checkbox>
          </v-col>
          <v-col>
               <v-text-field 
              label = "Enter Buffer Composition"
              v-model= "getFormulationInfo.waste.excess_buffer.composition"
              v-if = "getFormulationInfo.waste.excess_buffer.present">
            </v-text-field>
          </v-col>
          <v-col>
              <v-text-field 
              label = "Estimated Buffer Volume" 
              v-model= "getFormulationInfo.waste.excess_buffer.estimated_volume"
              v-if = "getFormulationInfo.waste.excess_buffer.present">
            </v-text-field>
          </v-col>
      </v-row>
      <v-row>
          <v-col>
              <v-checkbox
              label = "Filter Flush"
              v-model= "getFormulationInfo.waste.filter_flush.present"
              >
              </v-checkbox>
          </v-col>
          <v-col>
               <v-text-field 
              label = "Enter Filter Flush Composition"
              v-model= "getFormulationInfo.waste.filter_flush.composition"
              v-if = "getFormulationInfo.waste.filter_flush.present">
            </v-text-field>
          </v-col>
          <v-col>
              <v-text-field 
              label = "Estimated Filter Flush Volume" 
              v-model= "getFormulationInfo.waste.filter_flush.estimated_volume"
              v-if = "getFormulationInfo.waste.filter_flush.present">
            </v-text-field>
          </v-col>
      </v-row>
      <v-row>
          <v-col>
              <v-checkbox
              label = "Highly Potent Compounds"
              v-model= "getFormulationInfo.waste.potent.present"
              >
              </v-checkbox>
          </v-col>
          <v-col>
               <v-text-field 
              label = "Enter Highly Potent Compounds Composition"
              v-model= "getFormulationInfo.waste.potent.composition"
              v-if = "getFormulationInfo.waste.potent.present">
            </v-text-field>

          </v-col>
          <v-col>
              <v-text-field 
              label = "Estimated Highly Potent Compounds Volume" 
              v-model= "getFormulationInfo.waste.potent.estimated_volume"
              v-if = "getFormulationInfo.waste.potent.present">
            </v-text-field>
          </v-col>
      </v-row>
      <v-row>
          <v-col>
              <v-checkbox
              label = "Other"
              v-model= "getFormulationInfo.waste.other.present"
              >
              </v-checkbox>
          </v-col>
          <v-col>
               <v-text-field 
              label = "Enter Other Composition"
              v-model= "getFormulationInfo.waste.other.composition"
              v-if = "getFormulationInfo.waste.other.present">
            </v-text-field>
          </v-col>
          <v-col>
              <v-text-field 
              label = "Estimated Other Volume" 
              v-model= "getFormulationInfo.waste.other.estimated_volume"
              v-if = "getFormulationInfo.waste.other.present">
            </v-text-field>
          </v-col>
      </v-row>
      <h4>pH Specifications:</h4>
      <v-row>
          <v-col>
              <v-text-field 
              label = "Target pH"
              v-model= "getFormulationInfo.target_pH"
              type = "number">
            </v-text-field>
          </v-col>
          <v-col>
               <v-text-field 
              label = "pH Range Lower Limit"
              v-model= "getFormulationInfo.lower_pH_limit"
              type = "number">
            </v-text-field>

          </v-col>
          <v-col>
              <v-text-field 
              label = "pH Range Upper Limit"
               v-model= "getFormulationInfo.upper_pH_limit"
              type = "number">
            </v-text-field>
          </v-col>
      </v-row>
        <v-row>
            <v-col><v-select multiple
                label = "Required pH Adjustment Buffers"
                :items = pH_buffers
                v-model = "getFormulationInfo.pH_buffers"
                >
                </v-select></v-col>
            <v-col><v-text-field 
              label = "Other Adjustment Buffers"
              v-model= "getFormulationInfo.other_pH_buffers"
              v-if = "getFormulationInfo.pH_buffers.includes('Other')">
            </v-text-field></v-col>
        </v-row>
      <h4>Concentration Specifications:</h4>
      <v-row>
          <v-col>
              <v-text-field 
              label = "Final Target Bulk Concentration(mg/mL)"
              v-model= "getFormulationInfo.final_concentration"
              type = "number">
            </v-text-field>
          </v-col>
          <v-col>
               <v-text-field 
              label = "Concentration Range Lower Limit"
              v-model = "getFormulationInfo.lower_concentration_limit"
              type = "number">
            </v-text-field>
          </v-col>
          <v-col>
              <v-text-field 
              label = "Concentration Range Upper Limit"
               v-model= "getFormulationInfo.upper_concentration_limit"
              type = "number">
            </v-text-field>
          </v-col>
      </v-row>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: mapGetters(['getFormulationInfo']),
  created(){
  },
  data() {
    return{
        //Select inputs 
        yes_no: [ 'Yes', 'No'] ,
        special_equipment: ["TFF","Homogenizer","High Shear Mixer","Stainless Steel Tank(s)", "Heating/Cooling", "Other"],
        pH_buffers:["0.1 N Hydrochloric Acid","1N Hydrochloric Acid","5N Hydrochloric Acid","0.1 N Sodium Hydroxide","1 N Sodium Hydroxide","5 N Sodium Hydroxide","Other"]

    }
  }

}
</script>

<style scoped>

</style>