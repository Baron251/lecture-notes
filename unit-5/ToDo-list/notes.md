# Server Setup

Step 1:
- In terminal, in project folder, we run the command 'npm init -y'.

- This is telling the Node Package Manager(NPM) to install(init) with all the base default options for a project (-y || --yes)
- You will see a lot happening and find a new file in your project called package-lock.json and a folder called node_modules

Step 2: Install needed dependencies in the same terminal 

- To install Express, run 'npm i express'
- Node Package Manager(npm) install(i) express
- Brings in our node_modules and package-lock.json

Step 3: We create a file within our project titled '.gitignore'

    - In the '.gitignore' file, we will add '/node_modules'. 
    - This tells our local repository to ignore the 'node_modules' folder.
    - When cloning down a project that ignores items: run the command "npm install" to aquire all dependencies/files needed

    ---

    What does it all mean??

The Flow with Words:
![Written description of what's happening with the dataflow/infrastructure.](./assets/flow.PNG)

The Flow in Pictures:
![The exact full stack flow and infrastructure we will use in class.](./assets/Full%20Stack%20Infrastructure.png)

![A simple flow image.](./assets/Software%20Flow.png)

- An API and the Server are two different things
- An API is an Application Programming Interface, which is a way to provide information for other applications (communication among applications, ex. the front end web page can communicate with the server).
- An API provides access to the server.
- A server is an application that's locally saved in your system, even a physical device.

## Postman
- Set Methods
  - GET / POST / PUT / DELETE depending on route
  - Body
    - raw (select the raw value radio button)
    - JSON (blue dropdown to the right of the radio button)
    - Make a JSON object (in the body area)

## Preparing our server to handle JSON objects
In our `app.js` we need to have this line of code:
```js
app.use(express.json());
```
This provides us access JSON files throughout our routes.
