import "./App.css";
import Portfoliocontainer from "./PortfolioContainer/Portfoliocontainer";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <ToastContainer/>
      <Portfoliocontainer/>
    </div>
  );
}

export default App;
