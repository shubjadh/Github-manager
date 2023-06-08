login page code:
<template>
  <div class="background-box">
    <div class="login-container">
      <h1>Login</h1>
      <div class="header-line"></div>
      <p>Login using your GitHub Account</p>
      <form @submit.prevent="login" class="login-form">
        <label for="email">Email</label>
        <input type="email" id="email" v-model="email" required>
        <label for="password">Password</label>
        <input type="password" id="password" v-model="password" required>
        <button class="submit" type="submit">Submit</button>
        <a href="#" @click.prevent="forgotPassword">Forgot Password?</a>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'ThirdPage',
  setup() {
    const email = '';
    const password = '';
    const router = useRouter();

    const login = () => {
      // Perform login logic here, e.g., send login request to the server
      console.log('Login submitted');
      console.log('Email:', email);
      console.log('Password:', password);

      // Redirect to the repositories page
      router.push('/repositories');
    };

    const forgotPassword = () => {
      // Handle forgot password logic here, e.g., show a modal or navigate to a forgot password page
      console.log('Forgot password clicked');
    };

    return {
      email,
      password,
      login,
      forgotPassword,
    };
  },
});
</script>
   
    
    <style scoped>
    .header-line {
    width: 100%;
    height: 2px;
    background-color: #4DB2EC;
    margin-bottom: 20px;
    }
    .login-container {
      display: center;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100vh;
    }
    
    .login-form {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    
    h1 {
      line-height: 1.5;
      text-align: center;
      font-size: 32px;
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
    
    a {
      margin-top: 10px;
      text-align: center;
    }
    .background-box {
    background-color: white;
    padding: 20px;
    max-width: 60%;
    margin: 40px auto;
  }
  p {
    text-align: center;
    font-size: 20px; 
    margin-bottom: 10px; 
  }
  label {
    font-size: 20px; 
    margin-bottom: 5px; 
  }
  input[type="email"],
  input[type="password"] {
    font-size: 20px; 
    padding: 10px; 
    margin-bottom: 10px; 
    width: 40%; 
    box-sizing: border-box; 
  }
  </style>