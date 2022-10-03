import React, { useContext, useEffect } from "react";
import { signIn } from "next-auth/react";
import Box from "@mui/material/Box";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import IconButton from "@mui/material/IconButton";
import { ThemeOptions } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { ModeContext } from "../../pages/_app";

const AuthProvidersBox = ({ providers }) => {
  console.log(providers);

  const iconDim = 40;
  const theme: ThemeOptions = useTheme();
  const { isLight } = useContext(ModeContext);
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        marginTop: "30px",
        marginX: "30px",
      }}
    >
      <IconButton
        onClick={() => signIn(providers.google.id)}
        sx={{
          padding: 0,
        }}
      >
        <GoogleIcon
          sx={{
            width: iconDim,
            height: iconDim,
            "& path": {
              fill: isLight ? undefined : "#f48a18",
            },
          }}
        />
      </IconButton>
      {/* <FacebookIcon
        sx={{
          width: iconDim,
          height: iconDim,
          "& path": {
            fill: isLight ? undefined : "#44649e",
          },
        }}
      /> */}
      <IconButton onClick={() => signIn(providers.twitter.id)}>
        <TwitterIcon
          sx={{
            width: iconDim,
            height: iconDim,
            "& path": {
              fill: isLight ? undefined : "#1ca4f4",
            },
          }}
        />
      </IconButton>
      <IconButton
        onClick={() => signIn(providers.github.id)}
        sx={{
          padding: 0,
        }}
      >
        <GitHubIcon
          sx={{
            width: iconDim,
            height: iconDim,
            "& path": {
              fill: isLight ? undefined : "white",
            },
          }}
        />
      </IconButton>
    </Box>
  );
};

export default AuthProvidersBox;
