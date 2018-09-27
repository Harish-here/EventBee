import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    CreatedEvents: [],
    ParticipatingEvent: [],
    UserBase: [],
    CurrentUserId : '',
    LoggedIn : false,
  
  },
  mutations: {
    CreateEvent(state,NewEvent){
      //create random id 
      let id = Math.floor(Math.random() * Math.floor(2000));
      NewEvent['id'] = id;
      //create new event push to global state
      state.CreatedEvents.push(NewEvent)
    },
    GetParticipatingEvent(state){
      //make ajax call to somewhre
      state.ParticipatingEvent.push('')
    },
    RegisterAUser(state,obj){
      let index = state.CreatedEvents.findIndex(x => x.id == obj.EventId);
      
      if(index > -1){
        state.CreatedEvents[index].eRegisteredUser.push(obj.NewUser);
      }
    }
  },
  actions: {

  }
})
