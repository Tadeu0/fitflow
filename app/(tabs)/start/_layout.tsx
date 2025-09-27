import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen name="Home" options={{headerShown: false, }}  />
      {/* <Stack.Screen
        name="index"
        options={{ title: "Home", headerTransparent: true,  }}
      />
      <Stack.Screen name=" Home" options={{ title: "Home" }} /> */}
    </Stack>
  );
} 