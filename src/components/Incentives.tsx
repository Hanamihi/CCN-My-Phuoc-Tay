import { motion } from "motion/react";
import { Percent, ShieldCheck, HandCoins, Container } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function Incentives() {
  const { t } = useLanguage();

  return (
    <section id="incentives" className="py-20 bg-slate-900 text-white overflow-hidden relative">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10" 
           style={{ backgroundImage: 'radial-gradient(#4b5563 1px, transparent 1px)', backgroundSize: '32px 32px' }}>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              {t.incentives.title_prefix} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-orange-400">
                {t.incentives.title_highlight}
              </span>
            </h2>
            <p className="text-slate-300 text-lg mb-10">
              {t.incentives.description}
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0 border border-emerald-500/30">
                  <Percent className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">{t.incentives.tax_cit_title}</h3>
                  <p className="text-slate-400">{t.incentives.tax_cit_desc}</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0 border border-blue-500/30">
                  <Container className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">{t.incentives.tax_import_title}</h3>
                  <p className="text-slate-400">{t.incentives.tax_import_desc}</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-orange-500/20 flex items-center justify-center shrink-0 border border-orange-500/30">
                  <HandCoins className="w-6 h-6 text-orange-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">{t.incentives.support_title}</h3>
                  <p className="text-slate-400">{t.incentives.support_desc}</p>
                </div>
              </div>
            </div>
          </div>

          <motion.div 
            className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">{t.incentives.chart_title}</h3>
              <p className="text-slate-400 text-sm">{t.incentives.chart_unit}</p>
            </div>

            <div className="space-y-6">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="font-bold text-emerald-400">{t.incentives.chart_items[0].name}</span>
                  <span className="font-bold text-emerald-400">{t.incentives.chart_items[0].value}</span>
                </div>
                <div className="h-4 bg-slate-700 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-emerald-500" 
                    initial={{ width: 0 }}
                    whileInView={{ width: "60%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-slate-300">{t.incentives.chart_items[1].name}</span>
                  <span className="text-slate-300">{t.incentives.chart_items[1].value}</span>
                </div>
                <div className="h-4 bg-slate-700 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-slate-500" 
                    initial={{ width: 0 }}
                    whileInView={{ width: "85%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.7 }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-slate-300">{t.incentives.chart_items[2].name}</span>
                  <span className="text-slate-300">{t.incentives.chart_items[2].value}</span>
                </div>
                <div className="h-4 bg-slate-700 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-slate-500" 
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.9 }}
                  />
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 bg-emerald-600/20 rounded-xl border border-emerald-500/30 text-center">
              <p className="text-emerald-200 text-sm">
                {t.incentives.chart_note}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
