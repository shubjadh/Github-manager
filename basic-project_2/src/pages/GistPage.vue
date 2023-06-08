<!-- https://api.github.com/gists/14eba66e9b53afec7caf2a70ab8a9b5b -->
<template>
    <div class="background-box">
    <div class="gist">
      <h2>Gists</h2>
      <div class="header-line"></div>
      <div v-if="gists.length > 0">
        <ul>
          <li v-for="gist in gists" :key="gist.id">
            <h3>Gist Description : {{  gist.description }}</h3>
            <ul>
              <li v-for="(file, filename) in gist.files" :key="filename">
                <h4>Gist file name : {{ filename }}</h4>
                <pre>{{ file.content }}</pre>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div v-else>
        <p>Loading the gists...</p>
      </div>
    </div>
    </div>
  </template>

  
  
  <script lang="ts">
  import { onMounted, ref } from 'vue';
  import axios from 'axios';
  import type {Gist} from './ApiInterfaces';
  
  export default {
    name: 'Gist',
    setup() {
      const gists = ref<Gist[]>([]);
  
      onMounted(async () => {
        try {
          const response = await axios.get<Gist>('http://localhost:9500/ghsecure/gists/14eba66e9b53afec7caf2a70ab8a9b5b');
          gists.value = [response.data];
        } catch (error) {
          console.error(error);
        }
      });
  
      return {
        gists,
      };
    },
  };
  </script>
  
  <style scoped>
  .gist {
    max-width: 800px;
    margin: 0 auto;
  }
  
  h2 {
    text-align: center;
    line-height: 1.5;
    font-size: 32px;
    margin-bottom: 20px;
  }
  
  h3 {
    font-size: 18px;
    margin-top: 1rem;
  }
  
  h4 {
    font-size: 16px;
    margin-top: 0.5rem;
  }
  
  pre {
    font-size: 14px;
    background-color: #f5f5f5;
    padding: 10px;
    border-radius: 4px;
  }
  .header-line {
    width: 100%;
    height: 2px;
    background-color: #4DB2EC;
    margin-bottom: 20px;
    }
    .background-box {
    background-color: white;
    padding: 20px;
    max-width: 60%;
    margin: 40px auto;
    height: 80vh;
 }
  </style>
  