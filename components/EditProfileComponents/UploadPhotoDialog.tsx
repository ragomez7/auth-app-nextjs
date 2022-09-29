import type { FunctionComponent } from "react";
import React, { useState, useMemo } from "react";
import { useMutate } from "restful-react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";

export interface DialogTitleProps {
  id: string;
  sx: object;
}

const BootstrapDialogTitle: React.FC<DialogTitleProps> = (props) => {
  const {
    children,
    sx,
    ...other
  } = props;

  return (
    <DialogTitle sx={sx} {...other}>
      {children}
    </DialogTitle>
  );
};

interface UploadPhotoDialogProps {
  open: boolean;
  image: string;
  updateData: () => void;
  setProfileImage: (newImageUrl: string) => void;
}
const UploadPhotoDialog: FunctionComponent<UploadPhotoDialogProps> = ({
  open,
  image,
  updateData,
  setProfileImage,
}) => {
  const [selectedImage, setSelectedImage] = useState(new MediaSource());
  const [images, setImages] = useState<any>([]); // {} [] functions Set

  const {
    mutate: uploadImage,
    loading,
    error,
  } = useMutate({
    verb: "POST",
    path: "api/image-upload",
  });

  const handleChangeProfilePhoto = (event: any) => {
    console.log(event.target.files[0]);
    setSelectedImage(event.target.files[0]);
  };

  const handleImageUpload = () => {
    if (!selectedImage) {
      return;
    }
    const formData: any = new FormData();
    formData.append("image", selectedImage);
    console.log("Ll");
    uploadImage(formData)
      .then((uploadedImage) => {
        console.log(`uploaded Image: ${uploadedImage.url}`);
        setProfileImage(uploadedImage.url);
        updateData();
      })
      .catch(() => {
        console.log("Error");
      });
  };

  console.log(selectedImage);

  return (
    <Dialog
      open={open}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <BootstrapDialogTitle
        id="customized-dialog-title"
        sx={{
          width: 360,
          height: 40,
          paddingLeft: 1.5,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        Upload New Photo
      </BootstrapDialogTitle>
      <DialogContent
        dividers
        sx={{
          width: 360,
          height: 200,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          padding: 1,
        }}
      >
        <Box
          component="img"
          sx={{
            height: 172,
            width: 172,
            borderRadius: 0.8,
          }}
          alt="User profile picture."
          src={URL.createObjectURL(selectedImage)}
        />
      </DialogContent>
      <DialogActions
        sx={{
          width: 360,
          height: 80,
          paddingX: 0,
        }}
      >
        <Stack
          direction="row"
          sx={{
            width: 360,
            paddingX: 2,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <input
            type="file"
            name="myImage"
            onChange={(event) => {
              handleChangeProfilePhoto(event);
            }}
            accept=".jpg, .png, .jpeg"
          />
          <button onClick={handleImageUpload} disabled={!selectedImage}>
            Upload
          </button>
        </Stack>
      </DialogActions>
    </Dialog>
  );
};

export default UploadPhotoDialog;
