<template>
  <div >
    <h3>Client Team Information</h3>
    <h5>Please enter the contact information for the representatives from your team.</h5>
      <v-form>
            <v-row v-for = "representative in getClientInfo.client_info"  v-bind:key = "representative.title">
                
                <v-col cols = 4>
                  <p class = "mt-6"><b>{{representative.title}}: </b></p>  
                </v-col>

                  <v-col cols = 2>
                    <v-text-field
                      v-model= "representative.first_name"
                      label="First Name"
                      clearable
                      :rules=[requireName]
                    ></v-text-field>
                </v-col>
                
                <v-col cols = 2>
                  <v-text-field
                    v-model= "representative.last_name"
                    label="Last Name"
                    clearable
                  ></v-text-field>
                </v-col>

                <v-col cols = 2>
                  <v-text-field
                    v-model= "representative.email"
                    label="Email"
                    clearable
                  ></v-text-field>
                </v-col>

                <v-col cols = 2>
                  <v-text-field
                    v-model= "representative.phone_number"
                    label="Phone Number"
                    clearable
                  ></v-text-field>
                </v-col>

            </v-row>
            <v-row v-for = "representative in getClientInfo.added_members"  v-bind:key = "representative.title">
                <v-col cols = 4>
                  <v-text-field
                  v-model = "representative.role"
                  label = "Role"
                  clearable
                  >
                  </v-text-field>
                </v-col>

                  <v-col cols = 2>
                    <v-text-field
                      v-model= "representative.first_name"
                      label="First Name"
                      clearable
                    ></v-text-field>
                </v-col>
                
                <v-col cols = 2>
                  <v-text-field
                    v-model= "representative.last_name"
                    label="Last Name"
                    clearable
                  ></v-text-field>
                </v-col>

                <v-col cols = 2>
                  <v-text-field
                    v-model= "representative.email"
                    label="Email"
                    clearable
                  ></v-text-field>
                </v-col>

                <v-col cols = 2>
                  <v-text-field
                    v-model= "representative.phone_number"
                    label="Phone Number"
                    clearable
                    append-outer-icon = "mdi-delete"
                    @click:append-outer = "remove_team_member(getClientInfo.added_members.indexOf(representative))"
                  >
                  </v-text-field>
                </v-col>
            </v-row>
            <v-btn depressed @click = "add_team_member()">
              <span>Add Team Member</span>
              <v-icon right>mdi-plus-box</v-icon>
            </v-btn>
            
      </v-form>   
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
//import { mapActions } from 'vuex'

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

    //...mapActions(['addContactInfo'])//This maps the data to the data store when it changes. 
      add_team_member: function(){
          this.getClientInfo.added_members.push(
              { 
        role:"", 
        first_name:"",
        last_name: "",
        phone_number:"",
        email:""
      }
          );
      },
      remove_team_member: function(index){
          this.getClientInfo.added_members.splice(index,1);
      }
		
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>