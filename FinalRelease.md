**Project title:**
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

 GitLab Website

**Language Used:**
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

1. Vue.js

2. Typescript

3. HTML/CSS

**Description:** 
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

GitLab is a popular web application  for source code management and collaboration. It provides a comprehensive set of features for managing repositories, tracking issues, and view repository details. Additionally, GitLab allows users to access Gists, search for users, and display their profiles and information.

**Table of Contents:**
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

1. Installation

2. Usage

3. Contributing

4. Contact Information

**Installation:**
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

To install and set up the Git Lab Website, follow these steps:

1. Clone the repository: https://github.com/shubjadh/SE577.git
 
2. Navigate to the project directory: server-folder and basic-project-2 folder

3. First go to the server folder and read its instructions

4. Then go to basic-project-2 folder and read its instructions

**Usage:**
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Once the Git Lab Website is installed and running, you can access it by opening your web browser and navigating to localhost:9095. The website provides the following functionalities:

1. Repository Management:  View repository details.
 
2. Login: Basic Login without functionality
 
3. User Profiles: Search for users, view their profiles, and access their public repositories.
 
4. Gists: View Gists.


**Architecture Diagram:**
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------



![Last](https://github.com/shubjadh/SE577/assets/114832019/52af8b5f-2f98-414b-8e3f-600d5c1ad016)




**Architecture Components:**
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

| Component | Description |
|----------|----------|
| Web App  | The web application uses theVue.js frame work and a number of best practices for state management and integration with web services. The Web App is deployed in a                            container using the Fastify web server.|
| GitLab Client | The GitLab Client component in Vue.js includes a navigation bar, router view, and footer. It enables navigation between Home, Login, Repositories, Gist, About, and Search                   pages, dynamically renders pages based on the current route, and applies CSS styling for customized header, navigation, and footer appearance. |
| Server | The Server component sets up a Fastify server that handles API requests. It includes routes for retrieving repository data (/repository), retrieving a specific repository by ID            (/repository/:id), and searching for repositories based on ID or description (/search). The server is configured with CORS to allow API requests from any SPA app, and it uses              fastify-http-proxy to proxy requests to the GitHub API. The server listens on port 9500 and logs the address where it is running. |
| Server Proxy | Includes two functions for configuring the Fastify HTTP proxy in the server. GetGHProxySecureOptions provides secure options with authentication, including setting                          the upstream URL, prefix, and request headers rewrite. GetGHProxyOptions offers options for the proxy without authentication. These functions enable the server to                          proxy requests to the GitHub API securely and efficiently.|
| Server Functionality | The Server Functionality component provides the necessary functionality for the Fastify server to handle API requests. It sends data and displays the repositories                          of the user by using both local repositories data and  from the GitHub Api. It sends the data to the repository page , gists page and search page. |
| Local Repository Data | The Local Repository Data component exports an array called MockData containing objects representing local repository data, including properties such as ID, name,                           URL, language, and creation date. |
| Github API Token | The GitHub API Token component provides a token that allows authenticated access to the GitHub API for performing authorized operations. |
| Home Page | The Home Page component is the landing page of the application, featuring a centered layout with a welcoming message, app description, and login/signup options, using Vue                   Router for navigation, and styled with specific font sizes, centered alignment, and responsive design. Inncludes Login button which redirect's to login page |
| Login Page | The Login Page component provides a centered layout with a form for users to enter their email and password, allowing them to log in, and includes a "Forgot Password?" link,                utilizing Vue Router for navigation, and performs login logic, logging the email and password values to the console, before redirecting the user to the repositories page. |
| Repostory Page | The Repositories Page component fetches repository data from local and remote APIs, displaying it in a table format with details such as ID, name, link, language, and                      creation date/time. It also includes a button for redirecting users to the Gist Page and features a centered layout with specific styling elements. |
| Gist Page | The Gist Page component retrieves and displays a specific Gist from the GitHub Gist API, presenting its description and a nested list of files. It handles the loading state                 and utilizes axios for HTTP requests to populate the gists array. |
| About Page | The About Page component displays information about GitLab, a web-based platform for source code management and collaboration. |
| Search page | The Search Page component enables users to search for GitHub users using their username and displays their profile information and repository data. It features a                          centered layout, input field, API requests for data retrieval, and a visually appealing design. |




**Contributing:**
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Contributions to the Git Lab Website are welcome! To contribute, please follow these guidelines:

Fork the repository and create a new branch for your contribution.

Make your changes and ensure they are well-tested.

Commit your changes with clear and descriptive commit messages.

Push your branch to your forked repository.

Open a pull request, providing a detailed description of your changes.

Please ensure that your contributions adhere to the project's coding standards and follow the GitLab community guidelines.

**Contact Information**
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

sj3237@drexel.edu
