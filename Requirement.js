// Create a Full Stack JavaScript based application that uses React Native or React.js as a front end and that implements an online project management system. If React Native is chosen, application should run properly on an Android or iOS Simulator/Emulator or device.

// All the Back-End components for this application should be based on Node.js and Express.js. MongoDB is the database that must be used for this project.

// Only Admin user can create a project and assign members to a project and has all the rights/permissions to create the following:

// Project tasks (task id, task name, task description, task start date, task end date) 
//done

// Assign members to created tasks (every member can be paid a different hourly rate, so please assign this as well).
//
// Assigned members can check when the task is complete. In this case, application records the date and time of completion. Members should also enter the hours they worked in this task.
// Some tasks can have prerequisite tasks which means they cannot start before another task is completed. Make sure to consider this.
// When all the tasks in a project are complete, application should mark the project as complete and record total number of hours members worked on it and the cost of the whole project.
// Admin user should also be able to:
// •	Create new members (member ID, email address, first name, last name, job title)
// •	Browse existing projects and check their state (completed tasks/started tasks/not started tasks etc.)
// •	Browse existing projects (project list) and see which ones have been completed, started, not started etc).
// •	Check for tasks that are running late in each project.
// •	Sort Completed projects by total cost (high to low and low to high)
// •	Assign any existing member to a project
// Regular users can only see the projects they are assigned to and check/modify the tasks assigned to them.
