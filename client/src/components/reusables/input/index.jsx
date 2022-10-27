import "./index.css";

const Input = ({ type, placeholder, value, onChange, errMsg }) => {
  return (
    <fieldset>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="form-control primary-input"
      />
      <p className="err"> {errMsg}</p>
    </fieldset>
  );
};

export default Input;
