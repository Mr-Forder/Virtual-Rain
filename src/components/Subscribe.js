import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Subscribe = () => {
  return (
    <SubscribeNewsletter>
      <h1>Subscribe to the VR Rain newsletter.</h1>
      <p>
        An entire week of VR in a single email. Delivered straight to your inbox
        every Friday.
      </p>
      <form className="newsletter-form">
        <input
          onChange={() => {}}
          type="text"
          placeholder="Your email:"
          className="newsletter-input"
        />
        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
          }}
          className="newsletter-button animated-border-button hover-grow"
        >
          SUBSCRIBE
        </button>
      </form>
    </SubscribeNewsletter>
  );
};

export default Subscribe;

const SubscribeNewsletter = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 3rem 0rem;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(52, 52, 52, 1) 100%
  );

  height: 25rem;
  h1 {
    padding: 2rem;
  }
  p {
    color: white;
    text-align: center;
  }
  .newsletter-form {
    display: flex;
    flex-direction: column;
    padding: 1rem;
    width: 60%;
  }
  .newsletter-input,
  .newsletter-button {
    padding: 0.5rem;
    margin: 0.5rem 0rem;
  }

  .newsletter-button {
    background-color: #ed1b7a;
    font-size: 1rem;

    color: white;
    border: none;
    cursor: pointer;
  }
`;
