import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen name="Home" options={{headerShown: false, }}  />
      {/* <Stack.Screen name="Home" options={{headerShown: false, }}  /> */}
    </Stack>
  );
} 