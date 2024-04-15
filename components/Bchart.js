import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Button,
  TouchableOpacity,
} from "react-native";
import { BarChart } from "react-native-chart-kit-with-pressable-bar-graph";

export default function Bchart() {
  const labels = ["January", "February", "March", "April", "May", "June"];
  const [a, setA] = useState(0);
  const [overlayVisible, setOverlayVisible] = useState(false);
  const [overlayData, setOverlayData] = useState({});

  const handleDataPointClick = ({ index, value }) => {
    setOverlayData({ value, title: labels[index] });
    setOverlayVisible(true);
  };

  const closeOverlay = () => {
    setOverlayVisible(false);
  };

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>

      <View>
        <Button
          title="Increment"
          onPress={() => {
            setA((prev) => {
              console.log(a);
              return prev + 1;
            });
          }}
        ></Button>
        <BarChart
          data={{
            labels: labels,
            datasets: [
              {
                data: [
                  a,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                ],
              },
            ],
          }}
          width={Dimensions.get("window").width}
          height={220}
          yAxisLabel=""
          yAxisSuffix=""
          yAxisInterval={1}
          chartConfig={{
            backgroundColor: "#e26a00",
            backgroundGradientFrom: "#fb8c00",
            backgroundGradientTo: "#ffa726",
            decimalPlaces: 2,
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16,
            },
          }}
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
          onDataPointClick={handleDataPointClick}
        />
        {overlayVisible && (
          <TouchableOpacity style={styles.overlay} onPress={closeOverlay}>
            <View style={styles.overlayContent}>
              <Text style={styles.overlayText}>
                Value: {overlayData.value}, Title: {overlayData.title}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  overlayContent: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
  },
  overlayText: {
    fontSize: 16,
  },
});
