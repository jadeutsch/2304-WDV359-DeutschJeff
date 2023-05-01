import camelize from "camelize";
import { host, isMock } from "../../utils/env";

export const restaurantsRequest = async (location) => {
  return await fetch(`${host}/placesNearby?location=${location}&mock=${isMock}`).then((response) =>
    response.json()
  );
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
