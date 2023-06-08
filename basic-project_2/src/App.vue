<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
//import RouterLink  from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import AboutPage from './pages/AboutPage.vue'
import LoginPage from './pages/LoginPage.vue'
import RepositoryPage from './pages/RepositoryPage.vue'
import gist from './pages/GistPage.vue'
import user from './pages/UserProfilePage.vue'

</script>

<template>
  <div>
    
  <header>
    <nav>
      <div class="logo">
          <img src="./logo/logo.png" alt="Logo" />
        </div>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/Login">Login</RouterLink>
        <RouterLink to="/repositories">Repositories</RouterLink>
        <RouterLink to="/gist">Gist </RouterLink>
        <RouterLink to="/about">About </RouterLink>
        <RouterLink to="/user">Search</RouterLink>
        
      </nav>
      
  </header>
 
  <RouterView />
  <footer class="footer-bar">
      <div class="footer-content">
        <p>&copy; 2023 GitLab. All rights reserved.
        
          <a href="#"> Privacy Policy</a>
          <a href="#"> Terms of Service</a>
          <a href="#"> Contact Us</a></p>
        
      </div>
    </footer>
  </div>
  

  
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Central+Sans+Rounded&display=swap');

header {
    display: flex;
    justify-content: center;
    background-color: #24292F;
    color: #ffffff;
    font-family: 'Central Sans Rounded', sans-serif;
  }

  

  nav {
    display: flex;
    justify-content: center; 
    align-items: center;
    width: 100%;
    font-size: 18px;
    text-align: center;
    margin-top: 0;
    position: relative;
    top: 100%;
    background-color: #24292F;
    font-family: 'Central Sans Rounded', sans-serif;
  }

  .logo{
    margin-right: 0.5%; 
  }
  


.logo img {
    height: 40px; 
  }


nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1.5rem;
  border-left: 1px solid var(--color-border);
  color: white; 
  text-decoration: none; 
  
}

nav a:first-of-type {
  border: 0;
}

nav a.router-link-active {
  background-color: #222222; 
  color: white; 
}



.footer-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}



.footer-content nav a {
  color: white;
  margin: 0 0.5rem;
  text-decoration: none;
}
p{
  text-align: justify;
  
}

</style>
