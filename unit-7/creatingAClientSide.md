# Creating A Client Side Application

We're here to become full-stack developers.
The full-stack we will be familiar with and build together is the MERN stack.

> <br>
>
> - M, MongoDB, our database
> - E, Express, our Node.js server framework
> - R, **React**, our client side application
> - N, Node.js, our back-end JS runtime environment (Node.js and Express together are the server)
>
> <br>

Regardless of what languages and technologies we choose to use for our front-end client side application, there are some planning steps and successful habits to build when creating an app for our users.

The contents of this file will have ideas, habits, and guidelines for creating a client side application in as smooth a process for you and your dev team as possible. As well as details on using _React_ in particular, useful/needed React hooks, and helpful tips when using React for your client.

<br>

## **Wireframes**

_"A website wireframe, also known as a page schematic or screen blueprint, is a visual guide that represents the skeletal framework of a website."_ - Wikipedia

Wireframes are important! It's the first step in thinking about what elements/components will be needed and used in connection with your endpoints and how the endpoints function.

- i.e. a get call route displays stuff, we should make a container to hold all the content and a card or div to hold each entry piece
- _or_ we need to sign up a new user with our user post endpoint, a form could create a space for the user to enter the needed information and we can then send and submit that to the server and thus DB.

Wireframes allow us to have a visual map of what elements we need, which we can use to build a to do list of goals off us, which we can then divide and conquer!

<br>

### **Process Steps To build a Wireframe (that I recommend):**

1. List out your endpoints and their CRUD functionality.
2. List next to those endpoints what elements/components would be good options to display/process/house the endpoint contents or the endpoint actions.
3. Think of and then roughly sketch/plan the overall flow of the website and website views.
   - Ex: Would a user first see the sign up page? Or a home page discussing/touting the site contents? Etc.
4. Once the overall layout/views is agreed upon, either:
   - A) Have the team divide up what components are what team member's responsibility and each member can then decide the component element details
     _or_
   - B) Build out an even more detailed wireframe of the major/each component together.
5. Your wireframe should now be an awesome reference and jumping off point to use to create a to do list for(as well as to refer to while you build your app):

   - What elements you use to create the JSX component. (Is it a cardDeck and I need a parent deck and a child that creates each card? Do I want a title for this section? Etc.)
   - What logic you'll need to build. (Will I need a React Hook or just a function to make the component do what I want it to? Do I need to use State? Get props? Pass props? Etc.)
   - What styling you may need. (Did we have this on the left or right side? Or centered? Does this card layout idea have certain spacing? Etc.)

### Wireframe Resources:

- [The Definitive Guide: How To Make Your First Wireframe](https://careerfoundry.com/en/blog/ux-design/how-to-create-your-first-wireframe/)
- [What Are Wireframes](https://balsamiq.com/learn/articles/what-are-wireframes/)

### Wireframe Tools (all have free versions/are free):

1. Paper and Pencil (analog)
2. [Figma](https://www.figma.com/design/)
3. [Excalidraw](https://excalidraw.com/)
4. [Miro](https://miro.com/app/)
5. [Mockplus](https://www.mockplus.com/mockplus-rp)
6. [Adobe XD](https://helpx.adobe.com/download-install/using/download-creative-cloud-apps.html)
7. Paint or any drawing app that's already on your computer.

<br>

## **To Do Lists**

Creating a to do list for yourself and with your team can help divide project responsibilities and establish accountability.

Once general component responsibilities have been divvied up, make yourself a do to list for one component at a time _or_ each component and choose which to tackle first.

### An _example_ of an auth login form to do list:
1. Create component folders and file.
2. RFC in base component structure.
3. Import into parent component.
4. Run app with `npm start` to check if working as expected.
5. Make and style the login title h2 element.
6. Find form component from Reactstrap that best fits proj needs.
7. Change form input elements, two text inputs (one of type password) and a submit button.
8. Create handleChange and handleSubmit/useEffect functions. (console.log test as building)
9. Connect form tag and input tags to correct functions.
10. Test each with console logs.
11. Route and send to server.
12. Check DB for confirmation. (& debug as needed)
13. Make sure view/app flow is happening if view needs to change after working as expected.

There are digital and analog ways to keep your to do lists! 

Make sure to tackle and time box your list accordingly to prevent overwhelm. 

It's a tool to help you focus, not meant to fill you with dread at the list of items. Creating sub-lists for each day/the time block you intend to code in can help you stay motivated and feel like you're truly progressing. 

<br>

# Client Side In Class Demo: Movie Client

Run the command needed to create your React app, remove the boiler plate code, and let's work through the components together! 

The best way to work through building out a client side is to:

**Take it one component at a time!**

We will be working through the Movie Client together which will be similar to a solo dev workflow.

The order that we will be constructing this front end:
1. Auth: Sign Up and Login
2. Routes: How we create routing in React
3. Movie Index & Movie Create
4. Movie Table & Display, Delete Functionality
5. Movie Edit