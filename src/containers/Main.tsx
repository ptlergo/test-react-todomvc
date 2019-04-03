import React, { useState } from "react";
import Form from "./Form";
import Tasks from "./Tasks";

const Main = () => {
  return <main className="container">
    <header>
      <h1>ToDo App</h1>
      <Form />
    </header>
    <Tasks />
  </main>;
};

export default Main;
