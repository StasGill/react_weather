import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./components/header/Header";
import { Home } from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/:id" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
