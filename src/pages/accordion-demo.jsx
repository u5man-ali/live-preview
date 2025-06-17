import Accordion from '../components/accordion'

export default function AccordionDemo() {
  return (
    <div className="flex justify-center items-center gap-4 mb-4 flex-wrap">
        <div className="w-full h-min flex justify-center items-center gap-2 mb-4 flex-wrap">
        <h1 className="w-full h-min text-body-xxl text-neutral-default font-bold border-b border-neutral-regular py-2 mb-4">DC Accordion Component</h1>
        <p className="w-full h-min text-body-md text-neutral-hovered font-normal">The DC Accordion is a flexible, responsive UI component built with Tailwind CSS, designed to show and hide content efficiently within limited screen real estate. Commonly used in FAQ sections, content-heavy dashboards, filter panels, and forms, accordions improve UX by reducing clutter and giving users control over what to read or interact with.</p>
        <p className="w-full h-min text-body-md text-neutral-hovered font-normal">With support for multiple styles, size variations, and an intuitive expand/collapse behavior, the DC Accordion delivers clarity, consistency, and a polished experience across all screen sizes.<br></br>
        Explore the examples below to see how it adapts to various design needs in your Tailwind-based projects.</p>
        <h3 className="w-full h-min text-body-lg text-neutral-default font-semibold">Accordion</h3>
        <p className="w-full h-min text-body-md text-neutral-hovered font-normal mb-4">This is the base version of the DC Accordion. It features a trigger (header or title) and a collapsible content area. Interaction is keyboard-accessible and supports smooth transitions between collapsed and expanded states. The base accordion uses a neutral style and medium size by default—ideal for general use in settings pages, vertical navigation, or sectioned content blocks.</p>
        <div className="w-full border border-neutral-regular rounded-curve-xl justify-center items-center px-6 py-8 flex flex-wrap gap-4 mb-4">
          <Accordion
          title="What is DezineCrafts UI Kit?"
          style="primary"
          size="sm"
          iconName="Chevron-Down-Outline"
          className="max-w-[500px]"
          >
            DezineCrafts UI Kit is a modern, Tailwind CSS–based design system that provides reusable and customizable components like buttons, dropdowns, forms, and layout blocks to help developers and designers build beautiful web interfaces faster.
          </Accordion>
        </div>
        </div>
        <div className="w-full h-min flex justify-center items-center gap-4 mb-4 flex-wrap">
          <Accordion
          title="Is DezineCrafts UI Kit compatible with React or other frameworks?"
          style="primary"
          size="md"
          iconName="Chevron-Down-Outline"
          >
            Yes, DezineCrafts is built with React and Tailwind CSS in mind. Each component is provided as a JSX snippet and can be seamlessly integrated into any React project. The utility-first CSS approach also makes it easy to adapt the UI kit to Vue, Next.js, or even plain HTML with Tailwind.
          </Accordion>
        </div>
        <div className="w-full h-min flex justify-center items-center gap-4 mb-4 flex-wrap">
          <Accordion
          title="Can I customize the components in DezineCrafts UI Kit?"
          style="transparent"
          variant="transparent"
          size="sm"
          iconName="Chevron-Down-Outline"
          >
            Absolutely! Every component in the UI kit is designed with customization in mind. You can adjust styles using Tailwind classes, swap icons, change variants (like primary, neutral, etc.), and override props to match your branding and layout requirements.
          </Accordion>
        </div>
        <div className="w-full h-min flex justify-center items-center gap-4 mb-4 flex-wrap">
          <Accordion
          title="Does DezineCrafts support dark mode or accessibility features?"
          style="transparent"
          variant="transparent"
          size="lg"
          iconName="Chevron-Down-Outline"
          >
            Yes, the components follow accessible design patterns and are keyboard-friendly by default. While dark mode support is not fully styled out-of-the-box, the kit is structured to make toggling themes with Tailwind’s dark: variants simple and scalable.
          </Accordion>
        </div>
        <div className="relative w-full h-min bg-white overflow-hidden">
        {/* Outer crescent */}
        <div className="absolute w-full top-0 left-0 h-full border-blue-500 border-l-4 rounded-l-lg z-0" />
        {/* Inner cutout to create crescent shape */}
        <div className="absolute top-0 w-full h-full bg-white rounded-r-full z-10" />
        <p className="relative z-20 p-4">Crescent Border</p>
        </div>
    </div>
  );
}