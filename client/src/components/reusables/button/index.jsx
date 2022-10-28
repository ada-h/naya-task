import "./index.css";

const Button = ({ title, type, onClick }) => {
  return (
    <button data-testid="primary" onClick={onClick} className={type}>
      {" "}
      {title}
    </button>
  );
};

export default Button;
