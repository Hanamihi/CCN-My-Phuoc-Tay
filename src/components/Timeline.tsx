import { motion } from "motion/react";
import { TrendingUp, Wallet, FileCheck, Truck, Globe } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function Timeline() {
  const { t } = useLanguage();

  const swotConfig = [
    { icon: TrendingUp, color: "blue" },
    { icon: Wallet, color: "emerald" },
    { icon: FileCheck, color: "blue" },
    { icon: Truck, color: "emerald" },
    { icon: Globe, color: "blue" }
  ];

  const getColorClasses = (color: string) => {
    if (color === 'blue') return { bg: 'bg-blue-50', text: 'text-blue-600', border: 'hover:border-blue-200', line: 'bg-blue-600' };
    return { bg: 'bg-emerald-50', text: 'text-emerald-600', border: 'hover:border-emerald-200', line: 'bg-emerald-600' };
  };

  return (
    <section id="timeline" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
            {t.timeline.title_prefix} <span className="text-blue-600">{t.timeline.title_highlight}</span>
          </h2>
        </div>

        {/* PART 1: TIMELINE (Implementation Progress) */}
<div className="mb-24 max-w-6xl mx-auto">
  <h3 className="text-2xl font-bold mb-10 text-center flex items-center justify-center gap-4">
    <span className="w-12 h-1.5 bg-blue-600 rounded-full"></span>
    <span className="uppercase tracking-wide">{t.timeline.timeline_title}</span>
    <span className="w-12 h-1.5 bg-blue-600 rounded-full"></span>
  </h3>
  
  {/* Thay đổi md:grid-cols-2 thành lg:grid-cols-3 để hiển thị 3 cột */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {t.timeline.milestones.map((milestone, index) => (
      <motion.div 
        key={index}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.2 }}
        className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 relative overflow-hidden group hover:shadow-xl transition-all"
      >
        {/* Màu sắc động cho từng mốc: 01-Xanh dương, 02-Hổ phách, 03-Xanh lá */}
        <div className={`absolute top-0 left-0 w-full h-1.5 ${
          index === 0 ? 'bg-blue-600' : index === 1 ? 'bg-amber-500' : 'bg-emerald-500'
        }`}></div>
        
        <span className={`text-6xl font-black opacity-5 absolute top-2 right-4 ${
          index === 0 ? 'text-blue-600' : index === 1 ? 'text-amber-600' : 'text-emerald-600'
        }`}>
          0{index + 1}
        </span>
        
        <div className={`inline-block px-4 py-1.5 rounded-full text-sm font-bold mb-5 ${
          index === 0 ? 'bg-blue-100 text-blue-700' : 
          index === 1 ? 'bg-amber-100 text-amber-700' : 
          'bg-emerald-100 text-emerald-700'
        }`}>
          {milestone.date}
        </div>
        <h4 className="text-xl font-bold text-slate-900 mb-3">{milestone.title}</h4>
        <p className="text-slate-600 leading-relaxed text-sm">{milestone.desc}</p>
      </motion.div>
    ))}
  </div>
</div>

        {/* PART 2: WHY CHOOSE (SWOT) */}
        <div className="max-w-7xl mx-auto">
            <h3 className="text-2xl font-bold mb-12 text-center flex items-center justify-center gap-4">
              <span className="w-12 h-1.5 bg-emerald-600 rounded-full"></span>
              <span className="uppercase tracking-wide">{t.timeline.swot_title}</span>
              <span className="w-12 h-1.5 bg-emerald-600 rounded-full"></span>
            </h3>

            {/* Grid Layout: Flex wrap for 3-2 layout on desktop */}
            <div className="flex flex-wrap justify-center gap-6">
                {t.timeline.swot_items.map((item, index) => {
                    const config = swotConfig[index] || swotConfig[0];
                    const Icon = config.icon;
                    const colors = getColorClasses(config.color);

                    return (
                        <motion.div 
                            key={index}
                            whileHover={{ y: -8 }}
                            className={`w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] bg-white p-8 rounded-2xl shadow-md border border-slate-100 transition-all ${colors.border} flex flex-col items-center text-center group`}
                        >
                            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${colors.bg} ${colors.text} shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                                <Icon className="w-8 h-8" />
                            </div>
                            <h4 className="font-bold text-slate-900 mb-4 uppercase tracking-wide text-lg h-14 flex items-center justify-center">{item.title}</h4>
                            <div className={`w-12 h-1 rounded-full mb-4 ${colors.line} opacity-20`}></div>
                            <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                        </motion.div>
                    );
                })}
            </div>
        </div>

      </div>
    </section>
  );
}
