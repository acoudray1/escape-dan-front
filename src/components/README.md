- Only shared components used across features are placed here.

- All the components should be registered and exported from /index.js for a single access point.

- All the components should bear named export. This will avoid any conflicts.

- Components that consist of complex logic or redux integration can be further de-structured into “ComponentContainer.js” & “ComponentView.js” as per the “Container-View pattern” (this will be covered ahead in Design Patterns)

- TIP: Try to create named-exports instead of default exports for all the components. This will avoid any naming conflicts.