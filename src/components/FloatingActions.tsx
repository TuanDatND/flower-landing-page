import React from 'react';
import { PhoneCall, MessageCircle } from 'lucide-react';

export const FloatingActions: React.FC = () => {
  return (
    <>
      {/* Bottom-left call pill */}
      <div className="fixed bottom-6 left-6 z-40 hidden sm:flex items-center gap-2 p-1.5 bg-white/95 backdrop-blur-xl border border-zinc-300 rounded-full shadow-[0_12px_35px_rgba(0,0,0,0.12)]">
        <a
          href="tel:0933634678"
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-black text-white text-[12px] font-bold shadow-sm transition-all hover:bg-zinc-800"
        >
          <PhoneCall className="w-3.5 h-3.5" />
          <span>Gọi Tâm : 0933.634.678</span>
        </a>
        <a
          href="#danh-muc-hoa"
          className="px-3.5 py-2 rounded-full text-zinc-700 hover:text-black text-[12px] font-semibold transition-colors"
        >
          Xem Bảng Giống
        </a>
      </div>

      {/* Bottom-right Zalo float */}
      <aside className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
        <div className="group relative flex items-center">
          <div className="hidden md:flex absolute right-full mr-2 px-3 py-1 bg-white border border-zinc-300 rounded-full shadow-md whitespace-nowrap">
            <span className="text-[12px] text-zinc-800 font-bold">Hỗ trợ Zalo 24/7</span>
          </div>
          <a
            href="https://zalo.me/0933634678"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-black text-white rounded-full shadow-lg flex items-center justify-center hover:bg-zinc-800 transition-transform hover:scale-105 active:scale-95"
            title="Chat Zalo cùng Giống Hoa Dũng Tâm (0933 634 678)"
          >
            <MessageCircle className="w-6 h-6" />
          </a>
        </div>
      </aside>
    </>
  );
};
