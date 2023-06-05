<template>
    <div v-if="repoData.length > 0">
    <table>
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

  //Most code goes here
  let repoData = ref<RepositoryApiInterface[]>([])
  let repoLocalData = ref<RepositoryApiInterface[]>([])

  onMounted(async () => {
    console.log("Page 1 mounted")

    //this is where to go and get the repository data
    let allRepoURI = 'https://api.github.com/users/shubjadh/repos'
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
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped></style>