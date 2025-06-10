// src/components/content.jsx
import ButtonPage from './pages/button-demo';
import Introduction from './pages/introduction';
import AccordionPage from './pages/accordion-demo';
import FABPage from './pages/fab-demo';

const componentMap = {
  button: ButtonPage,
  introduction: Introduction,
  accordion: AccordionPage,
  fab: FABPage,
  // Add other components here as needed
};

export default function Content({ selectedPage }) {
    const ComponentToRender = componentMap[selectedPage] || (() => <div className="text-body-lg text-neutral-hovered font-medium">This page is empty. Please select another component from the sidebar to view its demo.</div>);
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