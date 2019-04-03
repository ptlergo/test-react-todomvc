import React from "react";

import { ITasksProps } from "./Main";

import Task from "../components/Task";

export interface ITaskProps {
  key: number;
  index: number;
  detail: string;
  hover: string;
  isCompleted: boolean;
  onLeave(): void;
  onEnter(): void;
  deleteTask(index: number): void;
  completeTask(index: number): void;
}

const Tasks = (props: ITasksProps) => {
  const { tasksArr, tasksAmnt } = props.tasksObj;

  /**
   * @description render each task
   */
  const renderTask = (): any =>
    tasksArr.map((task: any, index: number) => {
      return (
        <Task
          key={index}
          detail={task.detail}
          index={index}
          hover={task.hover}
          isCompleted={task.isCompleted}
          onEnter={() => props.onEnter(index)}
          onLeave={() => props.onLeave(index)}
          deleteTask={() => props.deleteTask(index)}
          completeTask={() => props.completeTask(index)}
        />
      );
    });
    
  return (
    <>
      {tasksAmnt > 0 && (
        <section className="tasks">
          <span className="badge badge-pill badge-info">{tasksAmnt}</span>{" "}
          <strong>Task{tasksAmnt > 1 ? "s " : " "} Left</strong>
          <ul>{renderTask()}</ul>
        </section>
      )}
    </>
  );
};

export default Tasks;
