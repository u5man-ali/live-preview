import Switch from "../components/switch";

export default function SwitchDemo() {
  return (
    <div className="p-4 space-y-4">
      <Switch
        id="notif"
        name="notifications"
        label="Enable Notifications"
        checked={true}
        onChange={(value) => console.log("Switch is now:", value ? "On" : "Off")}
      />
        <Switch
        id="notif"
        name="notifications"
        label="Disabled Switch"
        disabled
        checked={false}
        onChange={(value) => console.log("Switch is now:", value ? "On" : "Off")}
      />
      <Switch
        id="mode"
        name="Mode"
        label="Select Mode"
        checked={false}
      />
    </div>
  );
}