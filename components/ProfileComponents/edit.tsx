import React, { useState, useContext } from "react";
import { useMediaQuery } from "usehooks-ts";
import Box from "@mui/material/Box";
import { ThemeOptions } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { ModeContext } from "../../pages/_app";
import BackButton from "../EditProfileComponents/BackButton";
import ChangePhotoComponent from "../EditProfileComponents/TailwindChangePhotoComponent";
import FormHeader from "../EditProfileComponents/FormHeader";
import CustomTextField from "../EditProfileComponents/TailwindCustomTextField";


interface ProfileEditPageProps {
  name: string;
  image: string;
  bio: string;
  phone: string;
  email: string;
  password: string;
  setIsEditing: any;
  setUserData: any;
}
const ProfileEditPage: React.FC<ProfileEditPageProps> = ({
  name,
  image,
  bio,
  phone,
  email,
  password,
  setIsEditing,
  setUserData,
}) => {
  
  const [profileName, setName] = useState<string>(name);
  const [profileBio, setBio] = useState<string>(bio);
  const [profilePhone, setPhone] = useState<string>(phone);
  const [profileEmail, setEmail] = useState<string>(email);
  const [profilePassword, setPassword] = useState<string>(password);
  const [profileImage, setProfileImage] = useState<string>(image);

  const handleNameChange = (event: React.BaseSyntheticEvent): void => {
    setName(event.target.value);
  };
  const handleBioChange = (event: React.BaseSyntheticEvent): void => {
    setBio(event.target.value);
  };
  const handlePhoneChange = (event: React.BaseSyntheticEvent): void => {
    setPhone(event.target.value);
  };
  const handleEmailChange = (event: React.BaseSyntheticEvent): void => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event: React.BaseSyntheticEvent): void => {
    setPassword(event.target.value);
  };

  const handleClickBack = (event: React.BaseSyntheticEvent): void => {
    setIsEditing(false);
  };
  const isXs = useMediaQuery("(max-width: 360px)");
  const theme: ThemeOptions = useTheme();
  const { isLight } = useContext(ModeContext);

  const updateData = async () => {
    try {
      const body = {
        profileName,
        profileBio,
        profilePhone,
        profileEmail,
        profilePassword,
        profileImage,
      };
      setUserData((prevState: any) => ({
        ...prevState,
        name: profileName,
        bio: profileBio,
        phone: profilePhone,
        email: profileEmail,
        password: profilePassword,
        image: profileImage,
      }))
      console.log(`about to upload
      ${body.profileImage}`)
      await fetch("/api/user/update", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Box className={`w-full h-[1000px] bg-color-[${isLight ? "white" : "black"}]`}>
     <BackButton handleClickBack={handleClickBack} />
      <Box className={`h-[787.5px] rounded-[12px] mt-[28px] ${isXs ? "w-[360px] ml-[0px] pl-[2px]" : "w-[846px] ml-[288px] pl-[48.64px]"} ${isLight ? "bg-white" : "bg-black"} border border-grey border-solid`}>
        <FormHeader />
        <ChangePhotoComponent 
          image={profileImage}
          updateData={updateData}
          setProfileImage={setProfileImage}
        />
        <CustomTextField
          title="Name"
          value={profileName}
          onChange={handleNameChange}
          updateData={updateData}
        />
        <CustomTextField
          title="Bio"
          value={profileBio}
          onChange={handleBioChange}
          updateData={updateData}
        />
        <CustomTextField
          title="Phone"
          value={profilePhone}
          onChange={handlePhoneChange}
          updateData={updateData}
        />
        <CustomTextField
          title="Email"
          value={profileEmail}
          onChange={handleEmailChange}
          updateData={updateData}
        />
        <CustomTextField
          title="Password"
          value={profilePassword}
          onChange={handlePasswordChange}
          updateData={updateData}
        />
      </Box>
    </Box>
  );
};

export default ProfileEditPage;
