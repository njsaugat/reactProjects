import {
  faUser,
  faEnvelopeOpen,
  faCalendarXmark,
  faLocationArrow,
  faPhoneFlip,
  faLock,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
const userIcon = <FontAwesomeIcon icon={faUser} />;
const mailIcon = <FontAwesomeIcon icon={faEnvelopeOpen} />;
const calendarIcon = <FontAwesomeIcon icon={faCalendarXmark} />;
const locationIcon = <FontAwesomeIcon icon={faLocationArrow} />;
const phoneIcon = <FontAwesomeIcon icon={faPhoneFlip} />;
const passwordIcon = <FontAwesomeIcon icon={faLock} />;

// const icons=[userIcon,mailIcon,calendarIcon,locationIcon,phoneIcon,passwordIcon]
const icons = [
  // { id: 1, icon: userIcon, title: 'name', search: ['name.first', 'name.last'] },
  { id: 1, icon: userIcon, title: 'name' },
  { id: 2, icon: mailIcon, title: 'email' },
  { id: 3, icon: calendarIcon, title: 'age' },
  { id: 4, icon: locationIcon, title: 'location' },
  { id: 5, icon: phoneIcon, title: 'phone' },
  { id: 6, icon: passwordIcon, title: 'password' },
];
const API_URL = 'https://randomuser.me/api/';
// const proxy = 'https://cors-anywhere.herokuapp.com/';
export default function RandomPerson() {
  const [person, setPerson] = useState({});
  const [hoverValue, setHoverValue] = useState('');
  const [title, setTitle] = useState('name');
  const [searchedPerson, setSearchedPerson] = useState({});
  const [unlocked, setLock] = useState(true);
  const [buttonValue, setButtonValue] = useState('Random user');
  // const personRef = useRef(person);

  async function getRandomUser() {
    const result = await fetch(API_URL, { mode: 'cors' });
    const { results } = await result.json();
    // return results[0];
    setPerson(results[0]);
    console.log(results[0]['name']['first']);
    setHoverValue(results[0].name.first + ' ' + results[0].name.last);
  }
  useEffect(() => {
    if (unlocked) {
      getRandomUser();
      setLock(false);
      setButtonValue('Random User');
    }
    if (JSON.stringify(person) !== '{}') {
      setSearchedPerson({
        name: person.name.first + ' ' + person.name.last,
        email: person.email,
        age: person.dob.age,
        location:
          person.location.street.number + ' ' + person.location.street.name,
        phone: person.phone,
        password: person.login.password,
      });
    }
    // return () => {
    //   setPerson({});
    //   setLock(true);
    // };
  }, [unlocked, person]);

  if (JSON.stringify(person) === '{}') {
    return (
      <div className="container">
        <span>Loading...</span>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="top-content"></div>
      <div className="bottom-content">
        <div className="image">
          <img src={person.picture.large} alt="" />
        </div>
        <div className="content">
          <div className="title">
            <span>My {title} is</span>
            <div className="heading">
              {/* {individual.name.first} {individual.name.last} */}
              {hoverValue}
            </div>
          </div>
          <div className="icons">
            {icons.map((icon) => {
              return (
                <span
                  className="icon"
                  key={icon.id}
                  onMouseOver={(e) => {
                    setHoverValue(searchedPerson[icon.title]);
                    setTitle(icon.title);
                  }}
                >
                  {icon.icon}
                </span>
              );
            })}
          </div>
          <button
            className="btn"
            onClick={() => {
              // getRandomUser();
              setLock(true);
              setButtonValue('loading...');
            }}
          >
            {buttonValue}
          </button>
        </div>
      </div>
    </div>
  );
}
