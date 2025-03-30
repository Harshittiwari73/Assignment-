import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function OnboardingGenderScreen({ navigation }) {
  const genderOptions = ["Female", "Male", "Non-Binary", "Other"];
  const [selected, setSelected] = useState("Male");

  return (
    <View style={styles.container}>
      <View style={styles.progressBarContainer}>
        <View style={styles.progressBarFill} />
      </View>

      <View style={styles.content}>
        <Text style={styles.heading}>
          Choose The <Text style={styles.orangeText}>Identity </Text>That{'\n'}
          Feels Right For <Text style={styles.boldText}>You?</Text>
        </Text>

        <View style={styles.optionsContainer}>
          {genderOptions.map((item, index) => (
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
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("OnboardingLogIn")}>
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
  },
  heading: {
    fontSize: 22,
    textAlign: "center",
    color: "#333",
    marginBottom: 30,
  },
  orangeText: {
    color: "#FF8C00",
    fontWeight: "bold",
  },
  boldText: {
    fontWeight: "bold",
  },
  optionsContainer: {
    width: "100%",
    alignItems: "center",
  },
  option: {
    backgroundColor: "#eee",
    width: "90%",
    height: 50,
    borderRadius: 25,
    marginVertical: 8,
    justifyContent: "center",
    overflow: "hidden",
  },
  optionGradient: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    borderRadius: 25,
  },
  optionContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    width: "100%",
  },
  optionText: {
    color: "#333",
    fontSize: 14,
    fontWeight: "500",
  },
  selectedOptionText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 14,
  },
  tickIcon: {
    color: "#fff",
    fontSize: 16,
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
  buttonText: {
    color: "#fff",
    fontWeight: "600",
  },
});
