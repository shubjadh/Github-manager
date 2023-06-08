<template>
    <div class="background-box">
      <h1 class="header-title">GitHub User Profile Search</h1>
      <div class="header-line"></div>
      <div class="input-container">
        <p>Please enter the username of the user you want to search</p>
        <input v-model="username" type="text" placeholder="Enter GitHub username">
        <button @click="getUserProfile">Submit</button>
      </div>
  
      <div v-if="userProfile">
        <div>
          <img :src="userProfile.avatar_url" alt="User Avatar" class="user-avatar" />
        </div>
        <h2>User Profile:</h2>
        <div>
          <strong>Username:</strong> {{ userProfile.login }}
        </div>
        <div>
          <strong>Name:</strong> {{ userProfile.name }}
        </div>
        <div>
          <strong>Bio:</strong> {{ userProfile.bio }}
        </div>
        <div>
          <strong>Followers:</strong> {{ userProfile.followers }}
        </div>
        <div>
          <strong>Following:</strong> {{ userProfile.following }}
        </div>
        <div>
          <strong>The total number of Repositories:</strong> {{ repoData.length }}
        </div> 
      </div>
        
    </div>
  </template>
  
  <script setup lang="ts">
    import { onMounted, ref } from 'vue';
    import axios from 'axios';
    import type {RepositoryApiInterface} from './ApiInterfaces';
    import type {UserProfileApiInterface} from './ApiInterfaces';
    
    let username = ref('');
    let repoData = ref<RepositoryApiInterface[]>([]);
    let userProfile = ref<UserProfileApiInterface | null>(null);
  
    const getUserProfile = async () => {
      try {
        const userProfileURI = `http://localhost:9500/ghsecure/users/${username.value}`;
        const allRepoURI = `http://localhost:9500/ghsecure/users/${username.value}/repos`;
  
        const [userProfileResponse, repoAPI] = await Promise.all([
          axios.get<UserProfileApiInterface>(userProfileURI),
          axios.get<RepositoryApiInterface[]>(allRepoURI)
        ]);
  
        userProfile.value = userProfileResponse.data;
        repoData.value = repoAPI.data;
      } catch (error) {
        console.error(error);
      }
    };
  
    onMounted(async () => {
      console.log("Page 1 mounted");
    });
  </script>
  
  <style scoped>
  .background-box {
  background-color: white;
  padding: 20px;
  max-width: 60%;
  margin: 40px auto;
  height: 90vh;
  text-align: center;
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

  .input-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 30px;
    
  }

  .input-container input {
    margin-bottom: 10px;
    width: 300px; /* Increase the width as needed */
    font-size: 16px; /* Increase the font size as needed */
    padding: 10px;
  }

  .user-avatar {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    margin-bottom: 20px;
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
  p {
    font-size: 20px; 
    margin-bottom: 10px; 
  }

</style>

  