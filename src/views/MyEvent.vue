<template>
    <div class='flex flex-column flex-wrap'>
        <h3>Event I'm Participating</h3>
        <div class='pa2 ma2 flex'>
            <div class="event-card  ml2 w-25" v-for='i in EventList' :key='i.id'  @click='moveToEvent(i.id,"participate")'>
                <div class='w-30 bg-green pa2 white f14'>
                    <span>{{i.eStartDate}}</span>
                    <span>Oct 18</span>
                    <span>12.00 pm</span>
                </div>
                <div class='w-60 pa2'>
                    <div>{{i.eName}}</div>
                    <div>{{i.eLocation}}</div>
                    <div>{{i.eEndDate}}</div>
                    <div>{{i.eDescription}}</div>
                    <div></div>
                </div>
            </div>
        </div>
        <h3>Event I've Created</h3>
        <div class='pa2 ma2 flex'>

                    <div class="event-card ml2" v-for='i in EventList' :key='i.id'  @click='moveToEvent(i.id,"monitor")'>
                    <div class='w-30 bg-green pa2 white f14'>
                        <span>{{i.eStartDate}}</span>
                        <span>Oct 18</span>
                        <span>12.00 pm</span>
                    </div>
                    <div class='w-60 pa2'>
                        <div>{{i.eName}}</div>
                        <div>{{i.eLocation}}</div>
                        <div>{{i.eEndDate}}</div>
                        <div>{{i.eDescription}}</div>
                        <div></div>
                    </div>
                </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'MyEvents',
    computed: {
        EventList(){
            return this.$store.state.CreatedEvents
        }
    },
    data: function(){
        return {

        }
    },
    methods: {
       moveToEvent: function(id,where){
                //move to the respective event along with the type
            if(where === 'participate') this.$router.push({path: `/app/event/participate/${id}`});
            if(where === 'monitor') this.$router.push({path: `/app/event/monitor/${id}`}); 
            if(where === 'info') this.$router.push({path: `/app/event/info/${id}`}); 
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
}
</style>


