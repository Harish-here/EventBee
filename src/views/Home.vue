<template>
  <div class="home">
    <div class='side-bar' :class="{'is-collapsed' : slide}">
      <button v-if='!slide' @click='slide = !slide'>slide</button>
      <div class='flex flex-column'>
          <router-link to="/app/create" class='pa2'>Create</router-link> 
          <!-- <router-link to="/app/event">events</router-link> -->
          <router-link to="/app/myself" class='pa2'>Myself</router-link>
          <router-link to="/app" class='pa2'>Home</router-link>
          
        </div>
    </div>
    <div class='main-area'>
      <header>
        <button v-if='slide' @click='slide = !slide'>slide</button>
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

export default {
  name: 'home',
  data: function(){
    return {
        slide:false
    }
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
  display: flex;
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

</style>

