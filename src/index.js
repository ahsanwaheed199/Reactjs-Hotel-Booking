import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'
import * as serviceWorker from './serviceWorker';
import {RoomProvider} from './context'

import { UserContextProvider } from "./context/userContext";
ReactDOM.render(
  <React.StrictMode>
      <UserContextProvider>
      <RoomProvider>
     <App />
  </RoomProvider> 
  </UserContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
