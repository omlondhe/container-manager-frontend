import { StateProvider } from "../context/StateProvider";
import Router from "../router/Router";
import "../styles/pages/App.css";

function App() {
  return (
    <StateProvider>
      <Router />
    </StateProvider>
  );
}

export default App;
