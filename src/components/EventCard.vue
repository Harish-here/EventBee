<template>
    <div class='flex flex-wrap w-100'>
            <div class="event-card w-30 ma2" v-for='e in EventData' :key='e.id' @click='EventClicked(e)'>
                <div class='w-30 bg-green pa2 white flex flex-column justify-center items-center'>
                    <div class='flex flex-column'>
                        <span class='f3 tc pa1'>12</span>
                        <span class='f4 pa1 tc'>Oct 18</span>
                        <span class='f5 pa1 tc'>{{e.eTime}}</span>
                    </div>
                </div>
                <div class='w-70 pa1'>
                    <div class='f4 pa1'>{{e.eName}}</div>
                    <div class='pa1'><i class="fa fa-map-marker" aria-hidden="true"></i> {{e.eLocation}}</div>
                    <div class='pa1'><i class="fa fa-calendar" aria-hidden="true"></i> {{e.eEndDate}} to {{e.eEndDate}}</div>
                    <div class='pa1'>{{e.eDescription}}</div>
                    <div></div>
                </div>
            </div>
            <div class='f4 tc light-gray'  v-if='EventData.length === 0'>oops ! No Events to Display</div>
    </div>
</template>
<script>
export default {
    name:'EventCard',
    props: {
        EventData: {
            type: Array,
            default: function(){
                return []
            }
        },
        Type: {
            type: String,
            default: 'info'
        }
    },
    methods: {
        EventClicked: function(event){
            this.$emit('EventClicked',{event:event,mode:this.Type});
            
            if(this.Type === 'participate') this.$router.push({path: `/app/event/participate/${event.id}`});
            if(this.Type === 'monitor') this.$router.push({path: `/app/event/monitor/${event.id}`}); 
            if(this.Type === 'info') this.$router.push({path: `/app/event/info/${event.id}`});
        }
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
    cursor: pointer;
}
</style>

