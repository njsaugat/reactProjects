import React, { useEffect, useState } from 'react';
import getPhotos from './GetPhoto';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const searchIcon = <FontAwesomeIcon icon={faMagnifyingGlass} />;
export default function ShowPhotos() {
  const [photos, setPhotos] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [scrollY, setScroll] = useState(window.scrollY);
  useEffect(() => {
    (async () => {
      const photosData = await getPhotos(searchTerm, 1);
      setPhotos(photosData);
    })();
  }, [searchTerm]);

  useEffect(() => {
    let interval;
    function changeScrollHeight() {
      setScroll(window.scrollY);
    }

    window.addEventListener('scroll', changeScrollHeight);

    async function getExtraPhotos() {
      const photosData = await getPhotos(searchTerm, 1);
      setPhotos((prevPhotos) => {
        return [...prevPhotos, ...photosData];
      });
    }

    if (scrollY + window.innerHeight > document.body.clientHeight) {
      interval = setTimeout(getExtraPhotos, 2000);
    }

    return () => {
      window.removeEventListener('scroll', changeScrollHeight);
      clearInterval(interval);
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
      <div className="photos">
        {photos.map((photo) => {
          return (
            <div className="photo">
              <img src={photo.urls.regular} alt="" srcSet="" />

              <div className="details">
                <div className="left">
                  <span className="name">{photo.user.name}</span>
                  <span className="likes">{photo.likes} </span>
                </div>
                <div className="right">
                  <a
                    href={photo.user.social.portfolio_url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src={photo.user.profile_image.large}
                      alt=""
                      srcSet=""
                    />
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
