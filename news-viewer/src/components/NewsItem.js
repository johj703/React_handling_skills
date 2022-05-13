import styled from 'styled-components';

const NewsItemBlack = styled.div`
    display: flex;
    .thumbnail {
        margin-right: 1rem;
        img {
            display: block;
            width: 160px;
            height: 100px;
            object-fit: cover;
        }
    }
    .content {
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
            white-space: normal;
        }
    }
    & + & {
        margin-top: 3rem;
    }
`;
const NewsItem = ({ article }) => {
    const { title, description, url, urlToImage } = article;
    return (
        <NewsItemBlack>
            {urlToImage && (
                <div className="thumbnail">
                    <a href={url} target="_blank" rel="noopener npreferrer">
                        <img src={urlToImage} alt={thumbnail}/>
                    </a>
                </div>
            )}
            <div className="contents">
                <h2>
                    <a herf={url} target="_blank" rel="noopener noopener">
                        {title}
                    </a>
                </h2>
                <p>{description}</p>
            </div>
        </NewsItemBlack>
    );
};

export default NewsItem;