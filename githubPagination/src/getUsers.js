export default async function getUsers() {
  const API_URL = 'https://api.github.com/users?per_page=100';
  const result = await fetch(API_URL, { accept: 'application/json' });
  const userData = await result.json();
  return userData;
}
