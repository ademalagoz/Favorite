import React from "react";
import { Link } from "react-router-dom";
import {
  Grid,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const Profile = ({ data, userData, userName }) => {
  const name = userData.name;
  const bio = userData.bio;
  const followers = userData.followers;
  const following = userData.following;

  const profileImage = data.map((profile) => profile.owner.avatar_url);

  const allLanguages = data.map((languages) => languages.language);

  const favoriteLanguage = () =>
    allLanguages.reduce(
      (acc, cur) =>
        allLanguages.filter((arr) => arr === acc).length >=
        allLanguages.filter((arr) => arr === cur).length
          ? acc
          : cur,

      null
    );

  return (
    <>
      <Grid component="main" sx={{ display: "flex" }}>
        <Grid container spacing={5} sx={{ justifyContent: "center" }}>
          <Grid item key={userData.id} xs={3} md={3}>
            <Card>
              <Typography variant="h5" color="primary">
                {favoriteLanguage() !== null ? (
                  <>
                    {userName}'s Favourite Language is: <br />
                    <Button variant="contained" color="error">
                      {favoriteLanguage()}
                    </Button>
                  </>
                ) : (
                  <>Favourite Language is: null</>
                )}
              </Typography>
              <br />
              <CardMedia
                component="img"
                height="340px"
                width="80px"
                image={profileImage}
                alt={name}
              />

              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {bio}
                </Typography>
              </CardContent>
              <CardActions
                disableSpacing
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <Button variant="outlined" color="success">
                  Followers:{followers}
                </Button>
                <Button variant="outlined" color="secondary">
                  Following:{following}
                </Button>

                <Link to="/more">
                  <Button variant="outlined" color="error">
                    More
                  </Button>
                </Link>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
export default Profile;
