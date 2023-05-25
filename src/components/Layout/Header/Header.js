import React, { useState } from "react";
import logoImg from "../../../assets/img/logo.png";
import { AppBar, Box, MenuItem, Toolbar } from "@mui/material";
import { navItems } from "../../../utils/navigation";
import AppMenuLink from "../../AppMenuLink";
import AppSelect from "../../AppSelect";
import { useDispatch, useSelector } from "react-redux";
import { currencyActions } from "../../../store/reducers/currency";
import AppButton from "../../AppButton";
import MobileNav from "./MobileNav";

const Header = () => {
  const [selected, setSelected] = useState("");
  const allCurrencies = useSelector((state) => state.currency.allCurrencies);
  const dispatch = useDispatch();

  const selectLinkHandler = (name) => {
    setSelected(name);
  };

  const changeSelectedCurrencyHandler = (event) => {
    dispatch(currencyActions.changeSelectedCurrency(event.target.value));
  };

  return (
    <AppBar
      sx={{
        backgroundColor: "#142241",
        borderBottom: "1px solid rgba(233, 177, 9, 0.75)",
        padding: { xs: "20px", md: "20px 70px" },
        position: "fixed",
      }}
    >
      <Toolbar disableGutters>
        <Box display="flex" justifyContent="space-between" width="100%">
          <Box sx={{ display: "flex", alignItems: "center", gap: 5 }}>
            <MobileNav selected={selected} onSelectLink={selectLinkHandler} />
            <img src={logoImg} alt="logo" />
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                gap: 4,
              }}
            >
              {navItems.map((item) => (
                <AppMenuLink
                  key={item.name}
                  onChangeSelected={() => selectLinkHandler(item.name)}
                  selected={selected === item.name}
                >
                  {item.name}
                </AppMenuLink>
              ))}
            </Box>
          </Box>
          <Box display="flex" gap="36px" alignItems="center">
            <AppSelect
              display={{ xs: "none", md: "block" }}
              onChangeSelected={changeSelectedCurrencyHandler}
            >
              {allCurrencies.map((item) => (
                <MenuItem
                  key={item.value}
                  sx={{
                    display: "flex",
                    gap: "5px",
                    "&.Mui-selected": {
                      borderRight: "2px solid #E9B109",
                      background: "rgba(44, 62, 103, 0.2)",
                    },
                  }}
                  value={item.value}
                >
                  <img src={item.logo} alt={item.logo} />
                  {item.value}
                </MenuItem>
              ))}
            </AppSelect>
            <Box display="flex" gap="20px" alignItems="center">
              <AppMenuLink display={{ xs: "none", md: "block" }}>
                Sign up
              </AppMenuLink>
              <AppButton>Log in</AppButton>
            </Box>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
