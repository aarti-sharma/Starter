const createActionTypes = (prefix) => {
    return ["REQUEST", "SUCCESS", "FAILURE", "CACHED"].reduce((acc, type) => {
      return { ...acc, [type]: `${prefix}_${type}` };
    }, {});
  };
  
  const createAPIActionTypes = (prefix) => {
    return ["REQUEST", "SUCCESS", "FAILURE"].reduce((acc, type) => {
      return { ...acc, [type]: `${prefix}_API_${type}` };
    }, {});
  };
  
  export const DASHBOARD_LIST = createAPIActionTypes("DASHBOARD_LIST");