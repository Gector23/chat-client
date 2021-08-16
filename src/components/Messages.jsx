import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Message from "./Message";

const useStyles = makeStyles(() => ({
  message: {
    maxWidth: "50%"
  }
}));

const Messages = ({ messages }) => {
  const classes = useStyles();

  return (
    <Grid container direction="column" alignItems="flex-start">
      {messages.map(message => (
        <Grid className={classes.message} item key={`${message.login}-${message.date}`}>
          <Message login={message.login} text={message.text} date={message.date} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Messages;