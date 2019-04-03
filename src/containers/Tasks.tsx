import React, { useState } from "react";

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
}

const Tasks = (props: ITasksProps) => {
  const { tasksArr, tasksAmnt } = props.tasksObj;

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
