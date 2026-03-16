import React, { useState } from "react";
import { motion } from "motion/react";
import { Send, Phone, Mail, Building } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function Contact() {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    needs: "Thuê đất xây nhà máy"
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const BROCHURE_URLS = {
    vi: "https://drive.google.com/file/d/1svzkdeD_r7dwZDXwCZigRocLYKi4plsg/view",
    en: "https://drive.google.com/file/d/1svzkdeD_r7dwZDXwCZigRocLYKi4plsg/view"
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.name && formData.phone && formData.email) {
      setIsSubmitting(true);
      try {
        const scriptUrl = "https://script.google.com/macros/s/AKfycbybV3AJ8w9W0X4BU4CNoePii9Eud_wyWW3bby-F_uATBaA93kJblQAY8Zv4u3iJQzHl/exec";
        
        const formBody = new FormData();
        formBody.append("name", formData.name);
        formBody.append("email", formData.email);
        formBody.append("phone", formData.phone);
        formBody.append("company", formData.company);
        formBody.append("need", formData.needs);

        await fetch(scriptUrl, {
          method: "POST",
          body: formBody,
          mode: "no-cors"
        });

        // Open PDF in new tab based on language
        const url = BROCHURE_URLS[language];
        window.open(url, "_blank");
      } catch (error) {
        console.error("Error:", error);
        alert(language === 'vi' ? "Đã có lỗi xảy ra, vui lòng thử lại." : "An error occurred, please try again.");
      } finally {
        setIsSubmitting(false);
      }
    } else {
      alert(language === 'vi' 
        ? "Vui lòng điền đầy đủ thông tin bắt buộc (Họ tên, SĐT, Email)" 
        : "Please fill in all required fields (Name, Phone, Email)");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-20 bg-white" id="contact">
      <div className="container mx-auto px-4">
        <div className="bg-blue-600 rounded-3xl overflow-hidden shadow-2xl">
          <div className="grid lg:grid-cols-2">
            
            <div className="px-6 py-10 md:p-16 text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {t.contact.title}
              </h2>
              <p className="text-blue-100 text-lg mb-8">
                {t.contact.description}
              </p>

              <div className="space-y-6 mb-12">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-blue-200 uppercase tracking-wider">{t.contact.labels.hotline}</div>
                    <div className="font-bold text-lg">0909 123 456</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-blue-200 uppercase tracking-wider">{t.contact.labels.email}</div>
                    <div className="font-bold text-lg">contact@sonphuctiengiang.com</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <Building className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-blue-200 uppercase tracking-wider">{t.contact.labels.investor}</div>
                    <div className="font-bold text-lg">CÔNG TY TNHH SƠN PHÚC TIỀN GIANG</div>
                    <a 
                      href="https://sonphuc.vn/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm text-white/80 hover:text-white hover:underline transition-colors block mt-1"
                    >
                      {language === 'vi' ? 'TRỰC THUỘC TẬP ĐOÀN SƠN PHÚC' : 'MEMBER OF SON PHUC GROUP'}
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-blue-700/50 p-6 rounded-xl border border-blue-500/30">
                <h4 className="font-bold mb-2">{t.contact.process_title}</h4>
                <p className="text-sm text-blue-100">
                  {t.contact.process_desc}
                </p>
              </div>
            </div>

            <div className="bg-white px-6 py-10 md:p-16">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">{t.contact.form_title}</h3>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-sm font-medium text-slate-700">{t.contact.form_labels.name} *</label>
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all" 
                      placeholder={t.contact.form_placeholders.name}
                      required 
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-sm font-medium text-slate-700">{t.contact.form_labels.phone} *</label>
                    <input 
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all" 
                      placeholder={t.contact.form_placeholders.phone}
                      required 
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-sm font-medium text-slate-700">{t.contact.form_labels.email} *</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all" 
                    placeholder={t.contact.form_placeholders.email}
                    required 
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-sm font-medium text-slate-700">{t.contact.form_labels.company}</label>
                  <input 
                    type="text" 
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all" 
                    placeholder={t.contact.form_placeholders.company} 
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-sm font-medium text-slate-700">{t.contact.form_labels.needs}</label>
                  <select 
                    name="needs"
                    value={formData.needs}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-white"
                  >
                    {t.contact.form_options.map((option, index) => (
                      <option key={index} value={option}>{option}</option>
                    ))}
                  </select>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className={`w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-lg shadow-lg hover:shadow-blue-500/25 transition-all flex items-center justify-center gap-2 mt-4 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  <Send className="w-5 h-5" />
                  {isSubmitting ? (language === 'vi' ? "Đang gửi..." : "Sending...") : t.contact.submit}
                </button>
                
                <p className="text-xs text-center text-slate-500 mt-4">
                  {t.contact.privacy}
                </p>
              </form>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
