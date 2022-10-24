import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const DiscussionCard = ({ userName, url, created, subject, img, id }) => {
  return (
    <div>
      <a href={url}>
        <Discussion>
          <div className="info">
            <a href={url}>
              <h3>"{subject}..."</h3>
              <p>{userName}</p>
            </a>
          </div>
        </Discussion>
      </a>
    </div>
  );
};

export default DiscussionCard;

const Discussion = styled(motion.div)`
  width: 100%;
  background: #1f2122;
  margin: 0.5rem 1rem 0.5rem 0rem;
  position: relative;
  z-index: 20;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border: 1px transparent solid;
  h3 {
    font-size: 1.5rem;
    color: white;
  }
  p {
    color: #ed1b7a;
    font-size: 1rem;
  }

  .info {
    padding: 0.5rem;
    width: 50rem;
    padding-left: 1rem;
    padding-right: 1rem;
  }
  border-radius: 15px;

  :hover {
    border: 1px white solid;
  }
`;
