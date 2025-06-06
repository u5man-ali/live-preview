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
  neutral: {
    gradient: "relative bg-gradient-to-b from-neutral-600 to-neutral-800 text-white-50 hover:bg-gradient-to-b hover:from-neutral-500 hover:to-neutral-700 active:bg-gradient-to-b active:from-neutral-800 active:to-neutral-600 focus:bg-gradient-to-b focus:from-neutral-700 focus:to-neutral-900 align-middle select-none text-center duration-100 ease-in shadow-sm hover:shadow-md focus:shadow-none after:absolute after:inset-0 after:rounded-[inherit] after:shadow-[inset_0px_1px_1px_1px_rgba(255,255,255,0.35),inset_0_-1px_1px_1px_rgba(0,0,0,0.25)]",
    solid: "bg-neutral-700 hover:bg-neutral-600 text-white-50 active:bg-neutral-800 ",
    outline: "border-2 border-neutral-700 text-neutral-700 hover:border-neutral-600 hover:text-neutral-600 active:bg-neutral-50 active:text-neutral-800",
    transparent: "bg-transparent text-neutral-700 hover:bg-neutral-50 active:bg-neutral-100",
    link: "bg-transparent text-neutral-700 hover:underline active:text-neutral-800"
  },
  primary: {
    gradient: "relative bg-gradient-to-b from-primary-600 to-primary-800 text-white-50 hover:bg-gradient-to-b hover:from-primary-500 hover:to-primary-700 active:bg-gradient-to-b active:from-primary-800 active:to-primary-600 focus:bg-gradient-to-b focus:from-primary-700 focus:to-primary-900 align-middle select-none text-center duration-100 ease-in shadow-sm hover:shadow-md focus:shadow-none after:absolute after:inset-0 after:rounded-[inherit] after:shadow-[inset_0px_1px_1px_1px_rgba(255,255,255,0.35),inset_0_-1px_1px_1px_rgba(0,0,0,0.25)]",
    solid: "bg-primary-700 hover:bg-primary-600 text-white-50 active:bg-primary-800 ",
    outline: "border-2 border-primary-700 text-primary-700 hover:border-primary-600 hover:text-primary-600 active:bg-primary-50 active:text-primary-800",
    transparent: "bg-transparent text-primary-600 hover:bg-neutral-50 active:bg-neutral-100",
    link: "bg-transparent text-primary-600 hover:underline active:text-primary-700"
  },
  success: {
    gradient: "relative bg-gradient-to-b from-success-600 to-success-800 text-white-50 hover:bg-gradient-to-b hover:from-success-500 hover:to-success-700 active:bg-gradient-to-b active:from-success-800 active:to-success-600 focus:bg-gradient-to-b focus:from-success-700 focus:to-success-900 align-middle select-none text-center duration-100 ease-in shadow-sm hover:shadow-md focus:shadow-none after:absolute after:inset-0 after:rounded-[inherit] after:shadow-[inset_0px_1px_1px_1px_rgba(255,255,255,0.35),inset_0_-1px_1px_1px_rgba(0,0,0,0.25)]",
    solid: "bg-success-700 hover:bg-success-600 text-white-50 active:bg-success-700 ",
    outline: "border-2 border-success-700 text-success-600 hover:border-success-600 hover:text-success-600 active:bg-success-50 active:text-success-800",
    transparent: "bg-transparent text-success-700 hover:bg-success-50 active:bg-success-100",
    link: "bg-transparent text-success-700 hover:underline active:text-success-800"
  },
  error: {
    gradient: "border border-red-600 hover:border-red-600 bg-red-600 hover:bg-red-500 relative bg-gradient-to-b from-red-600 to-red-800 text-white-50 hover:bg-gradient-to-b hover:from-red-500 hover:to-red-700 active:bg-gradient-to-b active:from-red-600 active:to-red-800 align-middle select-none text-center duration-100 ease-in shadow-sm hover:shadow-md focus:shadow-none after:absolute after:inset-0 after:rounded-[inherit] after:shadow-[inset_1px_1px_3px_rgba(255,255,255,0.25),inset_0_-2px_0px_rgba(0,0,0,0.25)]",
    solid: "bg-red-600 hover:bg-red-500 text-white-50 active:bg-red-700",
    outline: "border-2 border-red-600 hover:border-red-700  text-red-600 hover:text-red-700 active:bg-red-50 active:text-red-800",
    transparent: "bg-transparent text-red-600 hover:bg-red-50 active:bg-red-100",
    link: "bg-transparent text-red-600 hover:underline active:text-red-800"
  },
  warning: {
    gradient: "border border-orange-300 hover:border-orange-300 bg-orange-300 hover:bg-orange-200 relative bg-gradient-to-b from-orange-300 to-orange-500 text-white-50 hover:bg-gradient-to-b hover:from-orange-200 hover:to-orange-400 active:bg-gradient-to-b active:from-orange-400 active:to-orange-600 align-middle select-none text-center duration-100 ease-in shadow-sm hover:shadow-md focus:shadow-none after:absolute after:inset-0 after:rounded-[inherit] after:shadow-[inset_1px_1px_3px_rgba(255,255,255,0.25),inset_0_-2px_0px_rgba(0,0,0,0.25)]",
    solid: "bg-orange-300 hover:bg-orange-200 text-white-50 active:bg-orange-400",
    outline: "border-2 border-orange-600 hover:border-orange-700  text-orange-600 hover:text-orange-700 active:bg-orange-50 active:text-orange-800",
    transparent: "bg-transparent text-orange-600 hover:bg-orange-50 active:bg-orange-100",
    link: "bg-transparent text-orange-600 hover:underline active:text-orange-800"
  },
  info: {
    gradient: "border border-blue-200 hover:border-blue-200 bg-blue-200 hover:bg-blue-100 relative bg-gradient-to-b from-blue-200 to-blue-400 text-white-50 hover:bg-gradient-to-b hover:from-blue-100 hover:to-blue-300 active:bg-gradient-to-b active:from-blue-300 active:to-blue-500 align-middle select-none text-center duration-100 ease-in shadow-sm hover:shadow-md focus:shadow-none after:absolute after:inset-0 after:rounded-[inherit] after:shadow-[inset_1px_1px_3px_rgba(255,255,255,0.25),inset_0_-2px_0px_rgba(0,0,0,0.25)]",
    solid: "bg-blue-300 hover:bg-blue-200 text-white-50 active:bg-blue-400",
    outline: "border-2 border-blue-400 hover:border-blue-500 text-blue-400 hover:text-blue-500 active:bg-blue-50 active:text-blue-600",
    transparent: "bg-transparent text-blue-400 hover:bg-blue-50 active:bg-blue-100",
    link: "bg-transparent text-blue-400 hover:underline active:text-blue-600"
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