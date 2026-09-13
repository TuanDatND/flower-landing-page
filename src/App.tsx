import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { StatsBar } from './components/StatsBar';
import { CatalogueSection } from './components/CatalogueSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ProcessSection } from './components/ProcessSection';
import { GallerySection } from './components/GallerySection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { FlowerModal } from './components/FlowerModal';
import { FlowerItem } from './types';
import { X } from 'lucide-react';

export default function App() {
  const [selectedFlower, setSelectedFlower] = useState<FlowerItem | null>(null);
  const [prefilledFlowerName, setPrefilledFlowerName] = useState<string>('');
  const [heroModalPhoto, setHeroModalPhoto] = useState<{ url: string; title: string } | null>(null);

  const scrollToContact = (flowerName?: string) => {
    if (flowerName) {
      setPrefilledFlowerName(flowerName);
    }
    const contactElement = document.getElementById('lien-he');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToCatalogue = () => {
    const catalogueElement = document.getElementById('danh-muc-hoa');
    if (catalogueElement) {
      catalogueElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#fafafa] font-['Plus_Jakarta_Sans',sans-serif] text-zinc-800 antialiased selection:bg-black selection:text-white relative overflow-x-hidden">
      {/* Subtle Background Glows using hardware-accelerated radial gradients (zero jank/stutter) */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10 [transform:translateZ(0)]">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full opacity-60 [background:radial-gradient(ellipse_at_center,_rgba(228,228,231,0.6)_0%,_transparent_70%)]"></div>
        <div className="absolute top-1/3 -left-40 w-[600px] h-[600px] rounded-full opacity-40 [background:radial-gradient(circle_at_center,_rgba(212,212,216,0.5)_0%,_transparent_70%)]"></div>
        <div className="absolute top-2/3 -right-40 w-[600px] h-[600px] rounded-full opacity-40 [background:radial-gradient(circle_at_center,_rgba(228,228,231,0.5)_0%,_transparent_70%)]"></div>
      </div>

      {/* Top Header */}
      <Header onQuoteClick={() => scrollToContact()} />

      {/* Main Content Sections */}
      <main className="w-full pt-24 sm:pt-28 relative z-10">
        {/* 1. Hero Section */}
        <Hero
          onExploreClick={scrollToCatalogue}
          onCallClick={() => {}}
          onSelectHeroPhoto={(url, title) => setHeroModalPhoto({ url, title })}
        />

        {/* 2. Key Stats Bar */}
        <StatsBar />

        {/* 3. Flower Catalogue */}
        <CatalogueSection
          onSelectFlowerForQuote={(flowerName) => scrollToContact(flowerName)}
          onOpenFlowerDetails={(flower) => setSelectedFlower(flower)}
        />

        {/* 4. Why Choose Us (Bento Grid) */}
        <WhyChooseUs />

        {/* 5. 4-Step Process */}
        <ProcessSection />

        {/* 6. Gallery & Real Garden Photos */}
        <GallerySection />

        {/* 7. Contact & Quote Request Form */}
        <ContactSection prefilledFlower={prefilledFlowerName} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Action Bars */}
      <FloatingActions />

      {/* Detail Modal for Flower Varieties */}
      <FlowerModal
        flower={selectedFlower}
        onClose={() => setSelectedFlower(null)}
        onSelectForQuote={(flowerName) => scrollToContact(flowerName)}
      />

      {/* Hero Photo Preview Modal */}
      {heroModalPhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setHeroModalPhoto(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl border border-zinc-700"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setHeroModalPhoto(null)}
              className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center border border-white/20 transition-all cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="max-h-[80vh] flex items-center justify-center bg-black">
              <img
                src={heroModalPhoto.url}
                alt={heroModalPhoto.title}
                className="max-h-[80vh] w-full object-contain"
              />
            </div>
            <div className="p-5 bg-zinc-900 text-white">
              <h3 className="text-lg font-bold">{heroModalPhoto.title}</h3>
              <p className="text-xs text-zinc-400 mt-0.5">Nhà vườn Giống Hoa Dũng Tâm • Hệ thống sản xuất chuẩn F1</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
