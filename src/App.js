import "./App.css";
import { AuthProvider } from "./context/AuthContext.js";
import ElementRoutes from "./path/ElementRoutes.jsx";

function App() {


  return (
    <div className="App">
      <AuthProvider>
        <ElementRoutes />
      </AuthProvider>
    </div>
  );
}

export default App;
