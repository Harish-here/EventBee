import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    CreatedEvents: [],

  },
  mutations: {
    CreateEvent(state,NewEvent){
      //create random id 
      let id = Math.floor(Math.random() * Math.floor(2000));
      NewEvent['id'] = id;
      //create new event push to global state
      state.CreatedEvents.push(NewEvent)
    },
  },
  actions: {

  }
})
