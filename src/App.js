import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Todo from './components/Todo';
//import Home from './components/home';
import { useDispatch } from 'react-redux';
import store from './redux/store';
import { Provider } from 'react-redux';
import User from './components/User';

function App() {
  // const dispatch = useDispatch();
  // if (user) {
  //   return (
  //     <>
  //       <div>hello</div>
  //       <button onClick={() => dispatch(logout())}>logout</button>
  //     </>
  //   );
  // }
  return (
    <Provider store={store}>
      <div className="">
        home page
        <Todo />
        {/* <User /> */}
        {/* <Home /> */}
      </div>
    </Provider>
  );
}

export default App;
