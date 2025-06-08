// src/components/content.jsx
import ButtonDemo from './pages/button-demo';
import Introduction from './pages/introduction';
import Accordion from './pages/accordion-demo';

const componentMap = {
  button: ButtonDemo,
  introduction: Introduction,
  accordion: Accordion,
  // Add other components here as needed
};

export default function Content({ selectedPage }) {
    const ComponentToRender = componentMap[selectedPage] || (() => <div className="text-body-lg font-medium">This page is empty. Please select another component from the sidebar to view its demo.</div>);
  return (
    <main className="flex-1 mb-4">
      {/* Dynamically load component previews here based on selection */}
      {/* Example static placeholder: */}
      <div >
        <ComponentToRender />
      </div>
    </main>
  );
}