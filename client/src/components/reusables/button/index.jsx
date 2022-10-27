import "./index.css";

const Button = ({ title, type, onClick }) => {
  return (
    <button onClick={onClick} className={type}>
      {" "}
      {title}
    </button>
  );
};

export default Button;
