import "./App.css";
import Hero from "./Components/Hero/Hero";
import Mission from "./Components/Mission/Mission";
import Nav from "./Components/Nav/Nav";
import Services from "./Components/Services/Services";

function App() {
  return (
    <div className="body">
      <Nav />
      <Hero />
      <Mission/>
      <Services/>
    </div>
  );
}

export default App;
