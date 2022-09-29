import React, { useContext } from "react";
import Button from "@mui/material/Button";
import { ThemeOptions } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { ModeContext } from "../../pages/_app";
import { useMediaQuery } from 'usehooks-ts'

interface EditButtonProps {
  handleClickEdit: (event: React.BaseSyntheticEvent) => void;
}
const EditButton: React.FC<EditButtonProps> = ({ handleClickEdit }) => {
  const isXs = useMediaQuery("(max-width: 360px)");
  const theme: ThemeOptions = useTheme();
  const { isLight } = useContext(ModeContext);
  return (
    <Button
      onClick={handleClickEdit}
      sx={{
        width: 95.34,
        height: 38,
        color: isLight ? theme?.colors?.grey : theme?.colors?.white,
        border: `1px solid ${
          isLight ? theme?.colors?.grey : theme?.colors?.white
        }`,
        borderRadius: 1.2,
        position: "absolute",
        top: isXs ? 38 : 39.05,
        left: isXs ? undefined : 652.73,
        right: isXs ? 22 : undefined,
        textTransform: "none",
        "&:hover": {
          color: isLight ? undefined : theme?.colors?.black,
          backgroundColor: isLight ? undefined : theme?.colors?.white,
        },
      }}
    >
      Edit
    </Button>
  );
};

export default EditButton;