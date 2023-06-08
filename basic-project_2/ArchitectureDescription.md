**Git-Hub Website**
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

| Category | Value | 
|----------|----------|
| Identifier  | Adr-001 | 
|  Status  | Accepted | 
|  Author | Shubham Jadhav |
|  Date:  | May 30, 2023 | 

**Keywords**: GitHub Website, Vue.js, GitHub API, TypeScript, Development Approach

**Context and Problem Statement:**
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Develop a secure and user-friendly login system for the GitHub Website, ensuring authentication and authorization for accessing home, login, and repository pages. Implement efficient repository management functionalities, including creation, updates, deletion, and version control operations. Design a responsive and intuitive user interface, optimizing performance, scalability, and security for a seamless user experience.

**Considered Options:** 
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Option 1: Vue.js with GitHub API integration and TypeScript implementation.

Option 2: Alternative frontend frameworks with GitHub API integration and JavaScript development.

Option 3: Custom frontend solution without GitHub API integration.


**Decision Outcome:**
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Option 1:

The development approach for the GitHub Website will involve: Vue.js 

for front-end development: Utilizing Vue.js to create a dynamic and interactive user interface.                            

GitHub API integration: Incorporating the GitHub API to enable seamless integration with GitHub's functionality.                                       

TypeScript implementation: Developing the website using TypeScript to enhance code maintainability, productivity, and error detection.

The functionality is shown in architecture diagram below:

**Architecture Diagram:**
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


![Final](https://github.com/shubjadh/SE577/assets/114832019/edc4a972-86a9-4e6b-a599-e5cf66fde791)


**Architecture Components:**
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

| Component | Description |
|----------|----------|
| Web App  | The web application uses theVue.js frame work and a number of best practices for state management and integration with web services. The Web App is deployed in a                            container using the Fastify web server.|
| GitLab Client | Row 2    |
| Server | The Server component sets up a Fastify server that handles API requests. It includes routes for retrieving repository data (/repository), retrieving a specific repository by ID            (/repository/:id), and searching for repositories based on ID or description (/search). The server is configured with CORS to allow API requests from any SPA app, and it uses              fastify-http-proxy to proxy requests to the GitHub API. The server listens on port 9500 and logs the address where it is running. |
| Server Functionality | Row 6    |
| Local Repository Data | Row 6    |
| Github Api Token | Row 6    |
| Home Page | The Home Page component is the landing page of the application, featuring a centered layout with a welcoming message, app description, and login/signup options, using Vue                   Router for navigation, and styled with specific font sizes, centered alignment, and responsive design. |
| Login Page | The Login Page component provides a centered layout with a form for users to enter their email and password, allowing them to log in, and includes a "Forgot Password?" link,                utilizing Vue Router for navigation, and performs login logic, logging the email and password values to the console, before redirecting the user to the repositories page. |
| Repostory Page | The Repositories Page component fetches repository data from local and remote APIs, displaying it in a table format with details such as ID, name, link, language, and                      creation date/time. It also includes a button for redirecting users to the Gist Page and features a centered layout with specific styling elements. |
| Gist Page | The Gist Page component retrieves and displays a specific Gist from the GitHub Gist API, presenting its description and a nested list of files. It handles the loading state                 and utilizes axios for HTTP requests to populate the gists array. |
| About Page | The About Page component displays information about GitLab, a web-based platform for source code management and collaboration. |
| Search page | The Search Page component enables users to search for GitHub users using their username and displays their profile information and repository data. It features a                          centered layout, input field, API requests for data retrieval, and a visually appealing design. |







