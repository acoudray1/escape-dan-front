- Services are to manage all api requests. You can see them as a bridge or an adapter between the database server APIs and the view layer (pages and components) of our application.

- It will take care of all the network calls of our app.

- All data requests are defined here, and response data is transformed and served. In some cases it can also be saved in the redux store.

- The pages and components may dispatch actions, read the store and update themselves based on the data changes. They may access the services directly if it doesn’t need to be added to the redux store.

- Actions will use services for backend connectivity. Thunk is a redux middleware used to handle asynchronous actions and side-effects.

- In our app, all firebase config and constants reside in “firebase.js”. Authentication logic resides in “firebaseAuthentication.js” & all methods to query firestore data reside in “index.js”.

- If the number/count of services increase, you can consider breaking them into individual feature based files.