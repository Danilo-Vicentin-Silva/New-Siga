import { Dashboard_styled } from "../../../../stylecomponents/main_styled/progress_styled/dashboard/dashboard_styled";
import Subject from "./subject";
import CodeRoundedIcon from "@mui/icons-material/CodeRounded";

const Dashboard = () => {
  return (
    <Dashboard_styled>
      <Subject
        icon={<CodeRoundedIcon fontSize="large" />}
        title={"Subject #01"}
      />
      <Subject
        icon={<CodeRoundedIcon fontSize="large" />}
        title={"Subject #02"}
      />
      <Subject
        icon={<CodeRoundedIcon fontSize="large" />}
        title={"Subject #03"}
      />
      <Subject
        icon={<CodeRoundedIcon fontSize="large" />}
        title={"Subject #04"}
      />
    </Dashboard_styled>
  );
};

export default Dashboard;
