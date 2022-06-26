import Layout from "./components/Layouts/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Auths/Login";
import Login_Tmp from "./components/Auths/Login_Tmp";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/logintmp" element={<Login_Tmp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
      {/* <Layout /> */}
    </>
  );
}

export default App;
