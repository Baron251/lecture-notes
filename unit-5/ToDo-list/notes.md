# Getting Started

- create a `package.json`
  - In terminal: cli command: `npm init -y`
- Install our dependencies
  - express: `npm i express`
- Create a `.gitignore` file

  - `/node_modules` within .gitignore
    - tells our local repository to ignore the `node_modules` folder when backing up.

- node_modules folder

  - Provides us access to any "behind the scenes" code that helps run express and any dependencies.
  - If anything gets deleted or you're cloning down a project, use `npm install` to get those files back/installed.

- package-lock.json

  - locks project into required dependencies. Helps with our versioning
  - updated our `package.json` with `"main": "app.js"` instead of `index.js`.

- Create a root JS file

  - `app.js` or `index.js`

- Use the command `nodemon` to start the server
  - nodemon is a way for our server to continue to run while we are building/making changes.
    - To stop the server ctrl+c

### Controllers

Our controllers help us set routes for various endpoints. Depending on how we build the path will determine how it responds.

CRUD (Create, Read, Update, Delete)

- Create: POST
- Read: GET
- Update: PUT/ PATCH
- Delete: DELETE

We are going to set up a controller folder and make our first controller file called practice.controller.js.

Sending a status code with a route response is good practice for both the user and developer.

---

## Postman

- Set Methods - w/ dropdown to the left of the url bar
  - GET / POST / PUT / DELETE depending on route
  - Body, tab label under the url
    - raw (select the raw value radio button)
    - JSON (blue dropdown to the right of the radio buttons)
    - Make a JSON object (in the body area)

---

## Preparing our server to handle JSON objects

In our `app.js` we need to have this line of code:

```js
app.use(express.json());
```

This provides us access JSON files throughout our routes.

---

## MVC

- Stands for Model View Controller
- Architecture pattern(structure in which they are written/coded) that helps our Separation of Concerns
- Model: Database schematic, the blueprint for our data (we dictate what created data looks like/it's datatype)
- View: browser, Postman, etc. (what the users see)
  - Application that interface with the server.
- Controller: Part of the server application which handles logic. (How we build our logic within the server, we code and create what routes can be used and what they do.)

---

## Middleware

- A function that accesses the request and response
- Has a call stack
  - request
  - response
  - next

  ---

  ## CORS

  - Cross Origin Resource Sharing
    - A preflight action:
      - Checks to see what options are available for any type of requests PRIOR to our routes being triggered. (Checks to see if your request is available.)
      - If headers do not match in our request: it can throw an error.
      - Addthing this dependency(any external resource a program needs to work, ex an external library or service functionality) to our project can help resolve any of those issues: help our application


      - Denpendency
      - stop server and install as a dependency
      - ```npm i cors```
      - import within ```app.js``` above ```routes```.
