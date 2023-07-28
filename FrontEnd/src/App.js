import logo from './logo.svg';
import {Route,Routes} from 'react-router-dom';
import HP from './HomePage';
import Log from './login';
import Reg from './registration';
import SI from './StartInvest';
import Orders from './Orders';
import Prof from './Profile';
import Acc from './Account';
import {persistor,store} from "./store";
import Invent from './StockInventory';
import FeedForm from './Feedback';
import {Provider} from 'react-redux';
import './App.css';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <Routes>
        <Route path="/" element={<Log/>}></Route>
        <Route path="/home" element={<HP/>}></Route>
        <Route path="/reg" element={<Reg/>}></Route>
        <Route path="/si" element={<SI/>}></Route>
        <Route path="/ord" element={<Orders/>}></Route>
        <Route path="/pro" element={<Prof/>}></Route>
        <Route path="/acc" element={<Acc/>}></Route>
        <Route path="/inv" element={<Invent/>}></Route>
        <Route path="/feed" element={<FeedForm/>}></Route>
      </Routes>
      </Provider>
    </div>
  );
}

export default App;
