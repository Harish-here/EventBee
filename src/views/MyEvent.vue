<template>
    <div class='flex flex-wrap'>
        <div class="event-card w-30" @click='moveToEvent()' v-for='i in EventList' :key='i.eName'>
            <div class='w-30 bg-green pa2 white f14'>
                <span>12</span>
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
       moveToEvent: function(){
            //move to the respective event along with the type
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


