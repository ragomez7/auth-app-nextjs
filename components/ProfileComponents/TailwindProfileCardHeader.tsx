import React, { useContext } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { ThemeOptions } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import EditButton from "./EditButton";
import { ModeContext } from "../../pages/_app";
import { useMediaQuery } from "usehooks-ts";

interface ProfilePageHeaderProps {
  setIsEditing: any;
}
const ProfilePageHeader: React.FC<ProfilePageHeaderProps> = ({
  setIsEditing,
}) => {
  const handleClickEdit = (event: React.BaseSyntheticEvent): void => {
    setIsEditing(true);
  };
  const isXs = useMediaQuery("(max-width: 360px)");
  const theme: ThemeOptions = useTheme();
  const { isLight } = useContext(ModeContext);
  return (
    <Box
      className={`h-[114.63px] relative ${isXs ? "ml-[22px]" : "ml-[49px]"}`}
    >
      <Typography
        className={`pt-[28px] text-[24px] font-[400] ${
          isLight ? "text-black" : "text-white"
        }`}
      >
        Profile
      </Typography>
      <Typography
        className={`w-[180px] mt-[4px] text-[13px] font-[500] text-grey`}
      >
        Some info may be visible to other people
      </Typography>
      <EditButton handleClickEdit={handleClickEdit} />
    </Box>
  );
};

export default ProfilePageHeader;
