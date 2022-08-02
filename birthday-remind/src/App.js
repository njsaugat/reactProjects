// import BirthdayGenerator from './BirthdayCreator';
import './style.css';

// const API_URL = 'https://randomuser.me/api/?results=';
const API_URL = 'https://randomuser.me/api/';
// const LIMIT_USERS = 5;

let usersAll;
async function getUsers() {
  // const users = await fetch(API_URL + LIMIT_USERS, {
  //   accept: 'application/json',
  // });
  const users = await fetch(API_URL, {
    accept: 'application/json',
  });
  const results = await users.json();
  usersAll = [...results.results];
  // BirthdayGeneratorAll(results);
}

getUsers();
// let people =<div></div>;
// function BirthdayGeneratorAll(users) {
//   return (
//     <div>
//       {users.forEach((user) => {
//         return <BirthdayGenerator {...user} />;
//       })}
//     </div>
//   );
//   // BirthdayGenerator(user)

//   // people+=BirthdayGenerator(user);
//   // people+=BirthdayGenerator(user);
//   // <BirthdayGenerator {...user} />;
//   // console.log({ ...people });
//   // console.log(people);
// }

function BirthdayGenerator(user) {
  console.log(user);
  return (
    <div className="people">
      <div className="person">
        <div
          className="left image"
          style={{ backgroundImage: `url(${user.picture})` }}
        ></div>
        <div className="right">
          <div className="name">
            {user.name.first} {user.name.last}
          </div>
          <div className="age">{user.dob.age} years</div>
        </div>
      </div>
    </div>
  );
}

function App() {
  // return <BirthdayGeneratorAll {...usersAll} />;
  return <BirthdayGenerator {...usersAll} />;
}

export default App;
