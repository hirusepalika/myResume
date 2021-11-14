import './App.css';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import BodyComponent from './components/BodyComponent';
import { BrowserRouter as Router, Switch, Route, Routes} from "react-router-dom";
import Experiences from './components/Experiences';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Header/>
          <Routes>
            <Route path="/contact" element={<BodyComponent/>} />
            <Route path="/experiences" element={<Experiences/>} />
            {/* <Route exactly component={Page1} pattern="/path1" />
            <Route exactly component={Page2} pattern="/path2" />
            <Route exactly component={Page3} pattern="/path3" />
            <Route component={Page404} /> */}
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
