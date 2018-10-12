<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
export default {
  name: 'app',
    created(){
        this.$store.commit('GetSampleUser')
    }
}
</script>

<style>
html,body{
  height:100%;
}
#app {
  display: flex;
  flex-direction: column;
  bottom: 0;
  left: 0;
  overflow: auto;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 0;
  font-family: 'Segoe UI',Tahoma,Geneva,Verdana,sans-serif;
    font-size: 14px;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
