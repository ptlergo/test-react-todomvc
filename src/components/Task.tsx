import React from "react";
import { ITaskProps } from "../containers/Tasks";

export default (props: ITaskProps) => {
  return (
    <article className="tasks__item card">
            <p className="card-text">{props.detail}</p>
    </article>
  );
};
