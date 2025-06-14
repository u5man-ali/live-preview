import { useState } from "react";
import Badge from '../components/badge'

export default function BadgeDemo() {
  return (
    <div className="flex justify-center items-center gap-4 mb-4 flex-wrap ">
        <div className="w-full flex justify-center items-start gap-2 mb-4 flex-wrap">
        <h1 className="w-full h-min text-body-xxl text-neutral-default font-bold border-b border-neutral-regular py-2 mb-4">DC Badge Component</h1>
        <p className="w-full h-min text-body-md text-neutral-hovered font-normal">The DC Badge is a versatile, fully responsive UI element crafted with Tailwind CSS, ideal for building modern interfaces that demand clarity and performance. Whether you're designing a compelling call-to-action, form submission flow, or navigation control, this component delivers flexibility, consistency, and polish across devices and use cases.
        With support for multiple styles, shapes, sizes, and icon placements, the badge component adapts seamlessly to any UI scenario.</p>
        <p className="w-full h-min text-body-md text-neutral-hovered font-normal mb-4 ">Explore the variations below to understand its full potential and how you can integrate it effortlessly into your Tailwind-based projects.</p>
        <h3 className="w-full h-min text-body-lg text-neutral-default font-semibold">Badge</h3>
        <p className="w-full h-min text-body-md text-neutral-hovered font-normal mb-4">This is the foundational version of the DC Badge, featuring a clean layout with a primary color palette and a subtle gradient style along with it's disabled (muted) version. Interactive states like hover and active transitions provide smooth feedback to enhance user experience. It’s perfect for general use across dashboards, forms, and utility actions.</p>
        <div className="w-full border border-neutral-regular rounded-curve-xl justify-center items-center px-6 py-8 flex flex-wrap gap-4 mb-4">
          <Badge
          size="md"
          style="primary"
          variant="filled"
          shape="pill"
          iconSize="md"
          disabled={false}
          showLeftIcon={false}
          showRightIcon={false}
          iconLeft=""
          iconRight=""
          >
          Primary Badge
          </Badge>
          <Badge
          size="md"
          style="neutral"
          variant="outline"
          shape="pill"
          iconSize="md"
          disabled={false}
          showLeftIcon={true}
          showRightIcon={true}
          iconLeft="Placeholder-Outline"
          iconRight="Placeholder-Filled"
          >
          Neutral Badge
          </Badge>
        </div>
        <h3 className="w-full h-min text-body-lg text-neutral-default font-semibold">Badge Style Variations</h3>
        <p className="w-full h-min text-body-md text-neutral-hovered font-normal">DC Badge supports a rich set of visual styles to suit different interaction goals:</p>
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
          showLeftIcon={false}
          showRightIcon={false}
          iconLeft="Placeholder-Outline"
          iconRight="Placeholder-Filled"
          >
          Gradient Badge
          </Badge>
          <Badge
          size="md"
          style="primary"
          variant="filled"
          shape="rounded"
          iconSize="md"
          showLeftIcon={false}
          showRightIcon={false}
          iconLeft="Placeholder-Outline"
          iconRight="Placeholder-Filled"
          >
          Solid Badge
          </Badge>
          <Badge
          size="md"
          style="primary"
          variant="outline"
          shape="rounded"
          iconSize="md"
          showLeftIcon={false}
          showRightIcon={false}
          iconLeft="Placeholder-Outline"
          iconRight="Placeholder-Filled"
          >
          Outline Badge
          </Badge>
          <Badge
          size="md"
          style="primary"
          variant="transparent"
          shape="rounded"
          iconSize="md"
          showLeftIcon={false}
          showRightIcon={false}
          iconLeft="Placeholder-Outline"
          iconRight="Placeholder-Filled"
          >
          Transparent Badge
          </Badge>
          <Badge
          size="md"
          style="primary"
          variant="link"
          shape="rounded"
          iconSize="md"
          showLeftIcon={false}
          showRightIcon={false}
          iconLeft="Placeholder-Outline"
          iconRight="Placeholder-Filled"
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
          showLeftIcon={false}
          showRightIcon={false}
          iconLeft="Placeholder-Outline"
          iconRight="Placeholder-Filled"
          >
          Primary Brand Color
          </Badge>
          <Badge
          size="md"
          style="secondary"
          variant="filled"
          shape="rounded"
          iconSize="md"
          showLeftIcon={false}
          showRightIcon={false}
          iconLeft="Placeholder-Outline"
          iconRight="Placeholder-Filled"
          >
          Secondary Color
          </Badge>
          <Badge
          size="md"
          style="success"
          variant="filled"
          shape="rounded"
          iconSize="md"
          showLeftIcon={false}
          showRightIcon={false}
          iconLeft="Placeholder-Outline"
          iconRight="Placeholder-Filled"
          >
          Success Color
          </Badge>
          <Badge
          size="md"
          style="error"
          variant="filled"
          shape="rounded"
          iconSize="md"
          showLeftIcon={false}
          showRightIcon={false}
          iconLeft="Placeholder-Outline"
          iconRight="Placeholder-Filled"
          >
          Error Color
          </Badge>
          <Badge
          size="md"
          style="warning"
          variant="filled"
          shape="rounded"
          iconSize="md"
          showLeftIcon={false}
          showRightIcon={false}
          iconLeft="Placeholder-Outline"
          iconRight="Placeholder-Filled"
          >
          Warning Color
          </Badge>
          <Badge
          size="md"
          style="info"
          variant="filled"
          shape="rounded"
          iconSize="md"
          showLeftIcon={false}
          showRightIcon={false}
          iconLeft="Placeholder-Outline"
          iconRight="Placeholder-Filled"
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
          showLeftIcon={false}
          showRightIcon={false}
          iconLeft="Placeholder-Outline"
          iconRight="Placeholder-Filled"
          >
          Rounded Corners
          </Badge>
          <Badge
          size="md"
          style="primary"
          variant="filled"
          shape="square"
          iconSize="md"
          showLeftIcon={false}
          showRightIcon={false}
          iconLeft="Placeholder-Outline"
          iconRight="Placeholder-Filled"
          >
          Square Badge
          </Badge>
          <Badge
          size="md"
          style="primary"
          variant="filled"
          shape="pill"
          iconSize="md"
          showLeftIcon={false}
          showRightIcon={false}
          iconLeft="Placeholder-Outline"
          iconRight="Placeholder-Filled"
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
          showLeftIcon={false}
          showRightIcon={false}
          iconLeft="Placeholder-Outline"
          iconRight="Placeholder-Filled"
          >
          Small Badge
          </Badge>
          <Badge
          size="md"
          style="secondary"
          variant="filled"
          shape="rounded"
          iconSize="md"
          showLeftIcon={false}
          showRightIcon={false}
          iconLeft="Placeholder-Outline"
          iconRight="Placeholder-Filled"
          >
          Medium Badge
          </Badge>
          <Badge
          size="lg"
          style="secondary"
          variant="filled"
          shape="rounded"
          iconSize="lg"
          showLeftIcon={false}
          showRightIcon={false}
          iconLeft="Placeholder-Outline"
          iconRight="Placeholder-Filled"
          >
          Large Badge
          </Badge>
        </div>
      </div>
    </div>
    
  );
}