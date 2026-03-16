import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Overview from "./components/Overview";
import Location from "./components/Location";
import Industries from "./components/Industries";
import Incentives from "./components/Incentives";
import Timeline from "./components/Timeline";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { LanguageProvider } from "./context/LanguageContext";

export default function App() {
  return (
    <LanguageProvider>
      <div className="font-sans text-slate-900 bg-white selection:bg-blue-100 selection:text-blue-900">
        <Navbar />
        <Hero />
        <Overview />
        <Location />
        <Industries />
        <Incentives />
        <Timeline />
        <Contact />
        <Footer />
      </div>
    </LanguageProvider>
  );
}
