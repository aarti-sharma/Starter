import React, { Component } from "react";
import {
  View,
  Text,
  
} from "react-native";

class Dashboard extends Component {
  
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <View style={{backgroundColor:"red",flex:1, justifyContent:"center",alignItems:"center"}}><Text>Starter</Text></View>
    );
  }
}

export default Dashboard;
