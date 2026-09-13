import React from 'react';
import { X, CheckCircle2, Clock, MapPin, Sparkles, Send, Info } from 'lucide-react';
import { FlowerItem } from '../types';

interface FlowerModalProps {
  flower: FlowerItem | null;
  onClose: () => void;
  onSelectForQuote: (flowerName: string) => void;
}

export const FlowerModal: React.FC<FlowerModalProps> = ({
  flower,
  onClose,
  onSelectForQuote,
}) => {
  if (!flower) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
      <div
        className="relative w-full max-w-2xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-zinc-200 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/90 backdrop-blur-md border border-zinc-200 flex items-center justify-center text-zinc-700 hover:text-black hover:bg-white shadow-md transition-all cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Scrollable Container */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-6">
          {/* Top Image banner */}
          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-zinc-100 border border-zinc-200">
            <img
              src={flower.imageUrl}
              alt={flower.alt}
              className="w-full h-full object-cover"
              loading="lazy"
              decoding="async"
              width="800"
              height="450"
            />
            <div className="absolute top-3 left-3 flex gap-2">
              <span className="px-3 py-1 rounded-full bg-black text-white text-[12px] font-bold shadow-md">
                {flower.badge}
              </span>
              <span className="px-3 py-1 rounded-full bg-white/95 text-zinc-900 text-[12px] font-semibold shadow-sm border border-zinc-200 font-mono">
                {flower.code}
              </span>
            </div>
            <div className="absolute bottom-3 right-3 bg-black/80 backdrop-blur-md px-2.5 py-1 rounded-md text-[11px] text-white">
              {flower.photoTag}
            </div>
          </div>

          {/* Title & tags */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded-full bg-zinc-100 text-zinc-800 text-[12px] font-medium border border-zinc-200">
                {flower.subTag}
              </span>
              <span className="text-[12px] text-zinc-500 font-medium font-mono">
                {flower.specLabel}: <strong className="text-black">{flower.specValue}</strong>
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-black tracking-tight">
              {flower.name}
            </h2>
            <p className="text-[15px] text-zinc-600 mt-2 leading-relaxed">
              {flower.description}
            </p>
          </div>

          {/* Details breakdown */}
          {flower.details && (
            <div className="space-y-4 pt-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-3.5 bg-zinc-50 border border-zinc-200 rounded-2xl">
                  <div className="flex items-center gap-1.5 text-zinc-500 text-[12px] font-semibold mb-1">
                    <Clock className="w-3.5 h-3.5 text-black" />
                    <span>Thời Gian Nở Hoa</span>
                  </div>
                  <p className="text-[13px] font-medium text-black">
                    {flower.details.floweringTime}
                  </p>
                </div>
                <div className="p-3.5 bg-zinc-50 border border-zinc-200 rounded-2xl">
                  <div className="flex items-center gap-1.5 text-zinc-500 text-[12px] font-semibold mb-1">
                    <MapPin className="w-3.5 h-3.5 text-black" />
                    <span>Nguồn Gốc &amp; Nhân Giống</span>
                  </div>
                  <p className="text-[13px] font-medium text-black">
                    {flower.details.origin}
                  </p>
                </div>
              </div>

              {/* Highlights */}
              <div className="p-4 bg-zinc-50 border border-zinc-200 rounded-2xl">
                <div className="flex items-center gap-1.5 text-zinc-800 text-[13px] font-bold mb-2">
                  <Sparkles className="w-4 h-4 text-black" />
                  <span>Đặc Điểm Nổi Bật</span>
                </div>
                <ul className="space-y-2">
                  {flower.details.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2 text-[13px] text-zinc-600">
                      <CheckCircle2 className="w-4 h-4 text-black flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Care guide */}
              <div className="p-4 bg-zinc-50 border border-zinc-200 rounded-2xl">
                <div className="flex items-center gap-1.5 text-zinc-800 text-[13px] font-bold mb-1.5">
                  <Info className="w-4 h-4 text-black" />
                  <span>Kỹ Thuật Sang Chậu &amp; Chăm Sóc</span>
                </div>
                <p className="text-[13px] text-zinc-600 leading-relaxed">
                  {flower.details.careGuide}
                </p>
              </div>
            </div>
          )}

          {/* Action buttons */}
          <div className="pt-3 border-t border-zinc-200 flex flex-col sm:flex-row gap-3">
            <button
              type="button"
              onClick={() => {
                onSelectForQuote(flower.name);
                onClose();
              }}
              className="flex-1 h-12 bg-black hover:bg-zinc-800 text-white text-[14px] font-bold rounded-full shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-[0.99]"
            >
              <Send className="w-4 h-4" />
              <span>Nhận Báo Giá Sỉ Cho Giống Này</span>
            </button>
            <a
              href="https://zalo.me/0933634678"
              target="_blank"
              rel="noopener noreferrer"
              className="h-12 px-6 bg-white hover:bg-zinc-100 border border-zinc-300 text-zinc-900 text-[14px] font-semibold rounded-full shadow-sm transition-all flex items-center justify-center gap-2"
            >
              <span>Nhắn Zalo Tận Vườn</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
