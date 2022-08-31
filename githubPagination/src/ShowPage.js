export default function ShowPage({ page, setPageNumber, selectedPage, index }) {
  return (
    <button
      className={selectedPage === +page + 1 ? 'page selected' : 'page'}
      key={index}
      onClick={(e) => setPageNumber(+e.target.innerText)}
    >
      {+page + 1}
    </button>
  );
}
