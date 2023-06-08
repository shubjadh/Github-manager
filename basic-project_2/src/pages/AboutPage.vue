<template>
  <div class="background-box">
  <div class="about">
    <h2>About GitLab</h2>
    <div class="header-line"></div>
    <p class="paragraph">
      GitLab is a popular web-based platform for source code management and 
      collaboration. It provides a comprehensive set of features for managing 
      repositories, tracking issues, and view repository details. Additionally, 
      GitLab allows users to access Gists, search for users, and display their 
      profiles and information.
    </p>
    <p class="paragraph">
      With GitLab, you can easily manage your repositories, track changes, and
      view gists with your team members. It enables seamless integration with
      popular tools and workflows, allowing you to streamline your development
      process and increase productivity.
    </p>
    <p class="paragraph">
      Whether you're working on a small project or a large-scale enterprise
      application, GitLab provides the tools and features you need to build,
      test, and deploy your software with ease.
    </p>
  </div>
  </div>
</template>
  
  <script lang="ts">
  export default {
    name: 'About',
  };
  </script>
  
<style scoped>
.about {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  line-height: 1.5;
}

h2 {
  font-size: 32px;
  margin-bottom: 20px;
}

.header-line {
  width: 100%;
  height: 2px;
  background-color: #4DB2EC;
  margin-bottom: 20px;
}

.paragraph {
  font-size: 18px;
  margin-bottom: 10px;
  text-align: justify;
}
.background-box {
  background-color: white;
  padding: 20px;
  max-width: 60%;
  margin: 40px auto;
  height: 80vh;
}
</style>