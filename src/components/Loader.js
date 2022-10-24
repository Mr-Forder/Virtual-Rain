import styled from "styled-components";
import { motion } from "framer-motion";
const Loader = () => {
  return (
    <Loading>
      <div className="content">Loading...</div>
    </Loading>
  );
};

export default Loader;

const Loading = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background: black;
  position: absolute;
  width: 100%;
  height: 100vh;
  color: white;
  z-index: 500;

  .content {
    margin: 20%;
  }
`;
