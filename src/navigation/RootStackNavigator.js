import React from "react";
import { TouchableOpacity, Image,StyleSheet, View,Text } from "react-native";
import { compose } from "redux";
import { createStackNavigator } from "react-navigation-stack";
import DashboardContainer from "../modules/Dashboard/dashboardContainer";

const StackNavigator = createStackNavigator(
  {
    Dashboard: {
      screen: DashboardContainer,
    },
  },
  {
    initialRouteName: "Dashboard",
    defaultNavigationOptions: ({ navigation }) => {
      return {
        title: "IT Ops",
        headerLeft: (
            <TouchableOpacity style={{width:40,height:40}} onPress={()=>{navigation.goBack(null)}}>
                <Text>Back</Text>
            </TouchableOpacity>
        ),
        headerRight: (
          <View style={[{ flexDirection: "row", alignItems: "center" }]}>
            
            <TouchableOpacity
              style={styles.headerRightButton}
              onPress={() => navigation.openDrawer()}
            >
              {/* <Image source={IMAGES.MENU} /> */}
            </TouchableOpacity>
          </View>
        ),
        headerStyle: {
          backgroundColor: "grey",
          height: 100,
          paddingTop: 16,
        },
        headerTintColor: "white",
        headerTitleStyle: {
          fontSize: 20,
          lineHeight: 24,
        },
      };
    },
  }
);

const StackNavigatorWithModal = createStackNavigator(
  {
    Main: {
      screen: StackNavigator,
    },
   
  },
  {
    mode: "modal",
    headerMode: "none",
    transparentCard: true,
  }
);

export default StackNavigatorWithModal;

const styles = StyleSheet.create({
  headerRightButton: {
    flex: 1,
    flexDirection: "row",
    marginRight: 10,
    width:30,
    height:30,
    backgroundColor:"green"
  },
});
