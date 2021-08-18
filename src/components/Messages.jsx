import { useRef, useEffect } from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Message from "./Message";
import InfoMessage from "./InfoMessage";

const useStyles = makeStyles((theme) => ({
  root: {
    overflow: "auto"
  },
  message: {
    marginBottom: theme.spacing(1)
  },
  infoMessage: {
    alignSelf: "center"
  }
}));

const Messages = ({ messages }) => {
  const classes = useStyles();
  const containerRef = useRef(null);

  useEffect(() => {
    const timerId = setInterval(() => {
      containerRef.current.scrollTop = containerRef.current.scrollHeight - containerRef.current.clientHeight;
    }, 10);

    return () => clearInterval(timerId);
  });

  return (
    <Grid ref={containerRef} className={classes.root} container direction="column" alignItems="flex-start" wrap="nowrap">
      {messages.map((message, i) => (
        message.type === "info" ? (
          <Grid item key={i} className={`${classes.message} ${classes.infoMessage}`}>
            <InfoMessage message={message} />
          </Grid>
        ) : (
          <Grid item key={i} className={classes.message}>
            <Message message={message} />
          </Grid>
        )
      ))}
    </Grid>
  );
};

export default Messages;