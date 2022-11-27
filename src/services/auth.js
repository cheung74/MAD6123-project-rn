import { baseUrl } from "./constant";

const AUTH = "auth/";

export const login = async (email, password) => {
  try {
    const url = baseUrl + AUTH;
    const res = await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const result = await res.json();
    return result;
  } catch (e) {
    console.log(e);
  }
};
