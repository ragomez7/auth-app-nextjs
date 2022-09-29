import React, { useContext } from "react";
import Box from "@mui/material/Box";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import { ThemeOptions } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { ModeContext } from "../../pages/_app";

const AuthProvidersBox = () => {
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
      <GoogleIcon
        sx={{
          width: iconDim,
          height: iconDim,
          "& path": {
            fill: isLight ? undefined : "#f48a18",
          },
        }}
      />
      <FacebookIcon
        sx={{
          width: iconDim,
          height: iconDim,
          "& path": {
            fill: isLight ? undefined : "#44649e",
          },
        }}
      />
      <TwitterIcon
        sx={{
          width: iconDim,
          height: iconDim,
          "& path": {
            fill: isLight ? undefined : "#1ca4f4",
          },
        }}
      />
      <GitHubIcon
        sx={{
          width: iconDim,
          height: iconDim,
          "& path": {
            fill: isLight ? undefined : "white",
          },
        }}
      />
    </Box>
  );
};

export default AuthProvidersBox;
