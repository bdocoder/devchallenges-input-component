import React from "react";
import cn from "classnames";
import { useRef } from "react";

type InputProps = {
  label?: string;
  placeholder?: string;
  helperText?: string;
  startIcon?: string;
  endIcon?: string;
  value?: string;
  size?: "sm" | "md";
  fullWidth?: boolean;
  multiline?: boolean;
  row?: number | string;
  error?: boolean;
  disabled?: boolean;
  [key: string]: any;
};

export default function Input({
  label = "Label",
  placeholder = "Placeholder",
  helperText,
  startIcon,
  endIcon,
  value,
  size,
  fullWidth,
  multiline,
  row,
  error,
  disabled,
  ...props
}: InputProps) {
  if (typeof row === "string") row = parseInt(row);

  const inputRef = useRef<HTMLInputElement & HTMLTextAreaElement>(null);
  const focusInput = () => {
    if (inputRef && inputRef.current) inputRef.current.focus();
  };

  const classes = ["input"];

  if (multiline) classes.push("multiline");

  if (size === "sm") classes.push("sm");

  if (fullWidth) classes.push("full-width");

  if (error) classes.push("error");
  if (disabled) classes.push("disabled");

  return (
    <div className={cn(classes)} onClick={focusInput}>
      <label className="label">{label}</label>
      <div className="input-container">
        {startIcon && <span className="material-icons start">{startIcon}</span>}
        {multiline ? (
          <textarea
            ref={inputRef}
            placeholder={placeholder}
            rows={row}
            readOnly={!!value}
            disabled={disabled}
            value={value}
            {...props}
          />
        ) : (
          <input
            ref={inputRef}
            placeholder={placeholder}
            readOnly={!!value}
            disabled={disabled}
            value={value}
            {...props}
          />
        )}
        {endIcon && <span className="material-icons end">{endIcon}</span>}
      </div>
      {helperText && <span className="helper">{helperText}</span>}
    </div>
  );
}
