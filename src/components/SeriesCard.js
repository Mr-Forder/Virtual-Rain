import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { smallImage } from "../util";

const SeriesCard = ({ name, rating, released, img, id }) => {
  return (
    <div>
      <Card>
        <BgImg>
          <img src={img ? smallImage(img, 1920) : ""} />
        </BgImg>
        <h3>{name}</h3>
        <p>
          <strong> Released: </strong>
          {released}
        </p>
        <p>{rating}</p>
      </Card>
    </div>
  );
};

export default SeriesCard;

const Card = styled(motion.div)`
  width: 100%;
  height: 15rem;
  margin: 0.5rem;

  background: linear-gradient(
    90deg,
    rgba(23, 23, 23, 0.1) 0%,
    rgba(23, 23, 23, 0.1) 100%
  );

  h3,
  p {
    color: white;

    padding: 1rem;
  }
  h3 {
    font-size: 1.7rem;
  }
`;
const BgImg = styled(motion.div)`
  position: absolute;

  z-index: -1;

  img {
    width: 50rem;
    height: 15rem;
    object-fit: cover;
    overflow: hidden;
  }
`;
