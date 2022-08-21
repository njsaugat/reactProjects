export default async function getCocktail(URL) {
  const result = await fetch(URL, {
    accept: 'application/json',
  });
  const { drinks } = await result.json();
  console.log(drinks);
  console.log(drinks);
  return drinks;
}
