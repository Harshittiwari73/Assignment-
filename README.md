# Onboarding App

This is a **React Native** onboarding app built using **Expo** and **React Navigation**. It includes a step-by-step onboarding process for users to log in, enter their name, specify their age, and select their gender.

## Features
- **Onboarding Screens**: Users navigate through multiple onboarding steps.
- **Navigation**: Implemented using **React Navigation** (Stack Navigator).
- **Beautiful UI**: Designed with **LinearGradient** and custom styles.
- **User Input**: Users can enter their name and proceed to the next step.
- **Smooth Transitions**: Button interactions navigate users through the onboarding flow.

## Installation & Setup
### 1. **Prerequisites**
Make sure you have the following installed:
- Node.js (22.3.0)
- npm or yarn
- Expo CLI (if not installed, run: `npm install -g expo-cli`)

### 2. **Clone the Repository**
```sh
git clone https://github.com/Harshittiwari73/Assignment-.git
cd Onboarding-App
```

### 3. **Install Dependencies**
Run the following command to install required dependencies:
```sh
npm install
```

### 4. **Start the App**
```sh
npm start
```
This will open the Expo Developer Tools in your browser.

### 5. **Run on a Device/Simulator**
- To scan the QR code on a **physical device**, use the Expo Go app.

## Project Structure
```
/onboarding-app
│── /components/Assignment/
│   ├── OnboardingLogInScreen.js
│   ├── OnboardingNameScreen.js
│   ├── OnboardingAgeScreen.js
│   ├── OnboardingGenderScreen.js
│── App.js
│── AppNavigator.js
│── package.json
│── README.md
```

## Navigation Setup
Navigation is handled using React Navigation with a Stack Navigator. The main navigator is set up in `AppNavigator.js`:
```js
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
const Stack = createStackNavigator();
```

## Screens Overview
- **OnboardingLogInScreen**: Initial screen with login options.
- **OnboardingNameScreen**: User enters their name.
- **OnboardingAgeScreen**: User enters their age.
- **OnboardingGenderScreen**: User selects their gender.

