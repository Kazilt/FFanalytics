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
import { barProcess } from "../processData";

export default function Bchart(props) {
  const [overlayVisible, setOverlayVisible] = useState(false);
  const [overlayData, setOverlayData] = useState({});

  const raw = { ONE: 1, TWO: 2, Three: 3, Four: 4, Five: 5, Six: 6, Seven: 7 };
  const [labels, data] = barProcess(raw, 5);
  const handleDataPointClick = ({ index, value }) => {
    setOverlayData({ value, title: labels[index] });
    setOverlayVisible(true);
  };

  const closeOverlay = () => {
    setOverlayVisible(false);
  };

  return (
    <View style={styles.container}>
      <Text style={{ color: "white", fontSize: 40 }}>{props.title}</Text>
      <BarChart
        data={{
          labels: labels,
          datasets: [{ data: data }],
        }}
        fromZero
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
              Title: {overlayData.title}, Value: {overlayData.value},
            </Text>
          </View>
        </TouchableOpacity>
      )}
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
