import * as types from "../../action/actionTypes.js";

const reducer = (state = null, action) => {
  switch (action.type) {
    case types.DASHBOARD_LIST:
      return { ...action.dashboardLists };
    
    default:
      return state;
  }
};

export default reducer;
