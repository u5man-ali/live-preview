// src/components/Button.jsx
import clsx from "clsx";
import { useEffect, useState } from "react";

const sizes = {
  sm: "text-body-sm px-3 py-1.5",
  md: "text-body-md px-4 py-2 ",
  lg: "text-body-lg px-5 py-2.5",
};
const shapes = {
  rounded: "rounded-curve-md",
  square: "rounded-none",
  pill: "rounded-full",
  inherit: "rounded-[inherit]"
};
const iconSizes = {
  sm: "w-4 h-4",
  md: "w-5 h-5",
  lg: "w-6 h-6",
}
const styles = {
  primary: {
    gradient: "relative bg-gradient-to-b from-primary-600 to-primary-800 text-white-50 hover:bg-gradient-to-b hover:from-primary-500 hover:to-primary-700 active:ring-1 active:ring-offset-1 active:ring-primary-500 active:bg-gradient-to-b active:from-primary-800 active:to-primary-600 focus:bg-gradient-to-b focus:from-primary-700 focus:to-primary-900 align-middle select-none text-center duration-100 ease-in shadow-sm hover:shadow-md after:absolute after:inset-0 after:rounded-[inherit] after:shadow-[inset_0px_1px_1px_1px_rgba(255,255,255,0.35),inset_0_-1px_1px_1px_rgba(0,0,0,0.25)]",
    solid: "bg-primary-700 hover:bg-primary-600 text-white-50 active:bg-primary-800 ",
    outline: "border-2 border-primary-700 text-primary-700 hover:border-primary-600 hover:text-primary-600 active:bg-primary-50 active:text-primary-800",
    transparent: "bg-transparent text-primary-700 hover:bg-neutral-50 active:bg-neutral-100",
    link: "bg-transparent text-primary-700 hover:underline active:text-primary-800"
  },
    secondary: {
    gradient: "relative bg-gradient-to-b from-neutral-600 to-neutral-800 text-white-50 hover:bg-gradient-to-b hover:from-neutral-500 hover:to-neutral-700 active:ring-1 active:ring-offset-1 active:ring-neutral-500 active:bg-gradient-to-b active:from-neutral-800 active:to-neutral-600 focus:bg-gradient-to-b focus:from-neutral-700 focus:to-neutral-900 align-middle select-none text-center duration-100 ease-in shadow-sm hover:shadow-md focus:shadow-none after:absolute after:inset-0 after:rounded-[inherit] after:shadow-[inset_0px_1px_1px_1px_rgba(255,255,255,0.35),inset_0_-1px_1px_1px_rgba(0,0,0,0.25)]",
    solid: "bg-neutral-700 hover:bg-neutral-600 text-white-50 active:bg-neutral-800 ",
    outline: "border-2 border-neutral-700 text-neutral-700 hover:border-neutral-600 hover:text-neutral-600 active:bg-neutral-50 active:text-neutral-800",
    transparent: "bg-transparent text-neutral-700 hover:bg-neutral-50 active:bg-neutral-100",
    link: "bg-transparent text-neutral-700 hover:underline active:text-neutral-800"
  },
  success: {
    gradient: "relative bg-gradient-to-b from-success-600 to-success-800 text-white-50 hover:bg-gradient-to-b hover:from-success-500 hover:to-success-700 active:ring-1 active:ring-offset-1 active:ring-success-500 active:bg-gradient-to-b active:from-success-800 active:to-success-600 focus:bg-gradient-to-b focus:from-success-700 focus:to-success-900 align-middle select-none text-center duration-100 ease-in shadow-sm hover:shadow-md after:absolute after:inset-0 after:rounded-[inherit] after:shadow-[inset_0px_1px_1px_1px_rgba(255,255,255,0.35),inset_0_-1px_1px_1px_rgba(0,0,0,0.25)]",
    solid: "bg-success-700 hover:bg-success-600 text-white-50 active:bg-success-700 ",
    outline: "border-2 border-success-700 text-success-600 hover:border-success-600 hover:text-success-600 active:bg-success-50 active:text-success-800",
    transparent: "bg-transparent text-success-700 hover:bg-success-50 active:bg-success-100",
    link: "bg-transparent text-success-700 hover:underline active:text-success-800"
  },
  error: {
    gradient: "relative bg-gradient-to-b from-error-600 to-error-800 text-white-50 hover:bg-gradient-to-b hover:from-error-500 hover:to-error-700 active:ring-1 active:ring-offset-1 active:ring-error-500 active:bg-gradient-to-b active:from-error-800 active:to-error-600 focus:bg-gradient-to-b focus:from-error-700 focus:to-error-900 align-middle select-none text-center duration-100 ease-in shadow-sm hover:shadow-md after:absolute after:inset-0 after:rounded-[inherit] after:shadow-[inset_0px_1px_1px_1px_rgba(255,255,255,0.35),inset_0_-1px_1px_1px_rgba(0,0,0,0.25)]",
    solid: "bg-error-700 hover:bg-error-600 text-white-50 active:bg-error-700 ",
    outline: "border-2 border-error-700 text-error-600 hover:border-error-600 hover:text-error-600 active:bg-error-50 active:text-error-800",
    transparent: "bg-transparent text-error-700 hover:bg-error-50 active:bg-error-100",
    link: "bg-transparent text-error-700 hover:underline active:text-error-800"
  },
  warning: {
    gradient: "relative bg-gradient-to-b from-warning-600 to-warning-800 text-white-50 hover:bg-gradient-to-b hover:from-warning-500 hover:to-warning-700 active:ring-1 active:ring-offset-1 active:ring-warning-500 active:bg-gradient-to-b active:from-warning-800 active:to-warning-600 focus:bg-gradient-to-b focus:from-warning-700 focus:to-warning-900 align-middle select-none text-center duration-100 ease-in shadow-sm hover:shadow-md after:absolute after:inset-0 after:rounded-[inherit] after:shadow-[inset_0px_1px_1px_1px_rgba(255,255,255,0.35),inset_0_-1px_1px_1px_rgba(0,0,0,0.25)]",
    solid: "bg-warning-700 hover:bg-warning-600 text-white-50 active:bg-warning-700 ",
    outline: "border-2 border-warning-700 text-warning-600 hover:border-warning-600 hover:text-warning-600 active:bg-warning-50 active:text-warning-800",
    transparent: "bg-transparent text-warning-700 hover:bg-warning-50 active:bg-warning-100",
    link: "bg-transparent text-warning-700 hover:underline active:text-warning-800"
  },
  info: {
    gradient: "relative bg-gradient-to-b from-info-600 to-info-800 text-white-50 hover:bg-gradient-to-b hover:from-info-500 hover:to-info-700 active:ring-1 active:ring-offset-1 active:ring-info-500 active:bg-gradient-to-b active:from-info-800 active:to-info-600 focus:bg-gradient-to-b focus:from-info-700 focus:to-info-900 align-middle select-none text-center duration-100 ease-in shadow-sm hover:shadow-md after:absolute after:inset-0 after:rounded-[inherit] after:shadow-[inset_0px_1px_1px_1px_rgba(255,255,255,0.35),inset_0_-1px_1px_1px_rgba(0,0,0,0.25)]",
    solid: "bg-info-700 hover:bg-info-600 text-white-50 active:bg-info-700 ",
    outline: "border-2 border-info-700 text-info-600 hover:border-info-600 hover:text-info-600 active:bg-info-50 active:text-info-800",
    transparent: "bg-transparent text-info-700 hover:bg-info-50 active:bg-info-100",
    link: "bg-transparent text-info-700 hover:underline active:text-info-800"
  },
};

