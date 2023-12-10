import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from "react-redux";
import store from "./Redux/store";
import 'bootstrap/dist/css/bootstrap.css'
import "react-datepicker/dist/react-datepicker.css";

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
    <App />
    </Provider>

)
