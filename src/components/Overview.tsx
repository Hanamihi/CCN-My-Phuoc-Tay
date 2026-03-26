import { motion } from "motion/react";
import { FileCheck, Building2, Ruler, CalendarClock, Banknote } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function Overview() {
  const { t } = useLanguage();

  const features = [
    {
      icon: <Building2 className="w-6 h-6 text-emerald-600" />,
      label: t.overview.investor,
      value: t.overview.investor_value
    },
    {
      icon: <Ruler className="w-6 h-6 text-emerald-600" />,
      label: t.overview.area,
      value: t.overview.area_value
    },
    {
      icon: <Banknote className="w-6 h-6 text-emerald-600" />,
      label: t.overview.capital,
      value: t.overview.capital_value
    },
    {
      icon: <CalendarClock className="w-6 h-6 text-emerald-600" />,
      label: t.overview.duration,
      value: t.overview.duration_value
    }
  ];

  return (
    <section id="overview" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              {t.overview.title_prefix} <br />
              <span className="text-orange-600">{t.overview.title_highlight}</span>
            </h2>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              {t.overview.description}
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {features.map((item, index) => (
                <div key={index} className="p-4 rounded-xl bg-slate-50 border border-slate-100 hover:shadow-md transition-shadow">
                  <div className="mb-3 bg-emerald-100 w-12 h-12 rounded-lg flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div className="text-sm text-slate-500 mb-1">{item.label}</div>
                  <div className="font-semibold text-slate-900">{item.value}</div>
                </div>
              ))}
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="bg-emerald-100 p-2 rounded-full mt-1">
                  <FileCheck className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-2">{t.overview.legal_title}</h3>
                  <ul className="space-y-2 text-slate-700 text-sm">
                    {t.overview.legal_items.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              {/* Placeholder for Project Overview Image */}
              <img 
                src="https://i.postimg.cc/507hCTmR/4.png" 
                alt="Modern Factory Building at My Phuoc Tay" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-blue-600/10 rounded-full blur-3xl -z-10" />
            <div className="absolute -top-6 -right-6 w-48 h-48 bg-emerald-600/10 rounded-full blur-3xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
