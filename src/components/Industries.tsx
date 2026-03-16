import { motion } from "motion/react";
import { Cpu, Wheat, Warehouse, Factory } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function Industries() {
  const { t } = useLanguage();

  const zones = [
    {
      id: "CN1",
      title: t.industries.zones[0].title,
      icon: <Cpu className="w-8 h-8" />,
      desc: t.industries.zones[0].desc,
      color: "navy"
    },
    {
      id: "CN2-CN3",
      title: t.industries.zones[1].title,
      icon: <Wheat className="w-8 h-8" />,
      desc: t.industries.zones[1].desc,
      color: "emerald"
    },
    {
      id: "KHO",
      title: t.industries.zones[2].title,
      icon: <Warehouse className="w-8 h-8" />,
      desc: t.industries.zones[2].desc,
      color: "orange"
    }
  ];

  return (
    <section id="industries" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            {t.industries.title_prefix} <span className="text-orange-600">{t.industries.title_highlight}</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            {t.industries.description}
          </p>
        </div>

        {/* Master Plan Image Addition */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 rounded-2xl overflow-hidden shadow-xl border border-slate-200 aspect-[21/9] relative group"
        >
          <img 
            src="https://i.postimg.cc/pVFDBpRK/1.png" 
            alt="Master Plan and Industrial Zoning - Aerial View" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent flex items-end p-8">
            <div className="text-white">
              <h3 className="text-2xl font-bold mb-2">{t.industries.map_title}</h3>
              <p className="text-slate-200">{t.industries.map_desc}</p>
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {zones.map((zone, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-white shadow-lg
                ${zone.color === 'navy' ? 'bg-blue-900 shadow-blue-900/30' : 
                  zone.color === 'emerald' ? 'bg-emerald-600 shadow-emerald-200' : 
                  'bg-orange-600 shadow-orange-200'}`}
              >
                {zone.icon}
              </div>
              
              <div className="absolute top-8 right-8 text-4xl font-black text-slate-200 select-none">
                {zone.id}
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-3 relative z-10">
                {zone.title}
              </h3>
              <p className="text-slate-600 leading-relaxed relative z-10">
                {zone.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
