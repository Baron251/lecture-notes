# Postman

An API client that allows us to create and read HTTP/s requests.

- A testing environment that helps us use client facing requests when we don't have a client side built out.
    - Usually a full stack app is built server first in small dev groups because the server determines what the data looks like/how it's strctured
- Basically used as sudo front end to test our server endpoints and database connection.
- A way for us to test APIs

We will walk through making an API call with [HTTP Cats](https://http.cat/) or [HTTP Dog](htt[s://http.dog/])

[Postman Learning Center Docs](https://learning.postman.com/docs/introduction/overview/)

## Creating a Collection in Postman

Collections butt is at the top right of the left side bar.

After clicking collections, we can create a new collection with the "+", our collection is like a folder for our API requests. We can rename/etc. by right clicking the three dots on the collection name.

- We can right click the Collection name, to add a new request
- We can then name the request and save it to use as reference for later
- Ctrl+S or the Floppy Disc icon and save button will save the request to the collection

### Setting the method in Postman

To set methods in Postman:

- In the top left of the request, the drop down in front of the URL needs to be changed to the method matching our route.
- GET / POST / PUT / DELETE