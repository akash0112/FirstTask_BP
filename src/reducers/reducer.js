const reducers = (teams = [], action) => {
  switch (action.type) {
    case "SET_TEAMS":
      return action.payload.teams;
    default:
      return teams;
  }
};

export default reducers;
