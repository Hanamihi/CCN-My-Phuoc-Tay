import { useState, useEffect } from "react";
import { Menu, X, Factory, Globe } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useLanguage } from "../context/LanguageContext";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === 'vi' ? 'en' : 'vi');
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className={`flex items-center gap-2 font-bold text-xl ${isScrolled ? "text-slate-900" : "text-white"}`}>
          <Factory className={`w-8 h-8 ${isScrolled ? "text-emerald-600" : "text-emerald-400"}`} />
          <span>{t.nav.brand}</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          {[
            { name: t.nav.overview, href: "#overview" },
            { name: t.nav.location, href: "#location" },
            { name: t.nav.industries, href: "#industries" },
            { name: t.nav.incentives, href: "#incentives" }
          ].map((item) => (
            <a 
              key={item.name} 
              href={item.href} 
              className={`text-sm font-medium hover:text-emerald-500 transition-colors ${
                isScrolled ? "text-slate-600" : "text-white/90"
              }`}
            >
              {item.name}
            </a>
          ))}
          
          <button 
            onClick={toggleLanguage}
            className={`flex items-center gap-1 text-sm font-medium transition-colors px-3 py-1 rounded-full border ${
              isScrolled 
                ? "border-slate-200 text-slate-600 hover:bg-slate-50" 
                : "border-white/30 text-white hover:bg-white/10"
            }`}
          >
            <Globe className="w-4 h-4" />
            <span>{language === 'vi' ? 'EN' : 'VN'}</span>
          </button>

          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-orange-600 hover:bg-orange-700 text-white px-5 py-2 rounded-full text-sm font-semibold transition-colors shadow-lg shadow-orange-500/30"
          >
            {t.nav.cta}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className={`md:hidden p-2 ${isScrolled ? "text-slate-900" : "text-white"}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="p-4 flex flex-col gap-4">
              {[
                { name: t.nav.overview, href: "#overview" },
                { name: t.nav.location, href: "#location" },
                { name: t.nav.industries, href: "#industries" },
                { name: t.nav.incentives, href: "#incentives" }
              ].map((item) => (
                <a 
                  key={item.name} 
                  href={item.href} 
                  className="text-slate-600 font-medium py-2 border-b border-slate-50"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              
              <button 
                onClick={() => {
                  toggleLanguage();
                  setIsOpen(false);
                }}
                className="flex items-center justify-center gap-2 text-slate-600 font-medium py-2 border-b border-slate-50"
              >
                <Globe className="w-4 h-4" />
                <span>{language === 'vi' ? 'Switch to English' : 'Chuyển sang Tiếng Việt'}</span>
              </button>

              <button 
                onClick={() => {
                  setIsOpen(false);
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-orange-600 text-white py-3 rounded-lg font-bold w-full mt-2 text-center block"
              >
                {t.nav.cta}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
