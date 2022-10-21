import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "../../node_modules/axios/index";
import NewsItem from "./NewsItem";

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const sampleArticle = {
  title: '제목',
  description: '내용',
  url: 'https://google.com',
  urlToImage: 'https://via.placeholder.com/160',
};

function NewsList() {
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    // async를 사용하는 함수 따로 선언
    (async function fetchData() {
      setLoading(true);
      try {
        const res = await axios.get(`https://newsapi.org/v2/top-headlines?country=kr&apiKey=${process.env.REACT_APP_API_KEY}`);
        setArticles(res.data.articles);
      }
      catch(e) {
        console.log(e);
      }
      setLoading(false);
    })();
  }, [])

  // 대기 중일 때
  if(loading) {
    return <NewsListBlock>대기 중...</NewsListBlock>
  }

  // 아직 articles 값이 설정되 않았을 때
  if(!articles) {
    return null;
  }

  // articles 값이 유효할 때
  return (
    <NewsListBlock>
      {articles.map(article => (
        <NewsItem key={article.url} article={article} />
      ))}
    </NewsListBlock>
  )
}

export default NewsList;