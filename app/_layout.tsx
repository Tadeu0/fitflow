import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen
        name="index"
        options={{ title: "Home", headerTransparent: true, headerShown: false }}
      />
      <Stack.Screen name="Criar" options={{ title: "Criar Conta" }} />
      <Stack.Screen name=" Home" options={{ title: "Home" }} />
    </Stack>
  );
}