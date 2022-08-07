import React, { useState } from 'react';

const truncate = (str, max, suffix) =>
  str.length < max
    ? str
    : `${str.substr(
        0,
        str.substr(0, max - suffix.length).lastIndexOf(' ')
      )}${suffix}`;

export default function GetTour({ tour }) {
  const [expanded, setExpanded] = useState(false);

  // const [tourInfo,setInfo]=useState(tour.info)

  return (
    <div className="tour" key={tour.id} id={tour.id}>
      <img src={tour.image} alt={tour.name} />
      <div className="name-price">
        <h3>{tour.name}</h3>
        <div className="price">${tour.price}</div>
      </div>
      <div className="info">
        {expanded ? tour.info : truncate(tour.info, 200, '...')}
        <button className="more" onClick={() => setExpanded(!expanded)}>
          {expanded ? 'Show Less' : 'Read More'}
        </button>
      </div>

      <button
        className="btn"
        onClick={(e) => {
          // const toursUpdated = tours;
          // setTours(
          //   toursUpdated.filter(
          //     (tour) =>
          //       e.target.parentNode.getAttribute('id') !== tour.id
          //   )
          // );
          console.log(e.target.parentNode.getAttribute('id'));
          e.target.parentNode.remove();
          if (document.body.querySelectorAll('.tour').length === 0) {
            return <h2>No tours</h2>;
          }
        }}
      >
        Not Interested
      </button>
    </div>
  );
}
