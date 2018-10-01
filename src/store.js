import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    CreatedEvents: [],
    ParticipatingEvents: [],
    UserBase: [],
    CurrentUserId : '',
    LoggedIn : false,
    GlobalEventStore: [],
    Feed: []
  
  },
  mutations: {
    CreateEvent(state,NewEvent){
      //create random id 
      let id = Math.floor(Math.random() * Math.floor(2000));
      NewEvent['id'] = id;
      //create new event push to global state
      state.GlobalEventStore.push(NewEvent)
    },
    GetParticipatingEvent(state){
      //make ajax call to somewhre
      state.ParticipatingEvent.push('')
    },
    RegisterAUser(state,obj){
      //register a user for event
      let index = state.GlobalEventStore.findIndex(x => x.id == obj.EventId);
      
      if(index > -1){
        state.GlobalEventStore[index].eRegisteredUser.push(obj.NewUser);
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
      axios('https://api.myjson.com/bins/197l2w').then(data=>{
        state.UserBase = data.data;
      });
      axios('https://api.myjson.com/bins/euh88').then(data=>{
        state.GlobalEventStore = data.data;
      })
    },
    FetchCreatedEvent(state){
      state.CreatedEvents = state.GlobalEventStore.filter(x => x.eOwnerId == state.CurrentUserId);
    },
    FetchParticipate(state){
      state.ParticipatingEvents = state.GlobalEventStore.filter(x => {
        return ((x.eRegisteredUser.findIndex(y => y.UserId == state.CurrentUserId )) > -1)
      });
    },
    FetchFeed(state){
      state.Feed = state.GlobalEventStore.filter( x => {
        return (x.eOwnerId != state.CurrentUserId) && ((x.eRegisteredUser.findIndex(y => y.UserId == state.CurrentUserId )) == -1)
      })
    }
  },
  actions: {
      getCurrentUserData({commit}){
        commit('FetchCreatedEvent');
        commit('FetchParticipate');
        commit('FetchFeed');
      }
  }
})
