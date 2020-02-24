import Vuex from 'vuex';
import Vue from 'vue';
import form_data from './modules/form_data';


//Load Vuex
Vue.use(Vuex);

//Create store
export default new Vuex.Store({
    modules: {
        form_data
    }

})