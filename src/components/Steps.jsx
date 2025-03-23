import { AIOutLineUser, AiOutLineStar } from "react-icons/ai";

import "./Steps.css";

const Steps = ({ currentStep }) => {
  return (
    <div className="steps">
      <div className="step">
        <p>Identificação</p>
      </div>
      <div className="step">
        <p>Avaliação</p>
      </div>
      <div className="step">
        <p>Envio</p>
      </div>
    </div>
  );
};

export default Steps;
