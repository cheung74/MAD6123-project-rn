import moment from "moment";

export const getDateString = (date) => {
  return moment(date, "x").format("DD MMM YYYY hh:mm a");
};

export const updateTaskState = (project, taskId, hour) => {
  const _project = { ...project };
  const task = _project.task.find((item) => item.id === taskId);
  task.hour = hour;
  task.cost = parseFloat(task.hour) * parseFloat(task.rate).toFixed(2) + "";
  task.completedAt = new Date().getTime()
  task.status = "completed";
  if (
    Array.isArray(_project.task) &&
    _project.task.every((item) => item.status === "completed")
  ) {
    const total = _project.task.reduce((acm, cur) => {
      return (acm = acm + parseFloat(cur.cost));
    }, 0);
    _project.cost = total + "";
    _project.status = "completed";
  }
  return _project;
};
