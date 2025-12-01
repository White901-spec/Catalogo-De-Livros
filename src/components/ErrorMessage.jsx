import React from "react";

export default function ErrorMessage({ children }) {
  return <div role="alert" className="ui-error">{children}</div>;
}