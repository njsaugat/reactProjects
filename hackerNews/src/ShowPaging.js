export default function ShowPaging({ totalPages, setPageNumber, pageNumber }) {
  return (
    <div className="paging">
      <button
        className="btn"
        onClick={() => {
          setPageNumber((prevPage) => {
            if (prevPage === 0) {
              return (prevPage = totalPages);
            }
            return prevPage - 1;
          });
        }}
      >
        Prev
      </button>
      {pageNumber + 1} of {totalPages}
      <button
        className="btn"
        onClick={() => {
          setPageNumber((prevPage) => {
            if (prevPage === totalPages) {
              return (prevPage = 0);
            }
            return prevPage + 1;
          });
        }}
      >
        Next
      </button>
    </div>
  );
}
