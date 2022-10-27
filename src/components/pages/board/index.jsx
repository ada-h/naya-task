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
          <ul>
            <li> Sketch 1</li>
            <li> Sketch 2</li>
            <li> Sketch 3</li>
          </ul>
        </div>
        <div className="users card">
          <ul>
            <li> Collaborator 1</li>
            <li> Collaborator 2</li>
            <li> Adaobi Osakwe</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Board;
