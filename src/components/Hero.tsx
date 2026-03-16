import { motion } from "motion/react";
import { ArrowRight, Download, MapPin } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-slate-900 text-white">
      {/* Background Image Placeholder - In real app, replace with the 3D render */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://i.postimg.cc/J7kbQGM6/2.png" 
          alt="My Phuoc Tay Industrial Cluster Main Entrance" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-emerald-900/50 border border-emerald-500/50 text-emerald-300 text-sm font-semibold mb-6 backdrop-blur-sm">
            {t.hero.badge}
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight">
            {t.hero.title_prefix} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-orange-400">
              {t.hero.title_highlight}
            </span>
          </h1>
          <h2 className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto font-light">
            {t.hero.subtitle}
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="group bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all shadow-lg hover:shadow-emerald-500/25 flex items-center gap-2"
            >
              {t.hero.cta_primary}
              <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </button>
            <button 
              onClick={() => document.getElementById('location')?.scrollIntoView({ behavior: 'smooth' })}
              className="group bg-white/10 hover:bg-white/20 text-white border border-white/30 px-8 py-4 rounded-full font-semibold text-lg transition-all backdrop-blur-sm flex items-center gap-2"
            >
              <MapPin className="w-5 h-5" />
              {t.hero.cta_secondary}
            </button>
          </div>
          
          <div className="mt-12 flex items-center justify-center gap-2 text-sm text-slate-400">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
            {t.hero.price_tag}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
