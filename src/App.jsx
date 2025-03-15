import "./App.css";
import { GrFormNext, GrFormPin, GrFormPrevious } from "react-icons/gr";
import UserForm from "./components/UserForm";
import ReviewForm from "./components/ReviewForm";
import Thanks from "./components/Thanks";

//hooks
import { useForm } from "./hooks/UserForm";

function App() {
  const formComponents = [<UserForm />, <ReviewForm />, <Thanks />];

  const { currentStep, currentComponent } = useForm(formComponents);

  return (
    <div className="App">
      <div className="header">
        <h2>nos avalie</h2>
        <p>
          Ficamos gratos com a sua compra, responda esse formulário abaixo para
          avaliar
        </p>
      </div>
      <div className="form-container">
        <p>etapas</p>
        <form action="" className="actions">
          <div className="inputs-container">{currentComponent}</div>
          <button type="button">
            <GrFormPrevious />
            <span> Voltar</span>
          </button>
          <button type="submit">
            <GrFormNext />
            <span>Avançar</span>
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
