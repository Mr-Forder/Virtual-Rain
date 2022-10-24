import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
//redux
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { smallImage } from "../util";

//anim
import { pop } from "../anims";
//components
import DiscussionCard from "./DiscussionCard";
import scoreleft from "../img/scoreleft.svg";
import scoreright from "../img/scoreright.svg";

import CloseLottie from "./CloseLottie";
const GameDetail = () => {
  const history = useHistory();
  //exit handler

  const exitDetailHandler = (e) => {
    const element = e.target;

    if (element.classList.contains("shadow")) {
      document.body.style.overflow = "auto";
      history.push("/");
    }
  };

  const closeDetailHandler = (e) => {
    document.body.style.overflow = "auto";
    history.push("/");
  };

  //get data
  const { screen, game, devs, reddit, buy, series, isLoading } = useSelector(
    (state) => state.detail
  );

  return (
    <div>
      {!isLoading && (
        <CardShadow className="shadow" onClick={exitDetailHandler}>
          <Detail variants={pop} initial="hidden" animate="show">
            <DetailHeader>
              <BgImg>
                <img
                  src={
                    game.background_image
                      ? smallImage(game.background_image, 1920)
                      : ""
                  }
                  alt={game.background_image}
                />
              </BgImg>
              <Stats>
                <div className="rating">
                  <h1>{game.name.toUpperCase()}</h1>

                  <p>
                    <strong>Release Date:</strong> {game.released}
                  </p>
                  {game.publishers?.map((data) => (
                    <p>
                      <strong>Publisher:</strong> {data.name}
                    </p>
                  ))}
                  <p>
                    <a href={game.website}>
                      <p>
                        <strong>Genres:</strong>{" "}
                        {game.genres?.map((genre) => `${genre.name} | `)}
                      </p>
                      <p>
                        <strong>Average Playtime: </strong>
                        {game.playtime} hours
                      </p>
                      <strong>Official Website </strong>{" "}
                    </a>
                  </p>
                </div>
              </Stats>

              <Block>
                <div className="text">
                  <p>
                    {game.description_raw.substring(0, 1200)}...
                    {game.metacritic ? (
                      <a href={game.metacritic_url}>
                        <em>See Reviews on Metacritic</em>
                      </a>
                    ) : (
                      ""
                    )}
                  </p>
                </div>
                <div className="more-info">
                  {game.metacritic ? (
                    <a href={game.metacritic_url}>
                      <div className="metacritic hover-grow">
                        <div className="score">
                          <div className="score-buffer left">
                            <img src={scoreleft} alt="" />
                          </div>
                          <div className="score-number">{game.metacritic}</div>
                          <div className="score-buffer right">
                            <img src={scoreright} alt="" />
                          </div>
                        </div>
                        <h4>(Overall Metacritic Score)</h4>
                      </div>
                    </a>
                  ) : (
                    ``
                  )}
                </div>
              </Block>

              <Block>
                {reddit.results.length ? (
                  <div className="reddit">
                    <Talk>
                      <div className="reddit">
                        <h3>Active Discussions</h3>
                        <button className="view-reddit hover-shrink">
                          <a href={game.reddit_url}>View Subreddit</a>
                        </button>
                      </div>

                      {reddit.results?.map((data) => (
                        <div key={data.id}>
                          <DiscussionCard
                            userName={data.username}
                            url={data.url}
                            created={data.created}
                            subject={data.name}
                            img={data.image}
                            id={data.id}
                          />
                        </div>
                      ))}
                    </Talk>
                  </div>
                ) : (
                  ``
                )}

                <Gallery>
                  {screen.data?.results
                    .slice(1, screen.data.results.length - 1)
                    .map((screen) => (
                      <img
                        src={smallImage ? smallImage(screen.image, 1280) : ``}
                        key={screen.id}
                        alt={screen.image}
                      />
                    ))}
                </Gallery>
              </Block>
              <Close onClick={closeDetailHandler}>
                <CloseLottie />
              </Close>
            </DetailHeader>
          </Detail>
        </CardShadow>
      )}
    </div>
  );
};

export default GameDetail;

const CardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 50;
`;

const Detail = styled(motion.div)`
  width: 95%;
  position: absolute;
  left: 2%;
  background: #000000;
  color: white;
  img {
    width: 100%;
  }
  z-index: -3;
`;

const DetailHeader = styled(motion.div)`
  padding: 10rem 10% 5rem 10%;
  width: 100%;
  z-index: 1;
  background: rgb(52, 52, 52);
  background: linear-gradient(
    180deg,
    rgba(52, 52, 52, 0.1) 0%,
    rgba(0, 0, 0, 1) 20%
  );

  h1,
  h2,
  h3,
  p {
    color: white;
  }
  h1 {
    font-size: 3rem;
    padding-bottom: 2rem;
  }
`;
const BgImg = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -2;
  width: 100%;
  img {
    width: 100%;
    object-fit: cover;
  }
`;

const Stats = styled(motion.div)`
  img {
    width: 2rem;
    display: inline;
  }
`;

const Block = styled(motion.div)`
  display: flex;
  margin: 2rem 0rem 5rem 0rem;
  @media only screen and (max-width: 900px) {
    flex-direction: column;
    align-items: center;
  }
  .text {
    width: 60%;
    @media only screen and (max-width: 900px) {
      width: 100%;
    }
  }
  .more-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 40%;
    a {
      color: white;
    }
    @media only screen and (max-width: 900px) {
      width: 100%;
    }
  }

  .reddit {
    width: 50%;

    @media only screen and (max-width: 900px) {
      width: 100%;
    }
  }

  .metacritic {
    display: flex;
    flex-direction: column;
    align-items: center;
    h4 {
      color: #ed1b7a;
    }
    .score {
      display: flex;

      @media only screen and (max-width: 900px) {
        margin-top: 2rem;
      }
    }

    .score-buffer {
      width: 3rem;
      display: flex;
    }

    .left {
      align-items: flex-end;
    }
    .right {
      align-items: flex-start;
    }

    .score-number {
      font-size: 10rem;
      padding: 2rem;
    }
  }

  .button {
    padding: 15px;
    width: 10rem;
    border-radius: 5px;
    background: #ed1b7a;
    margin: 5rem;

    :hover {
      background: transparent;
      border: 2px solid white;
    }
  }
`;
const Talk = styled(motion.div)`
  .reddit {
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin: 1rem 0rem;

    .view-reddit {
      background: #ed1b7a;
      width: 11rem;
      color: white;
      border-radius: 5px;
      border: none;
      font-size: 1rem;
      cursor: pointer;
      :hover {
        background: transparent;
        border: 2px solid white;
      }
    }
  }
`;

const Buy = styled(motion.div)``;
const Gallery = styled(motion.div)`
  width: 100%;
  display: flex;
  display: inline-block;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin: 0rem 0.5rem;

  img {
    width: 100%;
    display: inline;
  }
  @media only screen and (max-width: 900px) {
    width: 100%;
  }
`;

const Close = styled(motion.div)`
  width: 100%;
  display: flex;
  justify-content: center;
  cursor: pointer;
  background: transparent;
`;
