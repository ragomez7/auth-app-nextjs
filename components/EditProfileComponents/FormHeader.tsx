import React, { useContext } from "react";
import Typography from "@mui/material/Typography";
import { ThemeOptions } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { ModeContext } from "../../pages/_app";

const FormHeader = () => {
  const theme: ThemeOptions = useTheme()
  const { isLight } = useContext(ModeContext)
  return (
    <>
      <Typography
        sx={{
          fontSize: 24,
          fontWeight: 400,
          marginTop: "30.86px",
          color: isLight ? theme?.colors?.black : theme?.colors?.white
        }}
      >
        Change Info
      </Typography>
      <Typography
        sx={{
          fontSize: 13,
          fontWeight: 500,
          marginTop: "4px",
          color: theme?.colors?.grey,
        }}
      >
        Changes will be reflected to every services
      </Typography>
    </>
  );
};

export default FormHeader