import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ReduxTest from './ReduxTest';
import { Provider } from 'react-redux';
import { createStore } from 'redux';


// 8강 이전까지
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

//-----------------------------
//9강 Redux
const 체중 = 100;
function reducer(state = 체중, action) {
  if (action.type === '증가') {
    state++;
    return state;
  } else {
    return state;
  }
}

let store = createStore(reducer);

ReactDOM.render(

  <React.StrictMode>
    <Provider store={store}>
      <ReduxTest />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

