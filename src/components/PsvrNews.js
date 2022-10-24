import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import axios from "axios";
import psvrnews from "../img/psvrnews.png";
import { dummyNews } from "../dummyData/dummyNews";

const PsvrNews = ({ query, title }) => {
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
  //Get News on Mount
  useEffect(() => {
    getNews();
  }, [query]);

  // const news = dummyNews;

  if (!news) return "LOADING";
  return (
    <div>
      <NewsContainer>
        <div
          className="featured-news"
          style={{
            backgroundImage: `url(${psvrnews})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <a href={news[0]?.url} target="_blank" rel="noreferrer">
            <h1>{news[0]?.name}</h1>
            <h4>{news[0]?.description.substring(0, 200)}...</h4>
          </a>
        </div>

        {news?.slice(0, 3).map((item) => (
          <a href={item.url} target="_blank" rel="noreferrer">
            <div className="news-content">
              <h3>{item.name.substring(0, 83)}...</h3>
              <p>{item.description.substring(0, 200)}...</p>
              <div className="provider-container">
                <p className="provider-name">
                  <strong>{item.provider[0]?.name}</strong>
                </p>
                <img
                  src={
                    item.provider[0]?.image?.thumbnail?.contentUrl || demoImg
                  }
                />
              </div>
            </div>
          </a>
        ))}
      </NewsContainer>
    </div>
  );
};

const NewsContainer = styled(motion.div)`
  height: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background: #f5f5f5;

  @media only screen and (max-width: 900px) {
    width: 100%;
    overflow-x: hidden;
  }

  .featured-news {
    flex-direction: column;
    height: 20rem;
    overflow: hidden;
    display: flex;
    padding: 2rem;
    max-width: 30rem;
    justify-content: flex-start;
    align-items: flex-start;
    @media only screen and (max-width: 900px) {
      height: 20rem;
    }
  }
  .news-content {
    width: 30rem;
    border-top: 2px solid #e2dbdb;
    @media only screen and (max-width: 900px) {
      border-top: none;
      width: 100%;
    }
  }

  h3 {
    font-size: 0.9rem;
    padding: 1rem 0rem;
    color: #ed1b7a;
  }
  h1 {
    color: #ed1b7a;
    font-size: 1.2rem;
  }
  h4 {
    color: black;
    padding-top: 1rem;
    font-size: 0.8rem;
  }
  p {
    font-size: 0.7rem;
  }

  .provider-container {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    @media only screen and (max-width: 900px) {
    }

    p {
      padding: 2px;
    }

    img {
      width: 15px;
      height: 15px;
    }
  }
`;

export default PsvrNews;
