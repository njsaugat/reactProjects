import React, { useEffect, useRef, useState } from 'react';
import ShowNewsOnly from './ShowNewsOnly';
import ShowPaging from './ShowPaging';
const API_ENDPOINT = 'https://hn.algolia.com/api/v1/search?';

function ShowLoading() {
  return <div className="loader"></div>;
}
export default function ShowNews() {
  const [news, setNews] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const searchingTerm = useRef('');
  const [pageNumber, setPageNumber] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  useEffect(() => {
    if (searchTerm !== searchingTerm.current) {
      setPageNumber(0);
    }

    let API_URL = `${API_ENDPOINT}query=${searchTerm}&page=${pageNumber}`;

    async function getNews() {
      const newsData = await fetch(API_URL, { accept: 'application/json' });
      const newsReports = await newsData.json();
      const hits = newsReports.hits;
      setTotalPages(newsReports.nbPages);

      setNews(hits);
    }
    getNews();

    return () => {
      // console.log(searchTerm)-->cleaner func-> runs first--> here the value of searchterm is not updated
      searchingTerm.current = searchTerm;
      setNews([]);
    };
  }, [searchTerm, pageNumber]);

  return (
    <div className="container">
      <h1>Search Hacker News</h1>
      <input
        type="text"
        ref={searchingTerm}
        placeholder="Search News..."
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            e.preventDefault();
            setSearchTerm(e.target.value);
            e.target.value = '';
          }
        }}
      />
      <ShowPaging
        totalPages={totalPages}
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
      />
      {(news === null || news.length === 0) && <ShowLoading />}
      <div className="news">
        {news.map((newsReport) => {
          return (
            <ShowNewsOnly
              newsReport={newsReport}
              setNews={setNews}
              key={newsReport.created_at_i}
            />
          );
        })}
      </div>
    </div>
  );
}
