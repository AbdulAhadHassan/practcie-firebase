import React, { FC, ReactElement } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";

function Footer(){
    return(
        <Box
        className="bg-slate-800"
        sx={{
          width: "100%",
          height: "auto",
          backgroundColor: "Secoundary.main",
          paddingTop: "1rem",
          paddingBottom: "1rem",
        }}
      >
        <Container maxWidth="lg">
          <Grid container direction="column" alignItems="center">
            <Grid item xs={12}>
              <Typography color="white" variant="h5">
                Incomplete web
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography color="white" className="text-gray-50	" variant="subtitle1">
                {`${new Date().getFullYear()} | Abu Bakar | Salal | Sameer`}
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    )
}


export default Footer