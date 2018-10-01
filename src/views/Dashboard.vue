<template>
    <div class=' flex flex-column flex-wrap'>
        <EventCard :EventData='EventFeed' Type='participate' />
    </div>
</template>

<script>
// import axios from 'axios'
import EventCard from '@/components/EventCard'

export default {
    name: "dashboard",
    data: function(){
        return {
            eventList : []
        }
    },
    components:{
      EventCard  
    },
    computed: {
        EventFeed(){
            return this.$store.state.Feed
        }
    },
    methods : {
        
    },
    created : function(){
        // const self = this;
        // axios('https://api.myjson.com/bins/kedr8').then((data)=>{
        //     self.eventList = data.data;
        // });
    }
}
</script>
<style>
.event-card{
    box-shadow: 0 1px 3px 0 rgba(0,0,0,0.15);
    border: none;
    display: flex;
    height: 150px;
    background-color: #fff;
}
</style>


