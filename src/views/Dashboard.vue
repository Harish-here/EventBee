<template>
    <div class='flex-wrap'>
        
     <div class="event-card w-30" @click='moveToEvent()'>
         <div class='w-30 bg-green pa2 white f14'>
            <span>12</span>
            <span>Oct 18</span>
            <span>12.00 pm</span>
         </div>
         <div class='w-60 pa2'>
             <div>Name of the event</div>
             <div>cheppakk</div>
             <div>To : 10 aug 2018</div>
             <div>sample dess ,lndjdnkjdnk</div>
             <div></div>
         </div>
     </div>
    </div>
</template>

<script>
export default {
    name: "dashboard",
    data: function(){
        return {
            eventList : []
        }
    },
    methods : {
        moveToEvent: function(){
            //move to the respective event along with the type
        }
    },
    created : function(){
        const self = this;
        axios('https://api.myjson.com/bins/kedr8').then((data)=>{
            self.eventList = data.data;
        });
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


