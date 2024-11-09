import { styled, TextField } from "@mui/material";
import React from "react";

export const Input = ({
  type,
  placeholder,
  value,
  onChange,
  label,
  InputProps,
}) => {
  return (
    <StyledTextField
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      label={label}
      InputProps={InputProps}
    />
  );
};

const StyledTextField = styled(TextField)(({}) => ({
  "& .MuiInputBase-root": {
    width: "250px",
    height: "45px",
    color: "white",
    background: "",
    borderRadius: "10px",
    border: "1px solid  rgba(87, 76, 76, 0.25)",
  },

  "&:hover": {
    background: "#5f5d5d",
    borderRadius: "10px",
  },
}));
