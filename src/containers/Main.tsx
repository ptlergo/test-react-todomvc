import React, { useState } from "react";
import Form from "./Form";
import Tasks from "./Tasks";

export interface ITasksProps {
  tasksObj: {
    tasksArr: [{ detail: string; isCompleted: boolean; hover: string }];
    tasksAmnt: number;
  };
}

export interface IFormProps {
  addTask(detail: string): void;
}

const Main = () => {
  const initTasksObj: any = {
    tasksArr: [],
    tasksAmnt: 0
  };

  // init state for tasks
  const [tasksObj, setTasksObj] = useState(initTasksObj);

  /**
   * @description add task from input
   * @param detail
   */
  const addTask = (detail: string): void => {
    const newTasks: any = [
      ...tasksObj.tasksArr,
      { detail, isCompleted: false, hover: "hidden" }
    ];

    setTasksObj({
      tasksArr: newTasks,
      tasksAmnt: newTasks.length
    });
  };

  return (
    <main className="container">
      <header>
        <h1>ToDo App</h1>
        <Form addTask={addTask} />
      </header>
      <Tasks tasksObj={tasksObj} />
    </main>
  );
};

export default Main;
