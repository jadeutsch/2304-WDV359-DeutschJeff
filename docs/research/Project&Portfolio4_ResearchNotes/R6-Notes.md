# Project & Portfolio

- **Research Notes - Milestone 4**
- **Jeff Deutsch**
- **12-18-2022**

<br>

## Front-End Development & Deployment

These notes are about front-end development and deployment. Both of these are covered a little in [R5-Notes]([1]) as they relate to the web development life cycle, but I will go further into some of the technologies I am using for this project.

<br>

## React Native

React Native, as it says in [its documentation]([2]), "combines the best parts of native development with React, a best-in-class JavaScript library for building user interfaces." This means a developer can write JS code that is then transpiled into iOS and Android code. Some key points:

- provides agnostic native components that map directly to the platform's native UI building blocks
- wraps existing native code and interacts with native APIs
- just like React, code iterates at very fast speeds, so it is easy and quick to see changes made

<br>

## styled-components

[styled-components]([3]) is a popular library that is used to write actual CSS code for React component styling. Here are a few notes about it.

- CSS code is wrapped in template literals and mapped to an HTML element for use and reuse
- allows for the passing of props to create dynamically styled components
- allows for developers to set up a global theme as context to be passed down to components

<br>

## Context

[Context]([4]), or Context API, is a state management tool created by React that allows for the sharing of values between components without having to pass a prop through every level.

- resolves prop drilling, or the passing of props all the way down the component tree (through components that don't need it) when you have a very deeply nested component that needs a specific prop from a top-level component
- can be used for a variety of instances, such as app configuration, user settings, theme data, and a collection of services
- allows context to be consumed using Hooks with `useContext` hook

<br>

## Expo

[Expo]([5]), as stated in their documentation, is an open-source framework for apps that run natively on Android, iOS, and the web. It's commonly used with React Native to help build, deploy, and update apps.

- Expo provides an abundance of custom native APIs that a developer has full control over (similar to browser APIs for the web)
- Expo works with iOS and Android simulators to show you all your changes in real-time

<br>

## Reference Links

**Resource 1: _R5-Notes_**  
[1]: ./R5-Notes.md

**Resource 2: _React Native: Learn once, write anywhere_**  
[2]: https://reactnative.dev

**Resource 3: _styled-components_**  
[3]: https://styled-components.com/docs

**Resource 4: _Context_**  
[4]: https://reactjs.org/docs/context.html

**Resource 5: _Expo_**  
[5]: https://docs.expo.dev/introduction/faq/