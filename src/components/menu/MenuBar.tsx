import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { AppBar, Avatar, Box, Button, Chip, Container, Menu, MenuItem, Toolbar, Tooltip, Typography } from "@mui/material";
import { useState } from "react";

import { PokemonSearch } from "components";
import { ALL, TYPES, TypeColor } from "utils";

const types: string[] = [ALL.toUpperCase()].concat(TYPES.map(t => t.toUpperCase()));

export const MenuBar = ({ selectType, getPokemon }: any) => {
  const onChangeType = (type: string) => () => {
    selectType(type);
  };
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="sticky" sx={{ marginBottom: "1rem" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Avatar src="/assets/pokeball-icon.png" alt="pokeball" sx={{ mr: 2 }} />
          <Typography variant="h6" noWrap component="div" sx={{ mr: 2, display: { xs: "none", md: "flex" } }}>
            Pokedex
          </Typography>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open">
              <Button onClick={handleOpenNavMenu} sx={{ px: 1 }} variant="outlined" size="large" endIcon={<KeyboardArrowDownIcon />}>
                Types
              </Button>
            </Tooltip>
            <Menu
              anchorEl={anchorElNav}
              onClose={handleCloseNavMenu}
              open={Boolean(anchorElNav)}
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
            >
              {types.map(t => (
                <MenuItem key={t} onClick={onChangeType(t)}>
                  <Chip variant="outlined" sx={{ backgroundColor: TypeColor(t.toLowerCase()) }} label={t} />
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box
            sx={{
              padding: 2,
            }}
          >
            <PokemonSearch getPokemon={getPokemon} />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
