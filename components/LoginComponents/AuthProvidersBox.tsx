import React, { useContext } from "react";
import { signIn } from "next-auth/react";
import Box from "@mui/material/Box";
import GoogleIcon from "@mui/icons-material/Google";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import IconButton from "@mui/material/IconButton";
import { ModeContext } from "../../pages/_app";

interface AuthProversBoxProps {
  providers: {
    google: {
      id;
    };
    twitter: {
      id;
    };
    github: {
      id;
    };
  };
}
const AuthProvidersBox: React.FC<AuthProversBoxProps> = ({ providers }) => {
  const iconDim = 40;
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
