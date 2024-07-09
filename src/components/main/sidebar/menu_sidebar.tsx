import { Menu_styled } from "../../../stylecomponents/main_styled/sidebar_styled/menu_styled";
import Item_menu from "./item_menu";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import LibraryBooksRoundedIcon from "@mui/icons-material/LibraryBooksRounded";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import SecurityRoundedIcon from "@mui/icons-material/SecurityRounded";
import FolderCopyRoundedIcon from "@mui/icons-material/FolderCopyRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";

const Menu_sidebar = () => {
  return (
    <aside>
      <Menu_styled>
        <Item_menu icon={<HomeRoundedIcon fontSize="large" />} link="/" />
        <Item_menu
          icon={<LibraryBooksRoundedIcon fontSize="large" />}
          link="/"
        />
        <Item_menu
          icon={<CalendarMonthRoundedIcon fontSize="large" />}
          link="/"
        />
        <Item_menu icon={<SecurityRoundedIcon fontSize="large" />} link="/" />
        <Item_menu icon={<FolderCopyRoundedIcon fontSize="large" />} link="/" />
        <Item_menu
          icon={<AccountCircleRoundedIcon fontSize="large" />}
          link="/"
        />
      </Menu_styled>
    </aside>
  );
};

export default Menu_sidebar;
