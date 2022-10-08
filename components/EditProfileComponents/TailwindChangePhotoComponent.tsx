import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import UploadPhotoDialog from './UploadPhotoDialog'

interface ChangePhotoComponentProps {
  image: string;
  updateData: () => void;
  setProfileImage: (newImageUrl: string) => void
}
const ChangePhotoComponent: React.FC<ChangePhotoComponentProps> = ({
  image,
  updateData,
  setProfileImage
}) => {
  const [openDialog, setOpenDialog] = useState<boolean>(false);

  const handleDialogOpen = (event: React.BaseSyntheticEvent) => {
    setOpenDialog(true);
    event.stopPropagation();
  };

  const handleDialogClose = (event: React.BaseSyntheticEvent) => {
    setOpenDialog(false);
    event.stopPropagation();
  };
  return (
    <Box className="flex items-center mt-[25px]">
      <Box className="w-[72px] h-[72px] rounded-[0.8px]"
        component="img"
        alt="User profile picture."
        src={image}
      />
      <Button className="ml-[27.5px]"
        onClick={handleDialogOpen}
      >
        Change Photo
      </Button>
      <UploadPhotoDialog 
        open={openDialog} 
        image={image}
        updateData={updateData}
        setProfileImage={setProfileImage}
        handleDialogClose={handleDialogClose}
        />
    </Box>
  );
};

export default ChangePhotoComponent;