export default function Button({
  children,
  size = "md", // "sm", "md", or "lg"
  variant = "gradient", // "gradient", "solid", or "outline"
  style = "primary", // "neutral", "primary", "success", "error", "warning", "info"
  shape = "rounded", // "rounded", "square", or "pill"
  iconSize = "md", // "sm", "md", or "lg"
  className = "",
  disabled = false,
  showLeftIcon = true,
  iconLeftName = "Placeholder-Outline", // check filenames to use other icons in src/icons
  showRightIcon = true,
  iconRightName = "Arrow-Enter-Left-Outline", // check filenames to use other icons in src/icons
  ...props
}) {
  const baseClasses = "inline-flex items-center gap-2 font-medium transition-all whitespace-nowrap";
  const stateClasses = disabled ? "opacity-60 cursor-not-allowed pointer-events-none" : "";
  const sizeClass = sizes[size];
  const shapeClass = shapes[shape];
  const variantClass = styles[style]?.[variant] ?? "";
  const [LeftIcon, setLeftIcon] = useState(null);
  const [RightIcon, setRightIcon] = useState(null);
  
  useEffect(
    () => {
      if(showLeftIcon && iconLeftName) {
        import(`../icons/${iconLeftName}.svg?react`)
        .then((icon) => setLeftIcon(() => icon.default))
        .catch((error) => console.error(`Error loading left icon: ${error}`));
      }
      if(showRightIcon && iconRightName) {
        import(`../icons/${iconRightName}.svg?react`)
        .then((icon) => setRightIcon(() => icon.default))
        .catch((error) => console.error(`Error loading right icon: ${error}`));
      }
    }, [showLeftIcon, iconLeftName, showRightIcon, iconRightName]
  );
  return (
      <button
        className={clsx(
        baseClasses,
        sizeClass,
        shapeClass,
        variantClass,
        stateClasses,
        className
      )}
        disabled={disabled}
        {...props}
      >
        {showLeftIcon && LeftIcon && <LeftIcon className={iconSizes[iconSize]} /> }
        {children}
        {showRightIcon && RightIcon && <RightIcon className={iconSizes[iconSize]} /> }
      </button>
  );
}