import React, { useState, useEffect } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
//redux
import { fetchSearch } from "../actions/gamesAction";
import { useDispatch, useSelector } from "react-redux";

//anims
import { fadeIn } from "../anims";
import { navPop } from "../anims";
//news
import News from "../components/News";
//logo

import vrain from "../img/vrain.svg";
import search from "../img/search.svg";
import Loader from "../components/Loader";
import psvr from "../img/psvr.jpeg";
import pcmods from "../img/pcmods.jpg";
import oculus from "../img/oculus.jpeg";
import news from "../img/news.jpg";

import NewsFeature from "../components/NewsFeature";
import GameFeature from "../components/GameFeature";

import menu from "../img/json/menu.json";

import LottieLogo from "./LottieLogo";

import logo from "../img/json/VirtualRain.json";

const Nav = ({
  screenSize,
  setScreenSize,
  setActiveTitle,
  setActiveGames,
  newsQuery,
  setNewsQuery,
  newsTitle,
  setNewsTitle,
  featuredNews,
  setFeaturedNews,
  setHeaderImg,
  headerImg,
}) => {
  //dispatch
  const dispatch = useDispatch();
  //search input state
  const [textInput, setTextInput] = useState("");
  //search input handler
  const inputHandler = (e) => {
    setTextInput(e.target.value);
  };
  //search submit handler
  const submitSearch = (e) => {
    e.preventDefault();
    dispatch(fetchSearch(textInput));
    setTextInput("");
  };
  //clear searched handler
  const clearSearched = () => {
    dispatch({ type: "CLEAR_SEARCHED" });
  };

  //responsive elements, state variables for wether menu is active, and size of screen
  const [activeMenu, setActiveMenu] = useState(true);

  //resize window based on screen window's inner width when component mounts
  useEffect(() => {
    const resizeHandler = () => setScreenSize(window.innerWidth);
    //event listener listens for window resize. if resized, runs our resize handler
    window.addEventListener("resize", resizeHandler);

    resizeHandler();
    //remove event listener once handler has executed
    return () => window.removeEventListener("resize", resizeHandler);
  }, []);

  //another useEffects, execuutes when screen size changes - check if screen size is mobile, set active menu state accordingly
  useEffect(() => {
    if (screenSize < 768) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  const { popularVr, isLoading, popularPsvr, popularPcvr, searched, vrMods } =
    useSelector((state) => state.games);

  // if (isLoading) return <Loader />;
  return (
    <div>
      <StyledNav variants={fadeIn} initial="hidden" animate="show">
        <FeaturedImg>
          {!featuredNews ? (
            <img src={popularVr[0]?.background_image} alt="" />
          ) : (
            <img src={headerImg} alt="Featured VR Title" />
          )}
        </FeaturedImg>

        <NavFeaturedAndNews>
          <NavBar>
            <Logo
              onClick={() => {
                clearSearched();
                setActiveGames(popularVr);
                setActiveTitle("VR");
                setNewsTitle("Latest News");
                setNewsQuery("vr+gaming");
                setFeaturedNews(false);
                setHeaderImg(popularVr[0]?.background_image);
              }}
            >
              <div className="lottie-logo">
                {activeMenu ? <LottieLogo /> : ""}
              </div>
            </Logo>

            <div>
              {activeMenu && (
                <NavLinks variants={navPop} initial="hidden" animate="show">
                  <li
                    class="hover-underline-animation link"
                    onClick={() => {
                      setActiveGames(popularVr);
                      setActiveTitle("VR Games");
                      setNewsTitle("Latest VR Gaming News");
                      setNewsQuery("vr+gaming");
                      setFeaturedNews(true);
                      setHeaderImg(news);
                    }}
                  >
                    VR Gaming News
                  </li>
                  <li
                    class="hover-underline-animation link"
                    onClick={() => {
                      setActiveGames(vrMods);
                      setActiveTitle("Games with VR mods");
                      setNewsTitle("Latest VR Modding News");
                      setNewsQuery("VR+mods");
                      setFeaturedNews(true);
                      setHeaderImg(pcmods);
                    }}
                  >
                    VR Mods
                  </li>
                  <li
                    class="hover-underline-animation link"
                    onClick={() => {
                      setActiveGames(popularPcvr);
                      setActiveTitle("PCVR / Oculus Games");
                      setNewsTitle("Latest PCVR / Oculus News");
                      setNewsQuery("pcvr+oculus");
                      setFeaturedNews(true);
                      setHeaderImg(oculus);
                    }}
                  >
                    PCVR/Oculus
                  </li>
                  <li
                    class="hover-underline-animation link"
                    onClick={() => {
                      setActiveGames(popularPsvr);
                      setActiveTitle("PSVR Games");
                      setNewsTitle("Latest PSVR News");
                      setNewsQuery("psvr");
                      setFeaturedNews(true);
                      setHeaderImg(psvr);
                    }}
                  >
                    PSVR
                  </li>
                </NavLinks>
              )}
            </div>

            <form className="search">
              <input
                value={textInput}
                onChange={inputHandler}
                type="text"
                placeholder="Search Games"
              />
              <button
                type="submit"
                onClick={submitSearch}
                className="search-button hover-shrink"
              >
                <img src={search} alt="search" />
              </button>
            </form>
            {screenSize < 768 && (
              <button
                className="menu-control-container"
                onClick={() => {
                  setActiveMenu(!activeMenu);
                }}
              >
                <Player
                  autoplay="false"
                  loop="false"
                  src={menu}
                  style={{ height: "50px", width: "50px" }}
                ></Player>
              </button>
            )}
          </NavBar>

          {
            <FeaturedAndNews>
              <FeatureDescription>
                {!featuredNews ? (
                  <GameFeature popularVr={popularVr} />
                ) : (
                  <NewsFeature query={newsQuery} />
                )}
              </FeatureDescription>
              <NewsContainer>
                <News query={newsQuery} title={newsTitle} />
              </NewsContainer>
            </FeaturedAndNews>
          }
        </NavFeaturedAndNews>
      </StyledNav>
    </div>
  );
};

export default Nav;

const StyledNav = styled(motion.nav)`
  display: flex;
  justify-content: space-between;
  text-align: center;

  @media only screen and (max-width: 900px) {
    min-height: 90rem;
  }
  input {
    width: 80%;
    height: 100%;
    font-size: 0.9rem;
    padding: 0.5rem;
    border: none;
    background: transparent;
    outline: none;
    color: white;
  }
  button {
    font-size: 0.8rem;
    border: none;

    background: transparent;

    cursor: pointer;
  }

  .search-button {
    width: 25px;
    img {
      width: 25px;
    }
  }
  .search {
    display: flex;
    width: 15rem;
    height: 2rem;
    margin-right: 2rem;
    border: 1px solid white;
    border-style: solid;
    border-radius: 25px;
    @media only screen and (max-width: 900px) {
      width: 80%;
      margin-top: 2srem;
      margin-right: 0rem;
    }
  }
`;

const NavLinks = styled(motion.ul)`
    display: flex;

    @media only screen and (max-width: 768px) {
      flex-direction: column;
      position: absolute;
      background: rgba(0, 0, 0, 0.8) 0%;

      padding: 1rem 0rem;

      top: 0px;
      left: 0px;
      width: 100%;
    }

    .link {
      cursor: pointer;
    }
    li {
      padding: 0rem 2rem 0rem 2rem;
      list-style: none;
      @media only screen and (max-width: 768px) {
        padding: 1rem;
      }
    `;

const NavBar = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  padding: 2rem 0rem 0rem 5rem;
  @media only screen and (max-width: 900px) {
    transition: all 0.3s ease-in-out;
 padding: 2rem 0rem 0rem 0rem;
    flex-direction: column;
    align-items: center;
  }

  
  }

 
`;

const Logo = styled(motion.div)`
  cursor: pointer;
`;
const FeaturedImg = styled(motion.div)`
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  z-index: -1;
  img {
    width: 100%;
    height: 50rem;
    object-fit: cover;
  }
`;

const NavFeaturedAndNews = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 50rem;
  top: 0;
  left: 0;
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 0.3) 100%
  );
  z-index: 1;
`;

const FeaturedAndNews = styled(motion.div)`
  display: flex;
  width: 100%;
  padding: 0% 5% 0% 15%;
  justify-content: space-between;

  @media only screen and (max-width: 900px) {
    flex-direction: column;
    display: inline;
  }
`;
const FeatureDescription = styled(motion.div)`
  display: flex;
  padding-bottom: 5rem;
  align-items: center;
  justify-content: flex-end;

  @media only screen and (max-width: 900px) {
    justify-content: center;
  }

  .info {
    h1 {
      font-size: 6rem;
      @media only screen and (max-width: 900px) {
        font-size: 2.5rem;
      }
    }

    h2 {
      font-size: 2rem;
    }
    h3 {
      font-size: 2rem;
    }
    h4 {
      margin-top: 2rem;
      width: 12rem;
      padding: 5px;
      border: 1px solid white;
    }
    .featured-tag {
      padding: 5px;
      width: 7rem;
      border-radius: 5px;
      background: #ed1b7a;
      margin: 2rem 0rem;
      h5 {
        font-size: 0.7rem;
      }
    }
  }
`;

const NewsContainer = styled(motion.div)`
  display: flex;
  height: 100%;
`;
