import { Avatar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(1),
    padding: theme.spacing(1),
    borderRadius: "8px",
    backgroundColor: theme.palette.grey[100]
  },
  head: {
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(1),
    "& .MuiAvatar-root": {
      marginRight: theme.spacing(2)
    }
  }
}));

const Message = ({ login, text, date }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.head}>
        <Avatar>{login[0]}</Avatar>
        <Typography variant="subtitle1">
          {login}
        </Typography>
      </div>
      <Typography variant="body2">
        {text}
      </Typography>
      <Typography variant="caption">
        {new Date(date).toLocaleString()}
      </Typography>
    </div>
  );
};

export default Message;