// src/components/badge.jsx
import clsx from "clsx";

const sizes = {
  sm: "text-body-xs leading-[16px] px-2 py-1",
  md: "text-body-sm leading-[20px] px-2 py-1",
  lg: "text-body-md leading-[24px] px-2 py-1",
};

const shapes = {
  rounded: "rounded-curve-xs",
  square: "rounded-none",
  pill: "rounded-pill",
};

const iconSizes = {
  sm: "w-4 h-4",
  md: "w-5 h-5",
  lg: "w-6 h-6",
};

const styles = {
  primary: {
    filled: "bg-brand-primary-light text-brand-primary-default border-2 border-brand-primary-rest",
    outline: "text-brand-primary-hover border-2 border-brand-primary-hover",
  },
  neutral: {
    filled: "bg-neutral-secondary text-neutral-hovered border-2 border-neutral-placeholder",
    outline: "text-neutral-placeholder border-2 border-neutral-placeholder",
  },
  success: {
    filled: "bg-semantic-success-light text-semantic-success-rest border border-semantic-success-rest",
    outline: "text-semantic-success-rest border border-semantic-success-rest",
  },
  error: {
    filled: "bg-semantic-error-light text-semantic-error-rest border border-semantic-error-rest",
    outline: "text-semantic-error-rest border border-semantic-error-rest",
  },
  warning: {
    filled: "bg-semantic-warning-light text-semantic-warning-rest border border-semantic-warning-rest",
    outline: "text-semantic-warning-rest border border-semantic-warning-rest",
  },
  info: {
    filled: "bg-semantic-info-light text-semantic-info-rest border border-semantic-info-rest",
    outline: "text-semantic-info-rest border border-semantic-info-rest",
  },
};

export default function Badge({
  children,
  size = "md", // "sm", "md", or "lg"
  variant = "filled", // "filled" or "outline"
  style = "primary", // "neutral", "primary", "success", "error", "warning", "info"
  shape = "rounded", // "rounded", "square", or "pill"
  iconSize = "md", // "sm", "md", or "lg"
  className = "",
  disabled = false,
  iconLeft = null, //default is null, can obtain pre-imported svg icons as react component
  iconRight = null, //default is null, can obtain pre-imported svg icons as react component
  ...props
}) {
  const baseClasses = "inline-flex items-center gap-2 font-medium transition-all whitespace-nowrap";
  const stateClasses = disabled ? "opacity-60 cursor-not-allowed pointer-events-none" : "";
  const sizeClass = sizes[size];
  const shapeClass = shapes[shape];
  const variantClass = styles[style]?.[variant] ?? "";
  const LeftIcon = iconLeft? iconLeft: null;
  const RightIcon = iconRight? iconRight: null;

  return (
    <span
      className={clsx(
        className="px-2",
        baseClasses,
        sizeClass,
        shapeClass,
        variantClass,
        stateClasses,
        className
      )}
      {...props}
    >
      {LeftIcon && <LeftIcon className={iconSizes[iconSize]} />}
      {children }
      {RightIcon && <RightIcon className={iconSizes[iconSize]} />}
    </span>
  );
}