export default async function getCocktail(URL) {
  const result = await fetch(URL, {
    accept: 'application/json',
  });
  const { drinks } = await result.json();
  return drinks;
}
