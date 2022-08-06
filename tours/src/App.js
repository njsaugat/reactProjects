import { useEffect, useState } from 'react';
import GetTour from './GetTour';
import './style.css';
const API_URL = 'https://course-api.com/react-tours-project';

// function getAptWords(info){
//   const infoArr=info.splice('')

//   return infoArr.join('')
// }

const truncate = (str, max, suffix) =>
  str.length < max
    ? str
    : `${str.substr(
        0,
        str.substr(0, max - suffix.length).lastIndexOf(' ')
      )}${suffix}`;

// function removeItems() {}
// function infoSetter() {}
let lock = true;

function App() {
  const [tours, setTours] = useState([]);
  // const [tourInfo, setInfo] = useState('');
  const [expanded, setExpanded] = useState(false);
  // const [isLoading, setLoading] = useState(true);
  const getUsers = async () => {
    const tours = await fetch(API_URL, {
      accept: 'application/json',
    });
    const toursUpdated = await tours.json();
    setTours(toursUpdated);
  };
  useEffect(() => getUsers, []);

  if (tours.length === 0 && lock) {
    // setLoading(true)
    lock = false;
    return <div className="loading">Loading</div>;
  } else if (tours.length === 0) {
    return <div className="loading">No Tours Remaining</div>;
  }

  return (
    <>
      <h2>Our Tours</h2>
      <div className="tours">
        {tours.map((tour) => {
          // const [tourInfo,setInfo]=useState(tour.info)

          return (
            // <div className="tour" key={tour.id} id={tour.id}>
            //   <img src={tour.image} alt={tour.name} />
            //   <div className="name-price">
            //     <h3>{tour.name}</h3>
            //     <div className="price">${tour.price}</div>
            //   </div>
            //   <div className="info">
            //     {/* {() => setInfo(tour.info)()}
            //     {console.log(tourInfo)} */}
            //     {/* {lock === true
            //       ? (setInfo(tour.info), (lock = false))
            //       : tour.info} */}

            //     {expanded ? tour.info : truncate(tour.info, 200, '...')}
            //     <button className="more" onClick={() => setExpanded(!expanded)}>
            //       {expanded ? 'Show Less' : 'Read More'}
            //     </button>
            //   </div>

            //   <button
            //     className="btn"
            //     onClick={(e) => {
            //       const toursUpdated = tours;
            //       setTours(
            //         toursUpdated.filter(
            //           (tour) =>
            //             e.target.parentNode.getAttribute('id') !== tour.id
            //         )
            //       );
            //     }}
            //   >
            //     Not Interested
            //   </button>
            // </div>
            <GetTour tour={tour} />
          );
        })}
      </div>
    </>
  );

  // <div className="App">Project Starter {console.log(tours)}</div>;
}

export default App;
