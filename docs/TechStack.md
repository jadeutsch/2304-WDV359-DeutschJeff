## Project Initiation: Tech Stack

This week you will revisit an existing project or pitch an entirely new idea. Begin with your research and then return to this document. Fill out the headings below with your Tech Stack information. List the tools and technology you would like to use for your project. Explain your reasoning for this as well. For example, how does the proposed tool or technology provide value to your overall portfolio of work?

**Note:** If you plan to work on an existing project, review the "Change Order" instructions below as well.

<br>

## Application Design

_What tool(s) will you use to create click-through designs of the application? List any UI kits you would like to utilize as well._

I will use AdobeXD to create a click-through design of the application. In terms of UI kits, I may use Material 3 Design Kit to help quickly throw something together because it has plenty of ready-made components that are very easy to drag and drop. Still, I can also use it as a starting point to help me custom-build the necessary components and layouts.

## Front End Framework

_List your approach for front end development. For example, React is an often used front-end solution for projects in addition to using moduleCSS, PropTypes, and an ESLint style guide._

The front-end framework I will use is React Native, alongside styled-components for the CSS, Prettier for code formatting, and ESLint as my linter.

## State Management

_What is your proposed solution for managing data? This could mean utilizing a database, local-storage, and in general state management libraries for the application (e.g. Redux)._

State will be managed with Context API coupled with Firebase.

## Node

_Node is often used to serve both an API and to render a front-end. This includes using best practices, npm, and npx. What do you propose?_

I will use Node/npm as my package manager for this project. However, because it can be finicky with React products, I will use Yarn, when necessary, should I begin running into issues with updating React Native and associated libraries/packages. Because this is a mobile development project, Expo-CLI will also render the front end. This will allow me to prototype the app as I build it using iOS and Android simulators.

## Express

_Express is a popular framework to power an API. Describe your idea for building similar functionality offered by express: e.g. middleware, routes, controllers, sending and receiving JSON data._

Express will not be used in this project. Routing and controllers used for authentication and login will be handled with the Context API to send information to, and receive from, the Firebase database.

## SQL/Postgres/Sequelize

_A popular solution for relational database work is to utilize Sequelize as an ORM. Are you familiar with migrations, models, and seeding? What tools and solutions do you propose for your application? For example, utilizing an ORM to build out models with full validated CRUD._

Firebase will be used for this project. Firebase is a NoSQL, non-relational database that can be used for state and data management, along with other uses, such as providing login authentication.

<br>

---

# Change Order

If you have an existing project, make sure the tech stack is captured in this document. Also include the following information:

- **_Confirm this document summarizes the proposed tech stack:_** Yes, this document summarizes the proposed tech stack.
- **_Is there any additional tool or technology you may like to use for this project, given enough time?_** There are no additional tools or technologies I would like to use at this time.
- **_List and describe any proposed changes to the original tech stack:_** There are no proposed changes to the original tech stack.

Keep in mind, approval is needed for proposed work and may include peer or instructor review(s). If you are unsure about your proposed ideas feel free to reach out to us for guidance.
