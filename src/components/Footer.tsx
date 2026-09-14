import React from 'react';
import { Globe, MessageSquare, Mail, MapPin, PhoneCall, Clock } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-white border-t border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1: About */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <img
                alt="Logo Giống Hoa Dũng Tâm"
                className="h-8 w-auto object-contain"
                src="/logo-dung-tam.png"
                width="160"
                height="32"
                loading="lazy"
                decoding="async"
              />
              <span className="text-base text-black font-bold tracking-tight">
                Giống Hoa Dũng Tâm
              </span>
            </div>

            <p className="text-[13px] text-zinc-600 leading-relaxed font-normal">
              Nhà vườn uy tín chuyên sản xuất, ươm cấy và cung ứng các loại cây giống hoa chất lượng cao, kháng bệnh tốt cho nhà vườn và đại lý toàn quốc.
            </p>

            <div className="flex items-center gap-2 pt-1">
              <a
                href="https://www.gionghoa.store"
                className="w-8 h-8 rounded-full bg-zinc-100 border border-zinc-300 flex items-center justify-center text-zinc-700 hover:text-black hover:bg-zinc-200 transition-colors"
                title="Website chính thức www.gionghoa.store"
              >
                <Globe className="w-4 h-4" />
              </a>
              <a
                href="https://zalo.me/0933634678"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-zinc-100 border border-zinc-300 flex items-center justify-center text-zinc-700 hover:text-black hover:bg-zinc-200 transition-colors"
                title="Zalo nhà vườn: 0933 634 678"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
              <a
                href="mailto:lienhe@gionghoa.store"
                className="w-8 h-8 rounded-full bg-zinc-100 border border-zinc-300 flex items-center justify-center text-zinc-700 hover:text-black hover:bg-zinc-200 transition-colors"
                title="Email liên hệ lienhe@gionghoa.store"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Fast Links */}
          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-bold text-black tracking-wider uppercase">
              Liên kết nhanh
            </h3>
            <div className="flex flex-col gap-2">
              <a className="text-[13px] text-zinc-600 hover:text-black transition-colors" href="#">
                Trang chủ
              </a>
              <a className="text-[13px] text-zinc-600 hover:text-black transition-colors" href="#danh-muc-hoa">
                Danh mục giống hoa
              </a>
              <a className="text-[13px] text-zinc-600 hover:text-black transition-colors" href="#uu-diem">
                Ưu điểm nhà vườn
              </a>
              <a className="text-[13px] text-zinc-600 hover:text-black transition-colors" href="#quy-trinh">
                Quy trình đặt giống
              </a>
              <a className="text-[13px] text-zinc-600 hover:text-black transition-colors" href="#lien-he">
                Chính sách bảo hành tỉ lệ nở
              </a>
            </div>
          </div>

          {/* Col 3: Categories */}
          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-bold text-black tracking-wider uppercase">
              Chủng loại cúc chính
            </h3>
            <div className="flex flex-col gap-2">
              <span className="text-[13px] text-zinc-600">Cúc Vàng Hòe (9999) &amp; Pha Lê</span>
              <span className="text-[13px] text-zinc-600">Cúc Lan Tím &amp; Cúc Nghệ Vàng</span>
              <span className="text-[13px] text-zinc-600">Cúc Kali &amp; Cúc Gơ Đỏ</span>
              <span className="text-[13px] text-zinc-600">Cúc Tua Vàng &amp; Cúc Sao Đỏ</span>
              <span className="text-[13px] text-zinc-600">Ngọn giống cúc F1 cắt cành sỉ</span>
            </div>
          </div>

          {/* Col 4: Nursery Info */}
          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-bold text-black tracking-wider uppercase">
              Thông tin nhà vườn
            </h3>
            <div className="flex flex-col gap-2.5">
              <a
                href="https://maps.app.goo.gl/j4GyWCjmzHhgcgSU7"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 text-zinc-600 hover:text-black transition-colors group"
                title="Xem vị trí Giống Cúc Dũng Tâm trên Google Maps"
              >
                <MapPin className="w-4 h-4 text-black mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-[13px] leading-relaxed font-normal">
                  <strong className="font-semibold text-black">Giống Cúc Dũng Tâm</strong> · 16 Trần Thái Tông, Xuân Hương - Đà Lạt, Lâm Đồng (Google Maps &rarr;)
                </span>
              </a>
              <div className="flex items-center gap-2">
                <PhoneCall className="w-4 h-4 text-black flex-shrink-0" />
                <a href="tel:0933634678" className="text-[13px] text-zinc-600 hover:text-black transition-colors font-medium">Hotline / Zalo: 0933.634.678</a>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-black flex-shrink-0" />
                <span className="text-[13px] text-zinc-600">Mở cửa: 06:30 - 18:00 (T2 - CN)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Rights */}
        <div className="mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-zinc-200">
          <span className="text-[12px] text-zinc-500 font-normal">
            © 2024 - 2026 Giống Hoa Dũng Tâm. Tất cả quyền được bảo lưu.
          </span>
          <div className="flex items-center gap-6">
            <a className="text-[12px] text-zinc-500 hover:text-black transition-colors" href="#">
              Điều khoản cung ứng
            </a>
            <a className="text-[12px] text-zinc-500 hover:text-black transition-colors" href="#">
              Chính sách vận chuyển
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
