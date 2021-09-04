import React from "react";

const Input = (props: React.InputHTMLAttributes<any>) => {
  if (props?.type === "checkbox") {
    return (
      <input
        className={props?.className || "form-check-input mt-0"}
        type="checkbox"
        required={props?.required || false}
        onChange={props.onChange}
        checked={props?.checked || false}
      />
    );
  }

  return (
    <input
      className={props?.className || "form-control"}
      type={props?.type || "text"}
      onChange={props.onChange}
      value={props?.value || ""}
      required={props?.required || false}
    />
  );
};

export default Input;
