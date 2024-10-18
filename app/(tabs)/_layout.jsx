import { View, Text, StyleSheet } from "react-native";
import React, { useContext } from "react";
import { Tabs } from "expo-router"; // Assuming you're using expo-router
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { Entypo } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import Feather from '@expo/vector-icons/Feather';
import { UserContext } from "../context/UserContext";
const TabLayout = () => {
  const { user, logout } = useContext(UserContext);
  return (
    <Tabs screenOptions={{
      headerShown: false,
      tabBarStyle: styles.tabBar, // Apply custom styles here
    }}>
      <Tabs.Screen
        name="Home"
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <Feather name="home" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="wishlist"
        options={{
          tabBarLabel: "wishlist",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="travel-explore" size={24} color={color} />
          ),
        }}
      />
        <Tabs.Screen
          name="notify"
          options={{
            tabBarLabel: "notify",
            tabBarIcon: ({ color }) => (
              <Entypo name="back-in-time" size={24} color={color} />
            ),
          }}
        />
          {user && user.isLoggedIn &&
            <Tabs.Screen
              name="profile"
              options={{
                tabBarLabel: "Profile",
                tabBarIcon: ({ color }) => (
                  <AntDesign name="user" size={24} color={color} />
                ),
              }}
            />
          }
    </Tabs>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    // Style the entire tab bar container here
    backgroundColor: '#fff', // Example background color
    paddingHorizontal:24,
    borderTopWidth: 1, // Add a border
    padding: 10, // Add padding for better spacing
    shadowColor: "#ccc", // Add a subtle shadow
    shadowOffset: { width: 0, height: 2 }, // Adjust shadow offset
    shadowOpacity: 0.2, // Control shadow intensity
    shadowRadius: 4, // Define shadow blur radius
  },
});

export default TabLayout;
