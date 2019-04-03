import React, { useState } from "react";
import Input from "../components/Input";
import { IFormProps } from "./Main";

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
      <button onClick={handleSubmit}></button>
    </form>
  );
};
