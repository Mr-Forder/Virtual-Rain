import React, { useState } from "react";
//route
import { Route, Switch } from "react-router";
//pages
import Home from "./pages/Home";

//styles
import GlobalStyles from "./components/GlobalStyles";
//Nav
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { useLocation } from "react-router";

function App() {
  const [screenSize, setScreenSize] = useState(null);
  const location = useLocation();
  const [activeGames, setActiveGames] = useState(null);
  const [activeTitle, setActiveTitle] = useState("VR");
  const [newsQuery, setNewsQuery] = useState("vr+gaming+latest");
  const [newsTitle, setNewsTitle] = useState("Latest News");
  const [featuredNews, setFeaturedNews] = useState(null);
  const [headerImg, setHeaderImg] = useState(null);

  return (
    <div className="App">
      <GlobalStyles />

      <Nav
        screenSize={screenSize}
        setScreenSize={setScreenSize}
        pageId={location}
        setActiveGames={setActiveGames}
        setActiveTitle={setActiveTitle}
        setNewsQuery={setNewsQuery}
        newsTitle={newsTitle}
        setNewsTitle={setNewsTitle}
        setFeaturedNews={setFeaturedNews}
        featuredNews={featuredNews}
        newsQuery={newsQuery}
        setHeaderImg={setHeaderImg}
        headerImg={headerImg}
      />
      <Switch>
        <Route exact path={["/game/:id", "/"]}>
          <Home
            screenSize={screenSize}
            setScreenSize={setScreenSize}
            activeGames={activeGames}
            setActiveGames={setActiveGames}
            activeTitle={activeTitle}
            setActiveTitle={setActiveTitle}
            setNewsQuery={setNewsQuery}
            setFeaturedNews={setFeaturedNews}
            setNewsTitle={setNewsTitle}
            setHeaderImg={setHeaderImg}
          />
        </Route>

        <Route path={["/game/:id", "/"]} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
