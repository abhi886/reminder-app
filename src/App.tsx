import { Outlet } from "react-router-dom";
import "./App.css";
import Reminder from "./components/Reminder";

function App() {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-sm'>
          <Reminder></Reminder>{" "}
        </div>
        <div className='col-sm'>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default App;
