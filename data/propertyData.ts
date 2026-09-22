export type Scene = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  start: number;
  end: number;
  eyebrow?: string;
  accent?: string;
};
export type Property = {
  slug: string;
  name: string;
  location: string;
  price: string;
  details: string;
  heroPoster: string;
  video: string;
  scenes: Scene[];
  specs: { label: string; value: string }[];
  amenities: { title: string; description: string }[];
};
export const PROPERTY: Property = {
  slug: "chatsworth-luxury-estate",
  name: "Chatsworth Luxury Estate",
  location: "Chatsworth, Los Angeles, CA",
  price: "$5,250,000",
  details: "6 Beds • 8 Baths • 8,500 Sq Ft",
  heroPoster: "/images/property-poster.svg",
  video: "https://bucket.rever.io.vn/video-cinematic-optimized.mp4",
  specs: [
    { label: "Year Built", value: "2024" },
    { label: "Lot Size", value: "1.2 Acres" },
    { label: "Garage", value: "4 Cars" },
    { label: "Ceiling", value: "7m" },
  ],
  amenities: [
    {
      title: "Resort Pool",
      description: "Infinity pool with private garden deck.",
    },
    {
      title: "Italian Kitchen",
      description: "Calacatta marble and premium appliances.",
    },
    { title: "Wellness Suite", description: "Spa bath and private sauna." },
  ],
  scenes: [
    {
      id: "hero",
      title: "Chatsworth Luxury Estate",
      subtitle: "Private Architectural Walkthrough",
      description:
        "Một trải nghiệm tham quan bất động sản điện ảnh, nơi kiến trúc và dữ liệu được kể bằng chuyển động.",
      start: 0,
      end: 0.16,
      eyebrow: "EXCLUSIVE RESIDENCE",
    },
    {
      id: "backyard",
      title: "Resort-Style Outdoor Oasis",
      subtitle: "Backyard & Pool Reveal",
      description:
        "Bể bơi tràn bờ hiện đại, sân thể thao đa năng, khu BBQ và không gian tiệc sân vườn riêng tư.",
      start: 0.16,
      end: 0.32,
    },
    {
      id: "living",
      title: "Grand Architectural Living",
      subtitle: "Interior Elegance",
      description:
        "Trần thông tầng 7m, kính toàn cảnh và lò sưởi đá tạo nên trung tâm sinh hoạt giàu tính kiến trúc.",
      start: 0.32,
      end: 0.49,
    },
    {
      id: "kitchen",
      title: "Chef's Culinary Haven",
      subtitle: "Modern Italian Craftsmanship",
      description:
        "Mặt đá Marble Calacatta và hệ tủ bếp cao cấp được tổ chức như một không gian trình diễn.",
      start: 0.49,
      end: 0.65,
    },
    {
      id: "primary-suite",
      title: "Master Wellness Sanctuary",
      subtitle: "Primary Bedroom & Spa Bath",
      description:
        "Phòng ngủ chính riêng tư, phòng tắm spa và ban công mở rộng tầm nhìn.",
      start: 0.65,
      end: 0.82,
    },
    {
      id: "front-reveal",
      title: "Complete Exterior Masterpiece",
      subtitle: "180° Aerial Finale",
      description:
        "Toàn cảnh kiến trúc và cảnh quan khép lại hành trình tham quan bằng một cinematic reveal.",
      start: 0.82,
      end: 1,
    },
  ],
};
