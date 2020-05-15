<template>
  <v-app>
      <v-app-bar
      app
      >
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src= "./assets/Aji_BioPharma.jpg"
          transition="scale-transition"
          width="200"
        />
        <v-app-bar-title text = "#EE1C26"></v-app-bar-title>
        <v-spacer>    </v-spacer>
        <v-spacer>    </v-spacer>
        <v-btn depressed @click = "sign_out">
          <span>Sign Out</span>
          <v-icon right width = "200">mdi-exit-to-app</v-icon>
      </v-btn>
    </v-app-bar>
    <br>
    <br>
    <v-content>
        <v-container>
            <h3>Client Portal Form</h3>
            <h5>Two different directions for this form. Click to view each sample</h5>
            <br>
            <v-row>
              <v-col>
                <v-btn color="primary" v-on:click="getProductForm('1')">Questionaire</v-btn>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-btn color="primary" v-on:click="getProductForm('2')">Digital Form</v-btn>
              </v-col>
            </v-row>
            <v-row v-for = "product in products" :key="product.index">
                <v-col>
                <!--v-btn-- v-on:click="getProductForm()">{{product}}</!--v-btn-->
                </v-col>
            </v-row>
        </v-container>
    </v-content>
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: mapGetters(['getAuthenticationData']),
    data(){
			return {

            products: ["Questionaire", "Digital Form"]

            }
  
  },
  methods:{
      getProductForm(product) {
          //this.$router.push('/ClientPortalForm')
          this.$emit('showProduct',product)
      },
      sign_out(){
        this.getAuthenticationData.authenticated = false;
        this.getAuthenticationData.client_portal_form = false;
        this.getAuthenticationData.client_portal_questionaire = false;
      },




  }

}
</script>

<style>

</style>