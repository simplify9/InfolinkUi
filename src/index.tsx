import React from 'react';
import "./index.css";
import App from './App';
import {Provider} from "react-redux";
import {client} from './client'
import {addAxiosInterceptors} from "./client/api";
import {API_BASE_URL} from "./env";
import AuthConfig from "./authConfig";
import {AuthApiProvider} from "./client/components";
import {createRoot} from 'react-dom/client';

addAxiosInterceptors(client, AuthConfig);
client.defaults.baseURL = API_BASE_URL;

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<React.StrictMode>
  <AuthApiProvider authApp={AuthConfig}>
    <App/>
  </AuthApiProvider>
</React.StrictMode>);

