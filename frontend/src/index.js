import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom'
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from '@apollo/react-hooks';


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

const apiclient = new ApolloClient({
    uri: 'http://127.0.0.1:8000/graphql',
  });
const Init = () => (
    <ApolloProvider client={apiclient}>
        <Router>
            <App ></App>
        </Router>
    </ApolloProvider>
)
ReactDOM.render( <Init ></Init>, document.getElementById('root'))
serviceWorker.register();
