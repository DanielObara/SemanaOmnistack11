import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
export default function App() {
  return (
    <View style={styles.container}>
      <Text>oI!! Clique em mim por favor!!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
