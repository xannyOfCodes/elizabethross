import "./App.css";
import Advisor from "./Components/Advisor/Advisor";
import Faqs from "./Components/Faqs/Faqs";
import Hero from "./Components/Hero/Hero";
import Mission from "./Components/Mission/Mission";
import Nav from "./Components/Nav/Nav";
import Insight from "./Components/Portfolio-Insights/Insight";
import Services from "./Components/Services/Services";
import Trades from "./Components/Trades/Trades";

function App() {
  return (
    <div className="body">
      <Nav />
      <Hero />
      <Mission/>
      <Services/>
      <Insight/>
      <Trades/>
      <Advisor/>
      <Faqs/>
    </div>
  );
}

export default App;
