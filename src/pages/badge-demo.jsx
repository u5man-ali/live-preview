import { useState } from "react";
import Badge from '../components/badge';

import CircleSmallFilled from '../icons/Circle-Small-Filled.svg?react'
import Dismiss from '../icons/Dismiss-Filled.svg?react'

export default function BadgeDemo() {
  return (
    <div className="flex justify-center items-center gap-4 mb-4 flex-wrap ">
        <div className="w-full flex justify-center items-start gap-2 mb-4 flex-wrap">
        <h1 className="w-full h-min text-body-xxl text-neutral-default font-bold border-b border-neutral-regular py-2 mb-4">DC Badge Component</h1>
        <p className="w-full h-min text-body-md text-neutral-hovered font-normal">The DC Badge is a flexible, fully responsive UI element built with Tailwind CSS, designed for modern interfaces that prioritize usability and visual consistency. Whether you're enhancing a call-to-action, guiding a form submission, or improving navigation clarity, this component provides adaptable styling, seamless responsiveness, and consistent behavior across devices. With support for various styles, sizes, shapes, and icon placements, the badge integrates smoothly into any design system.</p>
        <p className="w-full h-min text-body-md text-neutral-hovered font-normal mb-4 ">Explore the options below to see how easily the DC Badge fits into your Tailwind-powered workflows.</p>
        <h3 className="w-full h-min text-body-lg text-neutral-default font-semibold">Badge</h3>
        <p className="w-full h-min text-body-md text-neutral-hovered font-normal mb-4">This is the base version of the DC Badge. It features a sleek layout, a primary color scheme, and an elegant gradient effect, along with a muted, disabled version for non-interactive states. Smooth hover and active animations enhance the interaction experience. This version is suitable for dashboards, toolbars, forms, and more.</p>
        <div className="w-full border border-neutral-regular rounded-curve-xl justify-center items-center px-6 py-8 flex flex-wrap gap-4 mb-4">
          <Badge
          size="md"
          style="primary"
          variant="filled"
          shape="rounded"
          iconSize="md"
          disabled={false}
          iconLeft={CircleSmallFilled}
          iconRight={Dismiss}
          >
          Primary Filled
          </Badge>
        </div>
        <h3 className="w-full h-min text-body-lg text-neutral-default font-semibold">Badge Style Variations</h3>
        <p className="w-full h-min text-body-md text-neutral-hovered font-normal">DC Badge includes a variety of visual styles to match different interaction needs:</p>
        <p className="w-full h-min text-body-md text-neutral-hovered font-normal">
        💠 <strong>Solid:</strong> For high-emphasis actions like primary CTAs.<br></br>
        💠 <strong>Gradient:</strong> Adds a dynamic visual flair, ideal for modern UIs.<br></br>
        💠 <strong>Outline:</strong> Great for secondary actions where visual balance is key.<br></br>
        💠 <strong>Transparent:</strong> Blends with the background—perfect for minimal or embedded UIs.<br></br>
        💠 <strong>Hyperlink:</strong> Styled like a traditional link but with badge functionality for seamless integration in content-rich areas.</p>
        <p className="w-full h-min text-body-md text-neutral-hovered font-normal mb-4">Each style is built with consistency and accessibility in mind, ensuring that your design remains clean and intuitive.</p>
        <div className="w-full border border-neutral-regular rounded-curve-xl justify-center items-center px-6 py-8 flex flex-wrap gap-4 mb-4">
          <Badge
          size="md"
          style="primary"
          variant="filled"
          shape="rounded"
          iconSize="md"
          >
          Gradient Badge
          </Badge>
          <Badge
          size="md"
          style="primary"
          variant="filled"
          shape="rounded"
          iconSize="md"
          >
          Solid Badge
          </Badge>
          <Badge
          size="md"
          style="primary"
          variant="outline"
          shape="rounded"
          iconSize="md"
          >
          Outline Badge
          </Badge>
          <Badge
          size="md"
          style="primary"
          variant="transparent"
          shape="rounded"
          iconSize="md"
          >
          Transparent Badge
          </Badge>
          <Badge
          size="md"
          style="primary"
          variant="link"
          shape="rounded"
          iconSize="md"
          >
          Hyperlink
          </Badge>
        </div>
        <h3 className="w-full h-min text-body-lg text-neutral-default font-semibold">Badges With Icons</h3>
        <p className="w-full h-min text-body-md text-neutral-default font-normal">Badges can include left or right icons, enhancing clarity and visual meaning. Common examples include:</p>
        <p className="w-full h-min text-body-md text-neutral-default font-normal">
        💠 “Learn More” with a right arrow<br></br>
        💠 “Documentation” with a book icon<br></br>
        💠 “Upload Files” with a cloud or upload symbol<br></br>
        💠 “Continue with Google” with a branded icon</p>
        <p className="w-full h-min text-body-md text-neutral-default font-normal mb-4">Icons can be customized in size and style, and you can toggle their presence based on your layout needs.</p>
        <h3 className="w-full h-min text-body-lg text-neutral-default font-semibold">Badge Color Variations</h3>
        <p className="w-full h-min text-body-md text-neutral-hovered font-normal">The DC Badge supports contextual color schemes to communicate intent:</p>
        <p className="w-full h-min text-body-md text-neutral-hovered font-normal">
        💠 <strong>Primary:</strong> Main actions users should focus on<br></br>
        💠 <strong>Secondary:</strong> Default for utility or balanced actions<br></br>
        💠 <strong>Success:</strong> Positive actions like “Save” or “Submit”<br></br>
        💠 <strong>Error:</strong> Alerts or destructive actions like “Delete”<br></br>
        💠 <strong>Warning:</strong> Cautionary actions such as “Proceed with Risk”<br></br>
        💠 <strong>Info:</strong> Informational badges like “Details” or “View Logs”</p>
        <p className="w-full h-min text-body-md text-neutral-hovered font-normal mb-4">Each color option is tuned for accessibility and clarity, making it easy to signal different types of actions.</p>
        <div className="w-full border border-neutral-regular rounded-curve-xl justify-center items-center px-6 py-8 flex flex-wrap gap-4 mb-4">
          <Badge
          size="md"
          style="primary"
          variant="filled"
          shape="rounded"
          iconSize="md"
          >
          Primary Brand Color
          </Badge>
          <Badge
          size="md"
          style="secondary"
          variant="filled"
          shape="rounded"
          iconSize="md"
          >
          Secondary Color
          </Badge>
          <Badge
          size="md"
          style="success"
          variant="filled"
          shape="rounded"
          iconSize="md"
          >
          Success Color
          </Badge>
          <Badge
          size="md"
          style="error"
          variant="filled"
          shape="rounded"
          iconSize="md"
          >
          Error Color
          </Badge>
          <Badge
          size="md"
          style="warning"
          variant="filled"
          shape="rounded"
          iconSize="md"
          >
          Warning Color
          </Badge>
          <Badge
          size="md"
          style="info"
          variant="filled"
          shape="rounded"
          iconSize="md"
          >
          Info Color
          </Badge>
        </div>
        <h3 className="w-full h-min text-body-lg text-neutral-default font-semibold">Badge Shape Variations</h3>
        <p className="w-full h-min text-body-md text-neutral-hovered font-normal">Chosse from multiple shapes to align with your UI's tone and purpose:</p>
        <p className="w-full h-min text-body-md text-neutral-hovered font-normal">
        💠 <strong>Rounded:</strong> Soft corners for a modern, friendly feel<br></br>
        💠 <strong>Square:</strong> Straight edges for minimal, clean designs<br></br>
        💠 <strong>Pill:</strong> Fully rounded for high-emphasis or mobile-friendly elements</p>
        <p className="w-full h-min text-body-md text-neutral-hovered font-normal mb-4">This flexibility lets you match the design language of your app or brand</p>
        <div className="w-full border border-neutral-regular rounded-curve-xl justify-center items-center px-6 py-8 flex flex-wrap gap-4 mb-4">
          <Badge
          size="md"
          style="primary"
          variant="filled"
          shape="rounded"
          iconSize="md"
          >
          Rounded Corners
          </Badge>
          <Badge
          size="md"
          style="primary"
          variant="filled"
          shape="square"
          iconSize="md"
          >
          Square Badge
          </Badge>
          <Badge
          size="md"
          style="primary"
          variant="filled"
          shape="pill"
          iconSize="md"
          >
          Circular Pill
          </Badge>
        </div>
        <h3 className="w-full h-min text-body-lg text-neutral-default font-semibold">Badge Size Variations</h3>
        <p className="w-full h-min text-body-md text-neutral-hovered font-normal">DC Badge supports three standard sizes:</p>
        <p className="w-full h-min text-body-md text-neutral-hovered font-normal">
        💠 <strong>Small:</strong> Compact use cases like tables, lists, or toolbars<br></br>
        💠 <strong>Medium:</strong> Default size for most badges—balanced and readable<br></br>
        💠 <strong>Large:</strong> Ideal for mobile UIs, prominent CTAs, or form submissions</p>
        <p className="w-full h-min text-body-md text-neutral-hovered font-normal mb-4">This flexibility lets you match the design language of your app or brand</p>
        <div className="w-full border border-neutral-regular rounded-curve-xl justify-center items-center px-6 py-8 flex flex-wrap gap-4 mb-4">
          <Badge
          size="sm"
          style="secondary"
          variant="filled"
          shape="rounded"
          iconSize="sm"
          >
          Small Badge
          </Badge>
          <Badge
          size="md"
          style="secondary"
          variant="filled"
          shape="rounded"
          iconSize="md"
          >
          Medium Badge
          </Badge>
          <Badge
          size="lg"
          style="secondary"
          variant="filled"
          shape="rounded"
          iconSize="lg"
          >
          Large Badge
          </Badge>
        </div>
      </div>
    </div>
    
  );
}