<template>
    <div>
        <!-- <div class='flex flex-column justify-center ba b--light-gray pa1'>
            <div v-for='(i,index) in EventLabel' :key="i.label" class='pa2' >
                <label class='w-50'>{{i.label}}</label><label class='w-50'>{{"sample" + EventModal[index]}}</label>
            </div>
        </div> -->
        <div v-if='View === "monitor"' class='w-100'>
            <div class='flex flex-column w-70 justify-center ba b--light-gray pa1'
                 v-if='ActiveEvent !== undefined && ActiveEvent.hasOwnProperty("id")'>
                 <button class='fr'>Edit</button>
                <div v-for='(i,index) in EventLabel' :key="i.label" class='pa2 flex w-100' >
                    <label class='w-50'>{{i.label}}</label>
                    <label class='w-50'>{{ ActiveEvent[index]}}</label>
                </div>
                <span>Total Registred User {{ ActiveEvent.eRegisteredUser.length }}</span>
                <table>
                    <thead><tr><td v-for='p in ActiveEvent.eCustom' :key='p.lable'>{{p.label}}</td></tr></thead>
                    <tbody>
                        <tr v-for='j in ActiveEvent.eRegisteredUser'  :key='j'>
                            <td v-for='(y,index) in j' v-if='index !== "UserId"' :key='y'>{{y}}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div v-else>No Such Events to display</div>
            
        </div>
        <div v-if='View === "info"'></div>
        <div v-if='View === "participate"' class='flex w-100'>
          <div class='flex flex-column w-70 justify-center ba b--light-gray pa1'
                 v-if='ActiveEvent !== undefined && ActiveEvent.hasOwnProperty("id")'>
                <div v-for='(i,index) in EventLabel' :key="i.label" class='pa2 flex w-100' >
                    <label class='w-50'>{{i.label}}</label>
                    <label class='w-50'>{{ ActiveEvent[index]}}</label>
                </div>
                <div v-if='!AlreadyRegistered'>
                    <button @click='Partcipate'>Participate</button>
                </div>
                <div v-if='!AlreadyRegistered'>
                    <span v-for='(j,index) in ActiveEvent.eCustom' :key='j.label' class='flex ma1'>
                        <label class='w-30 pa1'>{{ j.label }} <sup class='red' v-if='j.mandatory'>*</sup></label>
                        <input v-if="j.type !== 'textarea'"
                            v-model='Register[index]'
                            :type="j.type"
                            :name='j.label'
                            @focusin='TempRemoveLabel(index)'
                            @focusout="ValidateField(index,j)"
                            :class='{"ba b--red" : Error.indexOf(index) >= 0}'
                            class='w-40 pa1' />
                        <textarea v-if="j.type === 'textarea'"
                                v-model='Register[index]'
                                :name="j.label" id="" cols="30" rows="3"
                                :class='{"ba b--red" : Error.indexOf(index) >= 0}'
                                >
                        </textarea>
                        <span v-if='Error.indexOf(index) >= 0' class='red pa1'>provide a valid {{j.label}}</span>
                    </span>
                </div>
                <div class='tc' v-if='AlreadyRegistered'>You are already registered to this event</div>
            </div>
            
            <div v-else>No Such Events to display</div>
            
        </div>
    </div>
</template>
<script>
import FormData from "@/assets/EventForm"
export default {
    name: "Display",
    data: function(){
        return {
            AlloweView : ["info","monitor","participate"],
            EventModal: {...FormData.eCreateHolder},//holds the original value
            EventLabel : {...FormData.eCreateForm},
            Error: [],
            Register: {}
        }
    },
    computed:{
        View(){
            var index = this.AlloweView.indexOf(this.$route.params.type);
            return (index !== -1) ? this.AlloweView[index] : "unauthorized"; 
        },
        EventId(){
            return (this.ViewType !== "unauthorized") ?
                    this.$route.params.id : 0 ;
        },
        ActiveEvent(){
            // const self = this;
            const o = this.$store.state;
            let active = [];
            if(this.View === 'participate') active = o.GlobalEventStore;
            if(this.View === 'monitor') active = o.CreatedEvents;
            if(this.View === 'info') active = o.Feed;
            let ind = active.findIndex(x => Number(x.id) === Number(this.EventId) );
            if(ind > -1){
                return active[ind]
            }else{
                return {}
            }
        },
        AlreadyRegistered(){
            if(this.$route.params.type == 'participate'){
                let id = this.$store.state.CurrentUserId;
                if(this.ActiveEvent.hasOwnProperty('id')){
                    if(this.ActiveEvent.eRegisteredUser.findIndex(x => x.UserId == id) > -1) {
                        return true
                    }
                }
                return false
            }else{
                return false
            }
        }
        
    },
    methods: {
      ValidateField: function(index,field){
            let o = this.Register;
            switch(field.type){
                case 'text': if(o[index] === '' || o[index] === ' '){
                    this.Error.push(index);
                    return;
                }break;
                case 'number': if(o[index] === '' || o[index] === ' '){
                    this.Error.push(index);
                    return;
                }break;
                case 'textarea': if(o[index] === '' || o[index] === ' '){
                    this.Error.push(index);
                    return;
                }break;
                case 'date': if(o[index] === '' || o[index] === ' ' || new Date(o[index]) === 'Invalid Date'){
                    this.Error.push(index);
                    return;
                }break;
                case 'time': if(o[index] === '' || o[index] === ' '){
                    this.Error.push(index);
                    return;
                }  break;              
            }
            this.Error.splice(this.Error.indexOf(index),1);//if nothing happens just remove it from the error
        },
        TempRemoveLabel: function(label){
            //this is to remove the label when they are in focus of text box
            this.Error.splice(this.Error.indexOf(label),1);
        },
        Partcipate: function(){
            this.Register.UserId = this.$store.state.CurrentUserId;
            this.$store.commit('RegisterAUser',{NewUser : this.Register,EventId: this.ActiveEvent.id});
            this.$store.dispatch('getCurrentUserData');
            this.Register = {};
        }
    },
    created: function(){
        //call for the server
        // const self = this;
        // axios('https://api.myjson.com/bins/kedr8').then((data)=>{
        //     self.EventInfo = data.data[0];
        // });
    
    }
}
</script>

