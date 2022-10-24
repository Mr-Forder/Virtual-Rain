import styled from "styled-components";
import { Player } from "@lottiefiles/react-lottie-player";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { SocialIcon } from "react-social-icons";
import logo from "../img/json/VirtualRain.json";

const Footer = () => {
  return (
    <Box>
      <div className="footer-container">
        <div className="ident">
          <Logo>
            <Link to="/">
              <Player
                autoplay
                loop
                src={logo}
                style={{ height: "80px", width: "80px" }}
              ></Player>
            </Link>
          </Logo>
        </div>
        <div className="main-footer">
          <Container>
            <Row>
              <Column>
                <FooterLink href="#">
                  <Heading>About Us</Heading>
                </FooterLink>
                <FooterLink className="hover-underline-animation" href="#">
                  Contact Us
                </FooterLink>
                <FooterLink className="hover-underline-animation" href="#">
                  Community Guidelines
                </FooterLink>
              </Column>
              <Column>
                <FooterLink href="#">
                  <Heading>API</Heading>
                </FooterLink>
                <FooterLink className="hover-underline-animation" href="#">
                  Vision
                </FooterLink>
                <FooterLink className="hover-underline-animation" href="#">
                  Testimonials
                </FooterLink>
              </Column>
              <Column>
                <FooterLink href="#">
                  <Heading>Privacy Policy</Heading>
                </FooterLink>
                <FooterLink className="hover-underline-animation" href="#">
                  Cookies
                </FooterLink>
                <FooterLink className="hover-underline-animation" href="#">
                  Terms & Conditions
                </FooterLink>
              </Column>
              <Column>
                <FooterLink>
                  <SocialIcon
                    style={{ height: 20, width: 20 }}
                    url="https://twitter.com/virtualrain"
                  />
                </FooterLink>
                <FooterLink>
                  <SocialIcon
                    style={{ height: 20, width: 20 }}
                    url="https://facebook.com/virtualrain"
                  />
                </FooterLink>
                <FooterLink>
                  <SocialIcon
                    style={{ height: 20, width: 20 }}
                    url="https://twitch.com/virtualrain"
                  />
                </FooterLink>
              </Column>
            </Row>
          </Container>
        </div>
      </div>
      <div className="sub-footer">
        <p>© 2021-2022 Virtual Rain. All rights reserved.</p>
      </div>
    </Box>
  );
};
export default Footer;
const Logo = styled(motion.div)`
  cursor: pointer;
`;
const Box = styled.div`
  width: 100%;
  background: black;
  bottom: 0;
  width: 100%;

  .footer-container {
    background: rgb(0, 0, 0);
    background: linear-gradient(
      360deg,
      rgba(0, 0, 0, 1) 90%,
      rgba(52, 52, 52, 1) 100%
    );
    display: flex;
    padding: 7rem 0rem;

    @media only screen and (max-width: 900px) {
      padding: 2rem 0rem;
      flex-direction: column;
    }
  }

  .ident {
    width: 20%;
    display: flex;
    justify-content: center;
    align-items: flex-start;

    @media only screen and (max-width: 900px) {
      width: 100%;
    }
  }

  .main-footer {
    width: 100%;
    padding-left: 30%;

    @media only screen and (max-width: 900px) {
      padding-left: 18%;
    }
  }

  .sub-footer {
    display: flex;
    font-size: 0.8rem;
    justify-content: center;
    background: black;
    padding: 2rem;
  }

  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1000px;
  margin: 0 auto;
  a {
    font-size: 0.8rem;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 10px;
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(185px, 1fr));
  grid-gap: 20px;

  @media (max-width: 800px) {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
`;

const FooterLink = styled.a`
  color: #fff;
  margin-bottom: 20px;
  font-size: 18px;
  text-decoration: none;
  &:hover {
    color: #ed1b7a;
    transition: 200ms ease-in;
  }

  @media only screen and (max-width: 900px) {
    width: 75%;
    text-align: center;
  }
`;

const Heading = styled.p`
  font-size: 0.9rem;
  color: #ed1b7a;

  font-weight: bold;
  @media only screen and (max-width: 900px) {
  }
`;
