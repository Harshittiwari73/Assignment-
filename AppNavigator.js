import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import OnboardingNameScreen from "./components/Assignment/OnboardingNameScreen";
import OnboardingAgeScreen from "./components/Assignment/OnboardingAgeScreen";
import OnboardingGenderScreen from "./components/Assignment/OnboardingGenderScreen";
import OnboardingLogInScreen from "./components/Assignment/OnboardingLogInScreen";

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="OnboardingLogIn" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="OnboardingLogIn" component={OnboardingLogInScreen} />
        <Stack.Screen name="OnboardingName" component={OnboardingNameScreen} />
        <Stack.Screen name="OnboardingAge" component={OnboardingAgeScreen} />
        <Stack.Screen name="OnboardingGender" component={OnboardingGenderScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
