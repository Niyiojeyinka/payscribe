import React, { Component } from "react";
import Icon from "react-native-vector-icons/FontAwesome";

import {
  createAppContainer,
  createStackNavigator,
  createDrawerNavigator
} from "react-navigation";
import TabNavigation from "./TabNavigation";
import Balance from "./Balance";
import Withdraw from "./Withdraw";
import Security from "./Security";
import Settings from "./Settings";
import Care from "./Care";
import EarnPlug from "./EarnPlug";
import Profile from "./Profile";
const InnerStackNavigator = createStackNavigator({
  TabNavigation: {
    screen: TabNavigation,
    navigationOptions: {
      header: null
    }
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      header: null
    }
  }
});

const MyDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: InnerStackNavigator,
    navigationOptions: {
      drawerLabel: "Home",
      drawerIcon: ({ tintColor }) => (
        <Icon name="home" color={tintColor} size={25} />
      )
    }
  },
  Balance: {
    screen: Balance,
    navigationOptions: {
      drawerLabel: "Account Balance",
      drawerIcon: ({ tintColor }) => (
        <Icon name="at" color={tintColor} size={25} />
      )
    }
  },
  EarnPlug: {
    screen: EarnPlug,
    navigationOptions: {
      drawerLabel: "Earn Plug",
      drawerIcon: ({ tintColor }) => (
        <Icon name="bitcoin" color={tintColor} size={25} />
      )
    }
  },
  Withdraw: {
    screen: Withdraw,
    navigationOptions: {
      drawerLabel: "Cash Out",
      drawerIcon: ({ tintColor }) => (
        <Icon name="money" color={tintColor} size={25} />
      )
    }
  },

  Security: {
    screen: Security,
    navigationOptions: {
      drawerLabel: "Security",
      drawerIcon: ({ tintColor }) => (
        <Icon name="key" color={tintColor} size={25} />
      )
    }
  },
  Settings: {
    screen: Settings,
    navigationOptions: {
      drawerLabel: "Settings",
      drawerIcon: ({ tintColor }) => (
        <Icon name="cogs" color={tintColor} size={25} />
      )
    }
  },
  Care: {
    screen: Care,
    navigationOptions: {
      drawerLabel: "Contact Support",
      drawerIcon: ({ tintColor }) => (
        <Icon name="phone" color={tintColor} size={25} />
      )
    }
  }
});
const MyApp = createAppContainer(MyDrawerNavigator);
export default MyApp;
