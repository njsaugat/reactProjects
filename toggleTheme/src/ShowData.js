import React, { useContext, useState } from 'react';
import themeData from './data';
import { ThemeContext } from './App';
export default function ShowData() {
  //   console.log(useContext(ThemeContext));
  const theme = useContext(ThemeContext);
  const [mode, setMode] = useState(theme.lightMode);
  return (
    <div
      className="root-container"
      style={{ color: mode.textColor, backgroundColor: mode.backgroundColor }}
    >
      <div className="container">
        <div className="top">
          <h1>Overracted</h1>
          <button
            style={{ backgroundColor: mode.headingColor }}
            onClick={() =>
              mode.textColor === 'white'
                ? setMode(theme.lightMode)
                : setMode(theme.darkMode)
            }
          >
            Toggle
          </button>
        </div>
        <div className="news">
          {themeData.map((news, index) => {
            return (
              <div className="individual" key={index}>
                <h2 style={{ color: mode.headingColor }}>{news.title}</h2>
                <div className="date-timeNeed">
                  <span>{news.date} </span>
                  <span>{news.readTime}</span>
                </div>
                <div className="data">{news.newsData}</div>
              </div>
            );
          })}
          <div className="data"></div>
        </div>
      </div>
    </div>
  );
}
