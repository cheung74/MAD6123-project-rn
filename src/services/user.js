import { baseUrl } from "./constant";

const USER = "users/";

export const getUsers = async () => {
  try {
    const url = baseUrl + USER;
    const res = await fetch(url);
    const result = await res.json();
    return result;
  } catch (err) {
    console.error(err);
  }
};

export const createUser = async (user) => {
  try {
    const url = baseUrl + USER;
    const res = await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const result = await res.json();
    if (Array.isArray(result)) {
      return true;
    }
  } catch (error) {
    console.warn(error);
  }
};

export const updateUser = async (user) => {
  try {
    const url = baseUrl + USER;
    const res = await fetch(url, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const result = await res.json();
    if (Array.isArray(result)) {
      return true;
    }
  } catch (error) {
    console.warn(error);
  }
};
