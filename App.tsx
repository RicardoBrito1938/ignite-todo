import { extendTheme, NativeBaseProvider } from "native-base";
import { StatusBar } from "react-native";
import Home from "./src/screens/Home";

export default function App() {
  const newColorTheme = {
    background: "#454545",
    gray: {
      100: "#F2F2F2",
      200: "#D9D9D9",
      300: "#808080",
      400: "#333333",
      500: "#262626",
      600: "#1A1A1A",
      700: "#0D0D0D"
    },
    purple: "#8284FA",
    purpleDark: " #5E60CE",
    blue: "#4EA8DE",
    danger: "#E25858",
    blueDark: "#1E6F9F"
  };

  const theme = extendTheme({ colors: newColorTheme });

  return (
    <NativeBaseProvider theme={theme}>
      <StatusBar translucent />
      <Home />
    </NativeBaseProvider>
  );
}
