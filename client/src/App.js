import './App.css';
import { Routes, Route} from 'react-router-dom'
import Homescreens from './screens/Homescreens'
import ClientLayout from './layouts/Client'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Productdescscreen from './screens/Productdescscreen';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<ClientLayout><Homescreens /></ClientLayout>}/>
      <Route path="/product/:id" element={<ClientLayout><Productdescscreen /></ClientLayout>}/>
      </Routes>
    </div>
  );
}
export default App;
