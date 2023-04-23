# Changelog

All notable changes to this project will be documented in this file.

The format, and this file, is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project tries to adhere to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

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

### Deprecated

### Removed

- Removed search bar from app.js into its own component

### Fixed

- Bug where star svg needed a unique key has been fixed
- Bug where default address now renders dynamic address based on restaurant location data

### Security

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
