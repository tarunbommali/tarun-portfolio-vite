import React from 'react'
import ReactDOM from 'react-dom/client'
import {AppRouter} from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import appStore from './store/appStore.js';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={appStore}>
      <RouterProvider router={AppRouter} />
    </Provider>
  </React.StrictMode>,
)
