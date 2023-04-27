"use client";
import * as React from "react";
import { IconType } from "react-icons/lib";
import clsx from "clsx";

export interface ButtonProps {
  label?: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  outline?: boolean;
  small?: boolean;
  icon?: IconType;
}

export default function Button({
  label,
  onClick,
  disabled,
  outline,
  small,
  icon: Icon,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        "relative disabled:opacity-80 transition w-full",
        outline
          ? "bg-white border-black text-black"
          : "bg-rose-500 border-rose-500 text-white",
        small
          ? "py-1 text-sm font-light border"
          : "py-3 text-md font-semibold border-2"
      )}
    >
      {Icon && <Icon size={24} className="absolute left-4 top-3" />}
      {label}
    </button>
  );
}
