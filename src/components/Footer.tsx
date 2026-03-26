import { Factory } from "lucide-react";
import { useLanguage } from "../context/LanguageContext"; // Import hook ngôn ngữ

export default function Footer() {
  const { t } = useLanguage(); // Khởi tạo hàm t

  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 text-white font-bold text-xl mb-4">
              <Factory className="w-8 h-8 text-blue-500" />
              CCN MỸ PHƯỚC TÂY
            </div>
            <p className="max-w-md text-sm leading-relaxed">
              {t.footer.description} {/* Sử dụng bản dịch */}
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">{t.footer.quick_links}</h4> {/* Sử dụng bản dịch */}
            <ul className="space-y-2 text-sm">
              {/* Tái sử dụng các khóa từ nav để đảm bảo đồng bộ */}
              <li><a href="#overview" className="hover:text-blue-400 transition-colors">{t.nav.overview}</a></li>
              <li><a href="#location" className="hover:text-blue-400 transition-colors">{t.nav.location}</a></li>
              <li><a href="#industries" className="hover:text-blue-400 transition-colors">{t.nav.industries}</a></li>
              <li><a href="#incentives" className="hover:text-blue-400 transition-colors">{t.nav.incentives}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">{t.footer.contact}</h4> {/* Sử dụng bản dịch */}
            <ul className="space-y-2 text-sm">
              <li>{t.footer.address}</li>
              <li>thanhnt@sonphuc.vn</li>
              <li>0988398131</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 text-center text-xs">
          © {new Date().getFullYear()} {t.footer.copyright}
        </div>
      </div>
    </footer>
  );
}
