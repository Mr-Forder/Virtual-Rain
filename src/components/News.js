import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import axios from "axios";
import { dummyNews } from "../dummyData/dummyNews";
import LottieNoImage from "./LottieNoImage";
import demoImg from "../img/demoImg.png";
const News = ({ query, title }) => {
  // NEWS
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

  if (!news) return "Loading News...";
  return (
    <div>
      <NewsContainer>
        <h3>{title}</h3>
        {news?.slice(0, 5).map((item) => (
          <a href={item.url} target="_blank" rel="noreferrer">
            <NewsCard key={item.id}>
              <img
                style={{
                  maxWidth: "100px",
                  maxHeight: "100px",
                }}
                src={item?.image?.thumbnail?.contentUrl || demoImg}
                alt={item.name}
              />
              <div className="news-feature">
                <h2>{item.name.substring(0, 83)}...</h2>
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
            </NewsCard>
          </a>
        ))}
      </NewsContainer>
    </div>
  );
};
const NewsCard = styled(motion.div)`
  display: flex;
background-color: rgba(10, 10, 10, 0.5);
  flex-direction: row;
  color: white;
  padding: 15px 10px 15px 10px;
  width: 30rem;
  height: 120px;
   @media only screen and (max-width: 900px) {
    width:100%;
  }
  :hover{
    border: solid #fffbfbd8 1px;
  }
  }

  h2 {
    font-size: 0.8rem;
  }
  p {
    font-size: 0.5rem;
    color: white;
    
  }
  

  .news-feature {
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    text-align: left;
    padding-left: 5px;

    height: 100px;
    h2 {
      padding-bottom: 6px;
          color: #ED1B7A;
    }
    h2,
    p {
      padding-left: 3px;
    }
  
  }
  .provider-container {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    p {
      padding: 2px;
    }

    img {
      width: 15px;
      height: 15px;
    }
  }
`;

const NewsContainer = styled(motion.div)`
  align-items: flex-start;
  padding-top: 1rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  h3 {
    padding-left: 10px;
  }
`;
export default News;
