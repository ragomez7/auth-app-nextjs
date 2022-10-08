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
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        marginTop: "25.89px",
      }}
    >
      <Box
        component="img"
        sx={{
          height: 72,
          width: 72,
          borderRadius: 0.8,
        }}
        alt="User profile picture."
        src={image}
      />
      <Button
        onClick={handleDialogOpen}
        sx={{
          marginLeft: "27.5px",
        }}
      >
        Change Photo
      </Button>
      <UploadPhotoDialog 
        open={openDialog} 
        image={image}
        updateData={updateData}
        setProfileImage={setProfileImage}
        handleDialogClose={handleDialogClose}
        >
          
        </UploadPhotoDialog>
    </Box>
  );
};

export default ChangePhotoComponent;
