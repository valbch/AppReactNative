import React from "react";
import { View, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { createAppContainer, createSwitchNavigator } from "react-navigation";
import Home from "../Screens/Home";
import AuthLoadingScreen from "../Screens/AuthLoadingScreen";
import SignInScreen from "../Screens/SignInScreen";
import Form_answers from "../Screens/Form_answers";
import Calendar from "../Screens/Calendar";
import PageCalendar from "../Components/PageCalendar";

import { createStackNavigator } from "react-navigation-stack";

const AppStack = createStackNavigator(
  {
    Home: Home,
    Form_answers: Form_answers,
    Calendar: Calendar,
    PageCalendar: PageCalendar
  },
  {
    defaultNavigationOptions: {
      headerTitle: () => (
        <View
          style={{
            marginTop: 30,

            flexDirection: "row",
            justifyContent: "space-between"
          }}
        >
          <Image
            source={require("../assets/images/logo.jpg")}
            style={{
              width: 200,
              height: 50,
              marginLeft: 60,
              marginRight: "auto",
              marginBottom: 40
            }}
          />
          <View
            style={{
              justifyContent: "center",
              marginBottom: 60,
              marginLeft: 66
            }}
          >
            <Ionicons name="ios-menu" size={40} color="#081E53" />
          </View>
        </View>
      ),

      headerStyle: {
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5
      }
    }
  }
);

const AuthStack = createStackNavigator(
  {
    SignIn: SignInScreen
  },
  {
    defaultNavigationOptions: {
      headerTitle: () => (
        <View
          style={{
            marginTop: 30,

            flexDirection: "row",
            justifyContent: "space-between"
          }}
        >
          <Image
            source={require("../assets/images/logo.jpg")}
            style={{
              width: 200,
              height: 50,
              marginLeft: 60,
              marginRight: "auto",
              marginBottom: 40
            }}
          />
          <View
            style={{
              justifyContent: "center",
              marginBottom: 60,
              marginLeft: 66
            }}
          >
            <Ionicons name="ios-menu" size={40} color="#081E53" />
          </View>
        </View>
      ),
      headerStyle: {
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5
      }
    }
  }
);

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      App: AppStack,
      Auth: AuthStack
    },
    {
      initialRouteName: "Auth"
    }
  )
);
