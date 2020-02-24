<template>
  <div>
        <h3>Services Information</h3>
        <h5>Please select the Aji-Bio Services we will be providing. </h5>
        <v-form>
                <v-select label = "Services" v-model = "getServices.service" :items = services></v-select>
        </v-form>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Services_Info',
  props: {
    
  },
  computed: mapGetters(['getServices']),
  created(){
    //this.Service = this.getServices;//connect the vue component to the global variables. 
  },
  data(){
			return {
                services : ["ADC Services","Development Services","Drug Product Manufacturing","Large Molecule Manufacturing","Peptide Synthesis","Small Molecule Manufacturing"],	
			}
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
table{
    margin-left:auto; 
    margin-right:auto;
}
td{
    vertical-align: top;
}
label{
    float:left;
    font-weight: bold;
}
</style>