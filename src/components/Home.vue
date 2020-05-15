<template>
  <div>
      <v-container style = "background-color: RGBA(0,0,0,0)">
          <br>
          <br>
          <v-row>
            <v-col class = 'text-center' id="makeheader" cols = 2>
              <span id= "letsmake">Let's</span>
              <br>
              <span id= "letsmake">Make</span>
            </v-col>
            <v-col cols = 1></v-col>
            <v-col cols = 3>
              <div style="height: 40%; width: 40%; margin: auto;">
          <v-scale-transition>
          <v-img src= "../assets/red_sphere.svg"
        contain
         />
         </v-scale-transition>
         </div>
         
            </v-col>
          </v-row>
  
                <!--
          <div style="height: 45%; width: 45%; margin: auto;">
          <v-img src= "../assets/red_sphere.svg"
        contain
         />
         </div>-->
          
          <br>
          <v-row>
            <v-col cols = 1></v-col>
            <v-col class = 'text-center' id = "clientprod" cols = 6>
              <span  id= "prodname">{{getMoleculeData.Drug_Name}}</span>
            </v-col>
          </v-row>
          <br>
          <v-row>
            <v-col  cols = 6>
              <p>This application contains modules of information required for beginning your partnership with
                Aji Bio-Pharma. Each module is focused on a specific area of your future project, and helps us gather
                information for generating your service proposal, and later, any production or analytical documentation
                required for your campaign. Please watch this short video or read the app overview below for guidance in filling out each module.</p>
            </v-col>
            <v-col  cols = 6>
              <video width="320" height="240" controls>
                  <source src="movie.mp4" type="video/mp4">
                  <source src="movie.ogg" type="video/ogg">
                    Your browser does not support the video tag.
              </video>
            </v-col>
          </v-row>  
      </v-container>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: "Home Icon",
    computed: mapGetters(['getMoleculeData']),}
</script>

<style scoped>
#makeheader{
background-color: rgba(91, 103, 112, 0.5);
margin:0px;
padding: 0px;

}
#clientprod{
  background-color: rgba(238, 28, 38, 1);
  margin:0px;
  padding:0px;
}

#letsmake{
font-family: 'Arial'; 
font-weight: bold; 
font-size: 3vw;
color: rgba(255, 255, 255, 1);
}
#prodname{
font-family: 'Arial'; 
font-size: 3vw;
display: block;
color: rgba(255, 255, 255, 1);
overflow: auto;
}

p{
  font-family: 'Arial'; 
  font-weight: bold; 
}

</style>