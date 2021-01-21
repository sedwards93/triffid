import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

//Screens
import Header from "./Shared/Header";
import PlantContainer from "./Screens/Plants/PlantContainer";

import Login from "./Components/Login";
import LoginPage from "./Screens/User/LoginPage";
import SignupPage from "./Screens/User/SignupPage";

export default function App() {
  return (
    <View style={styles.container}>
      <Header />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
  },
});
