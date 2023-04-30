import camelize from "camelize";

export const restaurantsRequest = async (location) => {
  return await fetch(
    `http://127.0.0.1:5001/foodforthought-3272f/us-central1/placesNearby?location=${location}`
  ).then((response) => response.json());
};

export const camelizeFoodData = ({ results = [] }) => {
  const mappedResults = results.map((restaurant) => {
    return {
      ...restaurant,
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
      isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY",
      address: restaurant.vicinity,
    };
  });
  return camelize(mappedResults);
};
