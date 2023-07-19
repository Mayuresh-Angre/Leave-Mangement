import logo from './logo.svg';
import './App.css';
import Router from './router/Router';
import { Provider } from 'react-redux';
import { sliceStore } from './redux/sliceStore';

function App() {
  return (
    <Provider store={sliceStore}>
    <Router/>
    </Provider>
    
  );
}

export default App;
