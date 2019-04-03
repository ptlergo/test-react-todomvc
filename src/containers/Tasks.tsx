import React, { useState } from "react";
import { ITasksProps } from "./Main";

const Tasks = (props: ITasksProps) => {
  const { tasksArr, tasksAmnt } = props.tasksObj;

  const renderTask = (): any =>
    tasksArr.map((task: any, index: number) => {
      return (
        <h1 key={index}>{task.detail}</h1>
      );
    });

  return <>
    <ul>
      {renderTask()}
    </ul>
  </>;
};

export default Tasks;
