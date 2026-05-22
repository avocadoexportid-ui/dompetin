const BASE_URL = "http://localhost:5000/api";

export const apiRequest = async (
  endpoint,
  method = "GET",
  body = null
) => {
  const token = localStorage.getItem("token");

  const config = {
    method,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    }
  };

  if (body) {
    config.body = JSON.stringify(body);
  }

  const response = await fetch(
    `${BASE_URL}${endpoint}`,
    config
  );

  return response.json();
};
