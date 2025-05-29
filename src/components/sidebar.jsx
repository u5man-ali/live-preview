// src/components/sidebar.jsx
import { useState } from "react";
import Button from './button';
                                                              
const sections = [
  { id: "overview", label: "Overview"},
  { id: "button", label: "Button",  showLeftIcon: true, iconLeftName: "Arrow-Turn-Down-Right-Outline" },
  { id: "badge", label: "Badge",  showLeftIcon: true, iconLeftName: "Arrow-Turn-Down-Right-Outline" },
  { id: "accordion", label: "Accordion", showLeftIcon: true, iconLeftName: "Arrow-Turn-Down-Right-Outline" },
];

export default function Sidebar({ onSelect }) {
  const [active, setActive] = useState("overview"); //default active section

  const handleSelect = (id) => {
    setActive(id);
    onSelect(id); //notify parent component of selected component
  };

  return (
    <aside className="sticky -left-64 bottom-0 top-0 z-1 hidden h-[calc(100vh-4px)] w-60 shrink-0 overflow-y-auto lg:left-0 lg:block border-l border-r
        border-white-500 px-4 py-6 bg-white-300">
        <h4 className="text-body-md font-medium mb-4">Getting Started</h4>
        <nav className="flex flex-col">
        {sections.map((section) => (
          <Button
            size="md"
            variant={active === section.id ? "solid" : "transparent"} // Change variant based on active state
            style={active === section.id ? "primary" : "neutral"} // Change style based on active state
            shape="rounded"
            showLeftIcon={section.showLeftIcon || false}
            showRightIcon={section.showRightIcon || false}
            iconLeftName={section.iconLeftName} // Use section's iconLeftName or null
            iconRightName={section.iconRightName} // Use section's iconRightName or null
            key={section.id}
            onClick={() => handleSelect(section.id)}
            className="justify-start" // override justify-center for the sidebar only
          >
            <span className="flex-1 truncate text-left">{section.label}</span>
          </Button>
        ))}
      </nav>
    </aside>
  );
}