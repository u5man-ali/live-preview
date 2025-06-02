import Accordion from '../accordion'

export default function buttonDemo() {
  return (
    <div className="flex justify-center items-center gap-4 mb-4 flex-wrap">
        <div className="w-full h-min flex justify-center items-center gap-4 mb-4 flex-wrap">
          <Accordion
          title="What is Tailwind CSS?"
          style="neutral"
          size="lg"
          iconName="Chevron-Down-Outline"
          >
            Tailwind CSS is a utility-first CSS framework packed with classes like flex, pt-4, text-center, and rotate-90 that can be composed to build any design.
          </Accordion>
        </div>
        <div className="w-full h-min flex justify-center items-center gap-4 mb-4 flex-wrap">
          <Accordion
          title="How can we build a responsive design with Tailwind CSS?"
          style="primary"
          size="md"
          iconName="Chevron-Down-Outline"
          >
            Tailwind CSS is a utility-first CSS framework packed with classes like flex, pt-4, text-center, and rotate-90 that can be composed to build any design.
          </Accordion>
        </div>
        <div className="w-full h-min flex justify-center items-center gap-4 mb-4 flex-wrap">
          <Accordion
          title="What is Tailwind CSS?"
          style="transparent"
          variant="transparent"
          size="sm"
          iconName="Chevron-Down-Outline"
          >
            Tailwind CSS is a utility-first CSS framework packed with classes like flex, pt-4, text-center, and rotate-90 that can be composed to build any design.
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