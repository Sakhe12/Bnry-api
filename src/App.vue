<template>
  <navbar></navbar>
  <router-view/>
  <footer></footer>
</template>
 
<script>
import navbar from './components/Navbar.vue'
import footer from './components/Footer.vue'
export default {
  components : {
    navbar,
    footer
  }
}
</script>
<style>
#app {
  font-family: 'Raleway', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
