import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";

const Loader = () => {
  const classes = makeStyles();
  return (
    <>
      <Backdrop className={classes.backdrop} open>
        Loading...
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  );
};

export default Loader;
