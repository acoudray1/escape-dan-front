- It holds all the redux resources at one place.

- This includes action creators, reducers and a redux store of our app.

- CONSTANTS.js has all the action types.

- Initial state of the app is divided based on features and thus corresponding reducers and actions are modularized.

- “/actions” dir consists of all the action files. Each action file includes feature based action-creators. As the name suggests, appActions will have app config based actions and userActions will have all user state related actions.

- “/reducer” dir follows the same practice like actions. reducer reduces all the actions and applies corresponding changes to store. These reducers are later merged into a root-reducer redux’s combineReducers function.

- “/store.js” is the central state of the application. This incorporates all the mapping between reducer, store and middle-wares if any.

- We have a redux-thunk middleware in our app for enabling asynchronous dispatching of actions.

- Configuration for enabling dev tools for redux is done in store.js.

- Above files are enough for a “small to medium” sized applications.

- For a large application with tens of features, each having tens of actions, types and individual initial states, it is recommended to have corresponding action.js, reducer.js, constants in the feature specific directory. Finally, it can be combined into a single store in the same way it is done now.

- (More on redux, react-redux, redux-thunk implementation in “DEVELOP section” below)