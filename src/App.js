
import './App.css';
import Frontpage from './Frontpage/frontpage';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <Frontpage />
      </header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Frontpage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/content" element={<ContentPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
