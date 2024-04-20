import Home from './pages/Home';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/App.css";
import Authorization from './pages/Authorization';
import AppRouter from './components/AppRouter';


function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <AppRouter/>
      </BrowserRouter>
    </div>
  );
}

export default App;
