//import axios from 'axios'; //Uncomment this when you get it connnected to the mongoDB back-end
const state = {
    //Can Delete this once the user authentication is employed through Office 365 Dynamics 365. 
    authentication_data:{
              client_portal_form: false,
              client_portal_questionaire: true,  
              user_name:"",
              password:"",
              error:false,
              error_list:[],
              credentials:[
                    {
                        username:"Test",
                        password: "Test123"
                    }
                ],
              authenticated: false,

    },
    //Table for client contact information.
    client_team_information: {
    client_info: [
      { 
        title:"Project Manager", 
        first_name:"",
        last_name: "",
        phone_number:"",
        email:""
      },
      { 
        title:"Manufacturing Representative", 
        first_name:"",
        last_name: "",
        phone_number:"",
        email:""
      },
      { 
        title:"Quality Control/Analytical Representative", 
        first_name:"",
        last_name: "",
        phone_number:"",
        email:""
      },
      { 
        title:"Material/Supply Chain Representative", 
        first_name:"",
        last_name: "",
        phone_number:"",
        email:""
      },
      { 
        title:"Health and Safety", 
        first_name:"",
        last_name: "",
        phone_number:"",
        email:""
      },
      { 
        title:"Compliance/Quality Representative", 
        first_name:"",
        last_name: "",
        phone_number:"",
        email:""
      },
      
      
    ],
    added_members: [],
  },
  //Information pertaining to drug product molecule.
  molecule_info:{
        Drug_Name:"",
        Disease_Indication: "",
        Development_Phase: null,
        Trial_Location:"",
        Other_Location:"",
        Product_Type: "",
        Other_Product_Type: ""},
    
    Service: {service: ""},
  
  //CSM info this has the shipping and formulation specs on incoming csm.  This needs to be dynamic to accommodate more than one CSM. 
  csm_info: {

    material_name: "",
    material_synonyms: "",
    manufacturer:"",
    manufacturer_pn: "",
    supplier_name: "",
    supplier_pn: "",
    appearance:"",
    total_batch_quantity: '',
    concentration: "",
    density:"",
    physical_state:[],
    other_state:"",
    storage_condition: "",
    thaw_temperature:"",
    thaw_duration:"",
    bds_uom: [],
    number_of_storage_containers: '',
    container_type: "",
    
  },

//Original Formulation information if we go with the formulation builder model this will change. 
  formulation_information:{
    formulation_instructions: {instructions: "", nitrogen_sparge: false},
    target_pH: 0,
    lower_pH_limit:0,
    upper_pH_limit:14,
    pH_buffers: [],
    other_pH_buffers: "",
    special_equipment_required:"No",
    special_equipment: [],
    equipment_purchase: "",
    other_special_equipment:"",
    preferred_cleaning:"No",
    validated_cleaning:"No",
    flammables:"No",
    heating:"No",
    waste:{
      solvents:{present: false,composition: "", estimated_volume: ""},
      caustics:{present: false,composition: "", estimated_volume: ""},
      excess_buffer:{present:false,composition: "", estimated_volume: ""},
      filter_flush:{present:false,composition: "", estimated_volume: ""},
      potent:{present:false,composition: "", estimated_volume: ""},
      other:{present:false,composition: "", estimated_volume: ""}
    },
    final_concentration: 0,
    lower_concentration_limit: 0,
    upper_concentration_limit: 0
    },
  //Safety information. 
  api_bds_safety_info: {
    available_reports: [],
    safety_characteristics: [],
    oel_range: "",
    dose: "",
    mw:"",
    list_oel:"",
    ade_pde: "",
    solubility:"",
    oct_water_coef: "",
    skin_absorption:"",
    hazards: {
        toxic:{
            status:"",
            tested:"",
            noael_loael:"",
            exposure_limit:""

        },
        genotoxic:{
            status:"",
            tested:"",
            noael_loael:"",
            exposure_limit:""

        },
        carcinogen:{
            status:"",
            tested:"",
            noael_loael:"",
            exposure_limit:""

        },
        reproductive_toxin:{
            status:"",
            tested:"",
            noael_loael:"",
            exposure_limit:""

        },
        teratogen:{
            status:"",
            tested:"",
            noael_loael:"",
            exposure_limit:""

        },
        sensitizer:{
            status:"",
            tested:"",
            type:""

        }

    }
  },
  //Information on filtrations used in 
  filtration_info:{
    bioburden_required: "",
    bioburden_filtrations:[],
    customer_specific_sterile_filter: "",
    refiltration_data_available: "",
    intermediate_storage_conditions: "",
    intermediate_storage_time: ""
},
//Information on the lyophilization. 
lyo_info:{
  lyophilization: 'No',
  vendor_list: "No",
  instructions: "",
  freeze_temperature: 0,
  condenser_temperature: 0,
  additional_freeze_time: 0,
  vacuum_pressure: 0

},
//Terminal Sterilization information. 
terminal_sterilization_info: {
  required: "Yes",
  //Feasibility material aseptically filled
  aseptically_filled: "Yes",
  feasibility_material_available: "No",
  date_material_available:"",
  stability_outcomes: "",
  exposure_outcomes: "",
  text_exposure_samples: {
    description: "Text Exposure Samples",
    target: 0,
    upper_limit: 0,
    lower_limit: 0,
    units: "ea." 
},
  sterilization_time: {
    description: "Terminal Sterilization Time",
    target: 0,
    upper_limit: 0,
    lower_limit: 0,
    units: "min" 
},
  sterilization_temperature:  {
    description: "Terminal Sterilization Temperature",
    target: 0,
    upper_limit: 0,
    lower_limit: 0,
    units: "C" 
}
},

//Simple inspection information. 
inspection_info: {
  inspection_temperature: "",
  tor: "",
  final_storage_temperature: "",
  appearance_description: ""

},

//This is fill information
production_components: {
  selected_fp_state:"",
  selected_fill_sterility:"",
  number_of_fills: 0,
  batch_size: 0,
  //Container Row 
  container: "",
  container_size: "",
  container_description: "",
  container_manufacturer: "",
  container_manufacturer_pn: "",
  container_quantity_required:"",
  //Seal Row
  seal: "",
  seal_size: "",
  seal_description: "",
  seal_manufacturer: "",
  seal_manufacturer_pn: "",
  seal_quantity_required:"",
  //Bioburden Reduction Filter
  bioburden: "",
  bioburden_size: "",
  bioburden_description: "",
  bioburden_manufacturer: "",
  bioburden_manufacturer_pn: "",
  bioburden_quantity_required:"",
  //Normal Components
  components:
  [
    {component: "Stopper", size: "", description: "", manufacturer: "", manufacturer_pn: "", quantity_required: ""},
    {component: "Sterilizing Filter", size: "", description: "", manufacturer: "", manufacturer_pn: "", quantity_required: ""},
    {component: "Bag", size: "", description: "", manufacturer: "", manufacturer_pn: "", quantity_required: ""},
  ],
  other_components: []
},
excipients:{                     
  excipients:[],
  formulation_excipients:[]
  },
  auto_label_pack: {
    cap_coding_required: "",
    opaque_label:"",
    side_loading: "",
    tamper_proof: "",
    num_inserts: "",
    num_units: "",
    carton_dimensions: {
        length: "",
        width: "",
        height: ""
    },
    pallet_configuration: "",
    other_pallet_configuration: "",
    shipping_method: "",
    other_shipping_method: ""
},
commercial_packaging_components: {
  components:[
      //These removed components are for Syringe line components and don't belong in the packaging section.
      {component: "Carton", size: "", description: "", manufacturer: "", manufacturer_pn: "", quantity_required: ""},
      {component: "Product Insert", size: "", description: "", manufacturer: "", manufacturer_pn: "", quantity_required: ""},
      {component: "Instruction for Use", size: "", description: "", manufacturer: "", manufacturer_pn: "", quantity_required: ""},
      {component: "Aggregation Multipack", size: "", description: "", manufacturer: "", manufacturer_pn: "", quantity_required: ""},
      {component: "Aggregation Case", size: "", description: "", manufacturer: "", manufacturer_pn: "", quantity_required: ""}

  ],
  other_components:[],
},
//Simple commercial serialization information.
commercial_serialization_info: {
  additional_information: "",
  serialization_levels: [],
  serial_number_provider: ""
},
//Quality and Compliance validation requirements.
process_validation_data:{
  validations: [
      {method_name: "Vendor Qualification", 
       selected: false,
       description: "Single vendor site qualification.  Includes site audit and report." ,
       comments:""},

       {method_name: "Raw Material Qualification", 
       selected: false,
       description: "Testing of three (3) lots of each raw material to USP or EP Monograph and review of TSE/BSE certificates",
       comments:""},

       {method_name: "Filter Qualification", 
       selected: false,
       description: "Filter testing for compatibility, extractables and microbial retention.",
       comments:""},

       {method_name: "Filter Adsorption Qualification/Validation", 
       selected: false,
       description: "Filter testing for API/Product adsorption.",
       comments:""},

       {method_name: "Container Closure Component Qualification", 
       selected: false,
       description: "Container qualification to USP or EP standards. (Glass Vial or Syringe Barrel USP <660>/EP 3.1.2, Stopper USP <381>, EP 3.2.9, etc.)",
       comments:""},

       {method_name: "Package Validation of Primary Container Closure", 
       selected: false,
       description: "Product-Specific extractables testing on the container closure using WFI, IPA, Hexane solvents",
       comments:""},

       {method_name: "Terminal Sterilization Cycle Development and Validation", 
       selected: false,
       description: "Terminal sterilization cycle development and validation.  Required for all phase III products undergoing terminal sterilization",
       comments:""}
  ]      
  },


  critical_process_parameters: {
    /*{
      description: "",
      target: "",
      upper_limit: "",
      lower_limit: "",
      units: ""
       }*/
    formulation_cpps: [],
    cpps: [
        {
        process: "",
        description: "",
        target: "",
        upper_limit: "",
        lower_limit: "",
        units: ""
         }
    ],
    fill_cpps: []
},

samples_and_testing:{

  sampling_plan: [],
  formulation_sampling_plan: []


},

stability_sampling_plan: {
  stability_sampling: "",

  stability_sample_modules: [
      {
          temperature: "",
          orientation: "",
          comments:"",
          stability_samples: []
      }
          ]
},

freeze_thaw_stability: {

  freeze_temperature: "",
  other_freeze_temperature: "",
  thaw_temperature: "",
  other_thaw_temperature: "",
  comments:"",
  freeze_thaw_assays: []

},
formulation:[],
formulation_waste_streams: [],
fill_specifications: 
    {
      fill_type: "",
      additional_fill_process: "",
      selected_fp_state:"",
      selected_fp_state_disabled: false,//disable input depending on fill type selected.
      selected_fill_sterility:"",
      selected_fill_sterility_disabled: false,//disable input depending on fill type selected.
      number_of_fills: 0,
      batch_size: 0,
      fill_cpps: [{}],
      vial_fill_components: 
      [
        {component: "Vial", size: "", description: "", manufacturer: "", manufacturer_pn: "", quantity_required: ""},
        {component: "Stopper", size: "", description: "", manufacturer: "", manufacturer_pn: "", quantity_required: ""},
        {component: "Seal", size: "", description: "", manufacturer: "", manufacturer_pn: "", quantity_required: ""}
      ],
      syringe_fill_components: 
      [
        {component: "Syringe", size: "", description: "", manufacturer: "", manufacturer_pn: "", quantity_required: ""},
        {component: "Plunger Rod", size: "", description: "", manufacturer: "", manufacturer_pn: "", quantity_required: ""},
        {component: "Backstop", size: "", description: "", manufacturer: "", manufacturer_pn: "", quantity_required: ""},
        {component: "Needle", size: "", description: "", manufacturer: "", manufacturer_pn: "", quantity_required: ""},
        {component: "Stopper", size: "", description: "", manufacturer: "", manufacturer_pn: "", quantity_required: ""},
      ],
      cartridge_fill_components: []
    }
};

