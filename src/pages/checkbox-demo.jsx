import { useState } from "react";
import Checkbox from "../components/checkbox";

export default function CheckboxDemo() {
  const [allChecked, setAllChecked] = useState(false);
  const [indeterminate, setIndeterminate] = useState(true);

  return (
    <div className="space-y-4 p-4">
      <Checkbox
        id="selectAll"
        name="selectAll"
        label="Select All Permissions"
        checked={allChecked}
        indeterminate={indeterminate}
        onChange={(value) => {
          setAllChecked(value);
          setIndeterminate(false); // Clear indeterminate on user toggle
        }}
        description="Controls all individual permissions below"
      />

      <Checkbox
        id="read"
        name="permissions"
        label="Read Access"
        checked={true}
        onChange={() => {}}
      />
      <Checkbox
        id="write"
        name="permissions"
        label="Write Access"
        checked={false}
        onChange={() => {}}
      />
    </div>
  );
}