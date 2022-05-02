// import Backdrop from "@material-ui/core/Backdrop";
// import CircularProgress from "@material-ui/core/CircularProgress";
// import { makeStyles } from "@material-ui/core/styles";

import { Rings } from "react-loader-spinner";
import { Circles } from "react-loader-spinner";
import { Bars } from "react-loader-spinner";
import { ThreeDots } from "react-loader-spinner";

const Loader = () => {
  //   const classes = makeStyles();
  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100">
      {/* Loading... */}
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
/* <Backdrop className={classes.backdrop} open>
        Loading...
        <CircularProgress color="inherit" />
      </Backdrop> */
