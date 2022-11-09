import ReactDOM from 'react-dom/client';
import './css/index.css';
import { BrowserRouter } from 'react-router-dom';
import App from './app';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <BrowserRouter>
  <App />
  </BrowserRouter>
);
