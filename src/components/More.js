import React from "react";
import { Link } from "react-router-dom";
import {
  Grid,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const More = ({ userData }) => {
  const name = userData.name;
  const avatar = userData.avatar_url;
  const repos = userData.public_repos;
  const location = userData.location;
  const company = userData.company;
  const blog = userData.blog;

  return (
    <>
      <Link to="/">
        <Button variant="outlined" color="error">
          Back Home
        </Button>
      </Link>
      <Grid component="main" sx={{ display: "flex" }}>
        <Grid container spacing={5} sx={{ justifyContent: "center" }}>
          <Grid item key={userData.id} xs={3} md={3}>
            <Card>
              <Typography variant="h5" color="primary">
                {name}
              </Typography>
              <br />
              <CardMedia
                component="img"
                height="340px"
                width="80px"
                image={avatar}
                alt={company}
              />

              <CardContent>
                <Button variant="outlined" color="error">
                  Repos:{repos}
                </Button>
                <Button variant="outlined" color="success">
                  Company:{company}
                </Button>
                <Button variant="outlined" color="secondary">
                  Location: {location}
                </Button>

                <Button variant="outlined" color="success">
                  Repos:{blog}
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default More;
