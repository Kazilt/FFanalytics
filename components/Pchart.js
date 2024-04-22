import React, { useState } from "react";
import { StyleSheet, Text, View, Dimensions, Button } from "react-native";
import { PieChart } from "react-native-chart-kit";
import { chartStyle, colors } from "../colors";
import { pieProcess } from "../processData";

export default function Pchart(props) {
  const raw = props.data;
  const data = pieProcess(raw, 4);

  return (
    <View style={styles.container}>
      <Text style={{ color: "white", fontSize: 40 }}>{props.title}</Text>
      <PieChart
        data={data}
        accessor={"value"}
        width={Dimensions.get("window").width}
        height={220}
        chartConfig={{
          backgroundGradientFrom: colors.darkblue,
          backgroundGradientTo: colors.darkblue,
          decimalPlaces: 1,
          fillShadowGradient: colors.red,
          fillShadowGradientOpacity: 1,
          color: () => `rgba(255, 255, 255, 1)`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
        style={chartStyle}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
