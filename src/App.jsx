import "./App.css";
import { GrFormNext, GrFormPin, GrFormPrevious } from "react-icons/gr";
import { FiSend } from "react-icons/fi";
import UserForm from "./components/UserForm";
import ReviewForm from "./components/ReviewForm";
import Thanks from "./components/Thanks";

//hooks
import { useForm } from "./hooks/UserForm";
import Steps from "./components/Steps";

function App() {
  const formComponents = [<UserForm />, <ReviewForm />, <Thanks />];

  const { currentStep, currentComponent, changeStep, isLastStep, isFirstStep } =
    useForm(formComponents);

  return (
    <div className="app">
      <div className="header">
        <h2>nos avalie</h2>
        <p>
          Ficamos gratos com a sua compra, responda esse formulário abaixo para
          avaliar
        </p>
      </div>
      <div className="form-container">
        <Steps currentStep={currentStep} />
        <form onSubmit={(e) => changeStep(currentStep + 1, e)}>
          <div className="inputs-container">{currentComponent}</div>
          <div className="actions">
            {!isFirstStep && (
              <button type="button" onClick={() => changeStep(currentStep - 1)}>
                <GrFormPrevious />
                <span> Voltar</span>
              </button>
            )}
            {!isLastStep ? (
              <button type="submit">
                <GrFormNext />
                <span>Avançar</span>
              </button>
            ) : (
              <button type="button">
                <FiSend />
                <span>Enviar</span>
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
