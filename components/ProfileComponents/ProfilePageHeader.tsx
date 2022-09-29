import React, { useContext } from "react";
import Typography from "@mui/material/Typography";
import { ThemeOptions } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { ModeContext } from "../../pages/_app";


const ProfilePageHeader = () => {
  const theme: ThemeOptions = useTheme();
  const { isLight } = useContext(ModeContext);
  return (
    <>
      <Typography
        sx={{
          height: 49,
          fontSize: 36,
          fontWeight: 400,
          color: isLight ? theme?.colors?.black : theme?.colors?.white,
        }}
      >
        Personal info
      </Typography>
      <Typography
        sx={{
          marginTop: 0.8,
          height: 25,
          fontSize: 18,
          fontWeight: 300,
          color: isLight ? theme?.colors?.black : theme?.colors?.white,
        }}
      >
        Basic info, like your name and photo
      </Typography>
    </>
  );
};

export default ProfilePageHeader;
