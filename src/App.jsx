import SpaceBackground from "../src/components/SpaceBackground/SpaceBackground";
import "./style.scss";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from "./components/Layout/Layout";
import About from "../src/pages/About/About.jsx"
import Experience from "../src/pages/Experience/Experience.jsx"
import Qualification from "../src/pages/Qualification/Qualification.jsx"
import Projets from "../src/pages/Projets/Projets.jsx"
import Error from "./pages/Error/Error.jsx";
import Hobbies from "./pages/Hobbies/Hobbies.jsx";
import Contact from "./pages/Contact/Contact.jsx";
//import Header from "./components/Header/Header";
import { ScrollToTop } from "./components/ScrolltoTop/ScrollToTop.jsx";


function App() {


  return (
    <>
      <SpaceBackground />
      <Router basename="/Portfolio">
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<About />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/qualification" element={<Qualification/>} />
          <Route path="/projets" element={<Projets />} />
          <Route path="/hobbies" element={<Hobbies />} />
          <Route path="/contact" element={<Contact />} />          
          <Route path="*" element={<Error />} />
        </Route>

      </Routes>
    </Router>
    </>
  );
}

export default App;