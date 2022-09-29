import React, { useContext } from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import { ThemeOptions } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { ModeContext } from "../../pages/_app";
import { useMediaQuery } from "usehooks-ts";
import ProfilePageHeader from "../../components/ProfileComponents/ProfilePageHeader";
import ProfileCardHeader from "../../components/ProfileComponents/TailwindProfileCardHeader";
import ProfileCardRow from "../../components/ProfileComponents/ProfileCardRow";

interface ProfileViewPageProps {
  name: string;
  image: string;
  bio: string;
  phone: string;
  email: string;
  password: string;
  setIsEditing: any;
}
const ProfileViewPage: React.FC<ProfileViewPageProps> = ({
  name,
  image,
  bio,
  phone,
  email,
  password,
  setIsEditing,
}) => {
  const isXs = useMediaQuery("(max-width: 360px)");
  const theme: ThemeOptions = useTheme();
  const { isLight } = useContext(ModeContext);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: '100%',
        height: "100%",
        backgroundColor: isLight ? theme?.colors?.white : theme?.colors?.black,
      }}
    >
      <ProfilePageHeader />
      <Box
        sx={{
          width: isXs ? "360px" : "846px",
          height: "580px",
          border: `1px solid ${theme?.colors?.grey}`,
          borderRadius: 1.2,
          marginTop: "44.06px",
          backgroundColor: isLight ? theme?.colors?.white : theme?.colors?.black,
        }}
      >
        <ProfileCardHeader setIsEditing={setIsEditing} />
        <Divider variant="fullWidth" sx={{ backgroundColor: isLight ? theme?.colors?.grey200 : theme?.colors?.grey}} />
        <ProfileCardRow title="PHOTO" hasPhoto={true} image={image} />
        <Divider variant="fullWidth" sx={{ backgroundColor: isLight ? theme?.colors?.grey200 : theme?.colors?.grey}} />
        <ProfileCardRow title="NAME" body={name} />
        <Divider variant="fullWidth" sx={{ backgroundColor: isLight ? theme?.colors?.grey200 : theme?.colors?.grey}} />
        <ProfileCardRow title="BIO" body={bio} />
        <Divider variant="fullWidth" sx={{ backgroundColor: isLight ? theme?.colors?.grey200 : theme?.colors?.grey}} />
        <ProfileCardRow title="PHONE" body={phone} />
        <Divider variant="fullWidth" sx={{ backgroundColor: isLight ? theme?.colors?.grey200 : theme?.colors?.grey}} />
        <ProfileCardRow title="EMAIL" body={email} />
        <Divider variant="fullWidth" sx={{ backgroundColor: isLight ? theme?.colors?.grey200 : theme?.colors?.grey}} />
        <ProfileCardRow title="PASSWORD" body={password} />
      </Box>
    </Box>
  );
};

export default ProfileViewPage;
