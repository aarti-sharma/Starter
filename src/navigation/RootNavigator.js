import React from "react";
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import RootStackNavigator from "./RootStackNavigator";
import Drawer from "./Drawer/drawer"

const DrawerNavigator = createDrawerNavigator(
  {
    RootNav: {
      screen: RootStackNavigator,
    },
  },
  {
    drawerPosition: "right",
    contentComponent: Drawer,
    drawerLockMode: "locked-closed",
    drawerBackgroundColor: "rgba(0,0,0,0.8)",
  }
);

function getActiveRouteName(navigationState) {
  if (!navigationState) {
    return null;
  }
  const route = navigationState.routes[navigationState.index];
  // dive into nested navigators
  if (route.routes) {
    return getActiveRouteName(route);
  }
  return route.routeName;
}
function getActiveRouteParams(navigationState) {
  if (!navigationState) {
    return null;
  }
  const route = navigationState.routes[navigationState.index];
  // dive into nested navigators
  if (route.routes) {
    return getActiveRouteParams(route);
  }
  return route.routeName;
}

const RootNavigator = createAppContainer(DrawerNavigator);

export default () => (
  <RootNavigator
    onNavigationStateChange={(prevState, currentState, action) => {
      const currentScreen = getActiveRouteName(currentState);
      const prevScreen = getActiveRouteName(prevState);
      if (prevScreen !== currentScreen) {
        //trackVisitedPage(currentScreen);
      }
    }}
  />
);
