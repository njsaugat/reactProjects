export default function ShowUser({ user }) {
  return (
    <div className="user" key={user.id}>
      <img src={user.avatar_url} alt={user.login} />
      <span className="user-name">{user.login}</span>
      <a href={user.html_url} target="blank" rel="noreferrer">
        View Profile
      </a>
    </div>
  );
}
