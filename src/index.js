import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter} from 'react-router-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import ExampleRoute from './ExampleComponents/ExampleRoute';
import ExampleRedux1 from './ExampleComponents/ExampleRedux';
import PostIndex from './componentsPostExample/PostIndex';
import reducers from "./reducers";
import { Provider } from 'react-redux';
import { createStore } from "redux";
import MySmIndex from './MySmComponents/MySmIndex';

{/*import ExmpleView from './views/example/ExampleView';*/}

{/*ReactDOM.render(
  <React.StrictMode>
    <ExmpleView />
  </React.StrictMode>,
  document.getElementById('root')
);*/}


const store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <MySmIndex />
  </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
