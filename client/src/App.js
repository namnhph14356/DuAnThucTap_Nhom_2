import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Homescreens from './screens/Homescreens';

import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Homescreens />
    </div>
  );
}
export default App;
