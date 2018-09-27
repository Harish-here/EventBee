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
      //register a user for event
      let index = state.CreatedEvents.findIndex(x => x.id == obj.EventId);
      
      if(index > -1){
        state.CreatedEvents[index].eRegisteredUser.push(obj.NewUser);
      }
    },
    SignUpNewUser(state,NewUser){
      let id = Math.floor(Math.random() * Math.floor(100));
      NewUser.UserId = id;
      state.UserBase.push(NewUser);
    },
    LoggedIn(state,LogUserId){
      state.CurrentUserId = LogUserId;
      state.LoggedIn = true;
    },
    LoggedOut(state){
      state.CurrentUserId = '';
      state.LoggedIn = false;
    },
    GetSampleUser(state){
      axios('https://api.myjson.com/bins/7civ4').then(data=>{
        state.UserBase = data.data;
      })
    }
  },
  actions: {

  }
})
