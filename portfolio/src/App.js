import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

//import declarations for components and their links.
import Header from "./components/Header";
import Brand from "./components/Brand";
import Technologies from './components/Technologies';
import Projects from './components/Projects';
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <Brand />
      <Technologies />
      <Projects />
      <Footer />
    </div>
  );
}

//export App to run the site
export default App;
