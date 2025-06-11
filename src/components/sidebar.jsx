// src/components/sidebar.jsx
import { useState } from "react";
import Button from './button';

// Sidebar structure with parent and child sections
const sections = [
  { 
    id: "introduction",
    label: "Introduction"
  },
  { 
    id: "basic-components",
    label: "Basic Components",
    children: [
      { id: "button", label: "Button", showLeftIcon: true, iconLeftName: "Arrow-Turn-Down-Right-Outline",},
      { id: "fab", label: "FAB", showLeftIcon: true, iconLeftName: "Arrow-Turn-Down-Right-Outline"},
      { id: "alert", label: "Alert", showLeftIcon: true, iconLeftName: "Arrow-Turn-Down-Right-Outline",},
      { id: "badge", label: "Badge", showLeftIcon: true, iconLeftName: "Arrow-Turn-Down-Right-Outline",},
    ]
  },
  { 
    id: "building-blocks",
    label: "Building Blocks",
    children: [
      { id: "accordion", label: "Accrodion", showLeftIcon: true, iconLeftName: "Arrow-Turn-Down-Right-Outline",},
      { id: "input", label: "Input", showLeftIcon: true, iconLeftName: "Arrow-Turn-Down-Right-Outline",},
      { id: "dropdown", label: "Dropdown", showLeftIcon: true, iconLeftName: "Arrow-Turn-Down-Right-Outline",},
      { id: "breadcrumb", label: "Breadcrumb", showLeftIcon: true, iconLeftName: "Arrow-Turn-Down-Right-Outline",}
    ]
  },
  { 
    id: "ui-blocks",
    label: "UI Blocks",
    children: [
      { id: "datepicker", label: "Date Picker", showLeftIcon: true, iconLeftName: "Arrow-Turn-Down-Right-Outline",},
    ]
  },
];

export default function Sidebar({ onSelect }) {
  const [active, setActive] = useState("introduction");
  const [expanded, setExpanded] = useState({});

  const handleSelect = (id, parentId = null) => {
    setActive(id);
    onSelect(id);

    // If parentId is passed, ensure dropdown is expanded
    //if (parentId) {
      //setExpanded(prev => ({ ...prev, [parentId]: true }));
    //}
  };

  const toggleDropdown = (id) => {
    setExpanded(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <aside className="h-screen w-full overflow-y-auto px-4 py-6">
      <nav className="flex flex-col gap-1">
        {sections.map((section) => {
          const isExpanded = expanded[section.id] || section.children?.some(child => child.id === active);
          const isActive = active === section.id;
          return (
            <div key={section.id} className="flex flex-col">
              <Button
                size="md"
                variant={isActive ? "solid" : isExpanded ? "link" : "transparent"}
                style={isActive ? "primary" : isExpanded ? "primary" : "secondary"}
                shape="rounded"
                iconSize="md"
                showLeftIcon={!!section.iconLeftName}
                showRightIcon={!!section.children}
                iconLeftName={section.iconLeftName}
                iconRightName={section.children ? (isExpanded ? "Chevron-Up-Outline" : "Chevron-Down-Outline") : null}
                onClick={() => {
                  if (section.children) {
                    toggleDropdown(section.id); // sidebar item has children, toggle dropdown
                  } else {
                    handleSelect(section.id); // sidebar item has no children, select it directly
                  }
                }}
                className="justify-start"
              >
                <span className="flex-1 truncate text-left">{section.label}</span>
              </Button>

              {section.children && (
                <div className={`overflow-hidden transition-all duration-300 ease-in-out
                ${isExpanded ? "max-h-40 py-1" : "max-h-0"} flex flex-col gap-1`}>
                    {section.children.map((child) => (
                      <Button
                        key={child.id}
                        size="sm"
                        variant={active === child.id ? "solid" : "transparent"}
                        style={active === child.id ? "primary" : "secondary"}
                        shape="rounded"
                        iconSize="sm"
                        showLeftIcon={true}
                        iconLeftName= "Arrow-Turn-Down-Right-Outline"
                        showRightIcon={false}
                        onClick={() => handleSelect(child.id, section.id)}
                        className="justify-start text-body-md text-left"
                      >
                        {child.label}
                      </Button>
                    ))}
                </div>
              )}
            </div>
          );
        })}
      </nav>
    </aside>
  );
}