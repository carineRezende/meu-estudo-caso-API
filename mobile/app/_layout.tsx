import { Stack } from "expo-router";
import { PaperProvider, DefaultTheme } from "react-native-paper";
import { useEffect } from "react";
import { StatusBar } from "react-native";

// Tema global claro com azul
const darkTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "#0d1b2a",

    surface: "#1b263b",

    primary: "#415a77",

    secondary: "#f77f00",

    warning: "#fcbf49",

    text: "#e0e1dd",
    onSurface: "#e0e1dd",
    onPrimary: "#fff",
  },
};

export default function RootLayout() {
  useEffect(() => {
    StatusBar.setBarStyle("light-content");
    StatusBar.setBackgroundColor("#1b263b");
  }, []);

  return (
    <PaperProvider theme={darkTheme}>
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: "#1b263b" },   // cor primaria
          headerTintColor: "#f77f00",                   // texto claro
          contentStyle: { backgroundColor: "#0d1b2a" }, // fundo
        }}
      >
        <Stack.Screen
          name="index"
          options={{ 
            title: "Gerenciador de Produtos", 
          }}
        />
        <Stack.Screen
          name="produtos/index"
          options={{ title: "Lista de Produtos" }}
        />
        <Stack.Screen
          name="produtos/novo"
          options={{ title: "Novo Produto" }}
        />
        <Stack.Screen
          name="produtos/[id]"
          options={{ title: "Editar Produto" }}
        />
      </Stack>
    </PaperProvider>
  );
}