import { useState } from "react";
import Tabs from '../components/tabs'

const section1 = [
    {id: "tab1", title: "Tab One"},
    {id: "tab2", title: "Tab Two"},
    {id: "tab3", title: "Tab Three"},
    {id: "tab4", title: "Tab Four"},
    {id: "tab5", title: "Tab Five"}
];
const section2 = [
    {id: "tab1", title: "Tab One"},
    {id: "tab2", title: "Tab Two"},
    {id: "tab3", title: "Tab Three"},
    {id: "tab4", title: "Tab Four"},
    {id: "tab5", title: "Tab Five"}
];
const section3 = [
    {id: "tab1", title: "Tab One"},
    {id: "tab2", title: "Tab Two"},
    {id: "tab3", title: "Tab Three"},
    {id: "tab4", title: "Tab Four"},
    {id: "tab5", title: "Tab Five"}
];

export default function TabDemo() {
    const [section1Tab, setSection1Tab] = useState(section1[0].id);
    const [section2Tab, setSection2Tab] = useState(section1[0].id);
    const [section3Tab, setSection3Tab] = useState(section1[0].id);
  return (
    <div className="flex justify-center items-center gap-4 mb-4 flex-wrap text-neutral-hovered">
        <div className="w-full flex justify-center items-center gap-4 mb-4 flex-wrap">
        <h1 className="w-full h-min text-body-xxl text-neutral-default font-bold border-b border-neutral-regular py-2">Tabs Component</h1>
        <p className="w-full h-min text-body-md text-neutral-hovered font-normal">The DezineCrafts Tabs component is a horizontally stacked, lightweight navigation UI designed for segmenting and switching between different content views—all without reloading the page. Built with Tailwind CSS utility classes and React state logic, it delivers an accessible, flexible tab-switching experience while remaining highly customizable for product, dashboard, or documentation use cases.</p>
        <p className="w-full h-min text-body-md text-neutral-hovered font-normal">
            With built-in support for dynamic tab counts, sizing presets (sm, md, lg), and configurable visual styles (primary, neutral, transparent), this Tabs component ensures seamless integration into various interface themes. Its optional icon support allows you to reinforce context visually without cluttering the UI.
        </p>
        <div className="justify-center ">
            <Tabs
            tabs={section1}
            size="sm"
            style="primary"
            defaultActive={0}
            onSelect={(id) => setSection1Tab(id)}
            tabClassName=""
            />
        </div>
        <div className="w-full flex justify-center my-2">
            {section1Tab === "tab1" && 
            <div> 
                Content from Tab1
            </div>}
            {section1Tab === "tab2" && 
            <div> 
                Content from Tab2
            </div>}
            {section1Tab === "tab3" && 
            <div>
                Content from Tab3
            </div>}
            {section1Tab === "tab4" &&
            <div>
                Content from Tab4
            </div>}
            {section1Tab === "tab5" && 
            <div>
                Content from Tab5
            </div>}
        </div>
        <div className="justify-center ">
            <Tabs
            tabs={section2}
            size="sm"
            style="neutral"
            defaultActive={0}
            onSelect={(id) => setSection2Tab(id)}
            tabClassName=""
            />
        </div>
        <div className="w-full flex justify-center my-2">
            {section2Tab === "tab1" && 
            <div> 
                Content from Tab1
            </div>}
            {section2Tab === "tab2" && 
            <div> 
                Content from Tab2
            </div>}
            {section2Tab === "tab3" && 
            <div>
                Content from Tab3
            </div>}
            {section2Tab === "tab4" &&
            <div>
                Content from Tab4
            </div>}
            {section2Tab === "tab5" && 
            <div>
                Content from Tab5
            </div>}
        </div>
        <div className="w-full ">
            <Tabs
            tabs={section3}
            size="md"
            style="transparent"
            defaultActive={0}
            onSelect={(id) => setSection3Tab(id)}
            tabClassName="flex-1"
            />
        </div>
        <div className="my-2">
            {section3Tab === "tab1" && 
            <div> 
                Content from Tab1
            </div>}
            {section3Tab === "tab2" && 
            <div> 
                Content from Tab2
            </div>}
            {section3Tab === "tab3" && 
            <div>
                Content from Tab3
            </div>}
            {section3Tab === "tab4" &&
            <div>
                Content from Tab4
            </div>}
            {section3Tab === "tab5" && 
            <div>
                Content from Tab5
            </div>}
        </div>
        </div>
    </div>
  );
}