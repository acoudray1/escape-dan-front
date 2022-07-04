- As the name suggests, all the routing logic resides here.

- Our app uses “react-router-dom” for routing implementation.

- Mainly 2 types of routes are included, public & private, where private being the ones that require authentication.

- “RouterConfig.js” will have all the routes of the application defined within at one place.

- “PrivatRoute.js” is a component to add a check for user authentication for secure/private routes.

- Repo with PrivateRoute code sample.

- CONSTANTS.js consists of all the constants for various available routes within our app. Reason is simply to avoid typos and easy renaming of routes - when required.

- “/components” directory can be added to hold all the navigation specific components like header, nav-bar, side navbar, like so.

- (More on react-router-dom implementation in “ARCHITECTURE section” below)