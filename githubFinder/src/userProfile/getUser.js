export default async function getUser(API_URL) {
  const result = await fetch(API_URL, {
    accept: 'applilcation/json',
  });
  const items = await result.json();
  return items;
}
