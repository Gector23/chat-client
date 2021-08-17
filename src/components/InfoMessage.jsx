import { Typography } from "@material-ui/core";

const InfoMessage = ({ message }) => {
  return (
    <Typography>
      {message.text}
    </Typography>
  );
};

export default InfoMessage;