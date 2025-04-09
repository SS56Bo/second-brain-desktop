import "./App.css";
import { Greet } from "../wailsjs/go/main/App";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  return (
    <div className="button-container">
      <button onClick={() => navigate("/new")}>Add Note</button>
    </div>
  );
}

export default App;
