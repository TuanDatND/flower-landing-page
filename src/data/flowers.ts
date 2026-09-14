import { FlowerItem, GalleryItem } from '../types';

export const FLOWER_DATA: FlowerItem[] = [
  {
    id: 'vh-9999',
    code: 'VH-9999',
    name: 'Cúc Vàng Hòe (Đóa Hòe 9999)',
    category: 'cuc-dai-doa',
    badge: 'Giống Cúc Chủ Lực',
    badgeType: 'primary',
    photoTag: '[Ảnh: Cúc Vàng Hòe 9999]',
    subTag: 'Bông Đại Đóa Vàng Kim',
    description: 'Giống cúc vàng hòe 9999 trứ danh, cánh hoa dày dặn xếp tầng cuộn tròn kín bông, sắc vàng kim óng ánh mang lại đại cát, thịnh vượng ngày Tết.',
    specLabel: 'Quy cách giống',
    specValue: 'Ngọn giâm / Bầu rễ khỏe',
    imageUrl: '/flowers/vang-hoe-9999.jpg',
    alt: 'Giống Cúc Vàng Hòe 9999 bông to cánh dày',
    seoPath: '/giong-cuc-vang-hoe-9999/',
    details: {
      floweringTime: '85 - 95 ngày (chuẩn dịp Tết và cúng lễ rằm)',
      origin: 'Vườn ươm công nghệ cao Giống Cúc Dũng Tâm',
      features: [
        'Bông đại đóa đường kính 12 - 16cm, màu vàng óng 9999',
        'Cánh hoa dày bóng, không bị thâm cánh khi vận chuyển xa',
        'Cây mập mạp, cành cứng đứng tán, bộ rễ ăn sâu kháng bệnh'
      ],
      careGuide: 'Thắp đèn bổ sung thời kỳ đầu để kéo dài thân cây cành mập. Bón thúc NPK cân đối và bổ sung canxi bo thời kỳ làm nụ để hoa nở căng tròn đều.'
    }
  },
  {
    id: 'pl-02',
    code: 'PL-02',
    name: 'Cúc Pha Lê',
    category: 'cuc-dai-doa',
    badge: 'Bán chạy vụ Tết',
    badgeType: 'primary',
    photoTag: '[Ảnh: Cúc Pha Lê]',
    subTag: 'Bông Trắng Tinh Khôi',
    description: 'Bông cúc pha lê to tròn, cánh hoa trắng trong tinh khiết xếp lớp dày dặn, cành vươn cao cứng cáp, cực kỳ trang nhã và sang trọng.',
    specLabel: 'Độ bền hoa',
    specValue: '25 - 35 ngày',
    imageUrl: '/flowers/pha-le.jpg',
    alt: 'Cây giống cúc Pha Lê trắng tinh khôi',
    seoPath: '/giong-cuc-pha-le/',
    details: {
      floweringTime: '80 - 90 ngày sau trồng',
      origin: 'Giống F1 tuyển chọn từ nhà vườn Dũng Tâm',
      features: [
        'Màu trắng pha lê thuần khiết, tâm hoa xanh cốm thanh nhã',
        'Cánh hoa dài thẳng, chất hoa dai bền không dễ gãy rụng',
        'Rất được ưa chuộng cắm bình cao cấp, sự kiện và thị trường Tết'
      ],
      careGuide: 'Tưới đều vào gốc, giữ ẩm đất tốt và tránh tưới lên hoa khi sắp nở để giữ màu hoa luôn trắng sáng.'
    }
  },
  {
    id: 'cd-03',
    code: 'LT-03',
    name: 'Cúc Lan Tím',
    category: 'cuc-dai-doa',
    badge: 'Sắc Tím Quý Phái',
    badgeType: 'outline',
    photoTag: '[Ảnh: Cúc Lan Tím]',
    subTag: 'Cánh Bung Dài Thướt Tha',
    description: 'Cánh hoa bung dài uyển chuyển, sắc tím hoa lan đằm thắm quý phái kết hợp tâm hoa tươi tắn. Cành hoa dài thẳng tắp, đạt chuẩn cắt cành và cắm bình nghệ thuật.',
    specLabel: 'Chiều dài cành',
    specValue: '75 - 90 cm',
    imageUrl: '/flowers/canh-dai-hong.jpg',
    alt: 'Cúc Lan Tím cánh dài duyên dáng quý phái',
    details: {
      floweringTime: '85 - 90 ngày',
      origin: 'Chọn lọc ngọn giống thuần F1 tại vườn',
      features: [
        'Cánh dài cong nhẹ tự nhiên, bung nở xòe rộng ấn tượng',
        'Sắc tím hoa lan sang trọng, giữ màu tươi bền lâu',
        'Cành cúc mập, chắc khỏe, ít lá chân hư hao'
      ],
      careGuide: 'Tỉa nụ nách xung quanh để dồn dinh dưỡng nuôi bông chính to đẹp nhất.'
    }
  },
  {
    id: 'dcd-04',
    code: 'DCD-04',
    name: 'Cúc Đóa (Cánh Dài)',
    category: 'canh-dai',
    badge: 'Giống Cúc Cánh Dài Chuẩn',
    badgeType: 'primary',
    photoTag: '[Ảnh: Đóa Cánh Dài]',
    subTag: 'Luống Giống Mập Khỏe',
    description: 'Giống cúc đóa cánh dài đầu dòng, luống cây giống đâm chồi xanh mướt, thân mập cứng cáp, bông đại cánh bung dài uyển chuyển rất được thị trường ưa chuộng.',
    specLabel: 'Quy cách giống',
    specValue: 'Ngọn giâm / Bầu rễ',
    imageUrl: '/flowers/doa-canh-dai.jpg',
    alt: 'Giống cúc đóa cánh dài nhà vườn Dũng Tâm',
    seoPath: '/giong-cuc-doa-canh-dai/',
    details: {
      floweringTime: '80 - 90 ngày sau trồng',
      origin: 'Vườn ươm công nghệ cao Giống Cúc Dũng Tâm',
      features: [
        'Cây giống cúc đóa cánh dài tuyển chọn từ cây mẹ F1',
        'Bộ lá dày xanh mướt, đọt mập, kháng nấm rễ vượt trội',
        'Bông nở to cánh dài xòe rộng, giữ hoa tươi lâu bền màu'
      ],
      careGuide: 'Cắm luống tưới giữ ẩm đều 5 ngày đầu. Khi cây cao 15-20cm bắt đầu định hình cành và tỉa chồi nách.'
    }
  },
  {
    id: 'tq-04',
    code: 'TQ-04',
    name: 'Cúc Nghệ Vàng',
    category: 'cuc-chum',
    badge: 'Hoa Bốn Mùa',
    badgeType: 'primary',
    photoTag: '[Ảnh: Cúc Nghệ Vàng]',
    subTag: 'Siêu Sai Bông',
    description: 'Giống cúc nghệ vàng khỏe bậc nhất, kháng chịu thời tiết tốt, hoa nở rực rỡ sắc vàng nghệ đậm đà, tán xòe tròn trĩu nụ, hoa nở rộ bền bỉ.',
    specLabel: 'Mùa vụ',
    specValue: 'Trồng quanh năm',
    imageUrl: '/flowers/tu-quy-vang.jpg',
    alt: 'Cúc nghệ vàng nở rực rỡ, sai bông',
    details: {
      floweringTime: 'Cho hoa liên tục sau 60-70 ngày trồng',
      origin: 'Dòng giống thích nghi khí hậu toàn quốc',
      features: [
        'Khả năng đâm chồi đẻ nhánh cực khỏe, hoa trùm kín tán',
        'Kháng lở cổ rễ và nấm lá vượt trội',
        'Thích hợp cho cả nhà vườn trồng chậu, cảnh quan và vựa hoa'
      ],
      careGuide: 'Cắt tỉa cành tàn sau mỗi lứa hoa để kích thích chồi mới đâm hoa đợt tiếp theo.'
    }
  },
  {
    id: 'kl-05',
    code: 'KL-05',
    name: 'Cúc Kali Đa Sắc (Cúc Mai Chùm)',
    category: 'cuc-chum',
    badge: 'Bộ Màu Đa Dạng',
    badgeType: 'primary',
    photoTag: '[Ảnh: Cúc Kali]',
    subTag: 'Cam • Hồng • Vàng • Tím',
    description: 'Dòng cúc chùm Kali nổi tiếng với phổ màu phong phú rực rỡ, mỗi cành cho từ 15-25 bông hoa nhỏ xinh, nở rộ xum xuê và cực kỳ lâu tàn.',
    specLabel: 'Quy cách',
    specValue: '15 - 25 bông/cành',
    imageUrl: '/flowers/kali-chum.jpg',
    alt: 'Cúc Kali đa sắc rực rỡ',
    details: {
      floweringTime: '70 - 75 ngày',
      origin: 'Vườn ươm Dũng Tâm giống chuẩn F1',
      features: [
        'Màu sắc bắt mắt: đỏ cam, vàng chanh, hồng sen, trắng sứ',
        'Tán chùm xòe đều, cành nhánh cứng cáp dễ bó kiện',
        'Độ bền hoa trên cây và cắm bình từ 20-30 ngày'
      ],
      careGuide: 'Bón phân thúc NPK định kỳ 10 ngày/lần. Thích hợp đất tơi xốp nhiều mùn hữu cơ.'
    }
  },
  {
    id: 'gd-06',
    code: 'GD-06',
    name: 'Cúc Gơ Đỏ Nhung Quý Phái',
    category: 'cuc-chum',
    badge: 'Đỏ Nhung Sang Trọng',
    badgeType: 'primary',
    photoTag: '[Ảnh: Cúc Gơ Đỏ]',
    subTag: 'Đỏ Đậm Sang Trọng',
    description: 'Sắc hoa đỏ nhung thắm quyền quý, lớp cánh kép dày dặn và tâm nhụy xanh vàng nổi bật. Cực kỳ đắt khách trong các dịp hội nghị, hiếu hỷ và Tết.',
    specLabel: 'Đặc tính',
    specValue: 'Màu đỏ thắm giữ bền',
    imageUrl: '/flowers/go-do.jpg',
    alt: 'Cúc Gơ Đỏ nhung quý phái',
    details: {
      floweringTime: '75 - 85 ngày',
      origin: 'Nhà vườn Dũng Tâm',
      features: [
        'Màu đỏ nhung rực rỡ không bị phai bạc dưới ánh nắng',
        'Cành to khỏe, lá xanh đen dày dặn chứng tỏ cây nội lực mạnh',
        'Tỉ lệ đạt bông loại 1 trên 95%'
      ],
      careGuide: 'Bổ sung lân và kali trước khi tạo nụ 20 ngày giúp cánh hoa thắm màu và cứng cáp.'
    }
  },
  {
    id: 'tv-07',
    code: 'TV-07',
    name: 'Cúc Tua Vàng Óng Ả',
    category: 'cuc-dai-doa',
    badge: 'Cánh Tua Độc Lạ',
    badgeType: 'outline',
    photoTag: '[Ảnh: Cúc Tua Vàng]',
    subTag: 'Vàng Hoàng Yến',
    description: 'Điểm nhấn độc đáo với các cánh hoa xẻ tua nhọn nhô đều từ tâm, màu vàng hoàng yến sáng chói. Hoa mang ý nghĩa tài lộc, bình an.',
    specLabel: 'Tỉ lệ sống giống',
    specValue: '> 99%',
    imageUrl: '/flowers/tua-vang.jpg',
    alt: 'Cúc Tua Vàng cánh nhọn óng ả',
    details: {
      floweringTime: '80 - 90 ngày',
      origin: 'Ngọn giống cúc F1 thuần khí hậu',
      features: [
        'Cánh hoa hình tua nhọn độc đáo, kết cấu bông xốp mềm mại',
        'Sắc vàng hoàng kim tỏa sáng rạng rỡ',
        'Độ bền hoa cành tươi lâu không rụng cánh'
      ],
      careGuide: 'Tưới nước vừa đủ, không tưới sũng gốc ban đêm. Giữ thông thoáng luống trồng.'
    }
  },
  {
    id: 'tc-08',
    code: 'SD-08',
    name: 'Cúc Sao Đỏ (Đỏ Viền Vàng)',
    category: 'cuc-chum',
    badge: 'Cúc Cành Truyền Thống',
    badgeType: 'subtle',
    photoTag: '[Ảnh: Cúc Sao Đỏ]',
    subTag: 'Sai Nụ • Bền Hoa',
    description: 'Cánh hoa dáng ngôi sao rực rỡ, phối màu đỏ thắm viền vàng kim cực kỳ bắt mắt. Cây đẻ nhiều cành nhánh, sai hoa chùm trĩu trịt.',
    specLabel: 'Độ sai hoa',
    specValue: 'Chùm nhiều nụ',
    imageUrl: '/flowers/sao-do.jpg',
    alt: 'Cúc Sao Đỏ viền vàng',
    details: {
      floweringTime: '70 - 80 ngày',
      origin: 'Giống cúc cành truyền thống nhà vườn Dũng Tâm',
      features: [
        'Cánh hoa đỏ thắm viền vàng kim sắc sảo',
        'Cành dẻo dai, dễ vận chuyển đường dài không giòn gãy',
        'Thương lái ưa chuộng thu mua số lượng lớn làm hoa cắm đĩa, cắm lẵng'
      ],
      careGuide: 'Bấm ngọn 1 lần lúc cây 15cm để cây phân nhiều cành nhánh đồng đều.'
    }
  },
  {
    id: 'kc-09',
    code: 'KC-09',
    name: 'Cúc Kim Cương Vàng Đại Bông',
    category: 'cuc-dai-doa',
    badge: 'Đại Đóa Cực To',
    badgeType: 'primary',
    photoTag: '[Ảnh: Cúc Kim Cương]',
    subTag: 'Bông Cầu 15-18cm',
    description: 'Giống cúc đơn đại đóa danh tiếng hàng đầu, bông cúc to tròn như quả cầu pha lê, cánh hoa xếp ken đặc từng lớp khít khao.',
    specLabel: 'Đường kính bông',
    specValue: '15 - 18 cm',
    imageUrl: '/flowers/kim-cuong.jpg',
    alt: 'Cúc Kim Cương đại đóa vàng rực',
    details: {
      floweringTime: '90 - 100 ngày',
      origin: 'Phôi giống F1 nhà vườn Dũng Tâm',
      features: [
        'Bông hoa cực đại, form cầu tròn trịa đầy đặn',
        'Thân cây to mập như ngón tay cái, lá xanh đậm dày dặn',
        'Là sản phẩm hoa chưng lễ và hoa Tết cao cấp nhất'
      ],
      careGuide: 'Cần lưới đỡ cành khi cây cao trên 50cm để hoa luôn đứng thẳng tắp.'
    }
  },
  {
    id: 'mc-10',
    code: 'MC-10',
    name: 'Cúc Mai Cam & Mai Đỏ Rực Rỡ',
    category: 'cuc-chum',
    badge: 'Cánh Xòe Hoa Mai',
    badgeType: 'outline',
    photoTag: '[Ảnh: Cúc Mai Cam]',
    subTag: 'Màu Cam Cà Rốt',
    description: 'Cánh hoa xòe rộng thanh tú như đóa hoa mai ngày xuân, sắc cam cà rốt và đỏ thắm ấm áp. Cực kỳ bền và tôn thêm vẻ sinh động cho mọi không gian.',
    specLabel: 'Năng suất cành',
    specValue: 'Cắt cành liên tục',
    imageUrl: '/flowers/mai-cam.jpg',
    alt: 'Cúc Mai Cam rực rỡ ấm áp',
    details: {
      floweringTime: '65 - 75 ngày',
      origin: 'Chọn lọc ngọn giống khỏe tại vườn',
      features: [
        'Cánh đơn xòe rộng nhẹ nhàng thanh lịch',
        'Màu cam sáng ấm cúng, bắt mắt',
        'Kháng bệnh sương mai và rầy rệp tốt'
      ],
      careGuide: 'Trồng nơi nhiều ánh sáng tự nhiên để màu cam đạt độ tươi sáng nhất.'
    }
  },
  {
    id: 'lt-11',
    code: 'LT-11',
    name: 'Cúc Lan Tím Cánh Kép',
    category: 'cuc-chum',
    badge: 'Tím Quý Phái',
    badgeType: 'subtle',
    photoTag: '[Ảnh: Cúc Lan Tím]',
    subTag: 'Tím Cánh Sen Sang Trọng',
    description: 'Màu tím hoa lan kiêu sa, cánh kép xoắn nhẹ, tâm nhụy vàng xanh. Giống cúc độc lạ mang đến nét mới mẻ cho người yêu hoa.',
    specLabel: 'Màu sắc',
    specValue: 'Tím hoa lan độc đáo',
    imageUrl: '/flowers/lan-tim.jpg',
    alt: 'Cúc Lan Tím cánh kép quý phái',
    details: {
      floweringTime: '75 - 80 ngày',
      origin: 'Giống cúc chùm lai mới Dũng Tâm',
      features: [
        'Màu tím hoa lan độc lạ, tôn thêm giá trị bó hoa',
        'Bông hoa kép bung đều, cành nhánh thẳng mập',
        'Rất được ưa chuộng tại các shop hoa tươi nghệ thuật'
      ],
      careGuide: 'Tưới nước đều đặn vào buổi sáng, che chắn sương muối nếu thời tiết lạnh.'
    }
  },
  {
    id: 'ng-12',
    code: 'NG-12',
    name: 'Ngọn Giống Cúc Cắt Cành F1 (Ra Rễ Khỏe)',
    category: 'ngon-giong',
    badge: 'Bộ Rễ Trắng Mập',
    badgeType: 'primary',
    photoTag: '[Ảnh: Ngọn Giống Cúc F1]',
    subTag: 'Tỉ Lệ Sống > 99%',
    description: 'Ngọn giống cúc F1 giâm cành chuyên nghiệp, đốt ngắn mập mạp, rễ trắng bung dày. Đóng kiện thùng xốp cẩn thận, đi đường xa 3-4 ngày vẫn xanh mướt.',
    specLabel: 'Đóng gói',
    specValue: 'Kiện 1.000 - 5.000 ngọn',
    imageUrl: '/flowers/giong-re-khoe.jpg',
    alt: 'Ngọn giống cúc cắt cành rễ trắng khỏe',
    seoPath: '/ngon-giong-cuc-cat-canh-f1/',
    details: {
      floweringTime: 'Sẵn sàng trồng ngay sau khi nhận hàng',
      origin: 'Vườn ươm công nghệ cao Giống Cúc Dũng Tâm',
      features: [
        'Ngọn giống tuyển từ cây mẹ F1 đầu dòng không thoái hóa',
        'Bộ rễ trắng mập, phát triển cực nhanh sau khi cắm đất',
        'Hỗ trợ kỹ thuật thắp đèn ngắt nụ trọn đời mùa vụ'
      ],
      careGuide: 'Nhận hàng mở thùng tưới nhẹ nước mát hồi cây 2-3 tiếng trước khi cắm luống. Che lưới đen 3 ngày đầu.'
    }
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Hệ Thống Nhà Màng Công Nghệ Cao Giống Cúc Dũng Tâm',
    subtitle: 'Khu ươm giống quy mô lớn, kiểm soát độ ẩm và ánh sáng đèn sưởi tối ưu',
    tag: 'Trại giống nhà màng',
    imageUrl: '/flowers/nha-vuon-greenhouse.jpg',
    alt: 'Nhà màng công nghệ cao giống cúc Dũng Tâm',
    colSpan: 'md:col-span-8',
    aspect: 'h-[320px] sm:h-[400px] md:h-[460px]'
  },
  {
    id: 'gal-2',
    title: 'Chủ Vườn Tận Tâm Cùng Từng Luống Hoa',
    subtitle: 'Chú Dũng trực tiếp kiểm tra chất lượng hoa và đọt giống trước khi xuất chành',
    tag: 'Chủ vườn Dũng Tâm',
    imageUrl: '/flowers/chu-vuon-dung-tam.jpg',
    alt: 'Chủ vườn Giống Cúc Dũng Tâm thân thiện',
    colSpan: 'md:col-span-4',
    aspect: 'h-[320px] sm:h-[400px] md:h-[460px]'
  },
  {
    id: 'gal-3',
    title: 'Cánh Đồng Cúc Vàng Hòe Đang Độ Nở Rộ',
    subtitle: 'Bông to cánh dày vàng óng ả chuẩn bị thu hoạch phục vụ thị trường',
    tag: 'Vườn cúc vàng rực rỡ',
    imageUrl: '/flowers/tu-quy-vang.jpg',
    alt: 'Cánh đồng cúc vàng nở rộ',
    colSpan: 'md:col-span-6',
    aspect: 'h-[280px] sm:h-[340px] md:h-[380px]'
  },
  {
    id: 'gal-4',
    title: 'Vườn Cúc Gơ Đỏ & Cúc Mai Đỏ Vào Mùa Bội Thu',
    subtitle: 'Hàng ngàn cành cúc đỏ thắm vươn cao chuẩn ngày thu hoạch',
    tag: 'Cúc gơ đỏ nở rộ',
    imageUrl: '/flowers/canh-dong-cuc-do.jpg',
    alt: 'Vườn cúc gơ đỏ rực rỡ',
    colSpan: 'md:col-span-6',
    aspect: 'h-[280px] sm:h-[340px] md:h-[380px]'
  }
];
