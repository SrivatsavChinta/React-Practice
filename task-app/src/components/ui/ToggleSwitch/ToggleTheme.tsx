import { Switch } from "@chakra-ui/react";
import { useToggleStore } from "../../../store/toggleStore";
import { useEffect } from "react";

export const ToggleTheme = () => {
  const { toggle, setToggle } = useToggleStore();

  useEffect(() => {
    console.log("Triggered Theme");
  }, [toggle]);

  return (
    <Switch.Root
      checked={toggle}
      onCheckedChange={({ checked }) => setToggle(checked)}
    >
      <Switch.HiddenInput />
      <Switch.Control>
        <Switch.Thumb />
      </Switch.Control>
      <Switch.Label />
    </Switch.Root>
  );
};
