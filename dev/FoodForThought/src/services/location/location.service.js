import camelize from "camelize";
import { host } from "../../utils/env";

export const locationRequest = async (searchTerm) => {
  return await fetch(`${host}/geocode?city=${searchTerm}`).then((response) => response.json());
};

export const camelizeLocaleData = (result) => {
  const formattedData = camelize(result);
  const { geometry = {} } = formattedData.results[0];
  const { lat, lng } = geometry.location;

  return { lat, lng, viewport: geometry.viewport };
};
