import { baseUrl } from "./constant";

const PROJECTS = "projects";
const TASKS = "task";

export const getProjects = async () => {
  try {
    const url = baseUrl + PROJECTS;
    const res = await fetch(url);
    const result = await res.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const createTask = async (projectId, task) => {
  try {
    const url = baseUrl + TASKS + "/" + projectId;
    const res = await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    });
    const result = await res.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const updateProject = async (id, project) => {
  try {
    const url = baseUrl + PROJECTS + "/" + id;
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
