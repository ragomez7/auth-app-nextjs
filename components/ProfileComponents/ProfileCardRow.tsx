import { FunctionComponent, useEffect } from "react";
import React, { useState, useContext } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { ThemeOptions } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { useMediaQuery } from "usehooks-ts";
import { ModeContext } from "../../pages/_app";

interface ProfileCardRowProps {
  title: string;
  body?: string;
  hasPhoto?: boolean;
  image?: string;
}
const ProfileCardRow: FunctionComponent<ProfileCardRowProps> = ({
  title,
  body = undefined,
  hasPhoto = false,
  image,
}) => {
  const isXs = useMediaQuery("(max-width: 360px)");
  const [profileImage, setProfileImage] = useState(image);
  const theme: ThemeOptions = useTheme()
  const { isLight } = useContext(ModeContext)
  useEffect(() => {
    setProfileImage(image);
    console.log(`setProfileImage ${image}`)
  }, [image]);

  return (
    <Box
      sx={{
        height: hasPhoto ? 101.11 : 73.26,
        display: "flex",
      }}
    >
      <Typography
        sx={{
          height: 18,
          width: 68,
          marginLeft: isXs ? "22px" : "49px",
          paddingTop: hasPhoto ? "38.46px" : "27.5px",
          color: theme?.colors?.grey,
          fontWeight: 500,
          fontSize: 13,
        }}
      >
        {title}
      </Typography>
      {hasPhoto ? (
        <Box
          component="img"
          sx={{
            height: 72,
            width: 72,
            marginLeft: isXs ? 0 : "163.62px",
            marginTop: "11.59px",
            position: isXs ? "absolute" : undefined,
            right: isXs ? 20 : undefined,
            borderRadius: 0.8,
          }}
          alt="User profile picture."
          src={profileImage}
        />
      ) : (
        <Typography
          sx={{
            height: 25,
            marginTop: "24px",
            marginLeft: !isXs ? "163.62px" : undefined,
            position: isXs ? "absolute" : undefined,
            right: isXs ? 20 : undefined,
            color: isLight ? theme?.colors?.black : theme?.colors?.white,
          }}
        >
          {body}
        </Typography>
      )}
    </Box>
  );
};

export default ProfileCardRow;
