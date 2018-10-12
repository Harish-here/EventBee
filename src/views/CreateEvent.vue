<template>
    <div class="flex justify-center">
        <div class='w-60 bg-white pa4' style="overflow-y:auto">
            <div class='f4 tc w-100 pa2'>Create A Event</div>
            <div class="w-100">
                <form @submit.prevent="CreateEvent">
                    <div v-for='(j,index) in EventModel' :key='j.label' class='flex ma1 justify-center pa2'>
                        <label class='w-30 pa1'>{{ j.label }} <sup class='red' v-if='j.mandatory'>*</sup></label>
                        <span class='w-70'>
                            <input v-if="j.type !== 'textarea'"
                                v-model='EventHolder[index]'
                                :type="j.type"
                                :name='j.label'
                                @focusin='TempRemoveLabel(index)'
                                @focusout="ValidateField(index,j)"
                                :class='{"ba b--red" : Error.indexOf(index) >= 0}'
                                class='' />
                            <textarea v-if="j.type === 'textarea'"
                                    :name="j.label" id="" cols="40" rows="3"
                                    :class='{"ba b--red" : Error.indexOf(index) >= 0}'
                                    @focusin='TempRemoveLabel(index)'
                                    @focusout="ValidateField(index,j)"
                                    v-model='EventHolder[index]'>
                            </textarea>
                            <div v-if='Error.indexOf(index) >= 0' class='red pa1'>Provide a Valid {{j.label}}</div>
                        </span>
                        
                    </div>
                    
                    <div class='pa2 w-75 tc flex justify-between items-baseline b'>
                        <span class='f5'>Fields for User to Register</span>
                        <button @click='ChoosenCustom.push(JSON.parse(JSON.stringify(CustomeModel)))'>Add + </button>
                        <button @click='ChoosenCustom = []'>Remove All -</button>
                    </div>
                    <div class='pa2 flex flex-column justify-center'>
                        <div v-for='(i,index) in ChoosenCustom' :key='i.index' class='flex justi items-baseline pa1 w-100'>
                            <input class='ma1' type="text" v-model='i.label' />
                            <span class='ma1 flex items-baseline'>
                                <input type="checkbox"  :name='"option"+index' v-model='i.option'>Mandoatory
                            </span>
                            <!-- <input type="radio" :name='"option"+index' value="optional" v-model='i.option'>optional -->
                            <span class='ma1'>Field type
                                <select name="type" id=""  v-model='i.type'>
                                    <option selected disabled>Field Type</option>
                                    <option value="text">text</option>
                                    <option value="textarea">textarea</option>
                                    <option value="email">Email</option>
                                    <option value="number">number</option>
                                </select>
                            </span>

                            <button class='br3 ba b--light-silver bg-transparent' @click="ChoosenCustom.splice(index,1)">x</button>
                        </div>
                    </div>
                    
                    <div class='w-100 ma2 tc'><button @click='CreateEvent' type="submit">Create the event</button></div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
import FormData from '@/assets/EventForm';//getting the foma modal

export default {
    name: "create",
    data: function(){
        return {
            EventModel: {...FormData.eCreateForm},
            EventHolder : {...FormData.eCreateHolder},
            CustomeModel : {
                label: "",
                option: "",
                type: ""
            },
            ChoosenCustom : [],
            Error: []
        }
    },
    methods : {
        CreateEvent: function(){

            // validate the fields once again
            for(let i in this.EventModel){
                if(i !== null){
                    this.ValidateField(i, this.EventModel[i])
                }
            }

            //check for Errors
            if(this.Error.length > 0){
                alert('need to fill all')//replaceble one
                return
            }
            
            //one customize filed need to be there
            if(this.ChoosenCustom.length === 0){
                alert('Atleast one customize field need to be there')
                return
            }

            //send the data to create api
            this.EventHolder.eCustom = JSON.parse(JSON.stringify(this.ChoosenCustom));
            this.EventHolder.eRegisteredUser = [];// to add registered user
            this.EventHolder.eOwnerId = this.$store.state.CurrentUserId;
            this.$store.commit('CreateEvent',this.EventHolder);
            this.$store.dispatch('getCurrentUserData'); //refresh the gurrent user data; 
            
            this.EventHolder = {...FormData.eCreateHolder};//flushing old values
            this.ChoosenCustom = [];

        },
        ValidateField: function(index,field){
            let o = this.EventHolder;
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
        }
    }
}
</script>
<style>
input[type='text'],input[type='date'],input[type='time'],input[type='number'],textarea{
    width:250px !important;
    height: 30px ;
}
</style>


