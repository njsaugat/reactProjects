import { useEffect, useState } from 'react';
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

function infoSetter() {}
function App() {
  const [tours, setTours] = useState([]);
  const [tourInfo, setInfo] = useState('');
  let lock = true;
  // const [isLoading, setLoading] = useState(true);
  const getUsers = async () => {
    const tours = await fetch(API_URL, {
      accept: 'application/json',
    });
    const toursUpdated = await tours.json();
    setTours(toursUpdated);
  };
  useEffect(() => getUsers, []);

  if (tours.length === 0) {
    // setLoading(true)
    return <div className="loading">Loading</div>;
  }

  return (
    <>
      <h2>Our Tours</h2>
      <div className="tours">
        {tours.map((tour) => {
          // const [tourInfo,setInfo]=useState(tour.info)

          return (
            <div className="tour" key={tour.id}>
              <img src={tour.image} alt={tour.name} />
              <div className="name-price">
                <h3>{tour.name}</h3>
                <div className="price">${tour.price}</div>
              </div>
              <div className="info">
                {() => setInfo(tour.info)()}
                {console.log(tourInfo)}
                {/* {lock === true
                  ? (setInfo(tour.info), (lock = false))
                  : tour.info} */}

                {truncate(tourInfo, 200, '...')}
                <button className="more" onClick={() => setInfo(tour.info)}>
                  Read More
                </button>
              </div>

              <button className="btn">Not Interested</button>
            </div>
          );
        })}
      </div>
    </>
  );

  // <div className="App">Project Starter {console.log(tours)}</div>;
}

export default App;
