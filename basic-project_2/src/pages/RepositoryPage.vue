<template>
    <div v-if="repoData.length > 0">
    <table>
      <tr>
        <th>Repository ID</th>
        <th>Repository Name</th>
        <th>Repository Description</th>
      </tr>
      <tr v-for = "(student, rowNum) in repoData">
        <td>{{ student.RepositoryId }}</td>
        <td>{{ student.RepositoryName }}</td>
        <td>{{ student.RepositoryDescription }}</td>
      </tr>
    </table>
  </div>
  <p>The number of Repositories: {{ repoData.length }}</p>
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

  onMounted(async () => {
    console.log("Page 1 mounted")

    //this is where to go and get the student data
    let allRepoURI = 'http://localhost:9500/repository'

    //Use axios to load the student data - readup on await to make
    //async calls easier
    let repoAPI = await axios.get<RepositoryApiInterface[]>(allRepoURI)

    //if OK, set the studentData variable, so that we can render in the ui
    if(repoAPI.status == 200){
      repoData.value = repoAPI.data
    }
  })


  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped></style>