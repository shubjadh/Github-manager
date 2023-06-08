<template>
  <div class="background-box">
  <h1 class="header-title">Repositories</h1>
    <div class="header-line"></div>
    <div v-if="repoData.length > 0">
    <table class="repository-table">
      <tr>
        <th>Repository ID</th>
        <th>Repository Name</th>
        <th>Repository Link</th>
        <th>Language</th>
        <th>Date/Time</th>
      </tr>
      <tr v-for = "(repos, rowNum) in repoData">
        <td>{{ repos.id }}</td>
        <td>{{ repos.name }}</td>
        <td>{{ repos.html_url }}</td>
        <td>{{ repos.language }}</td>
        <td>{{ repos.created_at }}</td>
  
      </tr>
      <tr v-for = "(reposLocal, rowNum) in repoLocalData">
        <td>{{ reposLocal.id }}</td>
        <td>{{ reposLocal.name }}</td>
        <td>{{ reposLocal.html_url }}</td>
        <td>{{ reposLocal.language }}</td>
        <td>{{ reposLocal.created_at }}</td>
      </tr>
    </table>
  </div>
  <p>The total number of Repositories: {{ repoData.length+repoLocalData.length }}</p>
  <button class="redirect-button" @click="redirectToGistPage">View your Gists</button>
</div>
</template>
  
  <script lang="ts">
  export default {
    name: 'repo',
  };
  </script>
  
  <script setup lang="ts">
import { onMounted, ref } from 'vue';
import type {RepositoryApiInterface} from './ApiInterfaces';
import axios from 'axios';
import { useRouter } from 'vue-router';

  const router = useRouter();

  const redirectToGistPage = () => {
    router.push('/gist'); 
  };


  //Most code goes here
  let repoData = ref<RepositoryApiInterface[]>([])
  let repoLocalData = ref<RepositoryApiInterface[]>([])

  onMounted(async () => {
    console.log("Page 1 mounted")

    //this is where to go and get the repository data
    let allRepoURI = 'http://localhost:9500/ghsecure/users/shubjadh/repos'
    let allRepoURILocal='http://localhost:9500/repository'
    //Use axios to load the Reporsitory data - readup on await to make
    //async calls easier
    let repoAPI = await axios.get<RepositoryApiInterface[]>(allRepoURI)
    let repoAPILocal = await axios.get<RepositoryApiInterface[]>(allRepoURILocal)

    //if OK, set the repositoryData variable, so that we can render in the ui
    if(repoAPI.status == 200){
      repoData.value = repoAPI.data
    }
    
    if(repoAPILocal.status==200){
      repoLocalData.value=repoAPILocal.data
     }
    
  })
  </script>
  

  <style scoped>
  table {
      margin: 0 auto; 
  }
  
  .header-title {
    line-height: 1.5;
    text-align: center;
    font-size: 32px;
    margin-bottom: 20px;
}
  .header-line {
    width: 100%;
    height: 2px;
    background-color: #4DB2EC;
    margin-bottom: 20px;
    }
  table.repository-table {
  margin: 0 auto;
  border-collapse: collapse;
  max-width: 100%;
  
}

table.repository-table th,
table.repository-table td {
  border: 1px solid #000;
  padding: 8px;
}
.background-box {
  background-color: white;
  padding: 20px;
  max-width: fit-content;
  margin: 40px auto;
}
button {
  margin-top: 10px;
  font-size: 20px;
  padding: 15px 30px;
  border: none;
  background-color: #4DB2EC;
  color: white;
  cursor: pointer;
  border-radius: 5px;
}
</style>