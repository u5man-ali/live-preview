import { useState } from "react";
import Button from '../button'
import IconLeft from '../../icons/Placeholder-Outline.svg?react'
import IconRight from '../../icons/Arrow-Enter-Left-Outline.svg?react'

export default function buttonDemo() {
  return (
    <div className="flex justify-center items-center gap-4 mb-4 flex-wrap">
        <div className="w-full flex justify-center items-center gap-4 mb-4 flex-wrap">
        <h1 className="w-full h-min text-body-xxl font-bold border-b border-white-600 py-2">DC Button Component</h1>
        <p className="w-full h-min text-body-md font-normal mb-4">Build powerful CTAs with our Tailwind CSS-powered button component. Designed to be flexible and modern, it includes support for icons, multiple styles like primary, neutral, outline, success, and error, and works seamlessly across different screen sizes.
Whether you're crafting call-to-actions, form submissions, or navigation triggers, this component adapts to your needs with clean, scalable styling. Explore the examples below to see how easily it integrates into your Tailwind-based UI projects.</p>
        <h3 className="w-full h-min text-body-lg font-semibold">Button</h3>
        <p className="w-full h-min text-body-md font-normal">The example below shows a basic button with neutral color and gradient style. It features hover and active states for better interactive experience.</p>
        <div className="w-full border border-white-600 rounded-curve-xl justify-center items-center px-6 py-8 flex gap-4">
          <Button
          size="md"
          style="neutral"
          variant="gradient"
          shape="rounded"
          iconSize="md"
          disabled={false}
          showLeftIcon={false}
          showRightIcon={false}
          iconLeftName="Placeholder-Outline"
          iconRightName="Placeholder-Filled"
          >
          Basic Button
          </Button>
        </div>
        <h3 className="w-full h-min text-body-lg font-semibold">Button Style Variations</h3>
        <p className="w-full h-min text-body-md font-normal">The example below shows a basic button with primary brand color variation. It features hover and focus states for better interactive experience.</p>
        <div className="w-full border border-white-600 rounded-curve-xl justify-center items-center px-6 py-8 flex gap-4">
          <Button
          size="md"
          style="neutral"
          variant="gradient"
          shape="rounded"
          iconSize="md"
          showLeftIcon={false}
          showRightIcon={false}
          iconLeftName="Placeholder-Outline"
          iconRightName="Placeholder-Filled"
          >
          Gradient Button
          </Button>
          <Button
          size="md"
          style="neutral"
          variant="solid"
          shape="rounded"
          iconSize="md"
          showLeftIcon={false}
          showRightIcon={false}
          iconLeftName="Placeholder-Outline"
          iconRightName="Placeholder-Filled"
          >
          Solid Button
          </Button>
          <Button
          size="md"
          style="neutral"
          variant="outline"
          shape="rounded"
          iconSize="md"
          showLeftIcon={false}
          showRightIcon={false}
          iconLeftName="Placeholder-Outline"
          iconRightName="Placeholder-Filled"
          >
          Outline Button
          </Button>
          <Button
          size="md"
          style="neutral"
          variant="transparent"
          shape="rounded"
          iconSize="md"
          showLeftIcon={false}
          showRightIcon={false}
          iconLeftName="Placeholder-Outline"
          iconRightName="Placeholder-Filled"
          >
          Transparent Button
          </Button>
          <Button
          size="md"
          style="info"
          variant="link"
          shape="rounded"
          iconSize="md"
          showLeftIcon={false}
          showRightIcon={false}
          iconLeftName="Placeholder-Outline"
          iconRightName="Placeholder-Filled"
          >
          Hyperlink
          </Button>
        </div>
        <h3 className="w-full h-min text-body-lg font-semibold">Button Color Variations</h3>
        <p className="w-full h-min text-body-md font-normal">The example below shows a basic button with primary brand color variation. It features hover and focus states for better interactive experience.</p>
        <div className="w-full border border-white-600 rounded-curve-xl justify-center items-center px-6 py-8 flex gap-4">
          <Button
          size="md"
          style="neutral"
          variant="gradient"
          shape="rounded"
          iconSize="md"
          showLeftIcon={false}
          showRightIcon={false}
          iconLeftName="Placeholder-Outline"
          iconRightName="Placeholder-Filled"
          >
          Neutral Color
          </Button>
          <Button
          size="md"
          style="primary"
          variant="gradient"
          shape="rounded"
          iconSize="md"
          showLeftIcon={false}
          showRightIcon={false}
          iconLeftName="Placeholder-Outline"
          iconRightName="Placeholder-Filled"
          >
          Primary Brand Color
          </Button>
          <Button
          size="md"
          style="success"
          variant="gradient"
          shape="rounded"
          iconSize="md"
          showLeftIcon={false}
          showRightIcon={false}
          iconLeftName="Placeholder-Outline"
          iconRightName="Placeholder-Filled"
          >
          Success Color
          </Button>
          <Button
          size="md"
          style="error"
          variant="gradient"
          shape="rounded"
          iconSize="md"
          showLeftIcon={false}
          showRightIcon={false}
          iconLeftName="Placeholder-Outline"
          iconRightName="Placeholder-Filled"
          >
          Error Color
          </Button>
          <Button
          size="md"
          style="warning"
          variant="gradient"
          shape="rounded"
          iconSize="md"
          showLeftIcon={false}
          showRightIcon={false}
          iconLeftName="Placeholder-Outline"
          iconRightName="Placeholder-Filled"
          >
          Warning Color
          </Button>
          <Button
          size="md"
          style="info"
          variant="gradient"
          shape="rounded"
          iconSize="md"
          showLeftIcon={false}
          showRightIcon={false}
          iconLeftName="Placeholder-Outline"
          iconRightName="Placeholder-Filled"
          >
          Info Color
          </Button>
        </div>
        <h3 className="w-full h-min text-body-lg font-semibold">Button Shape Variations</h3>
        <p className="w-full h-min text-body-md font-normal">The example below shows a basic button with primary brand color variation. It features hover and focus states for better interactive experience.</p>
        <div className="w-full border border-white-600 rounded-curve-xl justify-center items-center px-6 py-8 flex gap-4">
          <Button
          size="md"
          style="neutral"
          variant="solid"
          shape="rounded"
          iconSize="md"
          showLeftIcon={false}
          showRightIcon={false}
          iconLeftName="Placeholder-Outline"
          iconRightName="Placeholder-Filled"
          >
          Rounded Corners
          </Button>
          <Button
          size="md"
          style="neutral"
          variant="solid"
          shape="square"
          iconSize="md"
          showLeftIcon={false}
          showRightIcon={false}
          iconLeftName="Placeholder-Outline"
          iconRightName="Placeholder-Filled"
          >
          Square Button
          </Button>
          <Button
          size="md"
          style="neutral"
          variant="solid"
          shape="pill"
          iconSize="md"
          showLeftIcon={false}
          showRightIcon={false}
          iconLeftName="Placeholder-Outline"
          iconRightName="Placeholder-Filled"
          >
          Circular Pill
          </Button>
        </div>
        <h3 className="w-full h-min text-body-lg font-semibold">Button Size Variations</h3>
        <p className="w-full h-min text-body-md font-normal">The example below shows a basic button with primary brand color variation. It features hover and focus states for better interactive experience.</p>
        <div className="w-full border border-white-600 rounded-curve-xl justify-center items-center px-6 py-8 flex gap-4">
          <Button
          size="sm"
          style="neutral"
          variant="gradient"
          shape="rounded"
          iconSize="sm"
          showLeftIcon={false}
          showRightIcon={false}
          iconLeftName="Placeholder-Outline"
          iconRightName="Placeholder-Filled"
          >
          Small Button
          </Button>
          <Button
          size="md"
          style="neutral"
          variant="gradient"
          shape="rounded"
          iconSize="md"
          showLeftIcon={false}
          showRightIcon={false}
          iconLeftName="Placeholder-Outline"
          iconRightName="Placeholder-Filled"
          >
          Medium Button
          </Button>
          <Button
          size="lg"
          style="neutral"
          variant="gradient"
          shape="rounded"
          iconSize="lg"
          showLeftIcon={false}
          showRightIcon={false}
          iconLeftName="Placeholder-Outline"
          iconRightName="Placeholder-Filled"
          >
          Large Button
          </Button>
        </div>
        <h3 className="w-full h-min text-body-lg font-semibold">Buttons With Icons</h3>
        <p className="w-full h-min text-body-md font-normal">The example below shows a basic button with primary brand color variation. It features hover and focus states for better interactive experience.</p>
        <div className="w-full border border-white-600 rounded-curve-xl justify-center items-center px-6 py-8 flex gap-4">
          <Button
          size="sm"
          style="info"
          variant="link"
          shape="rounded"
          iconSize="sm"
          showLeftIcon={false}
          showRightIcon={true}
          iconLeftName="Placeholder-Outline"
          iconRightName="Chevron-Right-Outline"
          >
          Learn More
          </Button>
          <Button
          size="md"
          style="neutral"
          variant="gradient"
          shape="rounded"
          iconSize="md"
          showLeftIcon={true}
          showRightIcon={true}
          iconLeftName="Book-Default-Filled"
          iconRightName="Chevron-Right-Filled"
          >
          Read Documentation
          </Button>
          <Button
          size="md"
          style="neutral"
          variant="solid"
          shape="rounded"
          iconSize="md"
          showLeftIcon={true}
          showRightIcon={false}
          iconLeftName="Cloud-Arrow-Up-Outline"
          iconRightName="Placeholder-Filled"
          >
          Uploade Files
          </Button>
          <Button
          size="md"
          style="neutral"
          variant="outline"
          shape="rounded"
          iconSize="md"
          showLeftIcon={true}
          showRightIcon={false}
          iconLeftName="google"
          iconRightName="Placeholder-Filled"
          >
          Continue with Google
          </Button>
        </div>
      </div>
    </div>
    
  );
}