import React, { Fragment } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "200px",
    },
  },
  button: {
    margin: "15px 0px",
  },
  error: {
    color: "red",
    marginLeft: "8px",
  },
}));

let SignupSchema = yup.object().shape({
  name: yup.string().trim().required("Required"),
  email: yup.string().trim().required("Required").email("Invalid Email"),
  password: yup.string().trim().required("Required").min(3, "Minimum 3 charactor").max(8, "Max 8 charactorr"),
  confirm_password: yup
    .string()
    .trim()
    .required("Required")
    .min(3, "Minimum 3 charactor")
    .max(8, "Max 8 charactorr")
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

export default () => {
  const { handleSubmit, register, errors } = useForm({
    mode: "onBlur | onChange",
    validationSchema: SignupSchema,
  });
  const onSubmit = (values) => console.log(values);

  const classes = useStyles();
  return (
    <Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <div
          style={{
            width: "100%",
            margin: "50px 0px",
            border: "solid 1px blue",
          }}
          className={classes.root}
        >
          <Box display="flex" p={2} bgcolor="background.paper" alignItems="center" justifyContent="center">
            <Grid container>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Grid item xs={12}>
                  <TextField label="Name" type="text" name="name" error={!!errors.name} inputRef={register} />
                  <Grid item xs={12}>
                    {errors.name && <span className={classes.error}>{errors.name.message}</span>}
                  </Grid>
                </Grid>

                <Grid item xs={12}>
                  <TextField label="Email" type="text" name="email" error={!!errors.email} inputRef={register} />
                </Grid>
                <Grid item xs={12}>
                  {errors.email && <span className={classes.error}>{errors.email.message}</span>}
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Password"
                    type="text"
                    name="password"
                    error={!!errors.password}
                    inputRef={register}
                  />
                </Grid>
                <Grid item xs={12}>
                  {errors.password && <span className={classes.error}>{errors.password.message}</span>}
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Confirm Password"
                    type="text"
                    name="confirm_password"
                    error={!!errors.confirm_password}
                    inputRef={register}
                  />
                </Grid>
                <Grid item xs={12}>
                  {errors.confirm_password && <span className={classes.error}>{errors.confirm_password.message}</span>}
                </Grid>
                <Grid item xs={12}>
                  <label htmlFor="contained-button-file">
                    <Button variant="contained" color="primary" className={classes.button} type="submit">
                      Submit
                    </Button>
                  </label>
                </Grid>
              </form>
            </Grid>
          </Box>
        </div>
      </Container>
    </Fragment>
  );
};
