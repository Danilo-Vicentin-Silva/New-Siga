import { Progress_styled } from "../../../stylecomponents/main_styled/progress_styled/progress_styled";
import Dashboard from "./dashboard/dashboard";

const Progress_section = () => {
  return (
    <Progress_styled>
      <section className="progress_title">
          <h2>Meu Progresso</h2>
          <p>0</p>
      </section>
      <Dashboard />
    </Progress_styled>
  );
};

export default Progress_section;
