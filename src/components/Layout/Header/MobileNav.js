import React, { useState } from "react";
import {
  Box,
  Button,
  Collapse,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
} from "@mui/material";
import {
  Close,
  ExpandLess,
  ExpandMore,
  Menu as MenuIcon,
} from "@mui/icons-material";
import { navItems } from "../../../utils/navigation";
import AppMenuLink from "../../AppMenuLink";
import AppButton from "../../AppButton";
import { useDispatch, useSelector } from "react-redux";
import { currencyActions } from "../../../store/reducers/currency";

const MobileNav = ({ onSelectLink, selected }) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [collapseOpen, setCollapseOpen] = useState(false);
  const { allCurrencies, selected: selectedCurrency } = useSelector(
    (state) => state.currency
  );

  const openCloseMobileNavHandler = () => {
    setOpen((prevState) => !prevState);
  };

  const changeSelectedCurrencyHandler = (value) => {
    dispatch(currencyActions.changeSelectedCurrency(value));
    setCollapseOpen(false);
  };

  return (
    <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
      <IconButton
        sx={{ fontSize: "24px" }}
        onClick={openCloseMobileNavHandler}
        color="inherit"
      >
        {open ? <Close /> : <MenuIcon />}
      </IconButton>
      <Drawer
        anchor={"top"}
        open={open}
        sx={{
          width: "100%",
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            height: "100%",
            width: "100%",
            boxSizing: "border-box",
            background: "#142241",
          },
        }}
      >
        <List component={"nav"} sx={{ color: "#fff" }}>
          <ListItem sx={{ p: 2 }}>
            <IconButton
              sx={{ fontSize: "24px", color: "#fff" }}
              onClick={openCloseMobileNavHandler}
              color="inherit"
            >
              <Close />
            </IconButton>
          </ListItem>
          <Divider sx={{ borderColor: "#ffffff33" }} />
          {navItems.map((item) => (
            <Box sx={{ pt: "10px", pl: 2, pr: 2 }} key={item.name}>
              <AppMenuLink
                mobile
                onChangeSelected={() => onSelectLink(item.name)}
                selected={selected === item.name}
              >
                {item.name}
              </AppMenuLink>
              <Divider sx={{ borderColor: "#ffffff33", mt: "10px" }} />
            </Box>
          ))}
          <ListItem
            button
            onClick={() => setCollapseOpen((prevState) => !prevState)}
            sx={{
              p: 2,
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box display="flex" alignItems="center" gap={1}>
              <img src={selectedCurrency.logo} alt=""/>
              {selectedCurrency.value}
            </Box>
            {collapseOpen ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={collapseOpen}>
            <List>
              {allCurrencies.map((item) => (
                <ListItem
                  key={item.value}
                  onClick={changeSelectedCurrencyHandler.bind(null, item.value)}
                  sx={{
                    p: 2,
                    borderLeft:
                      selectedCurrency.value === item.value
                        ? "2px solid #E9B109"
                        : "none",
                    gap: 1,
                  }}
                >
                  <img src={item.logo} alt={item.value} />
                  {item.value}
                </ListItem>
              ))}
            </List>
          </Collapse>
          <Box sx={{ pl: 2, pr: 2 }}>
            <Divider sx={{ borderColor: "#ffffff33" }} />
            <Box display="flex" gap={2} sx={{ pt: 2 }}>
              <Button
                sx={{ borderColor: "#fff", color: "#fff" }}
                variant="outlined"
              >
                Sign up
              </Button>
              <AppButton>Log in</AppButton>
            </Box>
          </Box>
        </List>
      </Drawer>
    </Box>
  );
};

export default MobileNav;
