import React from "react";
import { Button } from "@mui/material";

export const MyButton = ({
  children,
  onClick,
  variant = "contained",
  color = "primary",
  type = "button",
}) => {
  return (
    <Button onClick={onClick} variant={variant} color={color} type={type}>
      {children}
    </Button>
  );
};
