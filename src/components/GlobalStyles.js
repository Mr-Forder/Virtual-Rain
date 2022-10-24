import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing:border-box
}


html{
    &::-webkit-scrollbar{
        width:0.5rem;
    }
}&::-webkit-scrollbar-thumb{
        background:darkgray
    }
body{
    font-family: 'Montserrat', sans-serif;
    width:100%;
    background:  #000000;;
    color: white;
}

h2{
    font-size:3.5rem;
}
h3{
    font-size:1.3rem;
    color:white;
    padding: 1.5rem 0rem;
}
p{
    font-size:0.9rem;
    line-height:200%;
    color:#696969;
}
a{
    text-decoration:none;
    color:#ffffff;
    :hover{
        color:#ED1B7A;
    }
}

.menu-control-container {

  position: absolute !important;
  right: 10px !important;
  top: 25px !important;
  font-size: 1.2rem !important;
  background-color: orange;
  border: none !important;
}


//link hover

.hover-underline-animation {
  display: inline-block;
  position: relative;
 
}

.hover-underline-animation:after {
  content: '';
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: #ED1B7A;
  transform-origin: bottom right;
  transition: transform 0.25s ease-out;
}

.hover-underline-animation:hover:after {
  transform: scaleX(1);
  transform-origin: bottom left;
}



//card hover animations
.hover-shrink{
    transition: all 0.3s ease-in-out;
}

.hover-shrink:hover {
  transform: scale(0.95);
   @media only screen and (max-width: 900px) {
 transform: scale(1);
  }
}

.hover-grow{
    transition: all 0.3s ease-in-out;
}

.hover-grow:hover {
  transform: scale(1.1);
}

em { color: #ED1B7A; 
 font-style: normal;}




//button hover anims
.animated-border-button {

  border: none;
  color: #ffffff;
  outline: none;
  padding: 12px 40px 10px;
  position: relative;
}

.animated-border-button:before,
.animated-border-button:after {
  border: 0 solid transparent;
  transition: all 0.3s;
  content: '';
  height: 0;
  position: absolute;
  width: 24px;
}

.animated-border-button:before {
  border-top: 2px solid #ED1B7A;
  right: 0;
  top: -4px;
}

.animated-border-button:after {
  border-bottom: 2px solid #ED1B7A;
  bottom: -4px;
  left: 0;
}

.animated-border-button:hover:before,
.animated-border-button:hover:after {
  width: 100%;
}
.svg:hover {
  fill: red;
}

`;

export default GlobalStyles;
