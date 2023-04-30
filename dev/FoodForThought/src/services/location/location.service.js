import camelize from "camelize";

export const locationRequest = (searchTerm) => {
  return fetch(
    `http://127.0.0.1:5001/foodforthought-3272f/us-central1/geocode?city=${searchTerm}`
  ).then((response) => response.json());
};

export const camelizeLocaleData = (result) => {
  const formattedData = camelize(result);
  const { geometry = {} } = formattedData.results[0];
  const { lat, lng } = geometry.location;

  return { lat, lng, viewport: geometry.viewport };
};
