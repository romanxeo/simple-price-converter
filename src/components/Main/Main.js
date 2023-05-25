import React, { useState } from "react";
import { Box, TextField } from "@mui/material";
import { useSelector } from "react-redux";

const Main = () => {
  const [amountValue, setAmountValue] = useState(0);

  const selectedCurrency = useSelector((state) => state.currency.selected);

  const calculatedPrice = amountValue * 10 * selectedCurrency.ratio;

  const changeAmountValueHandler = (event) => {
    setAmountValue(event.target.value);
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      gap={2}
      padding={2}
    >
      <TextField
        label="Amount"
        type="number"
        inputProps={{ inputMode: "numeric", pattern: "[0-9]*", min: 0 }}
        value={amountValue}
        onChange={changeAmountValueHandler}
      />
      <TextField
        value={`${selectedCurrency.value}: ${Math.round(calculatedPrice)}`}
        label="Price"
        type="text"
        disabled
      />
    </Box>
  );
};

export default Main;
