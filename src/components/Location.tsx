import { motion } from "motion/react";
import { Map, Navigation, Plane, Ship, Truck } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function Location() {
  const { t, language } = useLanguage();

  const connections = [
    { icon: <Navigation className="w-5 h-5" />, label: t.location.hcm, value: "80 km" },
    { icon: <Plane className="w-5 h-5" />, label: t.location.airport, value: "85 km" },
    { icon: <Ship className="w-5 h-5" />, label: t.location.port, value: "31 km" },
    { icon: <Truck className="w-5 h-5" />, label: t.location.highway, value: "10 km" },
    { icon: <Map className="w-5 h-5" />, label: t.location.junction, value: "15 km" },
  ];

  return (
    <section id="location" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            {t.location.title_prefix} <span className="text-emerald-600">{t.location.title_highlight}</span>
          </h2>
          <p className="text-slate-600 text-lg mb-8">
            {t.location.description}
          </p>
          
          <a 
            href="https://maps.app.goo.gl/kSf3NmuJnHgGgfMK7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-full font-semibold transition-colors shadow-lg hover:shadow-emerald-500/30"
          >
            <Map className="w-5 h-5" />
            {language === 'vi' ? 'Xem vị trí dự án trên Google Map' : 'View Project Location on Google Map'}
          </a>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Map Area */}
          <motion.div 
            className="lg:col-span-2 bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-200 min-h-[400px] relative"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            {/* Placeholder for Map Image */}
            <img 
              src="https://i.postimg.cc/fW9xvJDK/3.png" 
              alt="Logistics and Transport Hub" 
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-4 py-2 rounded-lg shadow-sm text-sm font-medium text-slate-700">
              {t.location.map_note}
            </div>
          </motion.div>

          {/* Connections List */}
          <div className="space-y-4">
            {connections.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-5 rounded-xl shadow-sm border border-slate-100 flex items-center justify-between hover:border-orange-200 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center text-orange-600">
                    {item.icon}
                  </div>
                  <span className="font-medium text-slate-700">{item.label}</span>
                </div>
                <span className="font-bold text-slate-900">{item.value}</span>
              </motion.div>
            ))}
            
            <div className="bg-blue-900 text-white p-6 rounded-xl mt-8 shadow-lg">
              <h4 className="font-bold text-lg mb-2">{t.location.advantage_title}</h4>
              <p className="text-blue-100 text-sm">
                {t.location.advantage_desc}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
