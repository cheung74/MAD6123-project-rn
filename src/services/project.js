import { baseUrl } from "./constant";

const TASK = "tasks";
const PROJECTS = "projects";

export const getTasks = async () => {
  try {
    const url = baseUrl + TASK;
    const res = await fetch(url);
    const result = await res.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const createProject = async (project) => {
  try {
    const url = baseUrl + PROJECTS;
    const res = await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(project),
    });
    const result = await res.json();
    return result;
    
  } catch (error) {
    console.log(error);
  }
};
