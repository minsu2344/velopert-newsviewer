import styled from "styled-components";

const NewsItemBlock = styled.div`
  display: flex;

  .thumbnail {
    margin-right: 1rem;
    img {
      display: block;
      width: 160px;
      height: 100px;
      /* 그림 채움 사이즈 변경 */
      object-fit: cover;
    }
  }

  .contents {
    h2 {
      margin: 0;
      a {
        color: black;
      }
    }
    p {
      margin: 0;
      line-height: 1.5;
      margin-top: 0.5rem;
      /* 글자 공백 조정 */
      white-space: normal;
    }
  }

  &+& {
    margin-top: 3rem;
  }
`;

function NewsItem({article}) {
  const {title, description, url, urlToImage} = article;
  return (
    <NewsItemBlock>
      {urlToImage && (
        <div className="thumbnail">
          {/* target은 연결 문서 여는 방법 */}
          {/* 기본 값은 _self(현재 창에서 열기) */}
          {/* _blank는 새 창에서 열기 */}
          <a href={url} target='_blank' rel="noopener noreferrer">
            <img src={urlToImage} alt="thumbnail" />
          </a>
        </div>
      )}
      <div className="contents">
        <h2>
          <a href={url} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </h2>
        <p>{description}</p>
      </div>
    </NewsItemBlock>
  )
}

export default NewsItem;