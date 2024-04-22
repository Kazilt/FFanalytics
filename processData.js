import { pieChartColors } from "./colors";

export const barProcess = (raw_data, n) => {
  const dataArray = Object.entries(raw_data);
  dataArray.sort((a, b) => b[1] - a[1]);
  const topN = dataArray.slice(0, n).map((pair) => pair[0]);
  const topNvals = dataArray.slice(0, n).map((pair) => pair[1]);
  const otherValues = dataArray.slice(n).map((pair) => pair[1]);
  const sumOfOtherValues = otherValues.reduce((acc, val) => acc + val, 0);
  const orig_labels = [...topN, "Other"];
  const labels = [...topN, "Other"].map((str) => {
    if (str.length > 8) {
      return str.slice(0, 7) + "..";
    } else {
      return str;
    }
  });
  const data = [...topNvals, sumOfOtherValues];
  return [labels, data, orig_labels];
};

export const pieProcess = (raw_data, n) => {
  const dataArray = Object.entries(raw_data);
  dataArray.sort((a, b) => b[1] - a[1]);
  const topN = dataArray.slice(0, n).map((pair) => pair[0]);
  const labels = [...topN, "Other"];

  const topNvals = dataArray.slice(0, n).map((pair) => pair[1]);
  const otherValues = dataArray.slice(n).map((pair) => pair[1]);
  const sumOfOtherValues = otherValues.reduce((acc, val) => acc + val, 0);
  const data = [...topNvals, sumOfOtherValues];
  var ret = [];
  for (let i in labels) {
    var name = labels[i];
    if (name.length > 10) {
      name = name.slice(0, 10) + "..";
    }
    ret.push({
      name: name,
      value: data[i],
      color: pieChartColors[i],
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    });
  }
  return ret;
};
