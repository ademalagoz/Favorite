import React from "react";
import Layout from "./Layout";
import Profile from "./Profile";
import Search from "./Search";

const Home = ({
  data,
  setData,
  setUserData,
  setUserName,
  userData,
  userName,
  api,
  url,
}) => {
  return (
    <>
      <Search
        data={data}
        setData={setData}
        setUserData={setUserData}
        setUserName={setUserName}
        userData={userData}
        userName={userName}
        api={api}
        url={url}
      />
      {userName && (
        <Profile data={data} userData={userData} userName={userName} />
      )}
      <Layout />
    </>
  );
};

export default Home;
