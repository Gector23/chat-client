import axios from "axios";
import { useForm } from "react-hook-form";
import { Grid, FormControl, InputLabel, Input, FormHelperText, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const validationRules = {
  login: {
    required: { value: true, message: "Login is required" },
    minLength: { value: 3, message: "Login min length is 3" },
    maxLength: { value: 12, message: "Login max length is 12" }
  },
  password: {
    required: { value: true, message: "Password is required" },
    minLength: { value: 4, message: "Password min length is 4" },
    maxLength: { value: 16, message: "Password max length is 16" }
  }
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    "& .MuiFormControl-root": {
      marginBottom: theme.spacing(2)
    },
  },
}));

const Login = ({ onUserChange }) => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const classes = useStyles();

  const handleLogin = async data => {
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        login: data.login,
        password: data.password
      });

      console.log(res.data);
      onUserChange(res.data.user);
      reset();
    } catch (err) {

    }
  };

  return (
    <div>
      <Grid container justifyContent="center">
        <Grid item xs={12} sm={6} md={4}>
          <form className={classes.root} onSubmit={handleSubmit(handleLogin)}>
            <FormControl error={errors.login ? true : false}>
              <InputLabel htmlFor="login-input">Login</InputLabel>
              <Input id="login-input" required aria-describedby="login-input-text" {...register("login", { ...validationRules.login })} />
              <FormHelperText id="login-input-text">{errors.login?.message || "Enter login"}</FormHelperText>
            </FormControl>
            <FormControl error={errors.password ? true : false}>
              <InputLabel htmlFor="password-input">Password</InputLabel>
              <Input id="password-input" required aria-describedby="password-input-text" {...register("password", { ...validationRules.password })} />
              <FormHelperText id="password-input-text">{errors.password?.message || "Enter password"}</FormHelperText>
            </FormControl>
            <Button variant="outlined" color="primary" type="submite">
              Login
            </Button>
          </form>
        </Grid>
      </Grid>
    </div>
  );
};

export default Login;