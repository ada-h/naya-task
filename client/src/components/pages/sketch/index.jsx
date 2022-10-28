import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import Canvas from "./canvas";
import Nav from "../../reusables/nav";
import "./index.css";

const Board = () => {
  const auth = useSelector((state) => state.UserReducer.auth);
  const user = useSelector((state) => state.UserReducer.user);

  if (!auth) {
    return <Navigate replace to="/" />;
  } else {
    return (
      <section>
        <Nav
          userimage={"https://i.ytimg.com/vi/fUWrhetZh9M/maxresdefault.jpg"}
          username={user.firstname + " " + user.lastname}
        />
        <div>
          <Canvas />
          <div className="sketches card">
            <div className="header">
              <p> SKETCHES</p>
            </div>
            <ul>
              <li> Sketch 1</li>
              <li> Sketch 2</li>
              <li className="active"> Sketch 3</li>
            </ul>
            <p className="add"> + Add new sketch</p>
          </div>
          <div className="collaborators card">
            <div>
              <p> USERS</p>
            </div>
            <ul>
              <li> Collaborator 1</li>
              <li> Collaborator 2</li>
              <li className="active">
                {" "}
                {user.firstname + " " + user.lastname}
              </li>
            </ul>
          </div>
          <div className="settings">
            <ul>
              <li>
                {" "}
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Eraser_icon.svg/1024px-Eraser_icon.svg.png"
                  alt="eraser"
                  height="30px"
                />
              </li>
              <li>
                <label className="switch">
                  <input type="checkbox" checked />
                  <span className="slider round"></span>
                </label>
              </li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
};

export default Board;
