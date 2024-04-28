import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import "./styles/App.css";
import AppRouter from './components/AppRouter';
import { AuthContext } from "./context/AuthContext";
import { useState } from "react";
import { UserIdContext } from "./context/UserIdContext";


function App() {
  
  const [isAuth, setIsAuth] = useState(false)
  const [userId, setUserId] = useState()

  return (
    <div className="App">
      <AuthContext.Provider value={{isAuth, setIsAuth}}>
        <UserIdContext.Provider value={{userId, setUserId}}>
          <BrowserRouter>
            <AppRouter/>
          </BrowserRouter>
        </UserIdContext.Provider>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
