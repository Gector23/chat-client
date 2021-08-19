import {
  AppBar,
  Toolbar,
  Typography,
  Button,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  title: {
    flexGrow: 1,
  },
}));

const Header = ({ onLoggedOut }) => {
  const classes = useStyles();

  return (
    <AppBar>
      <Toolbar>
        <Typography variant="h4" className={classes.title}>
          Chat
        </Typography>
        <Button color="inherit" onClick={onLoggedOut}>
          Log Out
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
