<template>
    <div>
        <div class='flex flex-column justify-center ba b--light-gray pa1'>
            <div v-for='(i,index) in EventLabel' :key="i.label" class='pa2' >
                <label class='w-50'>{{i.label}}</label><label class='w-50'>{{"sample" + EventModal[index]}}</label>
            </div>
        </div>
        <div v-if='ViewType === "info"'></div>
        <div v-if='ViewType === "monitor"'></div>
        <div v-if='ViewType === "participate"'></div>
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
            EventLabel : {...FormData.eCreateForm}
        }
    },
    computed:{
        ViewType(){
            var index = this.AlloweView.indexOf(this.$route.params.type);
            return (index !== -1) ? this.AlloweView[index] : "unauthorized"; 
        },
        EventId(){
            return (this.ViewType !== "unauthorized") ?
                    this.$route.params.id : 0 ;
        }
    },
    created: function(){
        //call for the server
        const self = this;
        axios('https://api.myjson.com/bins/kedr8').then((data)=>{
            self.EventInfo = data.data[0];
        });
    }
}
</script>

