export type SceneInfoItem = { label: string; value: string };

export type Scene = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  start: number;
  end: number;
  eyebrow?: string;
  accent?: string;
  info?: SceneInfoItem[]; // các chip thông tin hiện trong popup của scene này
};

export type RoomVideo = {
  id: string;
  name: string;
  video: string;
  poster?: string;
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
  rooms: RoomVideo[];
};

export const PROPERTY: Property = {
  slug: "chatsworth-luxury-estate",
  name: "Chatsworth Luxury Estate",
  location: "Chatsworth, Los Angeles, CA",
  price: "$5,250,000",
  details: "6 Beds • 8 Baths • 8,500 Sq Ft",
  heroPoster: "/images/property-poster.svg",
  video: "https://bucket.rever.io.vn/video-cinematic-v2.mp4",
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
      description: "Một trải nghiệm tham quan bất động sản điện ảnh...",
      start: 0,
      end: 0.16,
      eyebrow: "EXCLUSIVE RESIDENCE",
      info: [
        { label: "Giá", value: "$5,250,000" },
        { label: "Phòng ngủ", value: "6" },
        { label: "Phòng tắm", value: "8" },
        { label: "Diện tích", value: "8,500 Sq Ft" },
      ],
    },
    {
      id: "backyard",
      title: "Resort-Style Outdoor Oasis",
      subtitle: "Backyard & Pool Reveal",
      description: "Bể bơi tràn bờ hiện đại, sân thể thao đa năng...",
      start: 0.16,
      end: 0.32,
      info: [
        { label: "Bể bơi", value: "Infinity pool 15m" },
        { label: "Khu BBQ", value: "Sân vườn riêng tư" },
      ],
    },
    {
      id: "living",
      title: "Grand Architectural Living",
      subtitle: "Interior Elegance",
      description: "Trần thông tầng 7m, kính toàn cảnh...",
      start: 0.32,
      end: 0.49,
      info: [
        { label: "Trần cao", value: "7m" },
        { label: "Kính toàn cảnh", value: "Panoramic" },
        { label: "Lò sưởi", value: "Đá tự nhiên" },
      ],
    },
    {
      id: "kitchen",
      title: "Chef's Culinary Haven",
      subtitle: "Modern Italian Craftsmanship",
      description: "Mặt đá Marble Calacatta và hệ tủ bếp cao cấp...",
      start: 0.49,
      end: 0.65,
      info: [
        { label: "Diện tích bếp", value: "32 m²" },
        { label: "Mặt đá", value: "Marble Calacatta" },
        { label: "Đảo bếp", value: "Có, kèm bar" },
      ],
    },
    {
      id: "primary-suite",
      title: "Master Wellness Sanctuary",
      subtitle: "Primary Bedroom & Spa Bath",
      description: "Phòng ngủ chính riêng tư, phòng tắm spa...",
      start: 0.65,
      end: 0.82,
      info: [
        { label: "Diện tích phòng", value: "45 m²" },
        { label: "Phòng tắm spa", value: "Bồn tắm + xông hơi" },
      ],
    },
    {
      id: "front-reveal",
      title: "Complete Exterior Masterpiece",
      subtitle: "180° Aerial Finale",
      description: "Toàn cảnh kiến trúc và cảnh quan khép lại hành trình...",
      start: 0.82,
      end: 1,
      info: [
        { label: "Diện tích đất", value: "1.2 Acres" },
        { label: "Garage", value: "4 xe" },
        { label: "Năm xây dựng", value: "2024" },
      ],
    },
  ],
  rooms: [
    {
      id: "video-1",
      name: "Video 1",
      video: "https://bucket.rever.io.vn/01-opt.mp4",
      poster: "/images/room-living.jpg",
    },
    {
      id: "video-2",
      name: "Video 2",
      video: "https://bucket.rever.io.vn/02-opt.mp4",
      poster: "/images/room-bedroom.jpg",
    },
    {
      id: "video-3",
      name: "Video 3",
      video: "https://bucket.rever.io.vn/03-opt.mp4",
      poster: "/images/room-kitchen.jpg",
    },
    {
      id: "video-4",
      name: "Video 4",
      video: "https://bucket.rever.io.vn/04-opt.mp4",
      poster: "/images/room-bathroom.jpg",
    },
    {
      id: "video-5",
      name: "Video 5",
      video: "https://bucket.rever.io.vn/05-opt.mp4",
      poster: "/images/room-backyard.jpg",
    },
    {
      id: "video-6",
      name: "Video 6",
      video: "https://bucket.rever.io.vn/06-opt.mp4",
      poster: "/images/room-living.jpg",
    },
    {
      id: "video-7",
      name: "Video 7",
      video: "https://bucket.rever.io.vn/07-opt.mp4",
      poster: "/images/room-bedroom.jpg",
    },
    {
      id: "video-8",
      name: "Video 8",
      video: "https://bucket.rever.io.vn/08-opt.mp4",
      poster: "/images/room-backyard.jpg",
    },
  ],
};
