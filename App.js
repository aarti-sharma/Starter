import React, { Component } from "react";
import store from "./src/redux/store/store";
import { Provider } from "react-redux";
//import RootNavigator from "./src/navigation/RootNavigator";
import RootNavigator from "./src/navigation/RootNavigator";
//import HomeController from "./src/modules/Home/homeController.js";
import DashboardContainer from "./src/modules/Dashboard/dashboardContainer.js";

export default class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {

    return (
      <Provider store={store}>
         <RootNavigator />
          {/* <DashboardContainer/> */}
      </Provider>
    );
  }
}
