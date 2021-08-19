import { useForm } from 'react-hook-form';
import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  Button,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const validationRules = {
  message: {
    required: { value: true, message: 'Message is required' },
    maxLength: { value: 200, message: 'Message max length is 200' },
  },
};

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
}));

const ChatInput = ({ onMessage, disabled }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const classes = useStyles();

  const handleMessage = (data) => {
    onMessage(data.message);

    reset();
  };

  return (
    <form className={classes.root} onSubmit={handleSubmit(handleMessage)}>
      <FormControl error={!!errors.message} disabled={disabled}>
        <InputLabel htmlFor="message-input">Message</InputLabel>
        <Input
          id="message-input"
          required
          aria-describedby="message-input-text"
          {...register('message', { ...validationRules.message })}
        />
        <FormHelperText id="message-input-text">
          {errors.message?.message || 'Type a message'}
        </FormHelperText>
      </FormControl>
      <Button variant="outlined" color="primary" type="submite" disabled={disabled}>
        Send
      </Button>
    </form>
  );
};

export default ChatInput;
