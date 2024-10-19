import { Stack } from "expo-router";
import { Text } from "react-native";
import { UserProvider } from "./context/UserProvider";import { Provider } from "react-redux";
import store from "./redux/store/index.js";
export default function RootLayout() {
  return (
    <Provider store={store}>
    <UserProvider>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
    </UserProvider>
    </Provider>
    );
  }
