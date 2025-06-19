// src/components/Checkbox.jsx
import { useEffect, useRef } from "react";
import clsx from "clsx";

import CheckmarkIcon from "../icons/Checkmark-Outline.svg?react";
import MinusIcon from "../icons/Subtract-Outline.svg?react";

export default function Checkbox({
  id,
  name,
  label,
  checked = false,
  indeterminate = false,
  onChange,
  disabled = false,
  description = "",
  className = "",
}) {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.indeterminate = indeterminate;
    }
  }, [indeterminate]);

  return (
    <div className={clsx("flex items-start gap-2", className)}>
      <div className="flex items-center">
        <div className="relative">
          <input
            ref={ref}
            type="checkbox"
            id={id}
            name={name}
            checked={checked}
            disabled={disabled}
            onChange={(e) => onChange?.(e.target.checked)}
            className={clsx(
              "peer h-6 w-6 shrink-0 appearance-none cursor-pointer rounded border-2 transition-colors",
              indeterminate || checked
                ? "bg-brand-primary-rest border-brand-primary-rest"
                : "bg-white border-neutral-regular",
              disabled && "opacity-50 cursor-not-allowed"
            )}
          />
          {/* Icon overlays */}
          {indeterminate && (
            <MinusIcon className="pointer-events-none text-neutral-inverse absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2" />
          )}
          {checked && !indeterminate && (
            <CheckmarkIcon className="pointer-events-none text-neutral-inverse absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2" />
          )}
        </div>
      </div>

      <label htmlFor={id} className="cursor-pointer select-none">
        <span className="block text-sm font-medium text-neutral-strong">{label}</span>
        {description && (
          <span className="block text-xs text-neutral-muted">{description}</span>
        )}
      </label>
    </div>
  );
}