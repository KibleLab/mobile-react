import {makeStyles} from '@material-ui/core/styles';

const useStyle = makeStyles({
  root: {
    backgroundColor: 'white',
    position: 'fixed',
    width: '100%',
    height: '100%',
    left: 0,
    top: '4.1rem',
  },
});

const BodyFrame = (props) => {
  const classes = useStyle();
  return <div className={classes.root} />;
};

export default BodyFrame;