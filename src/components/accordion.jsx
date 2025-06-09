// src/components/Accordion.jsx
import clsx from "clsx";
import Button from './button';
import { useEffect, useState } from "react";

const sizes = {
  sm: "text-body-sm p-3",
  md: "text-body-md p-4",
  lg: "text-body-lg p-5",
};

const styles = {
  primary: {
    base: "border border-brand-primary-regular text-brand-primary-focused",
    expanded: "bg-brand-primary-bg",
  },
  neutral: {
    base: "border border-neutral-regular text-neutral-focused",
    expanded: "bg-neutral-bg ",
  },
  transparent: {
    base: "bg-transparent text-neutral-default",
    expanded: "bg-neutral-secondary ",
  },

  // Add success, error, etc. if needed
};

export default function Accordion({
  title,
  children,
  size = "md", // "sm", "md", "lg"
  style = "neutral", // "neutral", "primary", ...
  iconName = "Chevron-Down-Outline", // your icons
  defaultExpanded = false,
  className = "",
}) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  const toggleAccordion = () => setIsExpanded((prev) => !prev);

  useEffect(() => {
    if (iconName) {
      import(`../icons/${iconName}.svg?react`)
        .then((icon) => setIcon(() => icon.default))
        .catch((error) =>
          console.error(`Error loading icon '${iconName}':`, error)
        );
    }
  }, [iconName]);

  return (
    <div
      className={clsx(
        "w-full rounded-curve-md transition-all duration-300 ease-in-out",
        styles[style]?.base,
        isExpanded && styles[style]?.expanded,
        className
      )}
    >
      <div className={isExpanded ? "rounded-bl-0 rounded-br-0 rounded-tl-[inherit] rounded-tr-[inherit]" : "rounded-[inherit]"}>
      <Button
        onClick={toggleAccordion}
        className={clsx(
          "flex w-full items-center justify-between font-medium cursor-pointer ",
          isExpanded && style === "transparent" ? "border-b-2 border-neutral-regular" : ""
        )}
        variant={isExpanded ? "gradient" : "transparent"}
        size={size}
        style={style}
        shape="inherit"
        iconSize={size}
        showLeftIcon={false}
        iconLeftName= "Arrow-Turn-Down-Right-Outline"
        showRightIcon={true}
        iconRightName= {isExpanded ? "Chevron-Up-Outline" : "Chevron-Down-Outline"}
      >
        <span>{title}</span>
      </Button>
      </div>
      <div
        className={clsx(
          "overflow-hidden transition-all duration-300 ease-in-out",
          isExpanded ? "max-h-screen " : "max-h-0 p-0"
        )}
      >
        {isExpanded && <div className={`${sizes[size]} `}>{children}</div>}
      </div>
    </div>
  );
}