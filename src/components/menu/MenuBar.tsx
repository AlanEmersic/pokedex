import {
  AppBar,
  Avatar,
  Box,
  Button,  
  Chip,
  Container,  
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import React from "react";
import TypeColor from "../../utils/types";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const types = [
  "ALL",
  "NORMAL",
  "FIRE",
  "WATER",
  "GRASS",
  "ELECTRIC",
  "ICE",
  "FIGHTING",
  "POISON",
  "GROUND",
  "FLYING",
  "PSYCHIC",
  "BUG",
  "ROCK",
  "GHOST",
  "DARK",
  "DRAGON",
  "STEEL",
  "FAIRY",
];

export default function MenuBar({ selectType }: any) {
  const onChangeType = (type: string) => () => {
    selectType(type);
  };

  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="sticky" sx={{ marginBottom: "1rem" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Avatar
            src="/assets/pokeball-icon.png"
            alt="pokeball"
            sx={{ mr: 2 }}
          />
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            Pokedex
          </Typography>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <Button
                onClick={handleOpenUserMenu}
                sx={{ px: 1 }}
                variant="outlined"
                size="large"
                endIcon={<KeyboardArrowDownIcon />}
              >
                Types
              </Button>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {types.map((t) => (
                <MenuItem key={t} onClick={onChangeType(t)}>
                  <Chip
                    variant="outlined"
                    sx={{ backgroundColor: TypeColor(t.toLowerCase()) }}
                    label={t}
                  />
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
