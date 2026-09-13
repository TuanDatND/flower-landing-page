import React, { useState, useEffect } from 'react';
import {
  PhoneCall,
  MessageSquare,
  MapPin,
  Send,
  CheckCircle,
  ShieldCheck,
  Clock,
  Loader2,
  ExternalLink,
  Copy,
  Check,
  RotateCcw,
  MessageCircle
} from 'lucide-react';
import { motion } from 'motion/react';
import { QuoteFormData } from '../types';

interface ContactSectionProps {
  prefilledFlower?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ prefilledFlower }) => {
  const [formData, setFormData] = useState<QuoteFormData>({
    fullName: '',
    phone: '',
    flowerType: 'Cúc Vàng Hòe (9999)',
    quantity: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState<QuoteFormData | null>(null);
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    if (prefilledFlower) {
      setFormData((prev) => ({
        ...prev,
        flowerType: prefilledFlower,
      }));
    }
  }, [prefilledFlower]);

  const formatOrderMessage = (data: QuoteFormData) => {
    return `Chào Giống Cúc Dũng Tâm! Tôi muốn nhận báo giá sỉ giống cúc:
• Khách hàng: ${data.fullName.trim() || 'Khách đặt giống hoa'}
• Số điện thoại: ${data.phone.trim()}
• Giống quan tâm: ${data.flowerType}
${data.quantity.trim() ? `• Số lượng dự kiến: ${data.quantity.trim()}\n` : ''}${data.message.trim() ? `• Tỉnh thành & Ghi chú: ${data.message.trim()}\n` : ''}— Gửi từ website: gionghoa.store`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.phone.trim()) return;

    setIsSubmitting(true);
    const orderText = formatOrderMessage(formData);

    try {
      if (navigator.clipboard) {
        navigator.clipboard.writeText(orderText);
      }
    } catch {
      // ignore
    }

    // Direct open Zalo chat to owner
    window.open('https://zalo.me/0933634678', '_blank', 'noopener,noreferrer');

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setSubmittedData({ ...formData });
    }, 400);
  };

  const handleCopyOrder = () => {
    if (!submittedData) return;
    const orderText = formatOrderMessage(submittedData);
    if (navigator.clipboard) {
      navigator.clipboard.writeText(orderText);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2500);
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-4 lg:px-8 py-16 lg:py-24 bg-[#fafafa] overflow-hidden" id="lien-he">
      <div className="bg-white border border-zinc-200 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-[0_25px_60px_rgba(0,0,0,0.06)]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Left Column: Direct Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black text-white text-[11px] font-semibold tracking-wider uppercase mb-3">
                <PhoneCall className="w-3.5 h-3.5" />
                <span>KẾT NỐI VỚI CHỦ VƯỜN</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-black tracking-tight">
                Nhận Báo Giá Sỉ &amp; Tư Vấn Kỹ Thuật Trực Tiếp
              </h2>

              <p className="text-[14px] text-zinc-600 mt-3 leading-relaxed font-normal">
                Hãy để lại thông tin hoặc nhấc máy gọi trực tiếp cho giống hoa Dũng Tâm. Chúng tôi luôn sẵn lòng tư vấn chủng loại phù hợp khí hậu địa phương của bạn.
              </p>

              {/* Contact Cards */}
              <div className="mt-6 flex flex-col gap-3.5">
                <a
                  href="tel:0933634678"
                  className="flex items-center gap-4 p-3.5 bg-zinc-50 border border-zinc-200 rounded-2xl hover:border-black transition-all group"
                >
                  <div className="w-11 h-11 rounded-xl bg-black text-white flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform shadow-md">
                    <PhoneCall className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] text-zinc-500 block font-medium">
                      Hotline Nghe Máy Trực Tiếp
                    </span>
                    <span className="text-[15px] font-bold text-black group-hover:text-zinc-700 transition-colors">
                      0933.634.678
                    </span>
                  </div>
                </a>

                <a
                  href="https://zalo.me/0933634678"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-3.5 bg-zinc-50 border border-zinc-200 rounded-2xl hover:border-black transition-all group"
                >
                  <div className="w-11 h-11 rounded-xl bg-black text-white flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform shadow-md">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] text-zinc-500 block font-medium">
                      Zalo Tư Vấn Báo Giá Nhanh 24/7
                    </span>
                    <span className="text-[15px] font-bold text-black group-hover:text-zinc-700 transition-colors">
                      0933.634.678 (Zalo Giống Hoa)
                    </span>
                  </div>
                </a>

                <a
                  href="https://maps.app.goo.gl/j4GyWCjmzHhgcgSU7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-3.5 bg-zinc-50 border border-zinc-200 rounded-2xl hover:border-black transition-all group"
                  title="Xem định vị Giống Cúc Dũng Tâm trên Google Maps"
                >
                  <div className="w-11 h-11 rounded-xl bg-black text-white flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform shadow-md mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-[11px] text-zinc-500 block font-medium">
                      Địa Chỉ Cơ Sở Nhà Vườn
                    </span>
                    <span className="text-[14px] font-bold text-black group-hover:text-zinc-700 transition-colors flex items-center gap-1.5">
                      Giống Cúc Dũng Tâm
                      <ExternalLink className="w-3.5 h-3.5 text-zinc-400 group-hover:text-black transition-colors" />
                    </span>
                    <span className="text-[12px] text-zinc-600 block mt-0.5">
                      Bấm xem chỉ đường trực tiếp trên Google Maps
                    </span>
                  </div>
                </a>

                {/* Working Hours Card */}
                <div className="flex items-start gap-4 p-3.5 bg-zinc-50 border border-zinc-200 rounded-2xl">
                  <div className="w-11 h-11 rounded-xl bg-zinc-200 text-black flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] text-zinc-500 block font-medium">
                      Thời Gian Làm Việc &amp; Đón Khách
                    </span>
                    <span className="text-[13px] font-bold text-black block">
                      06:30 - 18:00 (Từ Thứ 2 đến Chủ Nhật)
                    </span>
                    <span className="text-[11px] text-zinc-500 block mt-0.5">
                      Đóng thùng gửi xe chuyên nghiệp toàn quốc
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Quote Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-7 bg-zinc-50/80 border border-zinc-200 rounded-2xl p-6 sm:p-8 flex flex-col"
          >
            <div>
              <h3 className="text-lg font-bold text-black mb-1">
                Gửi Yêu Cầu Báo Giá &amp; Đặt Giống
              </h3>
              <p className="text-[13px] text-zinc-600 mb-6 font-normal">
                Điền nhanh thông tin dưới đây, nhà vườn sẽ liên hệ lại qua số điện thoại hoặc Zalo trong vòng 15 phút.
              </p>

              {!isSubmitted ? (
                <form className="space-y-4" onSubmit={handleSubmit} id="contactForm">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[12px] font-semibold text-zinc-700 mb-1.5" htmlFor="fullName">
                      Họ và tên của bạn
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="Ví dụ: Anh Dũng, Chị Tâm..."
                      className="w-full h-10 px-3.5 rounded-xl bg-white border border-zinc-300 text-[14px] text-black placeholder:text-zinc-400 focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-[12px] font-semibold text-zinc-700 mb-1.5" htmlFor="phone">
                      Số điện thoại / Zalo *
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="0933.634.678"
                      className="w-full h-10 px-3.5 rounded-xl bg-white border border-zinc-300 text-[14px] text-black placeholder:text-zinc-400 focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[12px] font-semibold text-zinc-700 mb-1.5" htmlFor="flowerType">
                      Giống hoa quan tâm
                    </label>
                    <select
                      id="flowerType"
                      value={formData.flowerType}
                      onChange={(e) => setFormData({ ...formData, flowerType: e.target.value })}
                      className="w-full h-10 px-3 rounded-xl bg-white border border-zinc-300 text-[14px] text-black focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all"
                    >
                      <option value="Cúc Vàng Hòe (9999)">Cúc Vàng Hòe (9999) - Đại đóa bán chạy</option>
                      <option value="Cúc Pha Lê">Cúc Pha Lê - Trắng tinh khôi</option>
                      <option value="Cúc Đóa (Cánh Dài)">Cúc Đóa (Cánh Dài) - Luống giống F1 mập khỏe</option>
                      <option value="Cúc Lan Tím">Cúc Lan Tím - Sắc tím hoa lan quý phái</option>
                      <option value="Cúc Nghệ Vàng">Cúc Nghệ Vàng - Vàng đậm rực rỡ</option>
                      <option value="Cúc Kali">Cúc Kali - Hoa chùm tím hồng rực rỡ</option>
                      <option value="Cúc Gơ Đỏ">Cúc Gơ Đỏ - Sắc đỏ nhung quý phái</option>
                      <option value="Cúc Tua Vàng">Cúc Tua Vàng - Dáng tua tơ độc đáo</option>
                      <option value="Cúc Sao Đỏ">Cúc Sao Đỏ (Đỏ Viền Vàng) - Cúc cành rực rỡ</option>
                      <option value="Cúc Kim Cương">Cúc Kim Cương - Bông to đều cánh</option>
                      <option value="Cúc Mai Cam">Cúc Mai Cam - Sắc cam ấm áp</option>
                      <option value="Cúc Lan Tím">Cúc Lan Tím - Sắc tím sang trọng</option>
                      <option value="Ngọn Cúc Giống Cắt Cành F1">Ngọn Cúc Giống Cắt Cành F1 (Sỉ vỉ / ngọn)</option>
                      <option value="Giống khác / Báo giá sỉ tổng hợp">Giống khác / Báo giá sỉ số lượng lớn</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[12px] font-semibold text-zinc-700 mb-1.5" htmlFor="quantity">
                      Số lượng dự kiến (cây / vỉ)
                    </label>
                    <input
                      id="quantity"
                      type="text"
                      value={formData.quantity}
                      onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                      placeholder="Ví dụ: 100 cây, 10 vỉ, 1000 cây..."
                      className="w-full h-10 px-3.5 rounded-xl bg-white border border-zinc-300 text-[14px] text-black placeholder:text-zinc-400 focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[12px] font-semibold text-zinc-700 mb-1.5" htmlFor="message">
                    Tỉnh thành nhận hàng &amp; Ghi chú kỹ thuật
                  </label>
                  <textarea
                    id="message"
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Ghi chú tỉnh thành bạn đang ở để nhà vườn kiểm tra chành xe gửi thuận tiện nhất..."
                    className="w-full p-3 rounded-xl bg-white border border-zinc-300 text-[14px] text-black placeholder:text-zinc-400 focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all resize-none"
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-11 px-6 bg-black hover:bg-zinc-800 text-white text-[13px] font-bold rounded-full shadow-md transition-all flex items-center justify-center gap-2 active:scale-[0.99] cursor-pointer disabled:opacity-75"
                    id="submitBtn"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Đang kết nối Zalo...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Gửi Yêu Cầu &amp; Mở Zalo Báo Giá Ngay</span>
                      </>
                    )}
                  </button>
                  <span className="text-[11px] text-zinc-500 text-center block mt-2 font-normal">
                    Tự động sao chép nội dung đơn &amp; kết nối Zalo 0933.634.678 của chú Dũng
                  </span>
                </div>
              </form>
            ) : submittedData ? (
              <div className="bg-zinc-50 border-2 border-black rounded-2xl p-5 sm:p-6 flex flex-col gap-4 animate-fade-in shadow-md">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-black text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-[16px] font-bold text-black leading-tight">
                      Đã Tiếp Nhận Yêu Cầu Báo Giá Cúc!
                    </h4>
                    <p className="text-[12px] text-zinc-600 mt-0.5 font-normal">
                      Nội dung đơn đã được sao chép sẵn. Bấm nút dưới để nhắn tin ngay cho chú Dũng.
                    </p>
                  </div>
                </div>

                {/* Summary Details Table */}
                <div className="bg-white border border-zinc-200 rounded-xl p-4 text-[13px] flex flex-col gap-2 shadow-sm">
                  <div className="flex justify-between border-b border-zinc-100 pb-1.5">
                    <span className="text-zinc-500">Khách hàng:</span>
                    <span className="font-semibold text-black">{submittedData.fullName || 'Khách đặt giống'}</span>
                  </div>
                  <div className="flex justify-between border-b border-zinc-100 pb-1.5">
                    <span className="text-zinc-500">Số điện thoại:</span>
                    <span className="font-bold text-black">{submittedData.phone}</span>
                  </div>
                  <div className="flex justify-between border-b border-zinc-100 pb-1.5">
                    <span className="text-zinc-500">Giống cúc quan tâm:</span>
                    <span className="font-bold text-black">{submittedData.flowerType}</span>
                  </div>
                  {submittedData.quantity && (
                    <div className="flex justify-between border-b border-zinc-100 pb-1.5">
                      <span className="text-zinc-500">Số lượng dự kiến:</span>
                      <span className="font-semibold text-black">{submittedData.quantity}</span>
                    </div>
                  )}
                  {submittedData.message && (
                    <div className="flex justify-between pt-0.5">
                      <span className="text-zinc-500">Ghi chú / Nơi nhận:</span>
                      <span className="font-medium text-black text-right max-w-[200px]">{submittedData.message}</span>
                    </div>
                  )}
                </div>

                {/* Direct Actions */}
                <div className="flex flex-col gap-2.5 pt-1">
                  <a
                    href="https://zalo.me/0933634678"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full h-11 bg-black hover:bg-zinc-800 text-white text-[13px] font-bold rounded-full shadow-md flex items-center justify-center gap-2 transition-all active:scale-[0.99]"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Mở Zalo Gửi Đơn Ngay Cho Chú Dũng</span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                  </a>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={handleCopyOrder}
                      className="h-10 px-4 bg-white border border-zinc-300 hover:border-black text-black text-[12px] font-semibold rounded-full flex items-center justify-center gap-1.5 transition-all cursor-pointer shadow-sm"
                    >
                      {isCopied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                      <span>{isCopied ? 'Đã sao chép nội dung!' : 'Sao chép nội dung đơn'}</span>
                    </button>

                    <a
                      href="tel:0933634678"
                      className="h-10 px-4 bg-white border border-zinc-300 hover:border-black text-black text-[12px] font-semibold rounded-full flex items-center justify-center gap-1.5 transition-all shadow-sm"
                    >
                      <PhoneCall className="w-4 h-4" />
                      <span>Gọi: 0933.634.678</span>
                    </a>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      setIsSubmitted(false);
                      setSubmittedData(null);
                    }}
                    className="text-[12px] text-zinc-500 hover:text-black transition-colors flex items-center justify-center gap-1.5 pt-2 cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Tạo yêu cầu báo giá cho giống khác</span>
                  </button>
                </div>
              </div>
            ) : null}
          </div>

            {/* Bottom Form Safeguards */}
            <div className="mt-6 pt-4 flex items-center justify-between text-zinc-600 border-t border-zinc-200">
              <span className="text-[12px] flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-black" />
                <span>Thông tin của bạn được bảo mật tuyệt đối</span>
              </span>
              <span className="font-mono text-[12px] text-black font-bold flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                <span>Phản hồi &lt; 15 phút</span>
              </span>
            </div>
          </motion.div>
        </div>

        {/* Full-width Map Card below */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mt-10 pt-8 border-t border-zinc-200"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-black text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[14px] font-bold text-zinc-900">
                    Vị Trí Bản Đồ Cơ Sở: Giống Cúc Dũng Tâm
                  </span>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    Mở cửa đón khách
                  </span>
                </div>
                <span className="text-[12px] text-zinc-500">
                  Xem bản đồ trực quan hoặc mở ứng dụng Google Maps để nhận chỉ đường chi tiết
                </span>
              </div>
            </div>
            <a
              href="https://maps.app.goo.gl/j4GyWCjmzHhgcgSU7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 h-9 px-4 rounded-full bg-black text-white text-[12px] font-bold shadow hover:bg-zinc-800 transition-all self-start sm:self-auto"
            >
              <span>Chỉ đường trên Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="w-full h-80 sm:h-96 rounded-2xl overflow-hidden border border-zinc-200 relative bg-zinc-100 shadow-inner">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3903.4036062765513!2d108.46863507590902!3d11.94653358828248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317113f0eaa09b35%3A0xaf33044557430142!2zR2nhu5FuZyBDw7pjIETFqW5nIFTDom0!5e0!3m2!1svi!2s!4v1789290197414!5m2!1svi!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Vị trí Giống Cúc Dũng Tâm trên Google Maps"
              className="w-full h-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
