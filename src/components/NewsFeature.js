import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import axios from "axios";
import { dummyNews } from "../dummyData/dummyNews";

const NewsFeature = ({ query, title, setFeaturedNews }) => {
  //placeholder news image -
  const demoImg = `https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News`;
  //NEWS
  const [news, setNews] = useState(null);
  const options = {
    method: "GET",
    url: `https://bing-news-search1.p.rapidapi.com/news/search?q=${query}`,
    params: { textFormat: "Raw", safeSearch: "Off" },
    headers: {
      "x-bingapis-sdk": "true",
      "x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
      "x-rapidapi-key": "88217be6d2msh40436c162f214f0p1cb12bjsn78fd99b70770",
    },
  };

  const getNews = () => {
    axios
      .request(options)
      .then(function (response) {
        setNews(response.data.value);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  useEffect(() => {
    getNews();
  }, [query]);

  // const news = dummyNews;

  if (!news) return "LOADING";
  return (
    <div>
      <NewsContainer>
        <div className="info">
          <div className="featured-tag">
            <h5>Featured News:</h5>
          </div>

          <h2>{news[0]?.name.substring(0, 83)}</h2>
          <h6>
            {news[0]?.description.substring(0, 200)}{" "}
            <a href={news[0]?.url}>...Read More</a>
          </h6>
        </div>
      </NewsContainer>
    </div>
  );
};

const NewsContainer = styled(motion.div)`
  height: 100%;

  overflow: hidden;
  a {
    color: #ed1b7a;
  }
  h2 {
    padding-bottom: 2rem;
  }
  h6 {
    text-align: left;
    font-size: 1rem;
  }

  .info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    width: 100%;
    padding: 10% 10% 10% 0%;

    @media only screen and (max-width: 900px) {
      width: 90%;
      padding: 10% 0% 0% 10%;
    }
  }
`;
export default NewsFeature;
