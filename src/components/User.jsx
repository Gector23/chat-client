import { ListItem, ListItemAvatar, Avatar, ListItemText } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(() => ({
  root: {
    "& .MuiListItemIcon-root": {
      minWidth: "32px"
    }
  }
}));

const User = ({ user, controls }) => {
  const classes = useStyles();

  return (
    <ListItem key={user._id} className={classes.root} >
      <ListItemAvatar>
        <Avatar>{user.login[0]}</Avatar>
      </ListItemAvatar>
      <ListItemText primary={user.login} />
      {controls}
    </ListItem>
  );
};

export default User;