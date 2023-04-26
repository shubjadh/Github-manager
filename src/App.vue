<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
//import RouterLink  from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import FirstPage from './pages/FirstPage.vue'
import SecondPage from './pages/SecondPage.vue'
import ThirdPage from './pages/ThirdPage.vue'
import FourthPage from './pages/FourthPage.vue'
import FifthPage from './pages/FifthPage.vue'

</script>

<template>
  
  <header>
    <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/p1">About </RouterLink>
        <!-- <RouterLink to="/p2">Page 2</RouterLink> -->
        <RouterLink to="/p3">Login</RouterLink>
        <RouterLink to="/p4">Store</RouterLink>
        <RouterLink to="/p5">Cart</RouterLink>
      </nav>
      <hr/>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
  
  
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}


</style>
