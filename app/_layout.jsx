import { Stack } from "expo-router";
import { Text } from "react-native";
import { UserProvider } from "./context/UserProvider";
export default function RootLayout() {
  return (
    <UserProvider>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
    </UserProvider>
    );
  }
