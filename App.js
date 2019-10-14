import React, { Component } from "react";
import Front from "./components/Front";
import Authenticate from "./components/Authenticate";
import Register from "./components/Register";
import ForgetPassword from "./components/ForgetPassword";
import Login from "./components/Login";
import PostRegister from "./components/PostRegister";
//import DrawerNavigation from "./components/DrawerNavigation";
import TopMenuBars from "./components/TopMenuBars";

import {
  createSwitchNavigator,
  createAppContainer,
} from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';
//import { createStackNavigator  } from 'react-navigation-stack';

/*const UserStack = createStackNavigator({
  DrawerNavigation: {
    screen: DrawerNavigation,
    navigationOptions: {
      header: <TopMenuBars />
    }
  }
});*/
const PublicStack = createStackNavigator({
  Front,
  Register,
  PostRegister,
  Login,
  ForgetPassword
});
export const App = createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: Authenticate,
    //  User: UserStack,
      Public: PublicStack
    },
    {
      initialRouteName: "AuthLoading"
    }
  )
);
