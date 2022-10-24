import axios from "axios";
import {
  searchGameUrl,
  popular_vr,
  latest_vr,
  vr_mods,
  popular_pcvr,
  popular_psvr,
  latest_pcvr,
} from "../api";

export const loadGames = () => async (dispatch) => {
  //fetch with axios - .get argument is our full api request address
  dispatch({
    type: "LOADING_GAMES",
  });
  //VR GAMES
  const popularVrData = await axios.get(popular_vr);
  const latestVrData = await axios.get(latest_vr);
  //VR MODS
  const vrModsData = await axios.get(vr_mods);
  //PCVR GAMES
  const popularPcvrData = await axios.get(popular_pcvr);
  const latestPcvrData = await axios.get(latest_pcvr);
  //PSVR games
  const popularPsvrData = await axios.get(popular_psvr);

  dispatch({
    type: "FETCH_GAMES",
    payload: {
      //VR GAMES
      popularVr: popularVrData.data.results,
      latestVr: latestVrData.data.results,
      vrMods: vrModsData.data.results,
      //PCVR GAMES
      popularPcvr: popularPcvrData.data.results,
      latestPcvr: latestPcvrData.data.results,
      //PSVR GAMES
      popularPsvr: popularPsvrData.data.results,
    },
  });
};

export const fetchSearch = (game_name) => async (dispatch) => {
  const searchGames = await axios.get(searchGameUrl(game_name));
  dispatch({
    type: "FETCH_SEARCHED",
    payload: {
      searched: searchGames.data.results,
    },
  });
};
