import React from "react";

import { ITaskProps } from "../containers/Tasks";

import Button from "./Button";
import Checkbox from "./Checkbox";

export default (props: ITaskProps) => {
  return (
    <article className="tasks__item card"
    onMouseEnter={() => props.onEnter()}
    onMouseLeave={() => props.onLeave()}
    >
      <header className="card-header">
        <h3>Task #{props.index + 1}</h3>
        <h4 className="badge badge-success">
          {props.isCompleted && "completed"}
        </h4>
      </header>
      <div className="card-body">
        <p className="card-text">{props.detail}</p>
        <div className="actions-box">
        <Checkbox
            isCompleted={props.isCompleted}
            action={props.completeTask}
          />
          <Button
            type={`${props.hover} btn btn-danger`}
            action={props.deleteTask}
            text={"delete"}
          />
        </div>
      </div>
    </article>
  );
};
