import React, { ReactElement, ReactNode } from "react";
import clsx from "clsx";

interface IColor {
  bgColor: string;
  darkMode: string;
  textColor: string;
  borderColor: string;
  textOutlineColor: string;
}

const COLORS: { [key: string]: IColor } = {
  primary: {
    bgColor: "bg-blue-600",
    darkMode: "bg-blue-600",
    textColor: "text-white",
    borderColor: "border border-blue-600",
    textOutlineColor: "text-blue-600"
  },
  secondary: {
    bgColor: "bg-white",
    darkMode: "bg-white",
    textColor: "text-gray-700",
    borderColor: "border",
    textOutlineColor: "text-blue-600"
  },
  success: {
    bgColor: "bg-green-500",
    darkMode: "bg-green-500",
    textColor: "text-white",
    borderColor: "border border-green-500",
    textOutlineColor: "text-green-600"
  },
  warning: {
    bgColor: "bg-yellow-300",
    darkMode: "bg-yellow-300",
    textColor: "text-white",
    borderColor: "border border-yellow-300",
    textOutlineColor: "text-yellow-600"
  },
  danger: {
    bgColor: "bg-red-600",
    darkMode: "bg-red-600",
    textColor: "text-white",
    borderColor: "border border-red-600",
    textOutlineColor: "text-red-600"
  }
};

interface IProps {
  color?: "primary" | "secondary" | "success" | "warning" | "danger";
  size?: "sm" | "md" | "lg";
  shape?: "pill";
  children?: ReactNode;
  disabled?: boolean;
  className?: string;
  shadowed?: boolean;
  outline?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

function Button({
  color = "primary",
  children,
  shape,
  disabled = false,
  onClick = () => {
    return;
  },
  size = "sm",
  shadowed = false,
  outline = false
}: IProps): ReactElement {
  const buttonColor = COLORS[color];
  const bgColor = outline ? COLORS.secondary.bgColor : buttonColor.bgColor;
  const textColor = outline
    ? buttonColor.textOutlineColor
    : buttonColor.textColor;
  const classes = clsx(
    bgColor,
    textColor,
    buttonColor.borderColor,
    { "cursor-not-allowed": disabled },
    [{ "rounded-full": shape === "pill" }, { "rounded-md": !shape }],
    { "py-1 px-2": size === "sm" },
    { "py-2 px-3": size === "md" },
    { "py-3 px-4": size === "lg" },
    { "shadow-md": shadowed }
  );

  return (
    <button
      disabled={disabled}
      className={`focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 focus:outline-none w-24 ${classes}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
