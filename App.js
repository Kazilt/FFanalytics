import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Bchart from "./components/Bchart";
import Pchart from "./components/Pchart";
import { colors } from "./colors";
export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <Text>Open up App.js to start working on your app!</Text>
          <Bchart title="First Graph: " />
          <Pchart title="Second Graph: " />
          <Bchart title="Third Graph: " />
        </ScrollView>
        <StatusBar style="auto" />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.grey,
    alignItems: "center",
    justifyContent: "center",
  },
});
