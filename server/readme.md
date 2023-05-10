# Simple Server

This is a demo server to help you all out.

After you get the code run `yarn` or `npm install` to pull all of the dependencies

**MAKE SURE YOU ARE IN THE SERVER DIRECTORY WHEN YOU DO THIS**

Then to run execute `yarn run server` or `npm run server`

You can then go to `localhost:9095` and do the following things:

1. http://localhost:9500/search?course=se577
2. http://localhost:9500/search?id=123
3. http://localhost:9500/students
4. http://localhost:9500/students/456

Now notice I created an interface for this API suite in /basic-project/src/pages/ApiInterfaces.ts

### Loading API data on PageLoad
---
#### **IMPORTANT - you are free to integrate and steal any code from this branch into your project.  I am using the axios client library to make API calls.  In the event you get an error, you likely do not have axios installed.**

#### **To install `axios`, go to the root of your project - the directory with `package.json` in it and execute `yarn add axios` or `npm install axios --save`**

---

Carefully study FirstPage.vue, SecondPage.vue, ThirdPage.vue file in the basic-project folder.  I only updated the basic-project, not the quasar-based project.  Some things to notice:

1. I created and imported a type for the `StudentApiInterface` and for `ApiErrorInterface`
2. All 3 pages show the use of axios to make API calls to your server.
3. `FirstPage.vue`: Key things: 
- I created a function `onMounted()` this is called a lifecycle hook and runs when the page is loaded.  
- I also demo using `v-if` to highlight conditional rendering in the template
- I am also showing the `async/await` features of typescript/javascript to make async calls to the server.
4. `SecondPage.vue`: Key things
- Everything in `FirstPage.vue` plus...
- A little more complex form management state changes to show and hide things based on errors and correct functionality in the template
- Demo of the `computed` functionality in vue, see the `shouldDisable` function.  This acts as a property in the code, but it is computed on demand to determine if the button should be disabled or not.
5. `ThirdPage.vue`: Key things
- Everything in `FirstPage.vue` and `SecondPage.vue` plus...
- A little more complex form management state changes to show and hide things based on errors and correct functionality in the template.  I also demo how to manage radio buttons
- Demo of the `watch` functionality in vue, see the `radioButtonChanged` function.  This fuction is bound to the radio button group and fires every time the state changes in the radio button group - for example changing the search type from CourseID to StudentID.
- A more complex demo, although not used in the code of watch functionality, see `radioButtonChanged_NotUsed`.  I didnt need it in my demo, but this second option passes the old and new values so you can programaticlly determine if you want to do something based on the old and new variable values
6. Notice how i have to import the vue functions that I am using via the `import` typescript syntax. 
