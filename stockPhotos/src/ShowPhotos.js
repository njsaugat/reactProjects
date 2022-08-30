import React, { useEffect, useState } from 'react';
import getPhotos from './GetPhoto';
import {
  // faCircleNotch,
  faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ShowPhoto from './ShowPhoto';

let page = 1;
function getPageNumber() {
  return page++;
}
const setPageNumberToOne = () => {
  page = 1;
};
const searchIcon = <FontAwesomeIcon icon={faMagnifyingGlass} />;
// const loadingIcon = <FontAwesomeIcon icon={faCircleNotch} />;

function Loading() {
  return <div className="loading">{/* <span>{loadingIcon}</span> */}</div>;
}

function ShowSearchResults({ searchTerm }) {
  return (
    <div className="search-results">
      {`Search Results for`}
      <span>"{searchTerm.toUpperCase()}" </span>
    </div>
  );
}
export default function ShowPhotos() {
  const [photos, setPhotos] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [scrollY, setScroll] = useState(window.scrollY);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setPageNumberToOne();
    (async () => {
      const photosData = await getPhotos(searchTerm, getPageNumber());
      setPhotos(photosData);
    })();
    return () => {
      setPhotos([]);
    };
  }, [searchTerm]);

  useEffect(() => {
    let interval;
    function changeScrollHeight() {
      setScroll(window.scrollY);
    }

    window.addEventListener('scroll', changeScrollHeight);

    async function getExtraPhotos() {
      const photosData = await getPhotos(searchTerm, getPageNumber());
      setPhotos((prevPhotos) => {
        return [...prevPhotos, ...photosData];
      });
    }

    if (scrollY + window.innerHeight > document.body.clientHeight) {
      interval = setTimeout(() => {
        getExtraPhotos();
        setLoading(false);
      }, 2000);
      setLoading(true);
    }

    return () => {
      window.removeEventListener('scroll', changeScrollHeight);
      clearInterval(interval);
      // setSearchTerm('')
    };
  }, [scrollY, searchTerm]);

  console.log(photos);
  if (photos === null) {
    return <span>Loading</span>;
  }
  return (
    <div className="container">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search Photos..."
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              setSearchTerm(e.target.value);
              console.log(e.target.value);
              console.log(searchTerm);
              e.target.value = '';
            }
          }}
        />
        <span className="search">{searchIcon}</span>
      </div>
      {searchTerm && <ShowSearchResults searchTerm={searchTerm} />}
      <div className="photos">
        {photos.map((photo, index) => {
          return <ShowPhoto photo={photo} key={index} />;
        })}
      </div>
      {loading && <Loading />}
    </div>
  );
}
