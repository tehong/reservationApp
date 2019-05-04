# Demo Reservation App
This is a repo to demonstrate implementing a React Native ES6 app with React Context API, Apollo-Client/GraphQL, Typescript and Jest/Enzyme.
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
## Problems
- Jest is not working with babel 7.  It seems that the "transformIgnorePatterns" setting in package.json is being ignore.

------------------------------------------------------------------------------------------------------

## Goal/Requirements
Create a React Native reservation app using ES6 and pure components. Create at least 2 screens: 1 for listing the existing reservations and 1 for adding a new reservation.
### Tech Stack
Please utilize the following technology stack for developing your application.
- React-Native
- Apollo-Client
- Jest/Enzyme
- Typescript or Flow
### Back End
We have provided a GraphQL back end for you: https://us1.prisma.sh/public-luckox-377/reservation-graphql-backend/dev
Use the following queries from the back end to complete the test. 
- query: reservations, reservation
- mutation: createReservation
### Limitations
Please DO NOT use the following items.
- create-react-native-app, or any other generator (use react-native init to start the project)
- redux (use another method for local state management)
- A non git service for hosting (github/gitlab/etc are ok)
### What We Are Looking For
The following list outlines areas we will be focusing on while evaluating your submission.
- Code organization (even though this is two features, organize the files as if it were a larger enterprise application)
    - Style organization
    - Data/Graph Organization
    - Component Organization
    - Folder Structure
    - Type checking
- A clean method for managing local state with GraphQL queries
- Unit test methodology/readability
- Code readability (i.e. ability for future developers to pick up where you left off)
- A communicative README.md explaining the architecture choices
