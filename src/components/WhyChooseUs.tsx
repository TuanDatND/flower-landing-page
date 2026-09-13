import React from 'react';
import { Star, Dna, Handshake, BadgePercent, PackageCheck, PhoneCall } from 'lucide-react';
import { motion } from 'motion/react';

export const WhyChooseUs: React.FC = () => {
  return (
    <section className="bg-white border-y border-zinc-200 py-16 lg:py-24 relative overflow-hidden" id="uu-diem">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black text-white text-[11px] font-semibold tracking-wider uppercase mb-2">
            <Star className="w-3.5 h-3.5" />
            <span>CHẤT LƯỢNG LÀM NÊN THƯƠNG HIỆU</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl text-black font-bold tracking-tight">
            Tại Sao Nhà Vườn &amp; Đại Lý Luôn Tin Tưởng Dũng Tâm?
          </h2>
          <p className="text-[14px] text-zinc-600 mt-2 font-normal">
            Không chỉ bán giống, chúng tôi trao gửi sự an tâm và đồng hành trong từng khâu kỹ thuật chăm sóc cây.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Card 1: F1 Standard & Tissue Culture (Col Span 2) */}
          <div
            className="md:col-span-2 bg-[#fcfcfc] border border-zinc-200 rounded-2xl p-6 lg:p-8 shadow-sm flex flex-col justify-between group hover:border-black transition-all [transform:translateZ(0)]"
          >
            <div className="flex items-start justify-between gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-black text-white flex items-center justify-center flex-shrink-0">
                <Dna className="w-6 h-6" />
              </div>
              <span className="px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200 text-zinc-800 font-mono text-[12px] font-semibold">
                Tiêu chuẩn F1 &amp; Cấy Mô
              </span>
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-black mb-2">
                Nguồn Cây Giống Chuẩn F1 &amp; Cấy Mô Khỏe Mạnh
              </h3>
              <p className="text-[14px] text-zinc-600 leading-relaxed max-w-xl font-normal">
                Cây giống được ươm cấy từ nguồn phôi chuẩn, bầu rễ bện trắng chặt xơ dừa, thuần dưỡng khí hậu nhiệt đới nắng gió tối thiểu 10-15 ngày trước khi xuất vườn để khi sang chậu cây đâm rễ mới ngay, không bị sốc nhiệt.
              </p>
            </div>

            {/* Metrics */}
            <div className="mt-6 pt-6 grid grid-cols-3 gap-2 bg-white border border-zinc-200 rounded-xl p-3.5">
              <div>
                <span className="text-xl font-bold text-black tracking-tight">98%+</span>
                <span className="text-[11px] text-zinc-500 block">Tỉ lệ bén rễ</span>
              </div>
              <div>
                <span className="text-xl font-bold text-black tracking-tight">F1</span>
                <span className="text-[11px] text-zinc-500 block">Chuẩn phôi cấy mô</span>
              </div>
              <div>
                <span className="text-xl font-bold text-black tracking-tight">0%</span>
                <span className="text-[11px] text-zinc-500 block">Sốc nhiệt khi trồng</span>
              </div>
            </div>
          </div>

          {/* Card 2: Direct Owner Consultation */}
          <div
            className="bg-[#fcfcfc] border border-zinc-200 rounded-2xl p-6 lg:p-8 shadow-sm flex flex-col justify-between group hover:border-black transition-all [transform:translateZ(0)]"
          >
            <div className="w-12 h-12 rounded-xl bg-black text-white flex items-center justify-center mb-6 flex-shrink-0">
              <Handshake className="w-6 h-6" />
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-black mb-2">
                Tư Vấn Trực Tiếp Từ Chủ Vườn ( Dũng Tâm)
              </h3>
              <p className="text-[14px] text-zinc-600 leading-relaxed font-normal">
                Bạn không làm việc qua nhân viên tổng đài xa lạ. Giống Hoa Dũng Tâm với hơn 15 năm làm vườn trực tiếp nghe máy, giải đáp công thức trộn giá thể, định lượng phân bón và cách canh hoa nở đúng ngày lễ Tết.
              </p>
            </div>

            <div className="mt-6 flex items-center gap-2 text-zinc-900 text-[13px] font-bold">
              <PhoneCall className="w-4 h-4 text-black" />
              <span>Hotline kỹ thuật luôn sẵn sàng</span>
            </div>
          </div>

          {/* Card 3: Direct Nursery Wholesale Price */}
          <div
            className="bg-[#fcfcfc] border border-zinc-200 rounded-2xl p-6 lg:p-8 shadow-sm flex flex-col justify-between group hover:border-black transition-all [transform:translateZ(0)]"
          >
            <div className="w-12 h-12 rounded-xl bg-black text-white flex items-center justify-center mb-6 flex-shrink-0">
              <BadgePercent className="w-6 h-6" />
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-black mb-2">
                Giá Gốc Tận Nhà Vườn Không Qua Trung Gian
              </h3>
              <p className="text-[14px] text-zinc-600 leading-relaxed font-normal">
                Cơ sở sản xuất quy mô lớn trực tiếp xuất từ luống ươm tới tay khách hàng, không đội chi phí mặt bằng phố lớn hay cầu nối trung gian buôn lái. Chính sách giá sỉ ưu đãi đặc biệt cho bà con.
              </p>
            </div>

            <div className="mt-6 pt-4">
              <span className="inline-block px-3 py-1 bg-black text-white rounded-full text-[12px] font-semibold">
                Tiết kiệm 20% - 30% chi phí giống
              </span>
            </div>
          </div>

          {/* Card 4: Professional Packaging & Safe Shipping (Col Span 2) */}
          <div
            className="md:col-span-2 bg-[#fcfcfc] border border-zinc-200 rounded-2xl p-6 lg:p-8 shadow-sm flex flex-col justify-between group hover:border-black transition-all [transform:translateZ(0)]"
          >
            <div className="flex items-start justify-between gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-black text-white flex items-center justify-center flex-shrink-0">
                <PackageCheck className="w-6 h-6" />
              </div>
              <span className="px-3 py-1 rounded-full bg-black text-white font-mono text-[12px] font-semibold">
                Bảo hành vận chuyển 100%
              </span>
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-black mb-2">
                Đóng Gói Chuyên Nghiệp - Vận Chuyển An Toàn Toàn Quốc
              </h3>
              <p className="text-[14px] text-zinc-600 leading-relaxed font-normal">
                Bầu cây được giữ ẩm bằng màng co sinh học, xếp trong khay xốp định hình giảm chấn và đóng thùng carton đục lỗ thông khí. Gửi chành xe quen hoặc chuyển phát bưu cục hỏa tốc. Nếu nhận hàng gãy ngọn dập nát, nhà vườn hoàn tiền hoặc gửi bù ngay lập tức không phiền hà.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-white border border-zinc-200 text-zinc-700 rounded-full text-[12px] font-medium">
                Thùng carton lỗ thở
              </span>
              <span className="px-3 py-1 bg-white border border-zinc-200 text-zinc-700 rounded-full text-[12px] font-medium">
                Vỉ xốp chống sốc
              </span>
              <span className="px-3 py-1 bg-white border border-zinc-200 text-zinc-700 rounded-full text-[12px] font-medium">
                Bảo đảm độ ẩm 72h
              </span>
              <span className="px-3 py-1 bg-white border border-zinc-200 text-zinc-700 rounded-full text-[12px] font-medium">
                Chành xe quen các tỉnh
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
