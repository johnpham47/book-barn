import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import BaseLayout from './Components/BaseLayout'
import ViewBooks from './Components/ViewBooks'
import HomePage from './Components/HomePage'
import Register from './Components/Register'
import { createStore } from 'redux';
import reducer from './store/reducer'
import { Provider } from 'react-redux'

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
<Provider store={store}>
    <BrowserRouter>
        <BaseLayout>
            <Switch>
                <Route exact path="/" component = {HomePage} />
                <Route path="/register" component = {Register} />
                <Route path="/add" component = {App} />
                <Route path="/view/" component = {ViewBooks} />
        </Switch>
        </BaseLayout>

    </BrowserRouter>
</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
