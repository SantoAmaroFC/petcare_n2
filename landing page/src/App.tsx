
import { CiCalendar } from "react-icons/ci";
import Cards from "./components/Cards";
import Ficture from "./components/Ficture";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar"

function App() {
  

  return (
    <>
      <Navbar />
      <Hero />
      <Ficture />
      <Cards 
      icon=""
                title="Agendamento de consultas"
                description="Marque horarios com clinicas parceiras em poucos toques e receba lembretes automaticos"
      />
      
    </>
  );
}

export default App
