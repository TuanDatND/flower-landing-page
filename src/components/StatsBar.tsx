import React from 'react';
import { Flower2, Trees, Smile, MapPin } from 'lucide-react';
import { motion } from 'motion/react';

export const StatsBar: React.FC = () => {
  const stats = [
    {
      title: 'Chủng loại chọn lọc',
      value: '50+',
      desc: 'Giống hoa cấy mô & ươm hạt F1',
      icon: <Trees className="w-5 h-5 text-black" />,
    },
    {
      title: 'Năng lực xuất vườn',
      value: '10.000+',
      desc: 'Cây giống xuất xưởng mỗi tuần',
      icon: <Flower2 className="w-5 h-5 text-black" />,
    },
    {
      title: 'Hài lòng & Gắn bó',
      value: '99.2%',
      desc: 'Nhà vườn quay lại đặt đợt sau',
      icon: <Smile className="w-5 h-5 text-black" />,
    },
    {
      title: 'Mạng lưới cung ứng',
      value: '63',
      desc: 'Tỉnh thành toàn quốc đã giao',
      icon: <MapPin className="w-5 h-5 text-black" />,
    },
  ];

  return (
    <section className="bg-white border-y border-zinc-200 py-12 relative overflow-hidden" id="stats-section">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: 'easeOut' }}
              className="bg-[#fcfcfc] border border-zinc-200 p-5 rounded-2xl shadow-sm flex flex-col justify-between hover:border-black transition-colors"
            >
              <div className="flex items-center justify-between text-zinc-600 mb-2">
                <span className="text-[13px] font-semibold text-zinc-700">{item.title}</span>
                {item.icon}
              </div>
              <div className="text-3xl font-bold text-black tracking-tight">{item.value}</div>
              <p className="text-[12px] text-zinc-500 mt-1">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
