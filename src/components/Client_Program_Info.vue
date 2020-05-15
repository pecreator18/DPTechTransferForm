<template>
  <div>
      <v-container style = "background-color: RGBA(0,0,0,0)">
          <v-tabs v-model = "tab">
                        <v-tab>Client Team Contact Information</v-tab>
                        <v-tab>Drug Information</v-tab>
          </v-tabs>
          <br>
          <v-tabs-items v-model = "tab">

              <v-tab-item>
                <Client_Info />
              </v-tab-item>

              <v-tab-item>
                <Molecule_Info/>
              </v-tab-item>
          </v-tabs-items>
      </v-container>
  </div>
</template>

<script>
import Client_Info from './Basic_Info/Client_Team_Info.vue'
import Molecule_Info from './Basic_Info/Molecule_Info.vue'

export default {
    name: "Program and Client Info",
    components: {
    Client_Info,
    Molecule_Info,
  },

  data(){
			return {
                tab: 0 //need to instatiate the tab variable so that it opens up on the first tab.
      }
  }

}
</script>

<style>

</style>