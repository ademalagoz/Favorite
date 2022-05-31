import React from "react";
import { Box, Input } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const Search = ({ setData, setUserData, setUserName, userName, api, url }) => {
  const repoDataFunc = () => {
    fetch(api)
      .then((res) => res.json())
      .then((result) => setData(result))
      .catch((err) => console.log(err));
  };

  const userDataFunc = () => {
    fetch(url)
      .then((res) => res.json())
      .then((result) => setUserData(result))
      .catch((err) => console.log(err));
  };

  const handleSearch = () => {
    repoDataFunc();
    userDataFunc();
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "20px",
          marginBottom: "5px",
        }}
      >
        <SearchIcon sx={{ marginRight: "10px" }} />
        <Input
          placeholder="Enter Github Username"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          sx={{
            width: "720px",
            color: "rgba(0, 0, 0, 0.6)",
            fontSize: "1.1rem",
          }}
          disableUnderline
        />
        <Stack spacing={2} direction="row">
          <Button onClick={handleSearch} variant="contained">
            Search
          </Button>
        </Stack>
      </Box>
    </>
  );
};

export default Search;
