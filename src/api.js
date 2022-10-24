const api_key = `2bd3800acab846a198f0650fba7c3622`;
const base_url = `https://api.rawg.io/api/platforms?key=${api_key}`;

//get date

const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};

const getCurrentDay = () => {
  const day = new Date().getDate();
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};

//current day/month/year
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

//Popular games from last year to current date
export const popular_games = `https://api.rawg.io/api/games?key=${api_key}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=13`;
export const upcoming_games = `https://api.rawg.io/api/games?key=${api_key}&dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
export const new_games = `https://api.rawg.io/api/games?key=${api_key}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;

//game detail url generator
export const gameDetailUrl = (game_id) =>
  `https://api.rawg.io/api/games/${game_id}?key=${api_key}`;

//get screenshots
export const gameScreenshotUrl = (game_id) =>
  `https://api.rawg.io/api/games/${game_id}/screenshots?key=${api_key}`;

//search

export const searchGameUrl = (game_name) =>
  `https://api.rawg.io/api/games?key=${api_key}&search=${game_name}&page_size=20`;

//testing

//devs
export const gameDevUrl = (game_id) =>
  `https://api.rawg.io/api/games/${game_id}/development-team?key=${api_key}`;

//buy from
export const buyGameUrl = (game_id) =>
  `https://api.rawg.io/api/games/${game_id}/stores?key=${api_key}`;

//reddit
export const redditUrl = (game_id) =>
  `https://api.rawg.io/api/games/${game_id}/reddit?key=${api_key}`;

//reddit
export const seriesUrl = (game_id) =>
  `https://api.rawg.io/api/games/${game_id}/game-series?key=${api_key}`;

//New games this month

const lastMonthDate = `${currentYear}-${currentMonth - 1}-${currentDay}`;

export const this_months_games = `https://api.rawg.io/api/games?key=${api_key}&dates=${lastMonthDate},${currentDate}&page_size=20`;

//VR GAMES

//all platforms
export const popular_vr = `https://api.rawg.io/api/games?key=${api_key}&tags=vr,experience&dates=2020-01-01,${currentDate}&ordering=-rating&page_size=20`;
export const latest_vr = `https://api.rawg.io/api/games?key=${api_key}&tags=vr&dates=${lastYear},${currentDate}&page_size=20`;

//vr mods
export const vr_mods = `https://api.rawg.io/api/games?key=${api_key}&tags=vr-mod&page_size=20`;

//pc/Oculus
export const popular_pcvr = `https://api.rawg.io/api/games?key=${api_key}&tags=vr&parent_platforms=4,1&dates=2017-01-01,${currentDate}&page_size=20`;
export const latest_pcvr = `https://api.rawg.io/api/games?key=${api_key}&platforms=4,1&tags=vr&ordering=-released&page_size=15`;

//psvr
export const popular_psvr = `https://api.rawg.io/api/games?key=${api_key}&tags=vr&platforms=18,1&dates=2017-01-01,${currentDate}&ordering=-released&page_size=20`;
