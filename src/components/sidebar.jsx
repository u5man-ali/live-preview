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
    <aside className="h-screen w-full overflow-y-auto border-white-500 px-4 py-6 bg-white-300">
        <h4 className="text-body-md font-medium mb-4">Components List</h4>
        <nav className="flex flex-col gap-1">
        {sections.map((section) => (
          <Button
            size="sm"
            variant={active === section.id ? "solid" : "transparent"} // Change variant based on active state
            style={active === section.id ? "primary" : "neutral"} // Change style based on active state
            shape="rounded"
            iconSize="sm"
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