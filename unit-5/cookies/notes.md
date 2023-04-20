# Cookies

- Data
    - Set by the web server
    - Stored by the web client
    - Cookies are sent back to the server on **every** request

## Uses

- Help with tracking both data and it's time signature over a span of time(through the browser)
- Cookies store data without allocating/using server space
- Early version of **Local Storage** for storing objects on the client side

## Limitations

- not secure
- not very large
    - client can restrict further
- users can erase them at any time.
    - browser settings can erase them after sessions.

## Cookie-Parcer Dependency
- Stop our server to install the parser with the following command:
`npm i cookie-parser`