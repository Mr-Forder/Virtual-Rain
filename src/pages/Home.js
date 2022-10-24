import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gamesAction";
//styles and framer
import styled from "styled-components";
import { motion } from "framer-motion";
//components
import Game from "../components/Game";
import GameDetail from "../components/GameDetail";
import MidMenu from "../components/MidMenu";
import Subscribe from "../components/Subscribe";

import PsvrNews from "../components/PsvrNews";
import Slider from "framer-motion-carousel";

import CarouselGame from "../components/CarouselGame";
import SliderGame from "../components/SliderGame";
//router
import { useLocation } from "react-router";
//anims
import { fadeIn } from "../anims";
import Loader from "../components/Loader";

const Home = ({
  screenSize,
  setScreenSize,
  activeGames,
  setActiveGames,
  activeTitle,
  setActiveTitle,
  setNewsQuery,
  setNewsTitle,
  setFeaturedNews,
  setHeaderImg,
}) => {
  //get current location
  const location = useLocation();

  const pathId = location.pathname.split("/")[2];

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);

  //extract retreived data from our store via useSelector
  const {
    searched,
    popularVr,
    latestVr,
    vrMods,
    popularPcvr,
    latestPcvr,
    popularPsvr,
  } = useSelector((state) => state.games);

  // if (isLoading) return <Loader />;

  return (
    <GameList variants={fadeIn} initial="hidden" animate="show">
      {pathId && <GameDetail />}
      {searched.length ? (
        <div className="searched">
          <h3>Your search results:</h3>
          <Games>
            {searched.map((game) => (
              <Game
                name={game.name}
                released={game.released}
                image={game.background_image}
                key={game.id}
                id={game.id}
              />
            ))}
          </Games>
        </div>
      ) : (
        ""
      )}

      <h3 className="top-level">
        Current top <em>{activeTitle}</em>
      </h3>

      <Games>
        {activeGames
          ? activeGames
              .slice(0, 10)
              .map((game) => (
                <Game
                  name={game.name}
                  released={game.released}
                  image={game.background_image}
                  key={game.id}
                  id={game.id}
                />
              ))
          : popularVr
              ?.slice(0, 10)
              .map((game) => (
                <Game
                  name={game.name}
                  released={game.released}
                  image={game.background_image}
                  key={game.id}
                  id={game.id}
                />
              ))}
      </Games>

      <MidMenu
        activeGames={activeGames}
        setActiveGames={setActiveGames}
        setActiveTitle={setActiveTitle}
        setNewsQuery={setNewsQuery}
        setNewsTitle={setNewsTitle}
        setFeaturedNews={setFeaturedNews}
        setHeaderImg={setHeaderImg}
      />

      <Games>
        {activeGames
          ? activeGames
              .slice(10, 20)
              .map((game) => (
                <Game
                  name={game.name}
                  released={game.released}
                  image={game.background_image}
                  key={game.id}
                  id={game.id}
                />
              ))
          : popularVr
              ?.slice(10, 20)
              .map((game) => (
                <Game
                  name={game.name}
                  released={game.released}
                  image={game.background_image}
                  key={game.id}
                  id={game.id}
                />
              ))}
      </Games>

      <h3>
        Latest <em>PSVR</em> News
      </h3>
      <div className="psvr">
        <PsvrNews title="PSVR News" query="PSVR+News" />
        <PsvrGames>
          {popularPsvr.slice(0, 9).map((game) => (
            <Game
              name={game.name}
              released={game.released}
              image={game.background_image}
              key={game.id}
              id={game.id}
            />
          ))}
        </PsvrGames>
      </div>
      <Subscribe />

      <div className="pc-featured-mods">
        <div className="pc-featured">
          <Slider
            interval={30000}
            renderArrowLeft={({ handlePrev, activeIndex }) => ""}
            renderArrowRight={({ handlePrev, activeIndex }) => ""}
            renderDots={({ handlePrev, activeIndex }) => ""}
          >
            {popularPcvr.map((game) => (
              <SliderGame
                name={game.name}
                released={game.released}
                image={game.background_image}
                key={game.id}
                id={game.id}
              />
            ))}
          </Slider>
        </div>
        <div className="popular-mods">
          <h4>
            Trending <em>PC titles</em> with modded VR support...
          </h4>
          <Mods>
            {vrMods.map((game) => (
              <Game
                name={game.name}
                released={game.released}
                image={game.background_image}
                key={game.id}
                id={game.id}
              />
            ))}
          </Mods>
        </div>
      </div>

      <LatestGames>
        <h3>
          Latest <em>VR Releases</em>
        </h3>
        {latestVr.slice(0, 9).map((game) => (
          <CarouselGame
            name={game.name}
            released={game.released}
            image={game.background_image}
            key={game.id}
            id={game.id}
          />
        ))}
      </LatestGames>
    </GameList>
  );
};

export default Home;

const GameList = styled(motion.div)`
  display: flex;
  flex-direction: column;

  padding: 1rem 5rem;
  h2 {
    padding: 5rem 0rem;
  }

  h3 {
    padding-left: 10px;
  }

  background: rgba(0, 0, 0, 1);
  @media only screen and (max-width: 900px) {
    padding: 1rem 0rem;
  }
  .psvr {
    display: flex;
    @media only screen and (max-width: 900px) {
      flex-direction: column;
      align-items: center;
    }
  }
  .top-level{

    @media only screen and (max-width: 900px) {
      margin-top: 2rem;
    }
  }
  .pc-featured-mods {
    display: flex;
    
    flex-wrap: flex;
    width: 100%;
        @media only screen and (max-width: 1100px) {
      flex-direction: column;
    }
  }
  }

  .pc-featured {

    width: 30%;
      @media only screen and (max-width: 1100px) {
      width:100%;
      margin-bottom:2rem;
    }
  }

  .popular-mods {

    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 70%;

    padding: 0rem 1rem;
        @media only screen and (max-width: 1100px) {
         width: 100%;
         align-items: center;

    }
  }
`;

const Mods = styled(motion.div)`
  margin: 15px 0px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 3fr));
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
`;

const Games = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
  @media only screen and (max-width: 900px) {
    width: 100%;
    grid-column-gap: 0rem;
    grid-row-gap: 0rem;
    overflow-x: hidden;
  }
`;

const LatestGames = styled(motion.div)`
  padding: 2rem 0rem;
  display: flex;
  @media only screen and (max-width: 900px) {
    display: none;
  }
`;

const PsvrGames = styled(motion.div)`
  width: 75%;
  background: black;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-column-gap: 0rem;
  grid-row-gap: 0rem;
  @media only screen and (max-width: 900px) {
    width: 100%;
  }
`;
