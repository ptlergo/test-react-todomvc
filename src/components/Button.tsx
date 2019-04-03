import React from "react";
export default (props: any) => {
  const { action, type, text } = props;
  return <button className={`${type}`} onClick={action}>{text}</button>;
};
