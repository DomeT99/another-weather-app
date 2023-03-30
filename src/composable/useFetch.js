export const useFetch = async (parameters) => {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": parameters.key,
      "X-RapidAPI-Host": parameters.host,
    },
  };

  const response = await fetch(parameters.url, options)
    .then((data) => data)
    .then((response) => response.json())
    .catch((err) => console.error(err));

  return response;
};
