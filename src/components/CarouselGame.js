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

const CarouselGame = ({ name, released, image, id }) => {
  //load detail
  const dispatch = useDispatch();
  const loadDetailHandler = () => {
    document.body.style.overflow = "hidden";
    dispatch(loadDetail(id));
  };
  return (
    <Styledgame onClick={loadDetailHandler}>
      <Link to={`/game/${id}`}>
        <div className="image">
          <img src={smallImage ? smallImage(image, 640) : ``} alt={name} />
        </div>
        <div className="info">
          <h5>{name}</h5>
        </div>
      </Link>
    </Styledgame>
  );
};

export default CarouselGame;

const Styledgame = styled(motion.div)`

width: 12%;
overflow: hidden;
padding: 0.5rem;
  box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.2);
  cursor: pointer;
      @media only screen and (max-width: 900px) {
      
    }
  .image {
    height: 85%;

  }
  .info {
    padding: 0.5rem;

    height: 15rem;
   

    );
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
 
  p {
    font-size:0.6rem};
  }

  h5{font-size:0.8rem;}
`;
