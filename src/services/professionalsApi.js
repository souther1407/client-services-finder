const URL = import.meta.env.VITE_API_URL;

export const getByLocationAndType = async (location, type) => {
  const response = await fetch(
    `${URL}/professionals/locationAndService?location=${location}&type=${type}`
  );
  const body = await response.json();
  if (response.status >= 400) throw new Error(`Error: ${body}`);
  return body;
};
