import { Switch } from "@chakra-ui/react";
import { useToggleStore } from "../../../store/toggleStore";
import { useEffect } from "react";

export const ToggleNotifications = () => {
  const { notifications, setNotifications } = useToggleStore();

  useEffect(() => {
    console.log("Triggered Notifications");
  }, [notifications]);

  return (
    <Switch.Root
      checked={notifications}
      onCheckedChange={({ checked }) => setNotifications(checked)}
    >
      <Switch.HiddenInput />
      <Switch.Control>
        <Switch.Thumb />
      </Switch.Control>
      <Switch.Label />
    </Switch.Root>
  );
};
