import { Avatar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(1),
    borderRadius: '8px',
    backgroundColor: theme.palette.grey[100],
  },
  head: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(1),
    '& .MuiAvatar-root': {
      marginRight: theme.spacing(2),
    },
  },
  body: {
    wordBreak: 'break-all',
  },
  coloredText: (props) => ({
    color: props.color,
  }),
}));

const Message = ({ message }) => {
  const classes = useStyles({ color: message.color });

  return (
    <div className={classes.root}>
      <div className={classes.head}>
        <Avatar>{message.author[0]}</Avatar>
        <Typography className={classes.coloredText} variant="subtitle1">
          {message.author}
        </Typography>
      </div>
      <Typography className={`${classes.body} ${classes.coloredText}`} variant="body2">
        {message.text}
      </Typography>
      <Typography variant="caption">{new Date(message.date).toLocaleString()}</Typography>
    </div>
  );
};

export default Message;
