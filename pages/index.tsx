import React from "react";
import { useSession, signOut } from "next-auth/react";
import Layout from "../components/Layout";
import { Button } from "@mui/material";
import Link from "next/link";
import { Box } from "@mui/material";
import SignIn from "./login";

const Index = (props) => {
  const { data: session, status } = useSession();
  return (
    <Layout>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: 'column',
          marginTop: 30,
        }}
      >
        {!session ? (
          <Link href="/login">
            <Button variant="outlined">Login</Button>
          </Link>
        ) : undefined}
        {session ? (
          <>
          <Link href="/profile">
            <Button variant="outlined">Profile</Button>
          </Link>
          <Button sx={{
            marginTop: 3,
          }} variant="outlined" onClick={() => signOut()} >Logout</Button>
          </>
        ) : undefined}
      </Box>
    </Layout>
  );
};

export default Index;
