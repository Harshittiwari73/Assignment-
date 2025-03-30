import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

export default function OnboardingLogInScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.progressBarContainer}>
        <View style={styles.progressBarFill} />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.heading}>
          <Text style={styles.highlightLight}>Begin Your{"\n"}</Text>
          <Text style={styles.highlight}>Mindful Journey</Text>
        </Text>
        <Text style={styles.subText}>
          Log In Or Sign Up To Begin Your Journey With Personalized, Human-Like
          Wellness Support
        </Text>
      </View>

      <LinearGradient
        colors={["#F7B174", "#F3A8CE"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.bottomContainer}
      >
        <View style={styles.dotsContainer}>
          <View style={styles.dotActive} />
          <View style={styles.dot} />
          <View style={styles.dot} />
        </View>

        <TouchableOpacity style={styles.appleButton} onPress={() => navigation.navigate("OnboardingName")}>
          <AntDesign name="apple1" size={22} color="white" />
          <Text style={styles.appleButtonText}>Continue With Apple</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.googleButton} onPress={() => navigation.navigate("OnboardingName")}>
          <Image
            source={{
              uri: "https://img.icons8.com/color/48/google-logo.png",
            }}
            style={styles.googleIcon}
          />
          <Text style={styles.googleButtonText}>Continue With Google</Text>
        </TouchableOpacity>

        <View style={styles.orContainer}>
          <View style={styles.line} />
          <Text style={styles.orText}>or</Text>
          <View style={styles.line} />
        </View>

        <Text style={styles.termsText}>
          I agree to <Text style={styles.link}>Privacy Policy</Text> &{" "}
          <Text style={styles.link}>Terms of Service</Text>
        </Text>
      </LinearGradient>
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
  textContainer: {
    marginTop: '60%',
    paddingHorizontal: 30,
    alignItems: "center",
  },
  heading: {
    textAlign: "center",
    color: "#555",
  },
  highlight: {
    fontWeight: "bold",
    color: "#F7B174",
    fontSize: 35,
  },
  highlightLight: {
    color: "#F7B174",
    fontSize: 40,
  },
  subText: {
    marginBottom:30,
    fontSize: 14,
    color: "#888",
    textAlign: "center",
    // marginTop: 10,
  },
  bottomContainer: {
    position: "absolute",
    width: "100%",
    bottom: 0,
    paddingVertical: 30,
    paddingHorizontal: 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    overflow: "hidden",
  },
  dotsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 40,
  },
  dotActive: {
    width: 8,
    height: 8,
    backgroundColor: "#fff",
    borderRadius: 4,
    marginHorizontal: 4,
  },
  dot: {
    width: 8,
    height: 8,
    backgroundColor: "#fff",
    opacity: 0.4,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  appleButton: {
    flexDirection: "row",
    backgroundColor: "black",
    paddingVertical: 18,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
  },
  appleButtonText: {
    color: "white",
    marginLeft: 10,
    fontWeight: "400",
  },
  googleButton: {
    flexDirection: "row",
    backgroundColor: "white",
    paddingVertical: 18,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  googleIcon: {
    width: 20,
    height: 20,
  },
  googleButtonText: {
    marginLeft: 10,
    fontWeight: "400",
  },
  termsText: {
    textAlign: "center",
    fontSize: 12,
    color: "#fff",
  },
  link: {
    textDecorationLine: "underline",
  },
  orContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 15,

  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#fff",
    opacity: 0.5,
  },
  orText: {
    marginHorizontal: 10,
    color: "#fff",
    fontSize: 12,
  },
});
