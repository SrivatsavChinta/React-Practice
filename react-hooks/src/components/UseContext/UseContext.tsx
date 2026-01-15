import React from "react";
import { ThemeProvider } from "./ThemeProvider";
import { Header } from "./Header";
import { Page } from "./Page";

export const UseContext = () => {
  return (
    <ThemeProvider>
      <Header />
      <Page />
    </ThemeProvider>
  );
};
