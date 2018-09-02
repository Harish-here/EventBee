<template>
    <div class="justify-center flex-column">
        
        <div>Create A Event</div>
        <div class="flex flex-column w-70">
            <span v-for='(j,index) in EventModel' :key='j.label' class='flex'>
                <label>{{ j.label }}</label>
                <input v-if="j.type !== 'textarea'"
                       v-model='EventHolder[index]'
                       :type="j.type"
                       :name='j.label' />
                <textarea v-if="j.type === 'textarea'"
                         :name="j.label" id="" cols="30" rows="3"></textarea>
            </span>
            <hr>
            <label>Customized label <button @click='ChoosenCustom.push(JSON.parse(JSON.stringify(CustomeModel)))'>Add</button> <button @click='ChoosenCustom = []'>Remove All</button></label>
            <span v-for='(i,index) in ChoosenCustom' :key='i.index' class='flex'>
                <input class='pa2' type="text" v-model='i.label' />
                <input type="radio" :name='"same"+index' value="Mandoatory" v-model='i.option'>Mandoatory
                <input type="radio" :name='"same"+index' value="optional" v-model='i.option'>optional
                <select name="type" id="" v-model='i.type'>
                    <option value="text">text</option>
                    <option value="textarea">textarea</option>
                </select>
                <button @click="ChoosenCustom.splice(index,1)">X</button>
            </span>
            <span><button @click='CreateEvent'>Create the event</button></span>
        </div>
    </div>
</template>
<script>
import FormData from '@/assets/EventForm';

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
            ChoosenCustom : []
        }
    },
    methods : {
        CreateEvent: function(){
            //send the data to create api
            this.EventModel.eCustom = this.ChoosenCustom;
            
        }
    }
}
</script>

