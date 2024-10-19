import { Link, router } from "expo-router";
import { Button, FlatList, Image, StyleSheet, Text, View } from "react-native";
import Screen1 from "./Screen1";
import { UserProvider } from "./context/UserProvider";
export default function App() {
  return (
    
      <UserProvider>
        <View style={styles.container}>
          {/* <Button title='Go to home' onPress={() => router.push("home")} /> */}
          {/* <Button title='Go to home' onPress={() => router.push("home")} /> */}
          <Screen1 />
        </View>
      </UserProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
