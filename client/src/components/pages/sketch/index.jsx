import Canvas from "./canvas";
import Nav from "../../reusables/nav";

const Board = () => {
  return (
    <section>
      <Nav
        userimage={"https://i.ytimg.com/vi/fUWrhetZh9M/maxresdefault.jpg"}
        username={"Adaobi Osakwe"}
      />
      <div>
        <Canvas />
        <div className="sketches card">
          <div>
            <p> SKETCHES</p>
          </div>
          <ul>
            <li> Sketch 1</li>
            <li> Sketch 2</li>
            <li className="active"> Sketch 3</li>
          </ul>
          <p> + Add new sketch</p>
        </div>
        <div className="collaborators card">
          <div>
            <p> USERS</p>
          </div>
          <ul>
            <li> Collaborator 1</li>
            <li> Collaborator 2</li>
            <li className="active"> Adaobi Osakwe</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Board;
