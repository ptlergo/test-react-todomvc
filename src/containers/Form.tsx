import React, { useState } from "react";

import { IFormProps } from "./Main";

import Input from "../components/Input";
import Button from "../components/Button";

export default (props: IFormProps) => {
  const [value, setValue] = useState("");
  const { addTask } = props;

  /**
   * @description on subm
   * @param e
   */
  const handleSubmit = (e: any): void => {
    e.preventDefault();
    if (!value) return;
    addTask(value.trim());
    // reset value state
    setValue("");
  };

  return (
    <form>
      <Input value={value} setValue={setValue} />
      <Button type={"btn btn-primary"} action={handleSubmit} text="Add Task" />
    </form>
  );
};
