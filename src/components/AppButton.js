import React from "react";
import { Button } from "@mui/material";

const AppButton = ({ children }) => {
  return (
    <Button
      variant="contained"
      sx={{
        color: "#000",
        background: "#E9B109",
        textTransform: "none",
        "&:hover": {
          background:
            "linear-gradient(0deg, rgba(255, 255, 255, 0.35), rgba(255, 255, 255, 0.35)), #E9B109",
          boxShadow: "1px 2px 5px rgba(150, 188, 25, 0.1)",
        },
      }}
    >
      {children}
    </Button>
  );
};

export default AppButton;
