const URL = import.meta.env.VITE_API_URL;

export const create = async (request) => {
  const response = await fetch(`${URL}/serviceRequest`, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(request),
  });
  const body = await response.json();
  if (response.status >= 400) throw new Error("Error: " + body);
  return body;
};

export const getAll = async (cant, page) => {
  const response = await fetch(
    `${URL}/serviceRequest?cant=${cant}&page=${page}`
  );
  const body = await response.json();
  if (response.status >= 400) throw new Error("Error: " + body);
  return body;
};
