const URL = import.meta.env.VITE_API_URL;

export const create = async (data) => {
  const response = await fetch(`${URL}/professionals/`, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(data),
  });
  const body = await response.json();
  if (response.status >= 400) throw new Error(`Error: ${body.error}`);
  return body;
};

export const getByLocationAndType = async (location, type) => {
  const response = await fetch(
    `${URL}/professionals/locationAndService?location=${location}&type=${type}`
  );
  const body = await response.json();
  if (response.status >= 400) throw new Error(`Error: ${body.error}`);
  return body;
};

export const getProfesionalDetail = async () => {
  const response = await fetch(`${URL}/professionals/details`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  const body = await response.json();
  if (response.status >= 400) throw new Error(`Error: ${body.error}`);

  return body;
};

export const updateProfessional = async (data) => {
  const response = await fetch(`${URL}/professionals/`, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify(data),
  });
  const body = await response.json();

  if (response.status >= 400) throw new Error(`Error: ${body.error}`);

  return body;
};
