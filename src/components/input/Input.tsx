import React, { ReactElement } from "react";
import clsx from "clsx";

interface IProps {
  placeholder?: string;
  type?: string;
  help?: string;
  disabled?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function Input({
  placeholder,
  type = "text",
  disabled,
  onChange
}: IProps): ReactElement {
  const classes = clsx({ "cursor-not-allowed": disabled });

  return (
    <div>
      <input
        disabled={disabled}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        className={`w-full border rounded-md px-3 py-2 mt-2 focus:outline-none focus:ring-2 focus:ring-opacity-50 ${classes}`}
      />
    </div>
  );
}

export default Input;
