<template>
        <v-container>
                    <v-tabs>
                        <v-tab >Validation</v-tab>
                                
                              <v-tab-item>
                                  <Qualification_Validation/>
                              </v-tab-item>
                              
                        </v-tabs>
        </v-container>
</template>
<script>

import { mapGetters } from 'vuex'
import Qualification_Validation from "./DP_Forms/Qualification_Validation.vue"
export default {
    name: "Quality",
    computed: mapGetters(['getServices','getComponents']),
    components: {
        Qualification_Validation,
  }
}
</script>