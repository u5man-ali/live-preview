import Button from '../components/button'

export default function Introduction() {
  return (
    <div className="flex justify-center items-center gap-4 mb-4 flex-wrap font-body">
        <div className="w-full flex justify-start items-center gap-4 mb-4 flex-wrap">
        <h1 className="w-full h-min text-body-xxl text-neutral-default font-bold border-b border-neutral-regular py-2">DezineCrafts: Ultimate UI Kit</h1>
        <h3 className="w-full h-min text-body-lg text-neutral-default font-semibold">Welcome to the DezineCrafts UI<br></br></h3>
        <p className="text-neutral-hovered mb-4">DezineCrafts is designed to empower developers and designers with a professional-grade collection of pre-built, customizable UI components built entirely with Tailwind CSS. Our goal is to help you ship beautiful, responsive, and consistent interfaces faster—without sacrificing flexibility, accessibility, or design quality.</p>
        <h3 className="w-full h-min text-body-lg text-neutral-default font-semibold ">What's Inside This Documentation</h3>
        <p className="text-neutral-hovered ">Here’s everything you’ll find in the DezineCrafts UI Kit:</p>
        <p className="text-neutral-hovered mb-4">💠 Component Code: Copy-paste Tailwind-based JSX snippets for rapid implementation.<br></br>
        💠 Component Previews: Live previews of each component in action.<br></br>
        💠 Detailed Descriptions: Feature explanations, use-case guidance, and customization options.<br></br>
        💠 Usage Instructions: Best practices for integrating components into your projects.</p>
        <h3 className="w-full h-min text-body-lg text-neutral-default font-semibold ">Overview</h3>
        <p className="text-neutral-hovered mb-4">DezineCrafts offers a rich and scalable library of modern UI components tailored for real-world use. From essential elements like Buttons, Badges, and Accordions, to advanced UI building blocks such as navigation systems, tabs, forms, and status indicators — everything is designed to be intuitive, accessible, and ready to drop into production.</p>
        <h3 className="w-full h-min text-body-lg text-neutral-default font-semibold ">Why Choose DezineCrafts</h3>
        <p className="text-neutral-hovered mb-4">💠 <strong>Build Faster</strong> <br></br> Skip redundant UI work. Our growing collection of reusable Tailwind components allows you to focus on functionality, not repetitive styling.<br></br>
        💠 <strong>Customizable by Default</strong> <br></br>Each component is made with Tailwind utility classes so you can easily tweak styles, layouts, and responsiveness to match your brand or design system.<br></br>
        💠 <strong>Responsive & Accessible</strong> <br></br>DezineCrafts components are built with mobile-first principles and follow accessibility best practices to support all users and devices.<br></br>
        💠 <strong>Designed in Figma</strong> <br></br>All components in DezineCrafts are based on a carefully structured Figma UI Kit, allowing seamless design-to-development handoff and consistent visual standards across projects.<br></br>
        💠 <strong>Rich Ecosystem</strong> (Coming Soon) <br></br>Stay tuned for advanced tooling, AI-powered design assistance to further enhance your development workflow.</p>
        <p className="text-neutral-hovered mb-4">Start exploring the library below and bring your next Tailwind project to life — beautifully, consistently, and efficiently — with DezineCrafts.</p>
        </div>
    </div>
    
  );
}