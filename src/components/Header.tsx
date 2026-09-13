import React, { useState } from 'react';
import { Menu, X, PhoneCall, Sparkles } from 'lucide-react';

interface HeaderProps {
  onQuoteClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onQuoteClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Trang chủ', href: '#' },
    { name: 'Danh mục giống hoa', href: '#danh-muc-hoa' },
    { name: 'Ưu điểm nhà vườn', href: '#uu-diem' },
    { name: 'Quy trình đặt giống', href: '#quy-trinh' },
    { name: 'Liên hệ & Tư vấn', href: '#lien-he' },
  ];

  return (
    <header className="fixed top-2.5 sm:top-4 left-0 w-full z-50 px-2.5 sm:px-4 pointer-events-none" id="site-header">
      <div className="pointer-events-auto max-w-7xl w-full mx-auto rounded-full bg-white/95 backdrop-blur-xl border border-zinc-200/90 shadow-[0_12px_40px_rgba(0,0,0,0.08)] px-3 sm:px-5 py-2 sm:py-2.5 flex items-center justify-between gap-2 sm:gap-4 transition-all">
        {/* Brand */}
        <a href="#" className="flex items-center gap-2 sm:gap-3 flex-shrink-0 group min-w-0" id="header-brand">
          <div className="relative flex items-center justify-center flex-shrink-0">
            <img
              alt="Logo Giống Hoa Dũng Tâm"
              className="relative h-7 sm:h-8 w-auto object-contain transition-transform group-hover:scale-105"
              src="/logo-dung-tam.png"
              width="160"
              height="32"
              decoding="async"
            />
          </div>
          <div className="flex flex-col whitespace-nowrap min-w-0">
            <span className="text-[13px] sm:text-[14px] text-black font-bold tracking-tight leading-none flex items-center gap-1.5">
              DŨNG TÂM
              <span className="hidden sm:inline-block text-[9px] uppercase font-bold tracking-widest px-1.5 py-0.5 rounded-full bg-black text-white">
                PREMIUM FARM
              </span>
            </span>
            <span className="text-[10px] sm:text-[11px] text-zinc-500 font-medium tracking-tight mt-0.5">
              Vườn Ươm Cây Giống F1
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-1 p-1 bg-zinc-100/90 rounded-full border border-zinc-200 flex-shrink-0" id="desktop-nav">
          {navLinks.map((link, idx) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-[13px] px-3.5 py-1 rounded-full whitespace-nowrap transition-all ${
                idx === 0
                  ? 'text-white bg-black font-semibold shadow-sm'
                  : 'text-zinc-600 hover:text-black hover:bg-zinc-200/60 font-medium'
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-1.5 sm:gap-2.5 flex-shrink-0 whitespace-nowrap">
          {/* Hotline Pill */}
          <a
            href="tel:0933634678"
            className="hidden md:flex items-center gap-2 px-3 py-1 bg-zinc-100 hover:bg-zinc-200/80 border border-zinc-200 rounded-full flex-shrink-0 transition-colors"
            title="Gọi ngay cho nhà vườn"
            id="header-phone-badge"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-40"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-black"></span>
            </span>
            <span className="text-[12px] text-zinc-800 font-semibold tracking-tight whitespace-nowrap font-mono">
              0933.634.678
            </span>
          </a>

          {/* Quote Button */}
          <button
            type="button"
            onClick={onQuoteClick}
            className="inline-flex items-center justify-center gap-1 sm:gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 bg-black text-white font-semibold text-[12px] sm:text-[13px] rounded-full shadow-[0_4px_16px_rgba(0,0,0,0.15)] hover:bg-zinc-800 active:scale-[0.98] transition-all whitespace-nowrap flex-shrink-0 cursor-pointer"
            id="header-quote-btn"
          >
            <Sparkles className="w-3.5 h-3.5 text-zinc-300" />
            <span className="hidden sm:inline">Báo giá sỉ</span>
            <span className="sm:hidden">Báo giá</span>
          </button>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-1.5 sm:p-2 rounded-full bg-zinc-100 hover:bg-zinc-200 border border-zinc-200 text-black transition-colors flex items-center justify-center cursor-pointer"
            aria-label="Toggle menu"
            id="mobile-menu-toggle"
          >
            {mobileMenuOpen ? <X className="w-4 h-4 sm:w-5 sm:h-5" /> : <Menu className="w-4 h-4 sm:w-5 sm:h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto xl:hidden max-w-sm mx-auto mt-2 bg-white/98 backdrop-blur-xl border border-zinc-200 rounded-2xl p-4 shadow-2xl flex flex-col gap-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2 text-[14px] font-medium text-zinc-800 hover:bg-zinc-100 rounded-xl transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2 border-t border-zinc-200 flex flex-col gap-2">
            <a
              href="tel:0933634678"
              className="flex items-center justify-center gap-2 py-2.5 bg-zinc-100 rounded-xl text-[13px] font-semibold text-zinc-900"
            >
              <PhoneCall className="w-4 h-4 text-black" />
              <span>Hotline: 0933.634.678</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
