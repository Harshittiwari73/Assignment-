import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function OnboardingAgeScreen({ navigation }) {
  const ageGroups = ["Under 18", "18-24", "25-34", "35-44", "45-54", "55+"];
  const [selected, setSelected] = useState("18-24");

  return (
    <View style={styles.container}>
      <View style={styles.progressBarContainer}>
        <View style={styles.progressBarFill} />
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Great, Let's make Mynd all about you!</Text>
        <Text style={styles.heading}>
          How long have <Text style={styles.boldText}>You</Text> been {"\n"}
          rocking this <Text style={styles.orangeText}>World?</Text> 🎂
        </Text>

        <View style={styles.optionsContainer}>
          {ageGroups.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.option}
              onPress={() => setSelected(item)}
            >
              {selected === item ? (
                <LinearGradient
                  colors={["#F7B174", "#F3A8CE"]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  style={styles.optionGradient}
                >
                  <View style={styles.optionContent}>
                    <Text style={styles.selectedOptionText}>{item}</Text>
                    <Text style={styles.tickIcon}>✔</Text>
                  </View>
                </LinearGradient>
              ) : (
                <View style={styles.optionContent}>
                  <Text style={styles.optionText}>{item}</Text>
                </View>
              )}
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("OnboardingGender")}>
          <LinearGradient
            colors={["#F7B174", "#F3A8CE"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.gradient}
          >
            <Text style={styles.buttonText}>Continue</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  progressBarContainer: {
    height: 4,
    backgroundColor: "#eee",
    width: "80%",
    borderRadius: 4,
    marginTop: 100,
    alignSelf: "center",
    position: "absolute",
    top: 0,
  },
  progressBarFill: {
    width: "25%",
    height: 4,
    backgroundColor: "#F7B174",
    borderRadius: 4,
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 80,
  },
  title: { fontSize: 14, color: "#666", marginBottom: 10 },
  heading: {
    fontSize: 22,
    textAlign: "center",
    color: "#333",
    marginBottom: 30,
  },
  orangeText: { color: "#FF8C00", fontWeight: "bold" },
  boldText: { fontWeight: "bold" },
  optionsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: "95%",
    justifyContent: "space-between",
    marginBottom: 60,
  },
  option: {
    backgroundColor: "#eee",
    borderRadius: 25,
    marginVertical: 8,
    width: "49%",
    alignItems: "center",
    height: 50,
    justifyContent: "center",
    overflow: "hidden",
  },
  optionText: { color: "#333" },
  optionGradient: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
  },
  optionContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 15,
  },
  selectedOptionText: { color: "#fff", fontWeight: "600", fontSize: 14 },
  tickIcon: {
    color: "#fff",
    fontSize: 16,
  },
  optionText: {
    color: "#333",
    fontSize: 14,
    fontWeight: "500",
  },
  buttonContainer: {
    width: "100%",
    padding: 20,
    position: "absolute",
    bottom: 0,
  },
  button: {
    width: "100%",
    borderRadius: 25,
    overflow: "hidden",
  },
  gradient: {
    paddingVertical: 12,
    paddingHorizontal: 50,
    borderRadius: 25,
    alignItems: "center",
  },
  buttonText: { color: "#fff", fontWeight: "600" },
});
