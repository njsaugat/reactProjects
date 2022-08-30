export default function ShowPhoto({ photo }) {
  return (
    <div className="photo">
      <img src={photo.urls.regular} alt="" srcSet="" />

      <div className="details">
        <div className="left">
          <span className="name">{photo.user.name}</span>
          <span className="likes">{photo.likes} likes </span>
        </div>
        <div className="right">
          <a
            href={photo.user.social.portfolio_url}
            target="_blank"
            rel="noreferrer"
          >
            <img src={photo.user.profile_image.large} alt="" srcSet="" />
          </a>
        </div>
      </div>
    </div>
  );
}
