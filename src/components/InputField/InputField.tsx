import React from "react";

export interface InputFieldProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  placeholder?: string;
  helperText?: string;
  errorMessage?: string;
  disabled?: boolean;
  invalid?: boolean;
  variant?: "filled" | "outlined" | "ghost";
  size?: "sm" | "md" | "lg";
}

const sizeClasses = {
  sm: "px-2 py-1 text-sm",
  md: "px-3 py-2 text-base",
  lg: "px-4 py-3 text-lg",
};

const variantClasses = {
  filled: "bg-gray-100 border border-gray-300 focus:ring-2 focus:ring-blue-500",
  outlined: "border border-gray-400 focus:border-blue-500",
  ghost: "bg-transparent border-b border-gray-400 focus:border-blue-500",
};

export const InputField: React.FC<InputFieldProps> = ({
  value,
  onChange,
  label,
  placeholder,
  helperText,
  errorMessage,
  disabled,
  invalid,
  variant = "outlined",
  size = "md",
}) => {
  const inputId = React.useId(); // unique id for accessibility

  return (
    <div className="flex flex-col w-full">
      {label && (
        <label htmlFor={inputId} className="mb-1 font-medium">
          {label}
        </label>
      )}
      <input
        id={inputId}
        value={value}
        onChange={onChange}
        disabled={disabled}
        placeholder={placeholder}
        aria-invalid={invalid ? "true" : "false"}
        aria-describedby={
          errorMessage ? `${inputId}-error` : helperText ? `${inputId}-help` : undefined
        }
        className={`rounded-md outline-none transition 
          ${sizeClasses[size]} ${variantClasses[variant]} 
          ${invalid ? "border-red-500 focus:ring-red-500" : ""} 
          ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
      />
      {helperText && !errorMessage && (
        <span id={`${inputId}-help`} className="text-xs text-gray-500 mt-1">
          {helperText}
        </span>
      )}
      {errorMessage && (
        <span id={`${inputId}-error`} className="text-xs text-red-500 mt-1">
          {errorMessage}
        </span>
      )}
    </div>
  );
};
