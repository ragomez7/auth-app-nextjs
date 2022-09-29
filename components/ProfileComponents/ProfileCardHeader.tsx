import React, { useContext } from 'react'
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { ThemeOptions } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import EditButton from './EditButton';
import { ModeContext } from "../../pages/_app";
import { useMediaQuery } from 'usehooks-ts'

interface ProfilePageHeaderProps {
  setIsEditing: any
}
const ProfilePageHeader: React.FC<ProfilePageHeaderProps> = ({
  setIsEditing
}) => {
  const handleClickEdit = (event: React.BaseSyntheticEvent): void => {
    setIsEditing(true);
  };
  const isXs = useMediaQuery('(max-width: 360px)')
  const theme: ThemeOptions = useTheme()
  const { isLight } = useContext(ModeContext)
  return (
    <Box
      sx={{
        height: 114.63,
        marginLeft: isXs ? "22px" : "49px",
        position: "relative",
      }}
    >
      <Typography
        sx={{
          paddingTop: 2.8,
          fontSize: 24,
          fontWeight: 400,
          color: isLight ? theme?.colors?.black : theme?.colors?.white
        }}
      >
        Profile
      </Typography>
      <Typography
        sx={{
          width: 180,
          marginTop: 0.4,
          fontSize: 13,
          fontWeight: 500,
          color: theme?.colors?.grey,
        }}
      >
        Some info may be visible to other people
      </Typography>
      <EditButton handleClickEdit={handleClickEdit} />
    </Box>
  );
};

export default ProfilePageHeader;
