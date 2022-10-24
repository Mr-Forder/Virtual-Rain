//styles and framer
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import psvr from "../img/psvr.jpeg";
import pcmods from "../img/pcmods.jpg";
import oculus from "../img/oculus.png";
import news from "../img/news.jpg";
import { useDispatch, useSelector } from "react-redux";
const MidMenu = ({
  setActiveTitle,
  setActiveGames,
  setNewsTitle,
  setNewsQuery,
  setFeaturedNews,
  setHeaderImg,
}) => {
  const {
    searched,
    popularVr,
    latestVr,
    vrMods,
    popularPcvr,
    latestPcvr,
    popularPsvr,
  } = useSelector((state) => state.games);

  return (
    <Menu>
      <div
        className="menu-card"
        style={{
          backgroundImage: `url(${psvr})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div
          className="text link hover-grow"
          onClick={() => {
            setActiveGames(popularPsvr);
            setActiveTitle("PSVR Games");
            setNewsTitle("Latest PSVR News");
            setNewsQuery("psvr");
            setFeaturedNews(true);
            setHeaderImg(news);
            window.scrollTo(0, 0);
          }}
        >
          <h1>PSVR Games</h1>
          <h4>See the latest PSVR content.</h4>
        </div>
      </div>
      <div
        className="menu-card"
        style={{
          backgroundImage: `url(${oculus})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div
          className="text link hover-grow"
          onClick={() => {
            setActiveGames(popularPcvr);
            setActiveTitle("PCVR / Oculus Games");
            setNewsTitle("Latest PCVR / Oculus News");
            setNewsQuery("pcvr+oculus");
            setFeaturedNews(true);
            setHeaderImg(oculus);
            window.scrollTo(0, 0);
          }}
        >
          <h1>PC and Oculus</h1>
          <h4>See PCVR, Rift and Quest games.</h4>
        </div>
      </div>

      <div
        className="menu-card"
        style={{
          backgroundImage: `url(${pcmods})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div
          className="text link hover-grow"
          onClick={() => {
            setActiveGames(vrMods);
            setActiveTitle("Games with VR mods");
            setNewsTitle("Latest VR Modding News");
            setNewsQuery("VR+mods");
            setFeaturedNews(true);
            setHeaderImg(pcmods);
            window.scrollTo(0, 0);
          }}
        >
          <h1>PCVR Modding</h1>
          <h4>Take a look at the PCVR modding scene.</h4>
        </div>
      </div>

      <div
        className="menu-card"
        style={{
          backgroundImage: `url(${news})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div
          className="text link hover-grow"
          onClick={() => {
            setActiveGames(popularVr);
            setActiveTitle("VR Games");
            setNewsTitle("Latest VR Gaming News");
            setNewsQuery("vr+gaming");
            setFeaturedNews(true);
            setHeaderImg(news);
            window.scrollTo(0, 0);
          }}
        >
          <h1>Latest News</h1>
          <h4>The latest happenings in VR.</h4>
        </div>
      </div>
    </Menu>
  );
};

export default MidMenu;

const Menu = styled(motion.div)`
  display: flex;
  justify-content: center;

  flex-wrap: wrap;
  margin: 5rem 0rem 5rem 0rem;
  @media only screen and (max-width: 900px) {
    height: 55rem;
    justify-content: center;
  }
  .link {
    cursor: pointer;
  }
  .menu-card {
    overflow: hidden;
    display: flex;
    padding: 2rem;
    height: 15rem;
    width: 25%;
    justify-content: center;
    align-items: center;

    h1 {
      background: rgba(255, 255, 255, 1);
      margin: 3px 0;
      padding: 0.5rem;
      color: black;
    }
    h4 {
      background: black;
      margin: 3px 0;
      padding: 0.5rem;
      color: white;
    }
  }
`;
