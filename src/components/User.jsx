import { ListItem, ListItemAvatar, Avatar, ListItemText } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(() => ({
  root: props => ({
    "& .MuiListItemIcon-root": {
      minWidth: "32px"
    },
    "& .MuiListItemText-root": {
      color: props.color
    }
  })
}));

const User = ({ user, controls }) => {
  const classes = useStyles({ color: user.color });

  return (
    <ListItem key={user._id} className={classes.root} >
      <ListItemAvatar>
        <Avatar src={user.avatar} alt={user.login} />
      </ListItemAvatar>
      <ListItemText primary={user.login} />
      {controls}
    </ListItem>
  );
};

export default User;