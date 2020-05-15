<template>
  <v-app id="inspire">
    <Client_Portal_Form  v-if="getAuthenticationData.authenticated"/>
    <v-content v-else>
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="12"
            sm="8"
            md="4"
          >
            <v-card class="elevation-12">
              <v-toolbar
                color="red"
                dark
                flat
              >
                <v-toolbar-title>Login</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    label="Login"
                    name="login"
                    prepend-icon="mdi-account-box"
                    type="text"
                    v-model= "getAuthenticationData.username"
                  />
                  <v-text-field
                    id="password"
                    label="Password"
                    name="password"
                    prepend-icon="mdi-lock"
                    type="password"
                    v-model = "getAuthenticationData.password"
                  />
                </v-form>
              </v-card-text>
              <v-card-actions>
                  <v-list >
                      <v-list-item v-for = "err in getAuthenticationData.error_list" :key="err.index">
                          <v-list-item-content>{{err}}</v-list-item-content>
                      </v-list-item>
                  </v-list>
                <v-spacer />
                <v-btn v-on:click = "authenticate" color="primary">Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
    <!--<Client_Home v-if="getAuthenticationData.authenticated && !getAuthenticationData.client_portal_form && !getAuthenticationData.client_portal_questionaire" @showProduct = "viewProduct($event)"/>-->
    
    <!--<Process_Overview v-if="getAuthenticationData.authenticated && getAuthenticationData.client_portal_questionaire"/>-->
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex'
import Client_Portal_Form from './Client_Portal_Form.vue'
//import Client_Home from './Client_Home.vue'
//import Process_Overview from './components/Process_Overview.vue'
  export default {
    props: {
      source: String,
    },
    components: {
    Client_Portal_Form,
    //Client_Home,
    //Process_Overview
  },
  computed: mapGetters(['getAuthenticationData']),
  data(){
            return {
                
            }
  },
  methods:{
    authenticate: async function(){
      this.getAuthenticationData.error_list = [];
      if(this.getAuthenticationData.username == "" || this.getAuthenticationData.password == ""){

        if(this.getAuthenticationData.username == ""){
          this.getAuthenticationData.error = true;
          this.getAuthenticationData.error_list.push("Enter a username")

        }
        if(this.getAuthenticationData.password == ""){
            this.getAuthenticationData.error = true;
            this.getAuthenticationData.error_list.push("Enter a password")
          }

      }else{
        //Enter API Call to the database for authentication
        var user = {
          username: this.getAuthenticationData.username,
          password: this.getAuthenticationData.password
        }
        for (var i = 0; i < this.getAuthenticationData.credentials.length; i++){
                if(this.getAuthenticationData.credentials[i].username == user.username && this.getAuthenticationData.credentials[i].password == user.password){
                    //this.getAuthenticationData.$emit('user_authenticated');
                    //this.getAuthenticationData.$router.push('/ClientHome')
                    this.getAuthenticationData.authenticated = true;
                    this.getAuthenticationData.username= "";
                    this.getAuthenticationData.password = "";

                    break
                }else{
                    this.getAuthenticationData.error_list.push("Incorrect Username or Password")
                }

            }
       


      }
    
  },
  viewProduct: function(product){
    if(product == '1'){
        this.getAuthenticationData.client_portal_form = false;
        this.getAuthenticationData.client_portal_questionaire = true;
    }else{
        this.getAuthenticationData.client_portal_form = true;
        this.getAuthenticationData.client_portal_questionaire = false;
    }

  }
  }
  }
</script>