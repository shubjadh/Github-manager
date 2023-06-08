    
    <template>
      <div class="background-box">
      <div class="home">
        <h1>Welcome to GitLab</h1>
        <div class="header-line"></div>
        <p>Explore, collaborate, and manage your GitHub Repositories with GitLab.</p>
        <p>Login in to get started or create a new account.</p>
        <div class="button-container">
          <button class="login-button" @click="redirectToLogin">Login</button>
          <button>Signup</button>
        </div>
      </div>
    </div>
    </template>
    
    <script lang="ts">
    export default {
      name: 'HomePage',
    };
    </script>
    
    <script setup lang="ts">
    //Most code goes here
    import { useRouter } from 'vue-router';

    const router = useRouter();

    const redirectToLogin = () => {
      router.push('/Login');
    };
    </script>
    
    <style scoped>
  .home {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  line-height: 1.5;
  }

  .header-line {
  width: 100%;
  height: 2px;
  background-color: #4DB2EC;
  margin-bottom: 20px;
}

  h1 {
  font-size: 32px;
  margin-bottom: 20px;
  }

  p {
  font-size: 18px;
  margin-bottom: 10px;
  }

  .button-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
}
.background-box {
  background-color: white;
  padding: 20px;
  max-width: 60%;
  margin: 40px auto;
  height: 80vh;
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