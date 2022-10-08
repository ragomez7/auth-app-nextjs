import React from "react";
import Button from "@mui/material/Button";
import { useMediaQuery } from "usehooks-ts";

interface BackButtonProps {
  handleClickBack: (event: React.BaseSyntheticEvent) => void
}

const BackButton: React.FC<BackButtonProps> = ({ handleClickBack }) => {
    const isXs = useMediaQuery("(max-width: 360px)");

  return (
    <Button
      onClick={handleClickBack}
      sx={{
        textTransform: "none",
        marginTop: "29px",
        marginLeft: isXs ? 0 : "315px",
      }}
    >
      Back
    </Button>
  );
};

export default BackButton;
