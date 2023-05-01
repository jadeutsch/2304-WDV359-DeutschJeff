# Changelog

All notable changes to this project will be documented in this file.

The format, and this file, is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project tries to adhere to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

<br />

---

## [0.1.10] - 2023-05-1

### Added

- Added Firebase-CLI and Firebase Functions to the application
- Created geocode and placesRequest functions to render either mock data or real data from Google APIs
- Added more error boundaries

### Changed

- Moved mock data into firebase functions
- Moved some of the restaurant and location context functionality into firebase functions to work with both mock data and Google API fetched data

### Deprecated

### Removed

### Fixed

- Fixed a bug where @google-cloud/firestore package was not installed, causing firebase functions to not be served or deployed
- Fixed a bug where @google-maps was not installed at the firebase function level, causing functions not to deploy

### Security

- Made sure .log and secret config files were hidden

<br />

---

## [0.1.9] - 2023-04-30

### Added

- Created a camera screen with async storage functionality to save image to user
- Added async storage functionality to settings screen load user image in place of avatar
- Added camera screen to the settings navigator

<br />

---

## [0.1.8] - 2023-04-30

### Added

- Created Register screen
- Added activity indicators to "login" and "register" buttons upon click on their respective screens
- Created a settings screen with two menu items: Favorites and Logout
- Created a Favorites sub-menu screen routed from the "Favorites" button on the Settings screen
- Added an animation to the Main screen
- Created a small, animation wrapper component that fades in whatever child component it wraps

### Changed

- Changed how context and navigation were wrapped in the app by moving all of the context, except for authentication, from app.js to app-navigation.js

### Removed

- Got rid of a duplicate Login button

### Fixed

- Fixed incorrect attributes for password input
- Fixed a bug where favorites would render across multiple users instead of just for the specific user logged in

<br />

---

## [0.1.7] - 2023-04-29

### Added

- Added Firebase and configuration
- Created Authentication service and context files and functionality
- Created the Main, Login, and Register screens

### Changed

- Changed how context and navigation were wrapped in the app by moving all of the context, except for authentication, from app.js to app-navigation.js

### Removed

- Removed the demo map screen code from app.js

### Fixed

- Fixed a bug where plugins inside of .eslintrc were not wrapped correctly

<br />

---

## [0.1.6] - 2023-04-26

### Added

- Created favorites context
- Added a favorites icon to the restaurant card
- Created a favorites bar component to appear when the heart icon in the search bar is pressed on the restaurants screen

### Removed

- Removed the demo map screen code from app.js

### Fixed

- Fixed a bug where the favorites-bar was not rendering on the restaurant screen on android

<br />

---

## [0.1.5] - 2023-04-23

### Added

- Added a map screen
- Set the map's region determined by the mock data that is searched
- Added more search functionality to sync what is searched on the restaurant screen and map screen
- Created a custom map callout for when the location pin is pressed
- Linked the map callout to the specific restaurant details the mini card shows

### Removed

- Removed the demo map screen code from app.js

<br />

---

## [0.1.4] - 2023-04-23

### Added

- Added mock location data for the cities Antwerp, Chicago, San Francisco, and Toronto
- Created the context to be used for the restaurant and location data and services
- Created a search bar component to further flesh out location functionality
- Created a restaurant detail screen to render static menu items

### Changed

- View component for spacing is now its own mini component in restaurant-info-card.js

### Removed

- Removed search bar from app.js into its own component

### Fixed

- Bug where star svg needed a unique key has been fixed
- Bug where default address now renders dynamic address based on restaurant location data

<br />

---

## [0.1.3] - 2023-04-20

### Added

- Added mock restaurant data for the cities Antwerp, Chicago, San Francisco, and Toronto
- Created the context to be used for the restaurant data
- Added a loading screen animation for when the mock data loads

### Fixed

- Loading mock data changed the layout of the section end objects, so the styling was changed to accommodate the positioning

<br />

---

## [0.1.2] - 2023-04-16

### Added

- Created a bottom navigation menu
- Added icons to each current menu item
- Created a "Safe Area" reusable component to be later used for each screen

<br />

---

## [0.1.1] - 2023-04-14

### Added

- Created the restaurant card
- Set up a FlatList component to hold the restaurant list
- Created the restaurant screen and layout
- Created two design components: a spacer component and a typography component
- Set up the app theme with `styled-components Theme Provider` method

<br />

---

## [0.1.0] - 2023-04-10

### Added

- Initialized project
- Set up very basic layout format
- Created a basic search bar
