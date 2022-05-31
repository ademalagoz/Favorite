import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Grid, Button, CardActions } from "@mui/material";

const Layout = () => {
  const [data, setData] = useState([]);

  const api = `https://api.github.com/users`;

  useEffect(() => {
    fetch(api)
      .then((res) => res.json())
      .then((result) => setData(result))
      .catch((err) => console.log(err));
  }, [api]);

  return (
    <>
      <Grid component="main">
        <Grid container spacing={2}>
          {data.map((person) => (
            <Grid item key={person.id} xs={3} md={3}>
              <Card>
                <CardMedia
                  component="img"
                  height="240px"
                  width="40px"
                  image={person.avatar_url}
                  alt={person.login}
                />

                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {person.login}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {person.login}
                  </Typography>
                </CardContent>
                <CardActions
                  disableSpacing
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <Button variant="outlined">More</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </>
  );
};

export default Layout;
