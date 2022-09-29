import React, {
  useState,
  useRef,
  useMemo,
  useEffect,
  useContext,
  FunctionComponent,
} from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import { ThemeOptions } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import SvgIcon from "@mui/material/SvgIcon";
import { ModeContext } from "../../pages/_app";
import { useMediaQuery } from "usehooks-ts";

interface CustomTextFieldProps {
  title: string;
  value: string;
  onChange: (event: React.BaseSyntheticEvent) => void;
  updateData: () => void;
}
type ITextInput = {
  current: {
    focus: any
  }
}
const CustomTextField: FunctionComponent<CustomTextFieldProps> = ({
  title,
  value,
  onChange,
  updateData,
}) => {
  const textInput = useRef<ITextInput | any>(null);
  const [editNameDisabled, setEditNameDisabled] = useState<boolean>(true);
  const handleEditButtonClick = () => {
    setTimeout(() => textInput?.current?.focus(), 100);
    setEditNameDisabled(!editNameDisabled);
  };
  const isXs = useMediaQuery("(max-width: 360px)");
  const theme: ThemeOptions = useTheme();
  const { isLight } = useContext(ModeContext);

  const EditIcon_2 = useMemo(() => {
    if (title === "Email") {
      return undefined;
    }
    if (editNameDisabled) {
      return (<IconButton
      onClick={handleEditButtonClick}
      sx={{
        padding: 0,
      }}
    >
      <SvgIcon
        sx={{
          color: isLight ? undefined : 'lightgrey',
          ':hover path': {
            fill: "#1D8AED",
          }
        }}
      >
        <EditIcon />
      </SvgIcon>
    </IconButton>);
    }
    return (<IconButton
      onClick={handleEditButtonClick}
      sx={{
        padding: 0,
      }}
    >
      <SvgIcon
        sx={{
          color: isLight ? undefined : 'lightgrey',
          '&:hover path': {
            fill: "#1D8AED",
          }
        }}
      >
        <EditIcon
          sx={{
            fill: "#1D8AED",
          }}
        />
      </SvgIcon>
    </IconButton>);
  }, [editNameDisabled]);

  useEffect(() => {
    console.log(editNameDisabled);
    if (editNameDisabled) {
      updateData();
      console.log(editNameDisabled);
    }
  }, [editNameDisabled]);

  return (
    <>
      <Typography className={`text-[13px] font-[500] ${title == "Name" ? "mt-[32.69px]" : "mt-[24px]"} ${isLight ? "text-black" : "text-white"}`}>
        {title}
      </Typography>
      <TextField
        onChange={onChange}
        value={value}
        // sx={{
        //   "& .css-nxo287-MuiInputBase-input-MuiOutlinedInput-input.Mui-disabled":
        //     {
        //       "-webkit-text-fill-color": isLight ? theme?.colors?.grey : "grey",
        //     },
        // }}
        InputProps={{
          disabled: editNameDisabled,
          inputRef: textInput,
          endAdornment: (
           EditIcon_2
          ),
          sx: {
            marginTop: "3px",
            width: isXs ? "340px" : "416.93px",
            height: title == "Bio" ? "91.58px" : "52px",
            fontSize: "16px",
            borderRadius: "12px",
            color: isLight ? theme?.colors?.black : theme?.colors?.white,
            border: `1px solid ${theme?.colors?.grey}`,
          },
        }}
      />
    </>
  );
};

export default CustomTextField;
