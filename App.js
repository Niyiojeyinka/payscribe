import React, { Component } from "react";
import Front from "./components/Front";
import Authenticate from "./components/Authenticate";
import Register from "./components/Register";
import ForgetPassword from "./components/ForgetPassword";
import Login from "./components/Login";
import PostRegister from "./components/PostRegister";
import DrawerNavigation from "./components/DrawerNavigation";
import TopMenuBars from "./components/TopMenuBars";

import {
  createSwitchNavigator,
  createStackNavigator,
  createAppContainer
} from "react-navigation";

const UserStack = createStackNavigator({
  DrawerNavigation: {
    screen: DrawerNavigation,
    navigationOptions: {
      header: <TopMenuBars />
    }
  }
});
const PublicStack = createStackNavigator({
  Front,
  Register,
  PostRegister,
  Login,
  ForgetPassword
});
export const Main = createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: Authenticate,
      User: UserStack,
      Public: PublicStack
    },
    {
      initialRouteName: "AuthLoading"
    }
  )
);
