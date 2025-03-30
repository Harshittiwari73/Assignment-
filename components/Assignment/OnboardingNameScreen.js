import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function OnboardingNameScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.progressBarContainer}>
        <View style={styles.progressBarFill} />
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Let's get to know each other</Text>
        <Text style={styles.heading}>
          <Text style={styles.orangeText}>What </Text>
          Should We Call <Text style={styles.boldText}>You?</Text>
        </Text>
        
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            placeholder="Name"
            placeholderTextColor="#aaa"
          />
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("OnboardingAge")}>
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
    paddingHorizontal: 20,
  },
  progressBarContainer: {
    height: 4,
    backgroundColor: "#eee",
    width: "100%",
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
    justifyContent: "center",
    alignItems: "center",
    width: "100%", 
  },
  title: {
    fontSize: 14,
    color: "#888",
    textAlign: "center",
    marginBottom: 10,
  },
  heading: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginBottom: 20,
  },
  orangeText: {
    color: "#F7B174",
    fontWeight: "bold",
  },
  boldText: {
    fontWeight: "bold",
  },
  inputWrapper: {
    width: "100%",
  },
  input: {
    width: "100%",
    height: 45,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 25,
    paddingHorizontal: 15,
    marginBottom: 30,
    marginTop: 50,
    color: "#333",
    backgroundColor: "#fff",
  },
  buttonContainer: {
    position: "absolute",
    bottom: 40,
    left: 20,
    right: 20,
  },
  button: {
    width: "100%",
    borderRadius: 25,
    overflow: "hidden",
  },
  gradient: {
    paddingVertical: 15,
    alignItems: "center",
    borderRadius: 25,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
