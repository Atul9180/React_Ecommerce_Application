import InputForm from "./components/InputForm";
import DisplayOrders from "./components/DisplayOrders";
import "./App.css";
import { ItemsDataContextProvider } from "./context/ItemsDataContext";

function App() {
  return (
    <div className="App">
      <div className="headingDiv">
        <h1>Restaurant Record</h1>
      </div>

      <ItemsDataContextProvider>
        <div className="inputform">
          <InputForm />
        </div>
        <div className="renderedOrders">
          <DisplayOrders />
        </div>
      </ItemsDataContextProvider>
    </div>
  );
}

export default App;
