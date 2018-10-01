<template>
  <div class="home">
    <div class='side-bar' :class="{'is-collapsed' : slide}">
      <!-- <button v-if='!slide' @click='slide = !slide'>slide</button> -->
      <span v-if='!slide' @click='slide = !slide' class='fr'><i class="fa fa-chevron-left white f2" aria-hidden="true"></i></span>
      <div class='flex flex-column'>
          <router-link to="/app/create" class='pa2 nav-link f3'>Create</router-link> 
          <!-- <router-link to="/app/event">events</router-link> -->
          <router-link to="/app/myself" class='pa2 nav-link f3'>Myself</router-link>
          <router-link to="/app" class='pa2 nav-link f3'>Home</router-link>
          
        </div>
    </div>
    <div class='main-area'>
      <header>
        <!-- <button v-if='slide' @click='slide = !slide'>slide</button> -->
        <span v-if='slide' @click='slide = !slide' class='pa2 cursor'><i class="fa fa-bars f2" aria-hidden="true"></i></span>
        <h3>Event Bee</h3>
        <router-link to="/" class='pa2 fl'><button @click='$store.commit("LoggedOut")'>Log out</button></router-link>
      </header>
      <div class='action-area'>
        <router-view/>
      </div>
    </div>
    
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import EventCard from '@/components/EventCard'

export default {
  name: 'home',
  data: function(){
    return {
        slide:false
    }
  },
  components: {
   EventCard 
  },
  created : function(){
    if(!this.$store.state.LoggedIn){
      this.$router.push({path:'/'})
    }
  },
  
}
</script>
<style>
.home{
  display: flex;
  flex: 1;
  min-height: 1px;
  overflow: hidden;
}
.side-bar{
  /* display: flex; */
  flex: 0 0 auto;
  flex-direction: column;
  transition: margin-left 250ms ease-out,transform 250ms ease-out;
  width: 244px;
  background-color: #151b26;
}
.side-bar.is-collapsed {
  margin-left: -242px;
}
.main-area{
      display: flex;
    flex: 1;
    flex-direction: column;
    min-width: 920px;
    position: relative;
}
header{
  align-items: center;
  background: #fff;
  box-shadow: 0 1px 3px 0 rgba(0,0,0,0.15);
  display: flex;
  flex-shrink: 0;
  padding: 0 20px;
  border: 1px solid #fff;
}
.action-area,{
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  min-height: 150px;
  position: relative;
  padding:10px;
  background-color: #f6f8f9;
  overflow: auto;
}
.action-area > div:first-child{
   display: flex;
  flex: 1 1 auto;
  min-height: 1px;
  position: relative;
  padding:10px;
}
.nav-link{
padding: 1rem;
text-decoration: none;
font-weight: 600;
color:#fff;
}
</style>

