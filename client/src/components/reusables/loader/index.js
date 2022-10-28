import { PulseLoader } from "react-spinners";

const Loader = ({ size, color }) => {
  return (
    <div className="sweet-loading">
      <PulseLoader
        size={size ? size : 5}
        color={color ? color : "#ffffff"}
        loading={true}
      />
    </div>
  );
};

export default Loader;
