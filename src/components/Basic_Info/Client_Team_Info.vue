<template>
  <div >
    <h3>Client Team Information</h3>
    <h5>Please enter the contact information for the representatives from your team.</h5>
      <v-form>
            <v-row v-for = "representative in getClientInfo"  v-bind:key = "representative.title">
                
                <v-col cols = 4>
                  <p class = "mt-6"><b>{{representative.title}}: </b></p>  
                </v-col>

                  <v-col cols = 2>
                    <v-text-field
                      v-model= "representative.first_name"
                      label="First Name"
                    ></v-text-field>
                </v-col>
                
                <v-col cols = 2>
                  <v-text-field
                    v-model= "representative.last_name"
                    label="Last Name"
                  ></v-text-field>
                </v-col>

                <v-col cols = 2>
                  <v-text-field
                    v-model= "representative.email"
                    label="Email"
                  ></v-text-field>
                </v-col>

                <v-col cols = 2>
                  <v-text-field
                    v-model= "representative.phone_number"
                    label="Phone Number"
                  ></v-text-field>
                </v-col>
            </v-row>
      </v-form>   
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { mapActions } from 'vuex'

export default {
  name: 'Client_Team_Info',
  computed: mapGetters(['getClientInfo']),
  created(){
    //this.client_contact_info = this.allData;//This keeps the global data in the component
  },
  props: {
    
  },
  data(){
			return {
        client_contact_info:{}
			}
},
methods: {

    ...mapActions(['addContactInfo'])//This maps the data to the data store when it changes. 
		
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>