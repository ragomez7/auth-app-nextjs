import React from "react";
import Layout from "../components/Layout";
import { Button } from "@mui/material";
import Link from "next/link";
import { Box } from "@mui/material";
import SignIn from "./login";

const Index = (props) => {
  return (
    <Layout>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 30
        }}
      >
        <Link href="/login">
          <Button
            variant="outlined"
            sx={{
              backgroundColor: "black",
            }}
          >
            Login
          </Button>
        </Link>
      </Box>
    </Layout>
  );
};

export default Index;
