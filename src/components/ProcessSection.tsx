import React from 'react';
import { ListOrdered, MessageSquare, Video, Box, CheckCircle } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const steps = [
    {
      step: 'BƯỚC 01',
      title: 'Liên Hệ & Gửi Danh Sách',
      desc: 'Gọi điện hoặc nhắn Zalo danh sách giống hoa cần mua, số lượng dự kiến và tỉnh thành nhận hàng để nhận báo giá sỉ tốt nhất.',
      icon: <MessageSquare className="w-6 h-6 text-zinc-400 group-hover:text-black transition-colors" />,
    },
    {
      step: 'BƯỚC 02',
      title: 'Xem Ảnh & Video Thực Tế',
      desc: 'Gia đình Dũng Tâm ra trực tiếp luống chụp ảnh, quay cận cảnh bộ rễ và chiều cao cây giống gửi quý khách duyệt trước.',
      icon: <Video className="w-6 h-6 text-zinc-400 group-hover:text-black transition-colors" />,
    },
    {
      step: 'BƯỚC 03',
      title: 'Đóng Thùng & Giao Xe',
      desc: 'Cây được dưỡng ẩm, đóng thùng xốp chống va đập và gửi chành xe khách hoặc bưu cục nhanh tới huyện/tỉnh của quý khách.',
      icon: <Box className="w-6 h-6 text-zinc-400 group-hover:text-black transition-colors" />,
    },
    {
      step: 'BƯỚC 04',
      title: 'Kiểm Tra & Đồng Hành',
      desc: 'Nhận hàng mở thùng kiểm tra độ tươi tốt, thanh toán và nhận cẩm nang hướng dẫn sang chậu kích rễ qua Zalo cùng Dũng Tâm.',
      icon: <CheckCircle className="w-6 h-6 text-zinc-400 group-hover:text-black transition-colors" />,
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 lg:px-8 py-16 lg:py-24 bg-[#fafafa] overflow-hidden" id="quy-trinh">
      <div className="max-w-2xl mx-auto text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black text-white text-[11px] font-semibold tracking-wider uppercase mb-2">
          <ListOrdered className="w-3.5 h-3.5" />
          <span>QUY TRÌNH ĐƠN GIẢN &amp; MINH BẠCH</span>
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl text-black font-bold tracking-tight">
          4 Bước Nhận Cây Giống Chuẩn Đẹp Tận Tay
        </h2>
        <p className="text-[14px] text-zinc-600 mt-2 font-normal">
          Quy trình phục vụ nhanh gọn giúp khách hàng kiểm tra cây thực tế tại vườn trước khi quyết định nhận hàng.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
        {steps.map((item, idx) => (
          <div
            key={idx}
            className="bg-white border border-zinc-200 rounded-2xl p-6 shadow-sm flex flex-col relative group hover:border-black transition-all [transform:translateZ(0)]"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono text-[11px] font-bold text-white bg-black px-2.5 py-1 rounded-full">
                {item.step}
              </span>
              {item.icon}
            </div>
            <h3 className="text-[16px] font-bold text-black mb-2">{item.title}</h3>
            <p className="text-[13px] text-zinc-600 leading-relaxed font-normal">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
