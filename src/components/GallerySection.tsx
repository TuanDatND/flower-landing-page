import React, { useState } from 'react';
import { Camera, Image as ImageIcon, X, ZoomIn } from 'lucide-react';
import { motion } from 'motion/react';
import { GALLERY_ITEMS } from '../data/flowers';
import { GalleryItem } from '../types';

export const GallerySection: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  return (
    <section className="bg-white border-y border-zinc-200 py-16 lg:py-24 relative overflow-hidden" id="hinh-anh">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black text-white text-[11px] font-semibold tracking-wider uppercase mb-2">
              <Camera className="w-3.5 h-3.5" />
              <span>HÌNH ẢNH MINH BẠCH</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl text-black font-bold tracking-tight">
              Góc Vườn Dũng Tâm &amp; Những Chuyến Xe Xuất Cây
            </h2>
            <p className="text-[14px] text-zinc-600 mt-1 font-normal">
              Hình ảnh thực tế 100% tại nhà kính vườn ươm Dũng Tâm — từ luống cúc giống, rễ cây đâm chồi khỏe mạnh đến những cánh đồng hoa rực rỡ sắp thu hoạch.
            </p>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-100 border border-zinc-200 text-zinc-800 text-[12px] shadow-sm font-medium self-start md:self-auto">
            <ImageIcon className="w-4 h-4 text-black" />
            <span>Hình ảnh thực tế chụp tại vườn ươm</span>
          </div>
        </motion.div>

        {/* Bento Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {GALLERY_ITEMS.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: 'easeOut' }}
              onClick={() => setSelectedItem(item)}
              className={`${item.colSpan} relative ${item.aspect} rounded-2xl overflow-hidden bg-zinc-100 border border-zinc-200 shadow-md group cursor-pointer`}
            >
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                alt={item.alt}
                src={item.imageUrl}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent"></div>

              {/* Tag Pill */}
              <div className="absolute top-3 left-3 bg-white/95 border border-zinc-200 backdrop-blur-md px-3 py-1 rounded-full text-zinc-900 text-[11px] font-semibold flex items-center gap-1.5 shadow-sm">
                <Camera className="w-3.5 h-3.5 text-black" />
                <span>{item.tag}</span>
              </div>

              {/* Zoom hover indicator */}
              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/50 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <ZoomIn className="w-4 h-4" />
              </div>

              {/* Bottom Captions */}
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[17px] font-bold block mb-0.5">{item.title}</span>
                <span className="text-[13px] text-zinc-300 font-normal leading-snug block">
                  {item.subtitle}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl border border-zinc-700 flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center cursor-pointer border border-white/20 transition-all"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="max-h-[75vh] overflow-hidden bg-black flex items-center justify-center">
              <img
                src={selectedItem.imageUrl}
                alt={selectedItem.alt}
                className="w-full max-h-[75vh] object-contain"
              />
            </div>
            <div className="p-6 bg-zinc-900 text-white">
              <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-zinc-300 text-[11px] font-mono mb-2">
                {selectedItem.tag}
              </span>
              <h3 className="text-xl font-bold text-white">{selectedItem.title}</h3>
              <p className="text-sm text-zinc-400 mt-1">{selectedItem.subtitle}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
