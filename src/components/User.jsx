import { ListItem, ListItemAvatar, Avatar, ListItemText } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(theme => ({
  root: props => ({
    "& .MuiListItemIcon-root": {
      minWidth: "32px"
    },
    "& .MuiListItemText-root": {
      color: props.color && props.shade ? theme.palette[props.color][props.shade] : "inherit"
    }
  })
}));

const User = ({ user, controls }) => {
  const classes = useStyles(user.textColor);

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