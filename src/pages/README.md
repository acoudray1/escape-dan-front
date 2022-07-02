- This is the heart of our application.

- All the various features/screens/pages are defined here. In this case, “Home”, “Page1” and “Page2” are 3 different pages of our app.

- Each screen consists of an “index.js” file which exports the screen’s container as default module which makes the screen available as a functional component.

- Each page will have a “components” dir. This will hold all the components that are required by only this page.

- As a general rule, if a module (a utility, component, etc.) is only used within another module, then I want it nested in the directory structure as shown above.

- Home page consists of “Authentication”, “Dashboard” & “LanguageSelection” components that are nested within.

- “CardLayout.js” is a layout specific component and used only in Home.