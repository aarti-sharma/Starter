import React, { Component } from "react";
import {
  FlatList,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet
} from "react-native";
//import IMAGES from "../../assets/images";
import { SafeAreaView } from "react-navigation";
import { ROUTES } from "../Constants";
import { connect } from "react-redux";
//import { DrawerMenuItemData } from "../../modules/config";

console.disableYellowBox = true;

const CloseButton = (props) => (
  <TouchableOpacity style={{width:30,height:30,backgroundColor:"red"}} onPress={props.onClose}>
  </TouchableOpacity>
);

// const DrawerItemImage = ({ image }) => (
//   <Image style={styles.drawerItemImage} source={IMAGES[image]} />
// );

const DrawerItemTitle = ({ title }) => (
  <Text style={[styles.itemTitle, styles.fontXL]}> {title} </Text>
);

const DrawerItem = ({ item, onPress = () => {} }) => (
  <TouchableOpacity
    style={styles.itemView}
    onPress={() => onPress(item.template)}
  >
    {/* <DrawerItemImage image={item.ImageRef} /> */}
    <DrawerItemTitle title={item.label} />
  </TouchableOpacity>
);

const DrawerList = ({ data, onPress = () => {} }) => (
  <FlatList
    data={data}
    renderItem={({ item, index }) => {
      return <DrawerItem item={item} onPress={onPress} />;
    }}
    //keyExtractor={(item) => item.id}
  />
);

const Drawer = (props) => {
  onPressMenu = (screenName) => {
    // if (screenName == "lang") {
    //   props.navigation.navigate(ROUTES.Language);
    // } else {
    //   props.navigation.navigate(ROUTES[screenName]);
    // }
     props.navigation.navigate(ROUTES[screenName]);
  };

  const { appDrawer } = props.appConfig
    ? props.appConfig[0].appConfig.appConfig
    : [];

  return (
    <SafeAreaView style={[styles.container]}>
      <ScrollView>
        <CloseButton
          onClose={() => {
            props.navigation.closeDrawer();
          }}
        />
        {appDrawer && (
          <DrawerList onPress={this.onPressMenu} data={appDrawer} />
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const mapStateToProps = (state) => {
  return {
    appConfig: state.appConfig,
    //syncTime: state.syncTime,
    //userInfo: state.userInfo
  };
};

export default connect(
  mapStateToProps,
  null
)(Drawer);

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    refreshButton: {
      paddingTop: 16,
      alignSelf: "stretch",
    },
    icon: {
      width: 32,
      height: 32,
      alignItems: "center",
      resizeMode: "center",
      paddingLeft: 8 * 3,
      paddingRight: 8 * 6,
    },
    closeButton: {
      width: 32,
      height: 32,
      alignSelf: "flex-end",
      justifyContent: "center",
      alignItems: "center",
      marginRight: 8,
    },
    itemView: {
      borderBottomWidth: 1,
      borderColor: "green",
      marginHorizontal: 8 * 2,
      height: 50,
      width: 50,
      backgroundColor:"green",
      alignItems: "center",
      flexDirection: "row",
    },
    itemTitle: {
      margin: 8,
    },
    drawerItemImage: {
      width: 25,
      height: 25,
    },
  });
  
  