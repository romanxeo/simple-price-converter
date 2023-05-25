import React, { useState } from "react";
import { ExpandMore } from "@mui/icons-material";
import { Select } from "@mui/material";
import { useSelector } from "react-redux";

const AppSelect = ({ children, onChangeSelected, display }) => {
  const [open, setOpen] = useState(false);
  const selectedCurrency = useSelector((state) => state.currency.selected);

  const MenuProps = {
    PaperProps: {
      style: {
        background: "#142241",
        color: "#fff",
      },
    },
  };

  return (
    <Select
      native={false}
      value={selectedCurrency.value}
      MenuProps={MenuProps}
      onChange={onChangeSelected}
      IconComponent={ExpandMore}
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
      sx={{
        display: display,
        "& .MuiSelect-icon": {
          color: open ? "rgba(233, 177, 9, 0.75)" : "#fff",
        },
        color: open ? "rgba(233, 177, 9, 0.75)" : "#FFFFFF",
        "& > .MuiOutlinedInput-input": {
          display: "flex",
          gap: "5px",
        },
        "& > fieldset": {
          border: "none",
        },
        "& .MuiSelect-select": {
          background: "#142241",
          alignItems: "center",
        },
      }}
    >
      {children}
    </Select>
  );
};

export default AppSelect;
