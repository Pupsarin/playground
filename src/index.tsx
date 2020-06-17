import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import ApolloClient from 'apollo-boost';
import {ApolloProvider } from '@apollo/react-hooks';
import '@wfp/ui/source/globals/scss/styles.scss';
import './index.css';
import {App} from './App';
import {store} from "./store";

const client = new ApolloClient({
    uri: "http://localhost:4000"
})

ReactDOM.render(
    <React.StrictMode>
        <ApolloProvider client={client}>
            <Provider store={store}>
                <App/>
            </Provider>
        </ApolloProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
