import Router from './config/router';
import store from './redux/store';
import { Provider } from 'react-redux';
import './App.css';


function App() {


  return ( <div className='app'>

  <Provider store={store}>
  <Router/>

  </Provider>,

  </div>
    
  );
}

export default App;
