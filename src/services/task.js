import { baseUrl } from "./constant";

const TASK = "tasks";

export const getTasks = async () => {
  try {
    const url = baseUrl + TASK;
    const res = await fetch(url);
    const result = await res.json();
    console.log(result)
    return result;
  } catch (err) {
    console.error(err);
  }
};

export const updateTask = async (item) => {
    try {
      const url = baseUrl + TASK;
      const res = await fetch(url, {
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(item),
      });
      const result = await res.json();
      return result;
    } catch (e) {
      console.log(e);
    }
  };
  