import { Paper, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Messages from './Messages';
import ChatInput from './ChatInput';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '80vh',
    padding: theme.spacing(2),
    '& .MuiGrid-container': {
      height: '100%',
    },
  },
  messages: {
    height: '80%',
  },
}));

const ChatBoard = ({ messages, inputDisabled, onMessage }) => {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Grid container direction="column" justifyContent="space-between" wrap="nowrap">
        <Grid className={classes.messages} item>
          <Messages messages={messages} />
        </Grid>
        <Grid item>
          <ChatInput onMessage={onMessage} disabled={inputDisabled} />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default ChatBoard;
