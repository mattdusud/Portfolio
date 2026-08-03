import SpaceBackground from "../src/components/SpaceBackground/SpaceBackground";
import "./style.scss";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from "./components/Layout/Layout";
import About from "../src/pages/About/About.jsx"
import Experience from "../src/pages/Experience/Experience.jsx"
import Qualification from "../src/pages/Qualification/Qualification.jsx"
import Projets from "../src/pages/Projets/Projets.jsx"
import Error from "./pages/Error/Error.jsx";
//import Header from "./components/Header/Header";
import { ScrollToTop } from "./components/ScrolltoTop/ScrollToTop.jsx";


function App() {


  return (
    <>
      <SpaceBackground />
      <Router>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<About />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/qualification" element={<Qualification/>} />
          <Route path="/projets" element={<Projets />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;