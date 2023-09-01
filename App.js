import React from "react";
import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import {
  useFonts as useRoboto,
  Roboto_400Regular,
} from "@expo-google-fonts/roboto";
import { Navigation } from "./src/infrastructure/navigation/index.js";
import { theme } from "./src/infrastructure/theme/index.js";
import { NumberContextProvider } from "./src/services/NumberContext.js";

export default function App() {
  const [robotoLoaded] = useRoboto({ Roboto_400Regular });

  if (!robotoLoaded ) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <NumberContextProvider>
          <Navigation/>
          </NumberContextProvider>
      </ThemeProvider>
      <StatusBar style="auto" />
    </>
  );
}
