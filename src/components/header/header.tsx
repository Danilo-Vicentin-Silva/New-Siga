import { Header_styled } from "../../stylecomponents/header_styled/header_styled";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";


const Header = () => {
  const newDate: number = new Date().getHours();

  return (
    <Header_styled>
      <img
        src="../../../../public/images/logo.png"
        alt="logo New Siga"
        height={100}
      />
      <section className="title">
        <h2>
          <strong>
            {newDate > 17
              ? "Boa noite, "
              : newDate > 11
              ? "Boa tarde, "
              : "Bom dia, "}
          </strong>
        </h2>
        <h3>seja bem vindo ao novo Siga</h3>
      </section>
      <section className="mini_menu">
        <NotificationsRoundedIcon fontSize="large" />
        <SearchRoundedIcon fontSize="large" />
        <LogoutRoundedIcon fontSize="large" />
      </section>
    </Header_styled>
  );
};

export default Header;
