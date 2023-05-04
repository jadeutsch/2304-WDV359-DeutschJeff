# Project & Portfolio

- **Research Notes - Milestone 4**
- **Jeff Deutsch**
- **Assignment Due: 4-30-2023**

<br>

## Topic

This document contains general notes related to coding best practices.

<br>

## Clean Code

Writing clean code is ever so important, not only for other developers who might read your code, but also for yourself. In [Jonathan Nicholas's article]([1]), he talks about some of the best practices related to React and React Native.

- React Hooks
  - arguably one of the most important concepts to become familiar with when learning React and implementing applications
  - the most commonly used hooks are UseState and UseEffect
- Folder Structure
  - while not a universal, "one size fits all" concept, having a well-structured folder setup, and file naming convention, does help when having to find how your code pieces together and where everything is located
- Styling (React Native)
  - styling in React Native is a bit cumbersome and inconsistent, with many people agreeing it is easier to style using something like _styled-components_ or a UI component library
- Solid Principles
  - Single Responsibility Principle
    - Functions should only do one thing, and one thing only
  - DRY
    - Don't Repeat Yourself (implement functions to be as modular as possible)
  - Open/Closed Principle
    - Creating many small components to piece together a large one instead of building out one large component
  - Liskov Substitution Principle
    - Split your interfaces and fully use their functions
  - Interface Segregation Principle
    - YAGNI (You Ain't Gonna Need It) -- if something doesn't fully use the interface it's currently using, it should be split/segregated into a smaller one
  - Dependency Inversion Principle
    - High-level modules should not import anything from low-level modules
    - This is an example of React's props concept, where props should be passed down from the top (while also avoiding prop drilling)

<br>

## Formatting & Linting

Formatting and linting your code is a great way to keep your code clean and readable, and help reduce errors overall. However, [Log Rocket's article]([2]), does say that there can be some friction between the two technologies when used right out of the box, such as when the linter overwrites a style change from the formatter.
The two popular technologies are Prettier and ESLint. Here are a few key points about what they are, what they do, and how to make them work together.

- Prettier
  - an opinionated code formatter for JavaScript and other languages
  - enforces a consistent format by parsing code and reprinting it, taking making maximum line length into account and wrapping code when necessary
- ESLint
  - a static code analysis tool for JavaScript that finds problematic patterns and code that doesn't adhere to style guidelines
  - allows developers to see problems written code before it executes
- Combining Prettier & ESLint
  - each have their own configuration files that can be customized
  - most common practices are setting ESLint for code-quality rules and setting Prettier for formatting rules
  - example: I use the `react-native-community` package to handle my ESLint configuration and Prettier for mostly everything else

<br>

## READMEs

README files are an essential part of a great project. As noted in [this DEV article]([3]), "it's not only the first file any person will read when reaching your project for the first time, but also it is the key document for recuring visitors." Here are some things to remember about README files.

- A poorly written README file can hinder a developer that wants to contribute to, or even use, the technology, so having a well-documented and written README is imperative
- Know your audience, a README is meant for end users, technical users, and contributors
- Formatting & style: adapt the test to the way we read online (people scan/search for keywords); some times are to use short paragraphs, use bulleted or numbered lists, never use "click here" for a link text, highlight keywords or sentences/paragraphs in bold, and start with the most important information first (inverted pyramid structure)
- Contents
  1.  Overview
      - brief overview meant to grab end user attention
  2.  Install
      - show the steps to install the program
  3.  Usage/Getting Started
      - explain the basics of what it can do
  4.  Documentation
      - explain the full extent of the project
  5.  Development
      - explain how to set the project in development mode
  6.  Contributing
      - providing info on how to a reader can contribute: bug reporting, support, make a donation, etc.
  7.  Acknowledgements
      - mention those who were inspiration or key contributors
  8.  License
      - tells the developers what legal limitations there are to the use of the software
  9.  Extras
      - adding images such as a logo, screenshot of product, or video of working product
      - status badges

<br>

## Reference Links

**Resource 1: _Clean Code In React & React Native_**  
[1]: https://medium.com/@jojonicho/clean-code-in-react-react-native-c5818b2a4b19

**Resource 2: _Using Prettier and ESLint to automate formatting and fixing JavaScript_**  
[2]: https://blog.logrocket.com/using-prettier-eslint-automate-formatting-fixing-javascript/

**Resource 3: _How to write a good README_**  
[3]: https://dev.to/merlos/how-to-write-a-good-readme-bog
