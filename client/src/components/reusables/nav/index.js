import "./index.css";

const Nav = ({ username, userimage }) => {
  return (
    <nav>
      <div>
        <img src="./logo.svg" alt="Naya logo" />
      </div>
      {username ? (
        <div className="profile">
          <p className="username"> {username}</p>
          <div className="avatar">
            {" "}
            <img
              src={userimage}
              alt="user's profile "
              width="100%"
              height="auto"
            />{" "}
          </div>
        </div>
      ) : null}
    </nav>
  );
};

export default Nav;
