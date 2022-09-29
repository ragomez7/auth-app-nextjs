import React, { ReactNode, useContext } from "react";
import { ThemeOptions } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { ModeContext } from "../pages/_app";
import Header from "./Header";

type Props = {
  children: ReactNode;
};

const Layout: React.FC<Props> = (props) => {
  const theme: ThemeOptions = useTheme();
  const { isLight } = useContext(ModeContext);
  return (
    <Box
      className="RootRootRoot"
      sx={{
        width: "100%",
        height: "100%",
        backgroundColor: isLight ? theme?.colors?.white : theme?.colors?.black,
      }}
    >
      <Header />
      <Box
        className="layout"
        sx={{
          width: "100%",
          height: "100%",
        }}
      >
        {props.children}
      </Box>
      <style jsx global>{`
      body {
        margin: 0;
        width: 100%;
        height: 100%;
      }
      html {
        margin: 0;
        width: 100%;
        height: 100%;
      }
      #__next {
        margin: 0;
        width: 100%;
        height: 100%;
      }
    `}</style>
    </Box>
  );
};

export default Layout;
