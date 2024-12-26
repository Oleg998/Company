import { RouteNames } from "../../routes";
import MainMenu from "../../Components/NavBar/MainMenu/MainMenu";
import { Link } from "react-router-dom";
import SelectLang from "../../Components/NavBar/SelectLang/SelectLang";
import { AppBar, Divider, Drawer, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import css from "./header.module.css";
import NavBarUser from "../../Components/NavBar/NavBarUser/NavBarUser";
import { useState } from "react";
interface Props {
  window?: () => Window;
}

export default function Header(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const nameProject = "MY PROJECT";

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <div
      onClick={handleDrawerToggle}
      className={css.drawer}
    >
      <Divider />

      <MainMenu />
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <AppBar className={css.appBar}>
        <nav className={css.navigation}>
          <div className={css.iconButton}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          </div>
          <Link
            to={RouteNames.HomePage}
            className={css.logo}
          >
            {nameProject}
          </Link>
          <div className={css.navBox}>
            <MainMenu />
          </div>
          <NavBarUser />
          <SelectLang />
        </nav>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          className={css.drawerPaper}
        >
          {drawer}
        </Drawer>
      </nav>
    </>
  );
}
