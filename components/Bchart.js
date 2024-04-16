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
import { chartStyle, colors } from "../colors";

export default function Bchart() {
  const labels = ["January", "February", "March", "April", "May", "June"];
  const [overlayVisible, setOverlayVisible] = useState(false);
  const [overlayData, setOverlayData] = useState({});
  const data = [
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100,
  ];
  const handleDataPointClick = ({ index, value }) => {
    setOverlayData({ value, title: labels[index] });
    setOverlayVisible(true);
  };

  const closeOverlay = () => {
    setOverlayVisible(false);
  };

  return (
    <View style={styles.container}>
      <View>
        <BarChart
          data={{
            labels: labels,
            datasets: [{ data: data }],
          }}
          width={Dimensions.get("window").width}
          height={220}
          yAxisLabel=""
          yAxisSuffix=""
          yAxisInterval={1}
          chartConfig={{
            backgroundGradientFrom: colors.darkblue,
            backgroundGradientTo: colors.darkblue,
            decimalPlaces: 0,
            fillShadowGradient: colors.red,
            fillShadowGradientOpacity: 1,
            color: () => `rgba(255, 255, 255, 1)`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16,
            },
          }}
          style={chartStyle}
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
