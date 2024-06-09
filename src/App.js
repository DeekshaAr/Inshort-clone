import { useState } from "react";
import "./App.css";
import NavInshort from "./components/NavInshort";

function App() {
  const [category, setCategory] = useState("general");

  return (
    <div className="App">
      <NavInshort setCategory={setCategory} />
    </div>
  );
}

export default App;
