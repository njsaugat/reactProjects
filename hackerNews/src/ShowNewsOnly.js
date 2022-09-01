export default function ShowNewsOnly({ newsReport, setNews }) {
  const removeNews = (e) => {
    setNews((prevNews) => {
      return prevNews.filter(
        (newsItem) =>
          newsItem.created_at_i !== +e.target.closest('.newsReport').id
      );
    });
  };
  return (
    <div className="newsReport" id={newsReport.created_at_i}>
      <h4 className="title">{newsReport.title}</h4>
      <div className="meta">
        <span>
          {newsReport.points} by {newsReport.author} |
        </span>
        <span> {newsReport.num_comments} comments</span>
      </div>
      <div className="bottom">
        <a href={newsReport.url} target="blank" rel="noreferrer">
          Read More
        </a>
        <span onClick={removeNews}>Remove</span>
      </div>
    </div>
  );
}
