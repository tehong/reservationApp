# Demo Reservation App
This is a repo to demonstrate implementing a React Native ES6 app with React Context API, Apollo-Client/GraphQL, Typescript and Jest/Enzyme.
## Goal/Requirements
Create a React Native reservation app using ES6 and pure components. Create at least 2 screens: 1 for listing the existing reservations and 1 for adding a new reservation.
## Architecture Choices
- React Context API is used for tree-scoped store for to reduce prop drilling.
- Backend (GraphQL) component encapsulates backend api that can be accessed by all components. It is designed so Backend api stays in a wrapper component.
- GraphQL is set up to be used in both ways:
  - As static api functions in the Backend singleton class to access the Apollo api functions.
  - Utilizing Apollo's render prop api via ApolloProvider encapsulated in BackendProvider.
- React Navigation is used for the routing navigator.
- ES6 
- All class components are pure components
## Directories
- assets:  App image and icon assets should be under this directory
- src: App sources
  - api: This is the api components where the interfaces to the authentication, DB and other api.
  - components: UI components
  - providers: provider components
  - screens: screen components 
  - navigation: route navigators
## Issues
- The latest Jest is not working with babel 7.  It seems that the "transformIgnorePatterns" setting in package.json is being ignore.
