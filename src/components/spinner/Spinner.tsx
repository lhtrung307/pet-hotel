import React, { ReactElement } from "react";
import clsx from "clsx";

interface IProps {
  isInline?: boolean;
}

function Spinner({ isInline = false }: IProps): ReactElement {
  return (
    <div
      className={clsx(
        isInline ? "relative bg-transparent" : "bg-gray-100",
        "flex items-center justify-center fixed inset-0"
      )}
    >
      <div className="border-t-transparent border-4 border-red-500 inline-block rounded-full animate-spin w-10 h-10 align-bottom text-primary">
        <span className="sr-only"></span>
      </div>
    </div>
  );
}

export default Spinner;
