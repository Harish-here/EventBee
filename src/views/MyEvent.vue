<template>
    <div class='flex flex-column flex-wrap'>
        <div class='pa2'>
        <h3>Event I'm Participating</h3>
            <event-card :EventData='EventParticipating' Type='participate'></event-card>
        </div>
        <div class='pa2'>
            <h3>Event I've Created</h3>
            <event-card :EventData='EventCreated' Type='monitor'></event-card>
        </div>
        
    </div>
</template>
<script>
import EventCard from '@/components/EventCard'
export default {
    name: 'MyEvents',
    components: {
        EventCard
    },
    computed: {
        EventCreated(){
            return this.$store.state.CreatedEvents
        },
        EventParticipating(){
            return this.$store.state.ParticipatingEvents
        }
    },
    data: function(){
        return {

        }
    },
    methods: {
       
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


