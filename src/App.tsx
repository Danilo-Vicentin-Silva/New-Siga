import { ThemeProvider } from "styled-components";
import GlobalStyle from "./stylecomponents/global";
import { theme } from "./stylecomponents/global.tsx";
import Header from "./components/header/header";
import Progress_section from "./components/main/progress_section/progress_setion";
import { Main_styled } from "./stylecomponents/main_styled/main_styled";
import Menu_sidebar from "./components/main/sidebar/menu_sidebar";
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <Main_styled>
        <Menu_sidebar />
        <Progress_section />
      </Main_styled>
    </ThemeProvider>
  );
};

export default App;
