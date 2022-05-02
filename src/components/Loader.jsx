import { ThreeDots } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100">
      <ThreeDots
        height="100"
        width="100"
        color="black"
        ariaLabel="Loading"
      ></ThreeDots>
    </div>
  );
};

export default Loader;