const getters = {
    getState: (state) => state,
    getClientInfo: (state) => state.client_team_information,
    getMoleculeData: (state) => state.molecule_info,
    getServices: (state) => state.Service,
    getCSMInfo: (state) => state.csm_info,
    getFormulationInfo: (state) => state.formulation_information,
    getAPIBDSSafety: (state) => state.api_bds_safety_info,
    getFiltrationInfo: (state) => state.filtration_info,
    getLyoInfo: (state) => state.lyo_info,
    getTermInfo: (state) => state.terminal_sterilization_info,
    getInspectionInfo: (state) => state.inspection_info,
    getComponents: (state) => state.production_components,
    getExcipients: (state) => state.excipients,
    getAutoPack: (state) => state.auto_label_pack,
    getCommercialComponents: (state) => state.commercial_packaging_components,
    getComSerialInfo: (state) => state.commercial_serialization_info,
    getValidationInfo: (state) => state.process_validation_data,
    getCPPs: (state) => state.critical_process_parameters,
    getSampleInfo: (state) => state.samples_and_testing,
    getStabilityInfo: (state) => state.stability_sampling_plan,
    getFreezeThawInfo: (state) => state.freeze_thaw_stability,
    getAuthenticationData: (state) => state.authentication_data
};

const actions = {
    async addContactInfo({ commit }, client_contact_info){
        //const response = axios.post('',{client_contact_info})
        
        commit('addClientInfo', client_contact_info);
    },
    async addMolecule({ commit }, molecule_info){
        //const response = axios.post('',{client_contact_info})
        commit('addClientMolecule', molecule_info);
    },
    async addServices({ commit }, Services){
        //const response = axios.post('',{client_contact_info})
        commit('addClientServices', Services);
    },

    //async getClientData({ commit }){
      //const response = await axios.get('https://webhooks.mongodb-stitch.com/api/client/v2.0/app/client_portal-ysdax/service/getClientForm/incoming_webhook/getClientForm');
      //console.log(response.data);
  //}
};

const mutations = {
    addClientInfo: (state, client_contact_info) =>  (state.client_info = client_contact_info), 
    addClientMolecule: (state, molecule_info) => (state.molecule_info = molecule_info),
    addClientServices: (state, Services) => (state.Services = Services)
};

export default{
    state,
    getters,
    actions,
    mutations
};
