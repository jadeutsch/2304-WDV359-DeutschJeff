# Food For Thought

## Project Proposal

This week you will revisit an existing project or pitch an entirely new idea. Begin with your research and then return to this document. Update the "Application Definition Statement" keeping your research on the "30-second pitch" in mind. You may use a portion of this work in our discussion board this week.

**Note:** If you plan to work on an existing project, review the "Change Order" instructions below as well.

<br>

## Application Definition Statement

_A **clear** high-level summary should be used to introduce the concept. This should be similar to an elevator pitch or a conversational reply to **"What are you building?”.** You will explore the audience and their demographics, the problem they are having, and your solution in subsequent sections in more detail but touch on them here._

_Clarity over quantity should be the focus, to that end, creating visuals/charts to explain the more complex data or logical points could help to reinforce your Application’s Definition Statement._

Food For Thought is a mobile food delivery application allowing users to order meals from restaurants. The app shows a list of restaurants based on the user's location, provides information such as restaurant hours and rating, and allows for users to see restaurants in their area on an integrated map. With their own profile, users can favorite restaurants and see them on a list, and also see a list of their past orders.

## Target Market

_Using research, describe the people most likely to be utilizing your application. What are their ages, education level, employment sector, income level, hobbies, or any other defining characteristics that set them apart from other groups of people? Identifying specific groups will help drive application design choices._

_Are there any secondary markets have many but not all overlapping defining characteristics that should be identified and design considerations be accommodated?_

This app will be far-reaching in terms of who can utilize it. The general age of users will be 18 and over, specifically those with mobile phones with data plans or wi-fi access. Because the app is easy-to-use, the education level of the users can be anything with a high school degree and up. It’s difficult to determine income-level delineation as this app can be used constantly (requiring users to spend lots of money) or sparingly (requiring users to spend little money), and also depending on the price of the restaurant’s food itself. On average, a user should make roughly $20,000/year to enjoy using the app comfortably. As the restaurants shown can vary in ethnicity, people of all ethnicities can easily find a restaurant to fit their pallet.

## User Profile

_User profiles are a snapshot of an actual person and helps to open a window into the mind of an actual user and will provide insight while tailoring and refining interaction details to best fit your ideal users within your Target Market._

User profile, Person A: Identifies as male, caucasian, age 33, has an undergraduate degree, works a 9-5 job making $50,000/year, engages in various activities after work, including gym exercise, and doesn’t have a lot of time to cook at home.

Person A would like a food-ordering app that is easy to navigate, has a slightly modern look to it, maintains a list of favored restaurants and past orders, and has the ability to determine if the card number entered for ordering food is correct or incorrect. Person A would also like to be able to view restaurants in a given area, either in list form or on a map, and also be able to provide a picture of themselves to their profile.

## Use Cases

_Defining a typical use case or scenario that a user would be interacting with your application provides a fixed path of interaction that you can refine your user’s experience around. If a user wants to listen to some music during a workout does requiring them to clicking 10+ times make sense while they are impatiently trying to start their exercise regimen? Use cases help to think through how your application will commonly be used._

_Use Cases will help to drive design decisions as well as testing procedures. Regularly testing as if you were a user following a use case throughout the project development lifecycle will provide valuable insight into how your application is addressing the needs of the user and allow you to correct missteps early._

**Use Case / Goal**: Sign Up and Use Food For Thought App
**User**: Person A
**System**: Food For Thought App
**Actions / Basic Flow**:

- Person A opens Food For Thought App, is brought to a sign-up/login screen
- They click “Register”
- They register an account with an email and password, and retype their password
- A restaurant list screen opens to view and select a restaurant
- Person A then selects what meal to add to their cart
- They type in their name to bring up the card number input and input their credit card
- They select “pay” and are taken to a screen that is “payment completed”

**Alternative Flow 1**:

- Person A already has an account and logs into the app with their email and password

**Alternative Flow 2**:

- Person A inputs the wrong credit card number and are notified their card number is incorrect

**Alternative Flow 3**:

- Person A wants to add their own image to their profile
- They grant access to the system camera to take a picture
- They take their picture and add it to the profile on the settings page

## Problem Statement

_In a few sentences explain the problem your target market is seeing that requires this project to be built. This will identify why is your application needed and needs to be supported by Primary Research._

A problem with other apps similar to Food For Thought is that there’s no map view of the restaurants in the area. There is only a list view of the restaurants within a certain location.

## Pain Points

_Explain your audience’s pain points that are contributing to their defined problem and their impact on the user. Primary Research should support your explanations._

When a user wants to see a restaurant’s location, for some apps, they are only given an address when they click on the restaurant itself. For at least one, there is a small app showing your location compared to the restaurant, but again, there is no overall view of the restaurants in the area.

## Solution Statement

_How is your project going to solve the problem outlined above? Consider the competing products in your market space. What makes your solution different from other’s attempts to solve the problem? How are you able to better solve the defined problem for your audience than your competition?_

By adding a map view of all the restaurants within a given area relative to either the user’s location or a searched location, users can see available food options to either order food from or just have a reference of where to even go for food.

## Competition

_What competing products exist to solve this or a similar problem? Identify and summarize competing products and how their approach to solving your identified problem differ from your own._

Existing competing apps or products include Uber Eats, DoorDash, GrubHub, and Postmates. These apps all solve the issue of being able to order food on the go. Another product that would be in competition with Food For Thought is Yelp, in some ways. Yelp does offer a map view of available businesses within a given area but does not have the functionality to order food on-the-go as the other apps listed.

## Key Features

_Define key features intended to provide solutions to specific problems and pain points you have identified. These key features should be specifically defined in response to problems / pain points. More generic features like User Authentication should not be defined here._

Key features include immediate credit card number verification and map views.

## Integrations

_Identify what 3rd party APIs, data sets, or external integrations are planned for use and outline how you will use them transformatively. Provide links to their respective documentation and verify that your intended use complies with their Terms of Service._

[React-native-maps](https://github.com/react-native-maps/react-native-maps), [Firebase SDK](https://docs.expo.dev/guides/using-firebase/#using-firebase-js-sdk), [Expo-camera](https://docs.expo.dev/versions/latest/sdk/camera/), [Google Maps](https://developers.google.com/maps/documentation), [Stripe API](https://stripe.com/docs/api)

<br>
***

# Change Order

If you have an existing project, make sure the overall scope of the project is captured in this proposal document. Also include the following information:

- **_Confirm this document summarizes the proposed project scope:_** Yes, this document summarizes the proposed project scope.
- **_Describe how much work is left to do (a rough estimate is fine):_** The entire project, for a beta, needs to be built out.
- **_List and describe any proposed changes to the original project scope:_** There are no proposed changes to the original project scope.

Keep in mind, approval is needed for proposed work and may include peer or instructor review(s). If you are unsure about your proposed ideas feel free to reach out to us for guidance.
