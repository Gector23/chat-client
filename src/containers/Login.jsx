import axios from "axios";
import { useForm } from "react-hook-form";
import { Grid, Paper, FormControl, InputLabel, Input, FormHelperText, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const validationRules = {
  login: {
    required: { value: true, message: "Login is required" },
    minLength: { value: 3, message: "Login min length is 3" },
    maxLength: { value: 12, message: "Login max length is 12" },
    validate: {
      specialCharacters: v => /^[A-Za-z0-9]+$/.test(v) ? null : "Special characters are prohibited"
    }
  },
  password: {
    required: { value: true, message: "Password is required" },
    minLength: { value: 4, message: "Password min length is 4" },
    maxLength: { value: 16, message: "Password max length is 16" }
  }
};

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    "& .MuiFormControl-root": {
      marginBottom: theme.spacing(2)
    }
  }
}));

const Login = ({ onLoggedIn }) => {
  const { register, handleSubmit, setError, reset, formState: { errors } } = useForm();
  const classes = useStyles();

  const handleLogin = async data => {
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        login: data.login,
        password: data.password
      });
      onLoggedIn();
      localStorage.setItem("token", res.data.token);
      reset();
    } catch (err) {
      if (err.response.data.message === "Incorrect login") {
        setError("login", {
          message: "Incorrect login"
        });
      }
      else if (err.response.data.message === "Incorrect password") {
        setError("password", {
          message: "Incorrect password"
        });
      } else {
        console.log(err.response.data.message);
      }
    }
  };

  return (
    <Grid container spacing={2} justifyContent="center">
      <Grid item>
        <Paper className={classes.root}>
          <form onSubmit={handleSubmit(handleLogin)}>
            <FormControl fullWidth error={errors.login ? true : false}>
              <InputLabel htmlFor="login-input">Login</InputLabel>
              <Input id="login-input" required aria-describedby="login-input-text" {...register("login", { ...validationRules.login })} />
              <FormHelperText id="login-input-text">{errors.login?.message || "Enter login"}</FormHelperText>
            </FormControl>
            <FormControl fullWidth error={errors.password ? true : false}>
              <InputLabel htmlFor="password-input">Password</InputLabel>
              <Input id="password-input" required aria-describedby="password-input-text" {...register("password", { ...validationRules.password })} />
              <FormHelperText id="password-input-text">{errors.password?.message || "Enter password"}</FormHelperText>
            </FormControl>
            <Button fullWidth variant="outlined" color="primary" type="submite">
              Login
            </Button>
          </form>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Login;