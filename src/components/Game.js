import React from "react";
//styles and framer
import styled from "styled-components";
import { motion } from "framer-motion";
//redux
import { useDispatch } from "react-redux";
import { loadDetail } from "../actions/detailAction";
//routing
import { Link } from "react-router-dom";
import { smallImage } from "../util";
//anim
import { pop } from "../anims";
import { fadeIn } from "../anims";

const Game = ({ name, released, image, id }) => {
  //load detail
  const dispatch = useDispatch();
  const loadDetailHandler = () => {
    document.body.style.overflow = "hidden";
    dispatch(loadDetail(id));
  };
  return (
    <Styledgame
      onClick={loadDetailHandler}
      variants={fadeIn}
      initial="hidden"
      animate="show"
    >
      <div className="image hover-shrink">
        <Link to={`/game/${id}`}>
          <div className="info">
            <h5>{name}</h5>
            <p className="game-sub">
              <strong>Released:</strong> {released}
            </p>
          </div>
          <div className="image">
            <img src={smallImage ? smallImage(image, 640) : ``} alt={name} />
          </div>
        </Link>
      </div>
    </Styledgame>
  );
};

export default Game;

const Styledgame = styled(motion.div)`

overflow: hidden;



  box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  .image {
    height: 100%;
    object-fit: cover;
  }
  .info {
    padding: 0.5rem;
    position: absolute;
    background: rgba(0, 0, 0, 0.9);

    );
  }

  .game-sub{
    font-size:0.7rem;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  h5,
  p {
    color: white;
  }
`;
