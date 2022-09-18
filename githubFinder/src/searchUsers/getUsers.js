export default async function getUsers(searchTerm) {
  const API_URL = `https://api.github.com/search/users?q=`;
  const result = await fetch(API_URL + searchTerm, {
    accept: 'applilcation/json',
  });
  const { items } = await result.json();
  return items;
}
