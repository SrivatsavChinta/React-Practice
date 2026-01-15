import { useTheme } from "./theme-context";

export function Page() {
  const theme = useTheme();

  return (
    <div
      style={{
        backgroundColor: theme === "dark" ? "#111" : "#fff",
        color: theme === "dark" ? "#fff" : "#000",
        padding: "20px",
      }}
    >
      Page Content
    </div>
  );
}
