import ReactDOM  from 'react-dom/client'
import {BrowserRouter as Router} from 'react-router-dom'
import './index.css'

import App from './App.jsx'
import { AuthenticatedContextProvider } from './context-api/authenticated.jsx'



ReactDOM.createRoot(document.getElementById("root")).render(
  <>
  <AuthenticatedContextProvider>
    <Router>
      <App />
    </Router>
  </AuthenticatedContextProvider>
  </>
)