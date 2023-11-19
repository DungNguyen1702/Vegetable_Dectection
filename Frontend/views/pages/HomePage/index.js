import { StatusBar, StyleSheet, View, Text } from "react-native";
import Header from "../../../components/header/header";
import * as React from "react";

export default function HomePage() {
    
    return (
        <View style={{ flex: 1 }}>
          <StatusBar backgroundColor="#5AA162" />
          <Header />
        </View>
      );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
    },
});