"use client";
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
}

import { forwardRef } from "react";
import { useFormStatus } from "react-dom";

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, ...props }, ref) => {
    const { pending } = useFormStatus();

    return (
      <div>
        <button
          disabled={pending}
          aria-disabled={pending}
          ref={ref}
          {...props}
          className={className}
        >
          {pending ? "Loading" : props.title}
        </button>
      </div>
    );
  }
);

Button.displayName = "Button";
export default Button;
