import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Bchart from "./components/Bchart";
import Pchart from "./components/Pchart";
import { colors } from "./colors";
import { doc, getFirestore, onSnapshot } from "firebase/firestore";
import { FireApp } from "./Firebase";
import { useEffect, useState } from "react";
export default function App() {
  const db = getFirestore(FireApp);

  const [bought_stats, set_bought_stats] = useState({});
  const [fav_stats, set_fav_stats] = useState({});
  const [votes_stats, set_votes_stats] = useState({});

  useEffect(() => {
    const usub_bought = onSnapshot(doc(db, "stats", "bought"), (doc) => {
      const data = doc.data();
      set_bought_stats(data);
    });
    const usub_fav = onSnapshot(doc(db, "stats", "favorites"), (doc) => {
      const data = doc.data();
      set_fav_stats(data);
    });
    const usub_votes = onSnapshot(doc(db, "stats", "votes"), (doc) => {
      const data = doc.data();
      set_votes_stats(data);
    });
    return () => {
      usub_bought();
      usub_fav();
      usub_votes();
    };
  }, []);
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <Bchart title="Tickets Bought: " data={bought_stats} />
          <Pchart title="Favorites: " data={fav_stats} />
          <Bchart title="Votes: " data={votes_stats} />
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
