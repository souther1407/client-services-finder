const URL = import.meta.env.VITE_API_URL;

export const login = async (credentials) => {
  const response = await fetch(`${URL}/auth/login`, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(credentials),
  });
  const body = await response.json();
  if (response.status >= 400) throw new Error(`Error: ${body.error}`);
  console.log("service login", body);
  return body;
};
