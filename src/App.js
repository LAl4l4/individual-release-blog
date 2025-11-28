import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Frontpage from './Main/Frontpage/frontpage';
import Login from './Account/Login';

function App() {
  return (
    <div className="App">
      <header className="App-header">


      </header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Frontpage />} />
          <Route path="/login" element={<Login />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
