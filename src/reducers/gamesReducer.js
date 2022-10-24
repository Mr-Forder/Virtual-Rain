//setup initial state a single object filled with empty arrays for each for now
const initState = {
  searched: [],

  popularVr: [],
  latestVr: [],
  vrMods: [],

  popularPcvr: [],
  latestPcvr: [],
  popularPsvr: [],
};

const gamesReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_GAMES":
      return {
        ...state,

        popularVr: action.payload.popularVr,
        latestVr: action.payload.latestVr,
        vrMods: action.payload.vrMods,

        popularPcvr: action.payload.popularPcvr,
        latestPcvr: action.payload.latestPcvr,
        popularPsvr: action.payload.popularPsvr,
        isLoading: false,
      };
    case "FETCH_SEARCHED":
      return {
        ...state,
        searched: action.payload.searched,
      };
    case "CLEAR_SEARCHED":
      return {
        ...state,
        searched: [],
      };
    case "LOADING_GAMES":
      return {
        ...state,
        isLoading: true,
      };
    default:
      return { ...state };
  }
};

export default gamesReducer;
