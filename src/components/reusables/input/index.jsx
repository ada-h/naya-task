import "./index.css";

const Input = ({ type, placeholder, value }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      className="primary-input"
    />
  );
};

export default Input;
