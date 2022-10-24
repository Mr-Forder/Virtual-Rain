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

const SliderGame = ({ name, released, image, id }) => {
  //load detail
  const dispatch = useDispatch();
  const loadDetailHandler = () => {
    document.body.style.overflow = "hidden";
    dispatch(loadDetail(id));
  };
  return (
    <Styledgame
      onClick={loadDetailHandler}
      variants={pop}
      initial="hidden"
      animate="show"
    >
      <Link to={`/game/${id}`}>
        <div className="info">
          <h3>Featured PCVR:</h3>
          <h1>{name}</h1>
          <p></p>
        </div>
        <div className="image">
          <img src={smallImage ? smallImage(image, 640) : ``} alt={name} />
        </div>
      </Link>
    </Styledgame>
  );
};

export default SliderGame;

const Styledgame = styled(motion.div)`

height:35rem;
display: flex;
overflow: hidden;
padding: 0.5rem;
  box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  .image{
    height: 35rem;
  }
  .info {
    padding: 0.5rem;
    width: 100%;
    position: absolute;
    background: rgba(0, 0, 0, 0.8);
    padding-bottom: 2rem;
    
    );
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
  h1{font-size:3rem;}
`;
