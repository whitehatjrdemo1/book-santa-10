import React from "react";
import { createDrawerNavigator } from "react-navigation-drawer";
import { AppTabNavigator } from "./AppTabNavigator";
import CustomSideBarMenu from "./CustomSideBarMenu";
import MyDonationScreen from "../screens/MyDonations";
import SettingScreen from "../screens/SettingScreen";
import NotificationScreen from "../screens/NotificationsScreen";
import MyReceivedBooksScreen from "../screens/ReceivedBooksScreen";

export const AppDrawerNavigator = createDrawerNavigator(
  {
    Home: {
      screen: AppTabNavigator,
    },
    MyDonations: {
      screen: MyDonationScreen,
    },
    Setting: {
      screen: SettingScreen,
    },
    Notification: {
      screen: NotificationScreen,
    },
    ReceivedBooks: {
      screen: MyReceivedBooksScreen,
    },
  },
  {
    contentComponent: CustomSideBarMenu,
  },
  {
    initialRouteName: "Home",
  }
);
