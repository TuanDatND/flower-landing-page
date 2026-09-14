import React, { useState } from 'react';
import { Sprout, Send, MessageSquare, Info } from 'lucide-react';
import { FLOWER_DATA } from '../data/flowers';
import { FlowerCategory, FlowerItem } from '../types';

interface CatalogueSectionProps {
  onSelectFlowerForQuote: (flowerName: string) => void;
  onOpenFlowerDetails: (flower: FlowerItem) => void;
}

export const CatalogueSection: React.FC<CatalogueSectionProps> = ({
  onSelectFlowerForQuote,
  onOpenFlowerDetails,
}) => {
  const [activeTab, setActiveTab] = useState<FlowerCategory>('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filterTabs: { id: FlowerCategory; label: string }[] = [
    { id: 'all', label: 'Tất cả' },
    { id: 'cuc-dai-doa', label: 'Cúc Đại Đóa' },
    { id: 'canh-dai', label: 'Đóa (Cánh Dài)' },
    { id: 'cuc-chum', label: 'Cúc Chùm & Cành' },
    { id: 'ngon-giong', label: 'Ngọn Giống F1' },
  ];

  const filteredFlowers = FLOWER_DATA.filter((flower) => {
    const matchesCategory =
      activeTab === 'all' ||
      flower.category === activeTab ||
      (activeTab === 'cuc-dai-doa' && flower.category === 'canh-dai');
    const matchesSearch =
      flower.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      flower.code.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="max-w-7xl mx-auto px-4 lg:px-8 py-16 lg:py-24 bg-[#fafafa]" id="danh-muc-hoa">
      {/* Section Header */}
      <div className="mb-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-5">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black text-white text-[11px] font-semibold tracking-wider uppercase mb-2">
              <Sprout className="w-3.5 h-3.5" />
              <span>DANH MỤC CÂY GIỐNG CÓ SẴN</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl text-black font-bold tracking-tight">
              Các Loại Giống Cúc Tuyển Chọn Tại Dũng Tâm
            </h2>
            <p className="text-[14px] text-zinc-600 mt-1.5 font-normal">
              Chuyên cung cấp giống Cúc Vàng Hòe (9999), Pha Lê, Lan Tím, Đóa (Cánh Dài), Nghệ Vàng, Kali, Gơ Đỏ, Tua Vàng, Sao Đỏ... ngọn giâm &amp; cây giống khỏe F1.
            </p>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto py-1.5 max-w-full scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0" id="filterTabs">
          {filterTabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`filter-tab px-3.5 sm:px-4 py-2 rounded-full text-[12px] sm:text-[13px] transition-all whitespace-nowrap flex-shrink-0 cursor-pointer border ${
                  isActive
                    ? 'bg-black text-white border-black shadow-sm font-semibold'
                    : 'bg-white text-zinc-700 hover:text-black hover:bg-zinc-100 border-zinc-200 font-medium'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Grid of Flowers */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5" id="flowerGrid">
        {filteredFlowers.map((flower) => (
          <div
            key={flower.id}
            className="flower-card group bg-white border border-zinc-200/90 rounded-2xl p-3.5 shadow-sm hover:border-black hover:shadow-md transition-all flex flex-col"
            data-category={flower.category}
          >
              {/* Image Box */}
              <div
                className="relative aspect-[4/3] rounded-xl overflow-hidden bg-zinc-100 mb-3 cursor-pointer"
                onClick={() => onOpenFlowerDetails(flower)}
              >
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  alt={flower.alt}
                  src={flower.imageUrl}
                  loading="lazy"
                  decoding="async"
                  width="400"
                  height="300"
                />
                {/* Top Badge */}
                <div className="absolute top-2 left-2">
                  <span
                    className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold shadow-sm ${
                      flower.badgeType === 'outline'
                        ? 'bg-white border border-black text-black'
                        : flower.badgeType === 'subtle'
                        ? 'bg-zinc-100 border border-zinc-300 text-zinc-800'
                        : 'bg-black text-white'
                    }`}
                  >
                    {flower.badge}
                  </span>
                </div>
                {/* Bottom Photo Tag */}
                <div className="absolute bottom-2 right-2 bg-black/80 backdrop-blur-sm px-1.5 py-0.5 rounded text-[10px] text-white">
                  {flower.photoTag}
                </div>
              </div>

              {/* Content info */}
              <div className="flex flex-col flex-1">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="font-mono text-[11px] text-zinc-500 font-semibold">
                    Mã: {flower.code}
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-zinc-100 text-zinc-800 text-[11px] font-medium border border-zinc-200">
                    {flower.subTag}
                  </span>
                </div>

                <h3
                  onClick={() => onOpenFlowerDetails(flower)}
                  className="text-[15px] sm:text-[16px] font-bold text-black group-hover:text-zinc-700 transition-colors cursor-pointer min-h-[44px] line-clamp-2 leading-snug"
                  title={flower.name}
                >
                  {flower.name}
                </h3>

                <p className="text-[13px] text-zinc-600 mt-1 line-clamp-2 font-normal leading-relaxed min-h-[38px] mb-2">
                  {flower.description}
                </p>

                {flower.seoPath && (
                  <a
                    href={flower.seoPath}
                    className="text-[12px] text-zinc-700 underline underline-offset-2 hover:text-black font-semibold mb-2"
                  >
                    Xem thông tin chi tiết giống {flower.name}
                  </a>
                )}

                {/* Bottom Bar: Price/Spec + Quote Action - Perfectly Aligned */}
                <div className="mt-auto pt-3 border-t border-zinc-100 flex items-center justify-between gap-2">
                  <div className="flex flex-col min-w-0 pr-1">
                    <span className="text-[10px] text-zinc-500 block truncate">{flower.specLabel}</span>
                    <span className="text-[13px] font-bold text-black block truncate" title={flower.specValue}>
                      {flower.specValue}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 flex-shrink-0">
                    <button
                      type="button"
                      onClick={() => onOpenFlowerDetails(flower)}
                      className="h-8 w-8 rounded-full border border-zinc-200 hover:border-black text-zinc-600 hover:text-black flex items-center justify-center transition-colors cursor-pointer flex-shrink-0"
                      title="Xem chi tiết kỹ thuật"
                    >
                      <Info className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      onClick={() => onSelectFlowerForQuote(flower.name)}
                      className="h-8 px-3 rounded-full bg-black hover:bg-zinc-800 text-white text-[12px] font-semibold transition-all flex items-center gap-1 shadow-sm cursor-pointer active:scale-95 whitespace-nowrap flex-shrink-0"
                    >
                      <span className="whitespace-nowrap">Báo giá</span>
                      <Send className="w-3.5 h-3.5 flex-shrink-0" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>

      {/* Bottom Wholesale Custom Order Banner */}
      <div className="mt-10 p-5 bg-white border border-zinc-200 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center text-black flex-shrink-0">
            <Info className="w-5 h-5 text-black" />
          </div>
          <p className="text-[13px] text-zinc-700 font-medium">
            Quý khách cần mua sỉ số lượng lớn hoặc đặt gieo ươm giống theo đơn đặt hàng riêng cho mùa vụ?
          </p>
        </div>
        <a
          className="inline-flex items-center gap-2 h-10 px-5 rounded-full bg-black text-white text-[13px] font-bold whitespace-nowrap shadow-sm hover:bg-zinc-800 transition-all flex-shrink-0"
          href="https://zalo.me/0933634678"
          rel="noopener noreferrer"
          target="_blank"
        >
          <MessageSquare className="w-4 h-4" />
          <span>Nhắn Zalo Nhận Bảng Giá Sỉ Tận Vườn</span>
        </a>
      </div>
    </section>
  );
};
