import { useTheme } from "./theme-context";

export function Header() {
  const theme = useTheme();

  return <h1>Current theme: {theme}</h1>;
}
