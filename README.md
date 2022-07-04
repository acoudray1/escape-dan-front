# Escape Dan

*front-end part of the app*

code in react-js

## BLoC pattern

(ref: https://blog.bitsrc.io/using-bloc-pattern-with-react-cb6fdcfa623b)

## Container - View design pattern
Container and View pattern:

(ref: https://reactpatterns.com/ & https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0)

Container-View pattern is the most efficient and widely used feature building pattern in react environment.

### Container Component: is the entry point of the Feature/Screen. Responsibilities of a container component are:

    ✓ data fetching
    ✓ redux integration
    ✓ side-effects handling, heavy computation or data mapping
    ✓ Finally pass the required props down to the View.

### View Component: should contain only the presentation part.

    ✓ All the UI/presentation logic will reside here.
    ✓ Further complex elements can be broken down into individual components for ease of maintenance.
    ✓ Presentational components utilize props, render, and context.
    ✓ Presentational components receive data and callbacks from props only, which can be provided by its container or parent component.

PropTypes: It is a very good practice to declare propTypes for all the components that are expecting props from their parents. This enables type-checking, properties availability, and jots down all the required properties with their data-types at one place.

-----

https://medium.com/geekculture/react-js-architecture-features-folder-structure-design-pattern-70b7b9103f22