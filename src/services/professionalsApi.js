const URL = import.meta.env.VITE_API_URL;

export const create = async (data) => {
  const response = await fetch(`${URL}/professionals/`, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(data),
  });
  const body = await response.json();
  if (response.status >= 400) throw new Error(`Error: ${body}`);
  return body;
};
export const getByLocationAndType = async (location, type) => {
  const response = await fetch(
    `${URL}/professionals/locationAndService?location=${location}&type=${type}`
  );
  const body = await response.json();
  if (response.status >= 400) throw new Error(`Error: ${body}`);
  return body;
};
