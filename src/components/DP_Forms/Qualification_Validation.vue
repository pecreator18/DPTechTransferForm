<template>
<div>
    <h2 >Process Performance Qualification/Process Validation</h2>
    <h5>Please select the process validation services that will be required.</h5>
    <v-container>
        <v-row class="text-center font-weight-bold" > 
            <v-col >Method</v-col>
            <v-col>Description</v-col>
            <v-col>Comments</v-col>    
        </v-row>
        <v-row v-for = "validation in getValidationInfo.validations" v-bind:key = "validation.index">
                <v-col>
                    <v-checkbox row wrap align-center
                    :label = validation.method_name
                    v-model = validation.selected
                    >{{validation.method_name}}</v-checkbox>
                </v-col>
                <v-col row wrap align-center>
                    {{validation.description}}
                </v-col>    
                <v-col row wrap align-center>
                    <v-textarea
                    label = "Comments"
                    v-model = "validation.comments"
                    >
                    </v-textarea>
                </v-col>       
        </v-row>
    </v-container>
    
</div>
  
</template>

<script>
import { mapGetters } from 'vuex'

export default {

    name: "Qualificatoin/Validation",
    computed: mapGetters(['getValidationInfo']),
    components: {
    
  },
  data(){
			return {  
                }
      }
  
  }
</script>

<style>

</style>