import Layout from "./components/Layouts/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Auths/Login";
import Register from "./components/Auths/Register";
import Spinner from "./components/Layouts/Spinner";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
