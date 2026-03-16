import { Factory } from "lucide-react";

export default function Footer() {
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
              Cụm Công nghiệp Mỹ Phước Tây - Điểm đến đầu tư lý tưởng tại Tiền Giang với hạ tầng đồng bộ, 
              pháp lý hoàn chỉnh và chính sách ưu đãi vượt trội.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">Liên Kết Nhanh</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Tổng quan</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Vị trí</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Ngành nghề</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Ưu đãi</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Liên Hệ</h4>
            <ul className="space-y-2 text-sm">
              <li>Phường Mỹ Phước Tây, TX. Cai Lậy, Tiền Giang</li>
              <li>contact@sonphuctiengiang.com</li>
              <li>(+84) 909 123 456</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 text-center text-xs">
          © {new Date().getFullYear()} CÔNG TY TNHH SƠN PHÚC TIỀN GIANG. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
