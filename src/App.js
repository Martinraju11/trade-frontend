import './App.css';
import {BrowserRouter as Router , Routes , Route} from "react-router-dom"
import MainWrapper from './Components/MainWrapper/MainWrapper';
import Dashboard from './Components/Dashboard/Dashboard';
import Protrader from './Components/Protrader/Protrader';
import Protraderdetails from './Components/Protrader/Protraderdetails';


function App() {
  return (
    <div>
      <Router basename='/'>
        <Routes>
          <Route element={<MainWrapper/>}>
              <Route element={<Dashboard/>} path='/dashboard'/>
              <Route element={<Protrader/>} path="/protrader"/>
              <Route element={<Protraderdetails/>} path='/protrader/:type'/>
          </Route>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
