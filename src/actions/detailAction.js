import axios from "axios";
import { gameDetailUrl } from "../api";
import { gameScreenshotUrl } from "../api";
import { gameDevUrl } from "../api";
import { buyGameUrl } from "../api";
import { redditUrl } from "../api";
import { seriesUrl } from "../api";

//Action creator

export const loadDetail = (id) => async (dispatch) => {
  dispatch({
    type: "LOADING_DETAIL",
  });

  const detailData = await axios.get(gameDetailUrl(id));
  const screenShotData = await axios.get(gameScreenshotUrl(id));
  const devData = await axios.get(gameDevUrl(id));
  const buyGameData = await axios.get(buyGameUrl(id));
  const redditData = await axios.get(redditUrl(id));
  const seriesData = await axios.get(seriesUrl(id));
  dispatch({
    type: "GET_DETAIL",
    payload: {
      game: detailData.data,
      screen: screenShotData,
      devs: devData.data,
      buy: buyGameData.data,
      reddit: redditData.data,
      series: seriesData.data,
    },
  });
};
