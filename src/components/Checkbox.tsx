import React from "react";
export default (props: any) => {
  return (
    <label htmlFor="checkbox">
      <input
        name="checkbox"
        type="checkbox"
        checked={props.isCompleted}
        onChange={props.action}
      />
      <span>mark complete</span>
    </label>
  );
};
