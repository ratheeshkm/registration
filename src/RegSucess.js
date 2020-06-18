import React, { Fragment } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
//import { makeStyles } from "@material-ui/core/styles";
/*
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));
*/
const RegSucess = () => {
  //const { classes } = useStyles();
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
        >
          <Box
            display="flex"
            p={2}
            bgcolor="background.paper"
            alignItems="center"
            justifyContent="center"
          >
            Success
          </Box>
        </div>
      </Container>
    </Fragment>
  );
};

export default RegSucess;
