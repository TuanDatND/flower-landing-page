import React from 'react';
import {
  PhoneCall,
  ArrowDown,
  ArrowRight,
  ShieldCheck,
  Truck,
  Award,
  Headphones,
  Sprout,
  CheckCircle2,
  Image as ImageIcon
} from 'lucide-react';
import { motion } from 'motion/react';

interface HeroProps {
  onExploreClick: () => void;
  onCallClick: () => void;
  onSelectHeroPhoto?: (img: string, title: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick, onCallClick, onSelectHeroPhoto }) => {
  return (
    <section className="max-w-7xl mx-auto px-4 lg:px-8 pt-4 pb-16 lg:pb-24 relative" id="hero-section">
      {/* Announcement Pill */}
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="flex justify-center mb-6"
      >
        <a
          href="#danh-muc-hoa"
          className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white rounded-full border border-zinc-200 shadow-sm hover:border-black transition-all group"
          id="hero-announcement-pill"
        >
          <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-black text-white">
            <Sprout className="w-3 h-3" />
          </span>
          <span className="text-[13px] text-zinc-800 font-semibold">Nhà vườn Giống Hoa Dũng Tâm</span>
          <span className="w-1 h-1 rounded-full bg-zinc-400"></span>
          <span className="text-[12px] text-zinc-500 font-medium">Cung cấp sỉ &amp; lẻ toàn quốc</span>
          <ArrowRight className="w-3.5 h-3.5 text-zinc-800 group-hover:translate-x-0.5 transition-transform" />
        </a>
      </motion.div>

      {/* Main Headline */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
        className="text-center max-w-4xl mx-auto mb-8"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-black tracking-tight font-bold mb-5 leading-tight">
          Chuyên Cung Cấp Các Loại Giống Cúc{' '}
          <span className="underline decoration-black decoration-2 underline-offset-8">
            Chuẩn Đẹp, Khỏe, F1
          </span>{' '}
          Toàn Quốc
        </h1>
        <p className="text-base sm:text-lg text-zinc-600 max-w-2xl mx-auto leading-relaxed font-normal">
          Chuyên cung cấp các loại giống cúc cắt cành &amp; chậu: <strong className="text-black font-semibold">Vàng Hòe (9999), Pha Lê, Cánh Dài, Tứ Quý, Kali, Gơ Đỏ, Tua Vàng, Sao Đỏ...</strong> Ngọn giâm &amp; cây giống rễ trắng mập mạp, tỉ lệ sống &gt; 99%, đồng hành kỹ thuật cùng nhà vườn Dũng Tâm.
        </p>
      </motion.div>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
        className="flex flex-wrap items-center justify-center gap-3 mb-14"
        id="hero-cta-group"
      >
        <a
          href="tel:0933634678"
          onClick={onCallClick}
          className="inline-flex items-center gap-2 h-11 px-7 bg-black hover:bg-zinc-800 text-white text-[13px] font-bold rounded-full shadow-lg transition-all active:scale-[0.99]"
          id="hero-primary-call-btn"
        >
          <PhoneCall className="w-4 h-4" />
          <span>Gọi Tư Vấn Ngay: 0933.634.678</span>
        </a>
        <button
          type="button"
          onClick={onExploreClick}
          className="inline-flex items-center gap-2 h-11 px-6 bg-white hover:bg-zinc-100 border border-zinc-300 text-zinc-900 text-[13px] font-semibold rounded-full shadow-sm transition-all cursor-pointer"
          id="hero-explore-catalogue-btn"
        >
          <Sprout className="w-4 h-4 text-black" />
          <span>Xem Bảng Giá &amp; Cây Giống</span>
          <ArrowDown className="w-3.5 h-3.5 text-zinc-500" />
        </button>
      </motion.div>

      {/* Greenhouse Showcase Display */}
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.25, ease: 'easeOut' }}
        className="relative max-w-5xl mx-auto bg-white border border-zinc-200 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.06)] p-3 sm:p-4"
      >
        {/* Window Bar */}
        <div className="flex items-center justify-between pb-3 px-2 border-b border-zinc-100 mb-3">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-zinc-200 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-zinc-300 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-black inline-block"></span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1 bg-zinc-50 border border-zinc-200 rounded-full">
            <CheckCircle2 className="w-3.5 h-3.5 text-black" />
            <span className="font-mono text-[12px] text-zinc-800 font-semibold">
              gionghoa.store • Hệ Thống Luống Ươm Thực Tế
            </span>
          </div>
          <div className="flex items-center gap-1 text-zinc-400">
            <ImageIcon className="w-4 h-4" />
          </div>
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3.5 items-stretch">
          {/* Main Large Greenhouse Photo */}
          <div
            className="relative md:col-span-8 aspect-[16/10] bg-zinc-100 rounded-xl overflow-hidden group border border-zinc-200 cursor-pointer shadow-sm"
            onClick={() =>
              onSelectHeroPhoto &&
              onSelectHeroPhoto(
                '/flowers/nha-vuon-greenhouse.jpg',
                'Hệ Thống Nhà Màng Ươm Giống Cúc Công Nghệ Cao - Nhà Vườn Dũng Tâm'
              )
            }
          >
            <img
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              alt="Hệ thống nhà màng ươm giống cúc công nghệ cao Dũng Tâm"
              src="/flowers/nha-vuon-greenhouse.jpg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
              <div>
                <span className="inline-block px-2 py-0.5 bg-black/70 backdrop-blur-md rounded text-[11px] font-semibold mb-1 text-white border border-white/20">
                  Khu Vườn Ươm Thực Tế
                </span>
                <p className="text-[15px] sm:text-[16px] font-bold text-white">
                  Trại Giống Cúc Dũng Tâm • Nhà Màng Công Nghệ Cao
                </p>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-white text-black font-mono text-[11px] font-bold shadow">
                Dũng Tâm Farm
              </span>
            </div>
            <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md border border-zinc-200 flex items-center gap-1.5 shadow-sm">
              <ImageIcon className="w-3.5 h-3.5 text-black" />
              <span className="text-[11px] text-zinc-800 font-medium">
                Hình ảnh thực tế tại nhà vườn
              </span>
            </div>
          </div>

          {/* Right 2 Stacked Cards */}
          <div className="grid grid-cols-2 md:grid-cols-1 md:col-span-4 gap-3.5">
            {/* Roots */}
            <div
              className="relative aspect-[4/3] md:aspect-auto md:h-full min-h-[140px] bg-zinc-100 rounded-xl overflow-hidden group border border-zinc-200 cursor-pointer shadow-sm"
              onClick={() =>
                onSelectHeroPhoto &&
                onSelectHeroPhoto(
                  '/flowers/giong-re-khoe.jpg',
                  'Ngọn Giống Cúc Cắt Cành • Rễ Trắng Mập Khỏe'
                )
              }
            >
              <img
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                alt="Bộ rễ trắng mập ngọn cúc giống Dũng Tâm"
                src="/flowers/giong-re-khoe.jpg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-2.5 left-2.5 right-2.5">
                <span className="text-[12px] font-bold text-white block">
                  Ngọn Giống • Rễ Trắng Mập Khỏe
                </span>
                <span className="font-mono text-[11px] text-zinc-200">
                  Tỉ lệ sống đạt &gt; 99%
                </span>
              </div>
            </div>

            {/* Nursery owner in bloom */}
            <div
              className="relative aspect-[4/3] md:aspect-auto md:h-full min-h-[140px] bg-zinc-100 rounded-xl overflow-hidden group border border-zinc-200 cursor-pointer shadow-sm"
              onClick={() =>
                onSelectHeroPhoto &&
                onSelectHeroPhoto(
                  '/flowers/chu-vuon-dung-tam.jpg',
                  'Vườn Cúc Đang Độ Thu Hoạch • Nhà Vườn Dũng Tâm'
                )
              }
            >
              <img
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                alt="Chủ vườn Giống Cúc Dũng Tâm"
                src="/flowers/chu-vuon-dung-tam.jpg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-2.5 left-2.5 right-2.5">
                <span className="text-[12px] font-bold text-white block">
                  Vườn Cúc Đang Độ Thu Hoạch
                </span>
                <span className="font-mono text-[11px] text-zinc-200">
                  Giao chành xe toàn quốc
                </span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* 4 Feature Badges */}
      <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto" id="hero-trust-badges">
        {[
          {
            icon: <Award className="w-5 h-5" />,
            title: '15+ Năm Kinh Nghiệm',
            desc: 'Nhà vườn uy tín',
          },
          {
            icon: <Truck className="w-5 h-5" />,
            title: 'Giao Toàn Quốc 24h-48h',
            desc: 'Xe tải & bưu điện',
          },
          {
            icon: <ShieldCheck className="w-5 h-5" />,
            title: 'Bảo Hành Tỉ Lệ Sống',
            desc: 'Đổi bù 1 - 1 nếu dập',
          },
          {
            icon: <Headphones className="w-5 h-5" />,
            title: 'Kỹ Thuật Đi Kèm 24/7',
            desc: 'Ba mẹ Dũng Tâm hỗ trợ',
          },
        ].map((badge, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-20px' }}
            transition={{ duration: 0.4, delay: idx * 0.08, ease: 'easeOut' }}
            className="flex items-center gap-3 p-3.5 bg-white rounded-2xl border border-zinc-200 shadow-sm hover:border-black transition-all"
          >
            <div className="w-10 h-10 rounded-xl bg-black flex items-center justify-center text-white flex-shrink-0">
              {badge.icon}
            </div>
            <div>
              <span className="text-[13px] font-bold text-black block">{badge.title}</span>
              <span className="text-[12px] text-zinc-500">{badge.desc}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
