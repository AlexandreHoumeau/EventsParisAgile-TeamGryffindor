import { Provider } from 'react-redux';
import store  from './store/store';
import './App.css';
import Map from './Components/Map';
import SideBar from './Components/SideBar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Map />
        <SideBar />
      </div>
    </Provider>
  );
}

export default App;
