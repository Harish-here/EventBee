<template>
    <div>

        <div v-if='EventInfo.hasOwnproperty("eventName")'>
            <label></label><label for="">{{index}}</label>

        </div>
    </div>
</template>
<script>
export default {
    name: "Display",
    data: function(){
        return {
            AlloweView : ["info","monitor","participate"],
            EventInfo: {}
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

