"use client";
import { ReactNode, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export default function ButtonBackPage({ children, ...props }: ButtonProps) {
  return (
    <button
      onClick={(e: { preventDefault: () => void }) => {
        e.preventDefault();
        window.history.back();
      }}
      {...props}
    >
      {children}
    </button>
  );
}
