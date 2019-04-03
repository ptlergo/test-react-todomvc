import React, { useState } from "react";
import Form from "./Form";
import Tasks from "./Tasks";

export interface ITasksProps {
  tasksObj: {
    tasksArr: [{ detail: string; isCompleted: boolean; hover: string }];
    tasksAmnt: number;
  };
  deleteTask(index: number): void;
  completeTask(index: number): void;
  onEnter(index: number): void;
  onLeave(index: number): void;
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

  /**
   * @description delete task from array
   * @param index
   */
  const deleteTask = (index: number): void => {
    const tasksArr = tasksObj.tasksArr;
    tasksArr.splice(index, 1);

    setTasksObj({
      tasksArr,
      tasksAmnt: tasksArr.length
    });
  };

  /**
   * @description use for checkbox to indicate task is done
   * @param index
   */
  const completeTask = (index: number): void => {
    const tasksArr = tasksObj.tasksArr;

    // toggle state
    tasksArr[index].isCompleted = tasksArr[index].isCompleted ? false : true;

    setTasksObj({
      tasksArr,
      tasksAmnt: tasksArr.length,
      hover: tasksObj.hover
    });
  };

  /**
   * @description mouse event to add hidden class to delete button
   * @param index
   */
  const onLeave = (index: number): void => {
    const tasksArr = tasksObj.tasksArr;
    tasksObj.tasksArr[index].hover = "hidden";

    setTasksObj({
      tasksArr,
      tasksAmnt: tasksObj.tasksArr.length
    });
  };

  /**
   * @description mouse event to remove hidden class to delete button
   * @param index
   */
  const onEnter = (index: number): void => {
    const tasksArr = tasksObj.tasksArr;
    tasksObj.tasksArr[index].hover = "";

    setTasksObj({
      tasksArr,
      tasksAmnt: tasksObj.tasksArr.length
    });
  };

  return (
    <main className="container">
      <header className="hero card">
        <h1>ToDo App</h1>
        <Form addTask={addTask} />
      </header>
      <Tasks
        tasksObj={tasksObj}
        deleteTask={deleteTask}
        completeTask={completeTask}
        onLeave={onLeave}
        onEnter={onEnter}
      />
    </main>
  );
};

export default Main;
