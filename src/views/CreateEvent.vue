<template>
    <div class="justify-center flex-column">
        
        <h3>Create A Event</h3>
        <div class="flex flex-column w-80">
            <span v-for='(j,index) in EventModel' :key='j.label' class='flex ma1'>
                <label class='w-30 pa1'>{{ j.label }} <sup class='red' v-if='j.mandatory'>*</sup></label>
                <input v-if="j.type !== 'textarea'"
                       v-model='EventHolder[index]'
                       :type="j.type"
                       :name='j.label'
                       @focusin='TempRemoveLabel(index)'
                       @focusout="ValidateField(index,j)"
                       :class='{"ba b--red" : Error.indexOf(index) >= 0}'
                       class='w-40 pa1' />
                <textarea v-if="j.type === 'textarea'"
                         :name="j.label" id="" cols="30" rows="3"
                         :class='{"ba b--red" : Error.indexOf(index) >= 0}'
                         v-model='EventHolder[index]'>
                </textarea>
                <span v-if='Error.indexOf(index) >= 0' class='red pa1'>provide a valid {{j.label}}</span>
            </span>
            
            <label>Customized label for particpant <button @click='ChoosenCustom.push(JSON.parse(JSON.stringify(CustomeModel)))'>Add</button> <button @click='ChoosenCustom = []'>Remove All</button></label>
            <span v-for='(i,index) in ChoosenCustom' :key='i.index' class='flex'>
                <input class='pa2' type="text" v-model='i.label' />
                <input type="checkbox" :name='"option"+index' v-model='i.option'>Mandoatory
                <!-- <input type="radio" :name='"option"+index' value="optional" v-model='i.option'>optional -->
                <select name="type" id="" v-model='i.type'>
                    <option value="text">text</option>
                    <option value="textarea">textarea</option>
                    <option value="email">Email</option>
                    <option value="number">number</option>
                </select>
                <button @click="ChoosenCustom.splice(index,1)">X</button>
            </span>
            <span><button @click='CreateEvent'>Create the event</button></span>
            <pre>{{ ChoosenCustom}}</pre>
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
            this.EventModel.eCustom = JSON.parse(JSON.stringify(this.ChoosenCustom));
            this.$store.commit('CreateEvent',this.EventHolder);
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

