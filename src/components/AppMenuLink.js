import React from "react";
import { Link, ListItem } from "@mui/material";

const AppMenuLink = ({
  selected,
  children,
  onChangeSelected,
  display,
  mobile,
}) => {
  return (
    <Link
      display={display}
      onClick={onChangeSelected}
      component={ListItem}
      selected={selected}
      sx={{
        width: "auto",
        padding: 0,
        position: "relative",
        color: "#FAFAFA",
        textDecoration: "none",
        "&.Mui-selected": mobile
          ? {
              color: "#E9B109",
              background: "none",
            }
          : {
              background: "none",
              color: "#E9B109",
              "&::after": {
                content: '""',
                position: "absolute",
                left: 0,
                right: 0,
                bottom: "-7px",
                width: "24px",
                height: "2px",
                backgroundColor: "#E9B109",
                borderRadius: "10px",
              },
            },
        "&:hover": {
          color: "#E9B109BF",
          cursor: "pointer",
        },
      }}
    >
      {children}
    </Link>
  );
};

export default AppMenuLink;
