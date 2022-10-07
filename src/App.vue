<template>
  <div id="app">
   <Home/>
   <Login/>
   <hr>
   <Personal/>
  </div>
</template>

<script>
import Home from './components/Home.vue';
import Login from './components/Login.vue'
import Personal from './components/Personal.vue';


export default {
  name: 'App',
  components: {
    Home,
    Login,
    Personal,
    Personal
}
}
</script>

<style>

</style>
