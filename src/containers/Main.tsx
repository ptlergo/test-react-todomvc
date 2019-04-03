import React, { useState } from "react";
import Form from "./Form";
import Tasks from "./Tasks";

export interface IFormProps {
  addTask(detail: string): void;
}

const Main = () => {

  /**
   * @description add task from input
   * @param detail 
   */
  const addTask = (detail: string): void => {
    console.log({detail})
  };

  return <main className="container">
    <header>
      <h1>ToDo App</h1>
      <Form addTask={addTask} />
    </header>
    <Tasks />
  </main>;
};

export default Main;
