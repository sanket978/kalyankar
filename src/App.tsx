import React from 'react';
import { motion, AnimatePresence } from "motion/react";
import { 
  Menu, 
  Search, 
  Home,
  MessageCircle,
  Phone,
  Heart,
  MapPin,
  User,
  Trash,
  Star,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Smile,
  Truck,
  Wrench,
  ShieldCheck,
  Armchair,
  Bed,
  Layers,
  Lamp,
  Waves,
  X,
  Facebook,
  Instagram,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  RotateCcw,
  Rotate3D,
  MoreVertical
} from "lucide-react";

const navItems = [
  "Mattress", "Sofa", "Furniture", "Curtains"
];

const sidebarNavItems = [
  "Living", "Dining", "Study", "Kitchen", "Essentials", "Kids", "Interiors"
];

const categories = [
  { id: 1, title: "Sofas", img: "https://lh3.googleusercontent.com/d/1mn4nmQvyWx5QV2CUcY1_X3PryIY6aJCp" },
  { id: 3, title: "Bed Back Cushion", img: "https://lh3.googleusercontent.com/d/1xwujCENuYX3OCTE6TufQNzch-7fUe0-p" },
  { id: 4, title: "Mattresses", img: "https://lh3.googleusercontent.com/d/1g-RGJUJkzOEVkPvvcx2ZNGAhf5U-k7eK" },
  { id: 5, title: "Furniture", img: "https://lh3.googleusercontent.com/d/1IsIh1vPUFhRJH48yEM8gqe_yulW4Cci4" },
  { id: 12, title: "Curtains", img: "https://lh3.googleusercontent.com/d/139Q2h5t7BIGMXB0V56MG1xdrfjLvisY9" },
];

const bedBackCushionSubCategories = [
  { id: 2001, title: "Classic Support", img: "https://lh3.googleusercontent.com/d/1xwujCENuYX3OCTE6TufQNzch-7fUe0-p" },
  { id: 2002, title: "Orthopedic Wedge", img: "https://lh3.googleusercontent.com/d/1AbfXKYNYXDgcuIKhEucUeRSngw3j3PnU" },
  { id: 2003, title: "Premium Velvet", img: "https://lh3.googleusercontent.com/d/1I7rZn0nGw86USIMzdPYV9AH3uB960MIh" },
  { id: 2004, title: "Reading Pillows", img: "https://lh3.googleusercontent.com/d/1Fa8cumt4sC8DkhTTsMAQYbH_MyQGBNRu" },
];

const furnitureSubCategories = [
  { id: 3001, title: "Premium Dining", img: "https://lh3.googleusercontent.com/d/1n2PSMzYN0HZaTh1jmOctrl3b4lDLh-kI" },
  { id: 3002, title: "Elegant Living", img: "https://lh3.googleusercontent.com/d/1p6ccj5kiStVY2gCzgJb8Put7lJqS2qD6" },
  { id: 3003, title: "Modern Storage", img: "https://lh3.googleusercontent.com/d/1VoTZRiIj3oxHaUOEHD5JUFz3dLkC82DV" },
];

const premiumDiningProducts = [
  { id: "pd-1", title: "Royal Oak Dining Set", img: "https://lh3.googleusercontent.com/d/1n2PSMzYN0HZaTh1jmOctrl3b4lDLh-kI", features: ["Solid Wood", "6 Seater"], type: "Premium", rating: 4.9, reviews: "120", badge: "SIGNATURE" },
];

const elegantLivingProducts = [
  { id: "el-1", title: "Modern Living Sofa Set", img: "https://lh3.googleusercontent.com/d/1p6ccj5kiStVY2gCzgJb8Put7lJqS2qD6", features: ["Luxury Fabric", "Ergonomic"], type: "Elegant", rating: 4.8, reviews: "95", badge: "TRENDING" },
];

const modernStorageProducts = [
  { id: "ms-storage-1", title: "Modern Utility Cabinet", img: "https://lh3.googleusercontent.com/d/1VoTZRiIj3oxHaUOEHD5JUFz3dLkC82DV", features: ["Multi-purpose", "Sleek"], type: "Utility", rating: 4.7, reviews: "45", badge: "NEW" },
];

const mattressSubCategories = [
  { id: 4001, title: "Memory Foam", img: "https://lh3.googleusercontent.com/d/1XcniI1btjaUAEyIFzaWT7OH3ODL9pkvN" },
  { id: 4002, title: "Latex", img: "https://lh3.googleusercontent.com/d/1d9I_nxjU9u8VBFNIa8_213Ekmknbz4j7" },
  { id: 4003, title: "Pocket Spring", img: "https://lh3.googleusercontent.com/d/1q5dTssJRwfxn8CKO_Y8Gcu6siM1gWSNJ" },
];

const bedsSubCategories = [
  { id: 2101, title: "King Size Beds", img: "https://lh3.googleusercontent.com/d/1V1tyMe_bfwuMWkZpGsX575kooDczYsaR" },
  { id: 2102, title: "Queen Size Beds", img: "https://lh3.googleusercontent.com/d/1V1tyMe_bfwuMWkZpGsX575kooDczYsaR" },
  { id: 2103, title: "Single Beds", img: "https://lh3.googleusercontent.com/d/1V1tyMe_bfwuMWkZpGsX575kooDczYsaR" },
  { id: 2104, title: "Storage Beds", img: "https://lh3.googleusercontent.com/d/1V1tyMe_bfwuMWkZpGsX575kooDczYsaR" },
  { id: 2105, title: "Side Tables", img: "https://lh3.googleusercontent.com/d/1Qh577w2n1MJ43yMjnFYeIUdk7JhwVLhd" },
];

const sofaSubCategories = [
  { id: 301, title: "Bhartiya Baithak", img: "https://lh3.googleusercontent.com/d/1APytK8Wkis-QIljB11P6q60pW1xzmsLK" },
  { id: 302, title: "1-7 seated sofa", img: "https://lh3.googleusercontent.com/d/1_Nw6I8yV2-xJDLQZ-7b0aT0paYPg4eaZ" },
  { id: 303, title: "Maharaja sofa", img: "https://lh3.googleusercontent.com/d/18uuCMdQzbp6eJ3H4ZHbkdSA0_HF3OR6i" },
  { id: 304, title: "Feature sofa", img: "https://lh3.googleusercontent.com/d/15nEdtNoJFQ7m9ZJrUQu-zPIFqb48HLbh" },
  { id: 305, title: "Modern sofa set", img: "https://lh3.googleusercontent.com/d/1O_D6l4zTlU3Pin9L7ktcq_8Q4whgnT2A" },
  { id: 306, title: "L type sofa", img: "https://lh3.googleusercontent.com/d/1tu3ojxvDkeMEhqMgj1SseqXJncePYYHu" },
  { id: 307, title: "Simple sofa set", img: "https://lh3.googleusercontent.com/d/1zWbFWBfl0CB72CIfIKMEgSCSv7z66le9" },
  { id: 308, title: "Sofa cum bed", img: "https://lh3.googleusercontent.com/d/1Ldmjs5pyvI8UlDOb70cbl-s69x5XIZeO" },
];

const featureSofaSubCategories = [
  { id: 401, title: "Sofa with tea table", img: "https://lh3.googleusercontent.com/d/16wJs8lzH9OubmLoFJSFBx-WNrble6Eqe" },
  { id: 402, title: "Sofa with lounger", img: "https://lh3.googleusercontent.com/d/1sjqlelYhdJ253OWJYvYOR9TWWtmxqybo" },
  { id: 403, title: "Sofa with storage box", img: "https://lh3.googleusercontent.com/d/1cJB_1IsKiM_4Dxhb69-XHwCRgRw83gFf" },
];

const bhartiyaBaithakProducts = [
  { id: "bb-1", title: "Bhartiya Baithak Elegant Series - 1", img: "https://lh3.googleusercontent.com/d/1APytK8Wkis-QIljB11P6q60pW1xzmsLK", features: ["Traditional Design", "Premium Material"], type: "Traditional", rating: 4.8, reviews: "2.1K", badge: "EXCLUSIVE" },
  { id: "bb-2", title: "Bhartiya Baithak Elegant Series - 2", img: "https://lh3.googleusercontent.com/d/1cUXRsEA9ba9cNY79I9FzPkUf-sC84mva", features: ["Comfortable Seating", "Royal Look"], type: "Royal", rating: 4.9, reviews: "1.5K", badge: null },
  { id: "bb-3", title: "Bhartiya Baithak Elegant Series - 3", img: "https://lh3.googleusercontent.com/d/1dAY7jG8gmK0z8IZxSskjc4OszQ3IAyt8", features: ["Durable Craftsmanship", "Classic Style"], type: "Classic", rating: 4.7, reviews: "890", badge: "BEST SELLER" },
  { id: "bb-4", title: "Bhartiya Baithak Elegant Series - 4", img: "https://lh3.googleusercontent.com/d/1h04jSK5_qOMzg9Cx6CYJxW3aanwsdXvX", features: ["Plush Foam", "Ethnic Vibe"], type: "Traditional", rating: 4.6, reviews: "1.2K", badge: null },
  { id: "bb-5", title: "Bhartiya Baithak Elegant Series - 5", img: "https://lh3.googleusercontent.com/d/1rRtzx86WTF09sEmQbGE9oGFrUoWz_5D9", features: ["Hand-tufted", "Luxury Fabric"], type: "Luxury", rating: 4.8, reviews: "670", badge: "NEW" },
  { id: "bb-6", title: "Bhartiya Baithak Elegant Series - 6", img: "https://lh3.googleusercontent.com/d/1g-JQjCZUGArRPqcVGlkuQ7dyL9pozjW5", features: ["Solid Wood Base", "Timeless"], type: "Traditional", rating: 4.7, reviews: "540", badge: null },
  { id: "bb-7", title: "Bhartiya Baithak Elegant Series - 7", img: "https://lh3.googleusercontent.com/d/1T-mCTMX_hFajv6ry0MFdfW17JSzHYTNy", features: ["Intricate Patterns", "Warm Tones"], type: "Designer", rating: 4.9, reviews: "320", badge: "ARTISAN" },
  { id: "bb-8", title: "Bhartiya Baithak Elegant Series - 8", img: "https://lh3.googleusercontent.com/d/1absSNVPLaqohnvpZA8DkL5VwyNYgHi0o", features: ["Rich Texture", "Heritage Collection"], type: "Heritage", rating: 4.8, reviews: "450", badge: null },
  { id: "bb-9", title: "Bhartiya Baithak Elegant Series - 9", img: "https://lh3.googleusercontent.com/d/1DQSdipb_PVYqAyTaUNTV4SYyqz7HEay3", features: ["Vibrant Colors", "Cultural Decor"], type: "Traditional", rating: 4.5, reviews: "210", badge: "VIBRANT" },
  { id: "bb-10", title: "Bhartiya Baithak Elegant Series - 10", img: "https://lh3.googleusercontent.com/d/1vTICxs6QULTOwpc2NZ2jXZegd6V2uYxU", features: ["Deep Cushioning", "Grand Size"], type: "Royal", rating: 4.7, reviews: "1.1K", badge: null },
  { id: "bb-11", title: "Bhartiya Baithak Elegant Series - 11", img: "https://lh3.googleusercontent.com/d/1VGLnsquLenPPgdrXw9SlO1NGax5J5Mg4", features: ["Ergonomic Support", "Finest Wood"], type: "Traditional", rating: 4.8, reviews: "950", badge: "PREMIUM" },
  { id: "bb-12", title: "Bhartiya Baithak Elegant Series - 12", img: "https://lh3.googleusercontent.com/d/19jkKgpEGqXFGhqkpPZJ9C22rrQlMCzDm", features: ["Modern-Traditional Blend", "Sleek"], type: "Modern", rating: 4.6, reviews: "670", badge: null },
  { id: "bb-13", title: "Bhartiya Baithak Elegant Series - 13", img: "https://lh3.googleusercontent.com/d/1eeYSQnTRJPvfeDN-1hW8hVowNARLsRyy", features: ["Hand-carved Details", "Elite"], type: "Luxury", rating: 4.9, reviews: "820", badge: "ELITE" },
  { id: "bb-14", title: "Bhartiya Baithak Elegant Series - 14", img: "https://lh3.googleusercontent.com/d/15I_lMQKvBgohEmVxZJfSiO_vo1zFZAi7", features: ["Bespoke Design", "Artisan Made"], type: "Designer", rating: 4.8, reviews: "150", badge: null },
  { id: "bb-15", title: "Bhartiya Baithak Elegant Series - 15", img: "https://lh3.googleusercontent.com/d/17LJcjEkfqKKURBjsFHG7XtbQcmA3hGeA", features: ["Traditional Motifs", "Rich Finish"], type: "Traditional", rating: 4.7, reviews: "430", badge: "ROYAL" },
  { id: "bb-16", title: "Bhartiya Baithak Elegant Series - 16", img: "https://lh3.googleusercontent.com/d/17cDDuVYV1qLUIL8fGu3C2kUOyq6UEiMF", features: ["Sustainable Materials", "Pure Comfort"], type: "Eco", rating: 4.6, reviews: "1.3K", badge: null },
  { id: "bb-17", title: "Bhartiya Baithak Elegant Series - 17", img: "https://lh3.googleusercontent.com/d/1GD1yyp0dec2RSjzRMRnMz0oqDbfU_BlU", features: ["Ornate Carving", "Stately Presence"], type: "Heritage", rating: 4.9, reviews: "560", badge: "COLLECTION" },
  { id: "bb-18", title: "Bhartiya Baithak Elegant Series - 18", img: "https://lh3.googleusercontent.com/d/1Jrl-zExEDxxjqlXMrTuqO0XKwwsv04D5", features: ["Soft Upholstery", "Regal Comfort"], type: "Royal", rating: 4.8, reviews: "780", badge: null },
  { id: "bb-19", title: "Bhartiya Baithak Elegant Series - 19", img: "https://lh3.googleusercontent.com/d/17vJ15hWWuuJaPLl9ASBYrj4mBI3lVGEQ", features: ["Cultural Elegance", "Fine Finish"], type: "Traditional", rating: 4.7, reviews: "290", badge: "TOP RATED" },
  { id: "bb-20", title: "Bhartiya Baithak Elegant Series - 20", img: "https://lh3.googleusercontent.com/d/1gpRAzJsQqEh9qQ8CbVjpHMQ3aWZC3S4t", features: ["Compact and Stylish", "Versatile"], type: "Essentials", rating: 4.5, reviews: "110", badge: null },
  { id: "bb-21", title: "Bhartiya Baithak Elegant Series - 21", img: "https://lh3.googleusercontent.com/d/1QHUfZZrocCT1t5CQySvonQNMPdNTQyBP", features: ["Master Craftsmanship", "Iconic"], type: "Designer", rating: 4.9, reviews: "340", badge: "ICONIC" },
  { id: "bb-22", title: "Bhartiya Baithak Elegant Series - 22", img: "https://lh3.googleusercontent.com/d/132MUVVEsSRZc84CEbbk6wbuWoZJJaynt", features: ["Rich Maroon Tones", "Sturdy Base"], type: "Classic", rating: 4.8, reviews: "220", badge: null },
  { id: "bb-23", title: "Bhartiya Baithak Elegant Series - 23", img: "https://lh3.googleusercontent.com/d/1NFL0qbqPKSsKyZGddVZQSK1AH7bNuluW", features: ["Gilded Accents", "Magnificent"], type: "Royal", rating: 4.9, reviews: "1.1K", badge: "MAGNIFICENT" },
  { id: "bb-24", title: "Bhartiya Baithak Elegant Series - 24", img: "https://lh3.googleusercontent.com/d/17D6roKAcDsDQ9cFIK4EU69MkZaLN-Wb9", features: ["Modern Ethos", "Daily Use"], type: "Modern", rating: 4.6, reviews: "980", badge: null },
  { id: "bb-25", title: "Bhartiya Baithak Elegant Series - 25", img: "https://lh3.googleusercontent.com/d/1d1ShOkKy0cjyHJcYAMmA451xnatv8iDH", features: ["Hand-painted details", "Unique"], type: "Artsy", rating: 4.7, reviews: "450", badge: "UNIQUE" },
  { id: "bb-26", title: "Bhartiya Baithak Elegant Series - 26", img: "https://lh3.googleusercontent.com/d/1dM7ZLCSO-IICl2f9vV22GgsnQkZ1TEFM", features: ["Velvet Luxury", "Grand Seat"], type: "Luxury", rating: 4.9, reviews: "150", badge: "SIGNATURE" },
];

const seatedSofaProducts = [
  { id: "ss-1", title: "1-7 Seated Sofa Luxury Set - 1", img: "https://lh3.googleusercontent.com/d/1_Nw6I8yV2-xJDLQZ-7b0aT0paYPg4eaZ", features: ["Versatile Seating", "Modern Look"], type: "Modern", rating: 4.8, reviews: "2.1K", badge: "POPULAR" },
  { id: "ss-2", title: "1-7 Seated Sofa Luxury Set - 2", img: "https://lh3.googleusercontent.com/d/1k7lj_JHuace46kILomXgzBy92WjgXkJk", features: ["Sleek Design", "Comfortable"], type: "Modern", rating: 4.6, reviews: "1.5K", badge: null },
  { id: "ss-3", title: "1-7 Seated Sofa Luxury Set - 3", img: "https://lh3.googleusercontent.com/d/1oudYQHzJDUu_8BNSloyyzyTGTeNU5Uz_", features: ["Plush Cushions", "Elegant Finish"], type: "Luxury", rating: 4.9, reviews: "890", badge: "PREMIUM" },
  { id: "ss-4", title: "1-7 Seated Sofa Luxury Set - 4", img: "https://lh3.googleusercontent.com/d/1AsXIOIVjNDM2FVIPdgW1dwLZ8Q86VUC4", features: ["Spacious Seating", "Sturdy Frame"], type: "Family", rating: 4.7, reviews: "1.2K", badge: null },
  { id: "ss-5", title: "1-7 Seated Sofa Luxury Set - 5", img: "https://lh3.googleusercontent.com/d/1AsXIOIVjNDM2FVIPdgW1dwLZ8Q86VUC4", features: ["Contemporary Style", "Soft Fabric"], type: "Modern", rating: 4.5, reviews: "980", badge: null },
  { id: "ss-6", title: "1-7 Seated Sofa Luxury Set - 6", img: "https://lh3.googleusercontent.com/d/1MCm8ToA0TFZJxbd-o6hJk4T4LtTBT56G", features: ["Customizable Layout", "Chic"], type: "Modular", rating: 4.8, reviews: "1.4K", badge: "TRENDING" },
  { id: "ss-7", title: "1-7 Seated Sofa Luxury Set - 7", img: "https://lh3.googleusercontent.com/d/1mUKTBy0Tb117lH_MZ61v3atpTLz4OU0o", features: ["Ergonomic Design", "Durable"], type: "Comfort", rating: 4.7, reviews: "650", badge: null },
  { id: "ss-8", title: "1-7 Seated Sofa Luxury Set - 8", img: "https://lh3.googleusercontent.com/d/1ToAZfm2_O_cPhbs2GmpxRf9r-SwMFopI", features: ["Minimalist Vibe", "High Quality"], type: "Essentials", rating: 4.4, reviews: "1.1K", badge: null },
  { id: "ss-9", title: "1-7 Seated Sofa Luxury Set - 9", img: "https://lh3.googleusercontent.com/d/1xonXmRcDfTI3gXDFEkr-WMEzOWqHKaNO", features: ["Sophisticated Finish", "Urban"], type: "Premium", rating: 4.9, reviews: "420", badge: "ELITE" },
  { id: "ss-10", title: "1-7 Seated Sofa Luxury Set - 10", img: "https://lh3.googleusercontent.com/d/15RNl9YqxX4bsj8fndrGMy7XvOSPTxe0f", features: ["Wide Armrest", "Deep Seat"], type: "Lounge", rating: 4.6, reviews: "870", badge: null },
  { id: "ss-11", title: "1-7 Seated Sofa Luxury Set - 11", img: "https://lh3.googleusercontent.com/d/1HIMpIIqdhucPRuugY0cWNBbUBtj1J060", features: ["Clean Lines", "Trendy Colors"], type: "Modern", rating: 4.7, reviews: "310", badge: null },
  { id: "ss-12", title: "1-7 Seated Sofa Luxury Set - 12", img: "https://lh3.googleusercontent.com/d/1vgAODvVcIDsdPEBD2a2Ss9HBi9zpmIZd", features: ["Timeless Appeal", "Luxury"], type: "Classic", rating: 4.8, reviews: "560", badge: null },
  { id: "ss-13", title: "1-7 Seated Sofa Luxury Set - 13", img: "https://lh3.googleusercontent.com/d/1EzXnpOgibbU9nUFY8bWVfskuJzLUXPfm", features: ["Grand Appearance", "Superior Comfort"], type: "Grand", rating: 4.9, reviews: "230", badge: "BEST VALUE" },
];

const maharajaSofaProducts = [
  { id: "ms-1", title: "Maharaja Royal Collection - 1", img: "https://lh3.googleusercontent.com/d/18uuCMdQzbp6eJ3H4ZHbkdSA0_HF3OR6i", features: ["Royal Carvings", "Majestic Look"], type: "Royal", rating: 4.9, reviews: "1.1K", badge: "MAJESTIC" },
  { id: "ms-2", title: "Maharaja Royal Collection - 2", img: "https://lh3.googleusercontent.com/d/1ZQHYCRingFXUqrpdqJRbvWLuDry0kf78", features: ["Grand Statuesque", "Exquisite"], type: "Luxury", rating: 4.8, reviews: "950", badge: "EXCLUSIVE" },
  { id: "ms-3", title: "Maharaja Royal Collection - 3", img: "https://lh3.googleusercontent.com/d/1SN4GZh9VhvD_OPJVHJyc5Ozg7p9H_368", features: ["Gold Foil Finish", "Palatial"], type: "Palace", rating: 4.9, reviews: "780", badge: "GOLD" },
  { id: "ms-5", title: "Maharaja Royal Collection - 5", img: "https://lh3.googleusercontent.com/d/1J-h-Oq8hLMN3eO-nzMKJXJKYHIoSrtsB", features: ["Intricate Woodwork", "Stately"], type: "Heritage", rating: 4.7, reviews: "430", badge: null },
  { id: "ms-6", title: "Maharaja Royal Collection - 6", img: "https://lh3.googleusercontent.com/d/1mEY3kTW4OZUXYx6uNSBds0uqU5psBj3O", features: ["Premium Velvet", "King Size"], type: "Royal", rating: 4.8, reviews: "560", badge: "SIGNATURE" },
  { id: "ms-7", title: "Maharaja Royal Collection - 7", img: "https://lh3.googleusercontent.com/d/17BDX8iAHy-Jxemg8YcpGMYjtQ4DjtN79", features: ["Hand-crafted Masterpiece", "Elite"], type: "Artisan", rating: 4.9, reviews: "320", badge: "ELITE" },
  { id: "ms-8", title: "Maharaja Royal Collection - 8", img: "https://lh3.googleusercontent.com/d/19p8mB5glfttlwBS0STtl2ZrowAaWvhwf", features: ["Imperial Design", "Magnificent"], type: "Imperial", rating: 4.8, reviews: "210", badge: null },
  { id: "ms-9", title: "Maharaja Royal Collection - 9", img: "https://lh3.googleusercontent.com/d/1kJJAYSnUYiOCJ9L4Al59uLDQ0asa0k_9", features: ["Ornate Detailing", "Regal Shades"], type: "Regal", rating: 4.7, reviews: "150", badge: null },
  { id: "ms-10", title: "Maharaja Royal Collection - 10", img: "https://lh3.googleusercontent.com/d/1hWjXwVz6o15ygFo0nMM_UdEM6jl1Dc3s", features: ["Antique Finish", "Traditional"], type: "Traditional", rating: 4.6, reviews: "670", badge: "VINTAGE" },
  { id: "ms-11", title: "Maharaja Royal Collection - 11", img: "https://lh3.googleusercontent.com/d/1JeY1aQRfsw5uX1YgmoL6uVZHUM6hHLO7", features: ["Luxury Upholstery", "Grand Seat"], type: "Luxury", rating: 4.8, reviews: "890", badge: null },
  { id: "ms-12", title: "Maharaja Royal Collection - 12", img: "https://lh3.googleusercontent.com/d/1wsYyAm5JY_FToCsYr9O4VEHh2DIX2WxR", features: ["Bespoke Carving", "One-of-a-kind"], type: "Bespoke", rating: 4.9, reviews: "120", badge: "UNIQUE" },
  { id: "ms-13", title: "Maharaja Royal Collection - 13", img: "https://lh3.googleusercontent.com/d/1eyg6he37EWumG1OPn-F2movojygSOsoW", features: ["Deep Tufted", "Plush Comfort"], type: "Royal", rating: 4.7, reviews: "540", badge: null },
  { id: "ms-14", title: "Maharaja Royal Collection - 14", img: "https://lh3.googleusercontent.com/d/1KPP7NOoa63QIqB_5DjfZ0jpAx5tm5vNC", features: ["Majestic Maroon", "Solid Base"], type: "Royal", rating: 4.8, reviews: "340", badge: null },
  { id: "ms-15", title: "Maharaja Royal Collection - 15", img: "https://lh3.googleusercontent.com/d/1xTcU-4RKhDTbVsRvdH5qiqWAAs_mTsBI", features: ["Elegant Curves", "Sophisticated"], type: "Designer", rating: 4.9, reviews: "280", badge: "MOST LOVED" },
  { id: "ms-16", title: "Maharaja Royal Collection - 16", img: "https://lh3.googleusercontent.com/d/1LvicVv5cnKhclG4Stacdpk_g5zT06Ms0", features: ["Royal Gold Accents", "Opulent"], type: "Opulence", rating: 4.9, reviews: "460", badge: "OPULENT" },
  { id: "ms-17", title: "Maharaja Royal Collection - 17", img: "https://lh3.googleusercontent.com/d/1RtpdJ25TyldXbDA00K1Z5ed4NUu_XzFX", features: ["Heritage Craft", "Timeless"], type: "Heritage", rating: 4.8, reviews: "190", badge: null },
  { id: "ms-18", title: "Maharaja Royal Collection - 18", img: "https://lh3.googleusercontent.com/d/1yRM4LLran66NOYzVPTipnp-Gt3LqFGjE", features: ["Grand Presence", "Sturdy Build"], type: "Royal", rating: 4.7, reviews: "620", badge: null },
  { id: "ms-19", title: "Maharaja Royal Collection - 19", img: "https://lh3.googleusercontent.com/d/1zq-x7hlUSQ9WVo7vVx2ac_-rGx4siIP2", features: ["Intricate Patterns", "Superior quality"], type: "Luxury", rating: 4.8, reviews: "310", badge: null },
  { id: "ms-20", title: "Maharaja Royal Collection - 20", img: "https://lh3.googleusercontent.com/d/1PlSJQmIcpt7r0X0cMgtXJ6uCqDjBQ469", features: ["Elite Status", "Grand Appearance"], type: "Elite", rating: 4.9, reviews: "250", badge: "ELITE STATUS" },
];

const sofaWithTeaTableProducts = [
  { id: "tt-1", title: "Modern Sofa with Modular Tea Table - 1", img: "https://lh3.googleusercontent.com/d/16wJs8lzH9OubmLoFJSFBx-WNrble6Eqe", features: ["Integrated Table", "Sleek Design"], type: "Modern", rating: 4.8, reviews: "1.2K", badge: "POPULAR" },
  { id: "tt-2", title: "Modern Sofa with Modular Tea Table - 2", img: "https://lh3.googleusercontent.com/d/1ZDPSuplpVaETYshHd7kCR98WCEZktskG", features: ["Spacious Wood Surface", "Luxury"], type: "Premium", rating: 4.9, reviews: "850", badge: "PREMIUM" },
  { id: "tt-3", title: "Modern Sofa with Modular Tea Table - 3", img: "https://lh3.googleusercontent.com/d/1-RBvwWJAPwgX0Y5YHLE3v0wRLze2Bx21", features: ["Compact and Functional", "Chic"], type: "Minimalist", rating: 4.7, reviews: "640", badge: null },
];

const sofaWithLoungerProducts = [
  { id: "sl-1", title: "L-Series Lounger Sofa Luxury - 1", img: "https://lh3.googleusercontent.com/d/1CIjFaVY1XA7EmP3P94YeeUiiXPOT05nB", features: ["Extended Lounger", "Reclining Comfort"], type: "Lounge", rating: 4.9, reviews: "2.1K", badge: "BEST SELLER" },
  { id: "sl-2", title: "L-Series Lounger Sofa Luxury - 2", img: "https://lh3.googleusercontent.com/d/12sJkpU2EvUpR0DP1EtTt_zNBdNQOa8OQ", features: ["Plush Foam", "Double Lounger"], type: "Family", rating: 4.8, reviews: "1.5K", badge: "NEW" },
];

const sofaWithStorageBoxProducts = [
  { id: "sb-1", title: "Storage Box Series Feature Sofa - 1", img: "https://lh3.googleusercontent.com/d/1_DO5OrBWCq1kvU9LH3Fon2HupPUdU4nv", features: ["Hidden Storage", "Under-seat Box"], type: "Utility", rating: 4.8, reviews: "1.1K", badge: "UTILITY" },
  { id: "sb-2", title: "Storage Box Series Feature Sofa - 2", img: "https://lh3.googleusercontent.com/d/1fQwjqrfOS903HyFKqlFRrOQsvgbsF-qu", features: ["Lift-up Mechanism", "Durable"], type: "Functional", rating: 4.7, reviews: "920", badge: null },
  { id: "sb-3", title: "Storage Box Series Feature Sofa - 3", img: "https://lh3.googleusercontent.com/d/1cJB_1IsKiM_4Dxhb69-XHwCRgRw83gFf", features: ["Spacious Chest", "Soft Closing"], type: "Premium", rating: 4.9, reviews: "540", badge: "TOP RATED" },
  { id: "sb-4", title: "Storage Box Series Feature Sofa - 4", img: "https://lh3.googleusercontent.com/d/1bM17hVQBQ0VU9b8xSWkpzlldJwBCte6O", features: ["Sleek Storage Hideaway", "Modern"], type: "Modern", rating: 4.6, reviews: "780", badge: null },
  { id: "sb-5", title: "Storage Box Series Feature Sofa - 5", img: "https://lh3.googleusercontent.com/d/1mcoSlFBFLA0uZkVKFvJMPpAuBVkojgQb", features: ["Side Drawer Storage", "Versatile"], type: "Designer", rating: 4.8, reviews: "430", badge: null },
  { id: "sb-6", title: "Storage Box Series Feature Sofa - 6", img: "https://lh3.googleusercontent.com/d/1EdEQj-JpbuidLM9dMWzYzathLON8Drbl", features: ["Multi-compartment", "Strong Frame"], type: "Heavy Duty", rating: 4.7, reviews: "210", badge: null },
  { id: "sb-7", title: "Storage Box Series Feature Sofa - 7", img: "https://lh3.googleusercontent.com/d/1VF50Gk6tWoDIa1IdXXLtYjA9s-r53LP5", features: ["Elegant Storage Solution", "Luxury"], type: "Luxury", rating: 4.9, reviews: "150", badge: "ELITE" },
];

const modernSofaProducts = [
  { id: "mod-1", title: "Modern Luxury Sofa Series - 1", img: "https://lh3.googleusercontent.com/d/1O_D6l4zTlU3Pin9L7ktcq_8Q4whgnT2A", features: ["Contemporary Design", "Premium Finish"], type: "Modern", rating: 4.8, reviews: "1.5K", badge: "HOT" },
  { id: "mod-2", title: "Modern Luxury Sofa Series - 2", img: "https://lh3.googleusercontent.com/d/1YfbzjcFfaU0Dg4lr5j3QKFJ7hjxmzlv8", features: ["Deep Seating", "Soft Texture"], type: "Modern", rating: 4.7, reviews: "980", badge: null },
  { id: "mod-3", title: "Modern Luxury Sofa Series - 3", img: "https://lh3.googleusercontent.com/d/1TE0CxYgmksjpSmE37dDrKb_93zhpF5T9", features: ["Minimalist Aesthetic", "Sturdy"], type: "Minimalist", rating: 4.9, reviews: "2.1K", badge: "BEST SELLER" },
  { id: "mod-4", title: "Modern Luxury Sofa Series - 4", img: "https://lh3.googleusercontent.com/d/1XXJbgVR07bh6DGI3JFmYSd-cGX8WL1k4", features: ["Urban Look", "Comfort Plus"], type: "Modern", rating: 4.6, reviews: "1.2K", badge: null },
  { id: "mod-5", title: "Modern Luxury Sofa Series - 5", img: "https://lh3.googleusercontent.com/d/1yPsboIfAqbBGkgz8m-ORWlRlADv6fhIO", features: ["Chic Silhouette", "Designer Fabric"], type: "Chic", rating: 4.8, reviews: "750", badge: "DESIGNER" },
  { id: "mod-6", title: "Modern Luxury Sofa Series - 6", img: "https://lh3.googleusercontent.com/d/1j1Q-WZmB0p7lLIhsmK4F2Lo66uDJbyUn", features: ["Bold Colors", "Ergonomic"], type: "Vibrant", rating: 4.7, reviews: "430", badge: null },
  { id: "mod-7", title: "Modern Luxury Sofa Series - 7", img: "https://lh3.googleusercontent.com/d/1LubcVJJrhojuTKkSCHkZvDZ44fiSROzY", features: ["Sleek Metal Legs", "High Grade"], type: "Industrial", rating: 4.9, reviews: "320", badge: "PREMIUM" },
  { id: "mod-8", title: "Modern Luxury Sofa Series - 8", img: "https://lh3.googleusercontent.com/d/1I2-jFVT4c_cJooaz9bqEKcIOmhPq9Clv", features: ["Plush Cushioning", "Timeless"], type: "Modern", rating: 4.8, reviews: "1.1K", badge: null },
  { id: "mod-9", title: "Modern Luxury Sofa Series - 9", img: "https://lh3.googleusercontent.com/d/1hCrgJSiUBv1QM06Qxv8tc3O5SGxvHwIH", features: ["Velvet Finish", "Luxury"], type: "Luxury", rating: 4.9, reviews: "670", badge: "LUXURY" },
  { id: "mod-10", title: "Modern Luxury Sofa Series - 10", img: "https://lh3.googleusercontent.com/d/11h77qOUb_oAXwDy25LyrTq2CXEzBzvw1", features: ["Modular Design", "Versatile"], type: "Modular", rating: 4.6, reviews: "890", badge: null },
  { id: "mod-11", title: "Modern Luxury Sofa Series - 11", img: "https://lh3.googleusercontent.com/d/1xnS_RLL75MtZtIAJgZwprzbeDXV2gXUR", features: ["Soft Earth Tones", "Relaxing"], type: "Comfort", rating: 4.7, reviews: "540", badge: "NEW" },
  { id: "mod-12", title: "Modern Luxury Sofa Series - 12", img: "https://lh3.googleusercontent.com/d/1fG0OiduXqyYe6eV_yP3kGfcltXDx7mJQ", features: ["Eco-friendly Material", "Durable"], type: "Eco", rating: 4.8, reviews: "410", badge: null },
  { id: "mod-13", title: "Modern Luxury Sofa Series - 13", img: "https://lh3.googleusercontent.com/d/1O_D6l4zTlU3Pin9L7ktcq_8Q4whgnT2A", features: ["Grand Scale", "Supportive"], type: "Grand", rating: 4.9, reviews: "250", badge: "ELITE" },
  { id: "mod-14", title: "Modern Luxury Sofa Series - 14", img: "https://lh3.googleusercontent.com/d/1XqO4aFjswMIf8zSbDbjtvwKZFluIzObW", features: ["Minimalist Grey", "Sleek"], type: "Minimalist", rating: 4.5, reviews: "730", badge: null },
  { id: "mod-15", title: "Modern Luxury Sofa Series - 15", img: "https://lh3.googleusercontent.com/d/10jhTro-hDcLGuRjKkrBIlp5-AnUw_G2S", features: ["Custom Finish", "Artisan Made"], type: "Besopke", rating: 4.7, reviews: "180", badge: "ARTISAN" },
];

const simpleSofaProducts = [
  { id: "simple-1", title: "Simple Comfort Sofa Set - 1", img: "https://lh3.googleusercontent.com/d/1PZSb2SrMXDHbemKbBtJgs5qg03xl-RyJ", features: ["Functional Design", "Budget Friendly"], type: "Value", rating: 4.5, reviews: "850", badge: "BUDGET" },
  { id: "simple-2", title: "Simple Comfort Sofa Set - 2", img: "https://lh3.googleusercontent.com/d/1zWbFWBfl0CB72CIfIKMEgSCSv7z66le9", features: ["Clean Look", "Compact"], type: "Essentials", rating: 4.6, reviews: "620", badge: null },
  { id: "simple-3", title: "Simple Comfort Sofa Set - 3", img: "https://lh3.googleusercontent.com/d/1NqMHUfme61xDXPJ1lMb2QHJPJwgoBVKT", features: ["Daily Comfort", "Sturdy"], type: "Standard", rating: 4.4, reviews: "1.2K", badge: "DAILY USE" },
  { id: "simple-4", title: "Simple Comfort Sofa Set - 4", img: "https://lh3.googleusercontent.com/d/1RLc8RpHxkAzc51Bp6owq640u4fusf4xt", features: ["Reliable Build", "Soft Fabric"], type: "Classic", rating: 4.5, reviews: "430", badge: null },
];

const sofaCumBedProducts = [
  { id: "scb-1", title: "Luxury Sofa Cum Bed System - 1", img: "https://lh3.googleusercontent.com/d/14TyYMtEHaEn_359dJ_VJ1S6MIoDSTLt1", features: ["Dual Purpose", "Easy Fold"], type: "Hybrid", rating: 4.8, reviews: "2.5K", badge: "BEST SELLER" },
  { id: "scb-2", title: "Luxury Sofa Cum Bed System - 2", img: "https://lh3.googleusercontent.com/d/1iqViWWnUwTZYQfbtxAh9g9SWRDRHhbl9", features: ["Memory Foam", "Space Saver"], type: "Premium", rating: 4.9, reviews: "1.8K", badge: "MAX COMFORT" },
  { id: "scb-3", title: "Luxury Sofa Cum Bed System - 3", img: "https://lh3.googleusercontent.com/d/10BxX0VRbBd9RmBAAXwHXYNk3F7S2w7QV", features: ["Heavy Duty Frame", "Reliable"], type: "Durable", rating: 4.7, reviews: "940", badge: null },
  { id: "scb-4", title: "Luxury Sofa Cum Bed System - 4", img: "https://lh3.googleusercontent.com/d/1YYqxP8fjFdVW5rApNqD8N_VBqLZhWnAc", features: ["Seamless Transition", "Modern"], type: "Modern", rating: 4.6, reviews: "1.1K", badge: "NEW" },
  { id: "scb-5", title: "Luxury Sofa Cum Bed System - 5", img: "https://lh3.googleusercontent.com/d/1D-xAoW3BfT06LcRuaFbpLLbi4KsdMzdq", features: ["Compact and Comfy", "Stylish"], type: "Essentials", rating: 4.5, reviews: "670", badge: null },
  { id: "scb-6", title: "Luxury Sofa Cum Bed System - 6", img: "https://lh3.googleusercontent.com/d/1SMf8fF5wQR-EApOEcpr-7wPFyXXtN109", features: ["Velvet Touch", "Premium Finish"], type: "Luxury", rating: 4.9, reviews: "520", badge: "LUXURY" },
  { id: "scb-7", title: "Luxury Sofa Cum Bed System - 7", img: "https://lh3.googleusercontent.com/d/1Bw9DcVJ1-u94Z72sXZlub160cAshABrw", features: ["Storage Included", "Versatile"], type: "Utility", rating: 4.8, reviews: "890", badge: null },
  { id: "scb-8", title: "Luxury Sofa Cum Bed System - 8", img: "https://lh3.googleusercontent.com/d/1Xaaw36oR6sjZI2cX9O60o9iAQeA_scrj", features: ["Ergonomic Support", "Chic"], type: "Designer", rating: 4.7, reviews: "340", badge: null },
  { id: "scb-9", title: "Luxury Sofa Cum Bed System - 9", img: "https://lh3.googleusercontent.com/d/1FTyGVZEuTN4rYe6tzIbi7YpyXj2Av8Z8", features: ["King Size Bed", "Spacious"], type: "King", rating: 4.9, reviews: "150", badge: "GRAND" },
];

const lTypeSofaProducts = [
  { id: "lts-1", title: "Premium L-Type Sectional Sofa - 1", img: "https://lh3.googleusercontent.com/d/1xra0LvHQX4VyRgRD1CCY7fxgbrKHDkEG", features: ["Spacious Seating", "Modern Design"], type: "Sectional", rating: 4.8, reviews: "1.2K", badge: "POPULAR" },
  { id: "lts-2", title: "Premium L-Type Sectional Sofa - 2", img: "https://lh3.googleusercontent.com/d/1V5dR_BQzBX188dyVWR4IiLGnhUcSRdcN", features: ["Corner Fit", "Plush Cushions"], type: "Luxury", rating: 4.9, reviews: "850", badge: "ELITE" },
  { id: "lts-3", title: "Premium L-Type Sectional Sofa - 3", img: "https://lh3.googleusercontent.com/d/1CDw3dsxbyLtvdlMo4mWyT5XtcUVcz9m2", features: ["Contemporary Style", "Durable Fabric"], type: "Modern", rating: 4.7, reviews: "640", badge: null },
  { id: "lts-4", title: "Premium L-Type Sectional Sofa - 4", img: "https://lh3.googleusercontent.com/d/1Z2vd0p1IpSPkFfpBpOipS8MCrqAgw1Jf", features: ["Deep Seats", "Minimalist"], type: "Modern", rating: 4.6, reviews: "1.1K", badge: null },
  { id: "lts-5", title: "Premium L-Type Sectional Sofa - 5", img: "https://lh3.googleusercontent.com/d/1ZleI0MlUT9lyj_qUIlrHoq2BJjZcB45j", features: ["Soft Comfort", "L-Shaped Bliss"], type: "Comfort", rating: 4.8, reviews: "730", badge: "TOP RATED" },
  { id: "lts-6", title: "Premium L-Type Sectional Sofa - 6", img: "https://lh3.googleusercontent.com/d/1MCm8ToA0TFZJxbd-o6hJk4T4LtTBT56G", features: ["Modular Elements", "Chic"], type: "Modular", rating: 4.7, reviews: "450", badge: null },
  { id: "lts-7", title: "Premium L-Type Sectional Sofa - 7", img: "https://lh3.googleusercontent.com/d/1OHD0NQykk0maAxq9ukxtGV_ftKvNj7RO", features: ["Ergonomic Back", "High Quality"], type: "Sectional", rating: 4.9, reviews: "320", badge: "PREMIUM" },
  { id: "lts-8", title: "Premium L-Type Sectional Sofa - 8", img: "https://lh3.googleusercontent.com/d/1NeRZKNFWRa-YNN-xfZkj7UYdZAcFNMC0", features: ["Urban Look", "Grand Scale"], type: "Luxury", rating: 4.8, reviews: "560", badge: null },
  { id: "lts-9", title: "Premium L-Type Sectional Sofa - 9", img: "https://lh3.googleusercontent.com/d/1PamPDp-2W6vLU4KOhgWyzcW6GTGtX7U8", features: ["Velvet Finish", "Regal Shades"], type: "Regal", rating: 4.7, reviews: "210", badge: null },
  { id: "lts-10", title: "Premium L-Type Sectional Sofa - 10", img: "https://lh3.googleusercontent.com/d/1wOQK6QvJMhj4NCr40ugzJIzvAlQXOFMJ", features: ["Sleek Legs", "Sophisticated"], type: "Modern", rating: 4.9, reviews: "150", badge: "EXCLUSIVE" },
  { id: "lts-11", title: "Premium L-Type Sectional Sofa - 11", img: "https://lh3.googleusercontent.com/d/1qVyt_yDckYqUe3LmKnsVUfEyWDCxZzUZ", features: ["Deep Tufted", "Plush"], type: "Luxury", rating: 4.8, reviews: "420", badge: null },
  { id: "lts-12", title: "Premium L-Type Sectional Sofa - 12", img: "https://lh3.googleusercontent.com/d/1T2ovW00x_SSx_rDPhW76VW8iD_avQTaZ", features: ["Solid Frame", "Family Size"], type: "Family", rating: 4.7, reviews: "890", badge: null },
  { id: "lts-13", title: "Premium L-Type Sectional Sofa - 13", img: "https://lh3.googleusercontent.com/d/1ryAiuWV-fuOecsntInEc4RkdURFB_OeV", features: ["Compact L-Shape", "Space Saver"], type: "Essentials", rating: 4.6, reviews: "670", badge: null },
  { id: "lts-14", title: "Premium L-Type Sectional Sofa - 14", img: "https://lh3.googleusercontent.com/d/1WEfuSu3hohVg3OEkUoCnPOW4thiyvzhT", features: ["Designer Tufting", "Elite"], type: "Designer", rating: 4.9, reviews: "230", badge: "DESIGNER" },
  { id: "lts-15", title: "Premium L-Type Sectional Sofa - 15", img: "https://lh3.googleusercontent.com/d/1SSVqizLZmg0wWXEqjJwzO3z1PYyUZGs8", features: ["Grand Presence", "Magnificent"], type: "Grand", rating: 4.8, reviews: "380", badge: "MUST HAVE" },
];

const curtainSubCategories = [
  { id: 1101, title: "Curtains", img: "https://lh3.googleusercontent.com/d/13dO6JfkOvDaTxiiFIKGX3Xdok10oTzZG" },
];

const categoryToSubCategories: Record<string, any[]> = {
  "Mattresses": mattressSubCategories,
  "Beds": bedsSubCategories,
  "Bed Back Cushion": bedBackCushionSubCategories,
  "Sofas": sofaSubCategories,
  "Feature sofa": featureSofaSubCategories,
  "Furniture": furnitureSubCategories,
  "Curtains": curtainSubCategories,
};

const allMattressProducts = [
  {
    id: "m-new-1",
    title: "ShapeSense Orthopedic Pro | Premium Comfort",
    img: "https://lh3.googleusercontent.com/d/1XcniI1btjaUAEyIFzaWT7OH3ODL9pkvN",
    features: ["Advanced Spine Alignment", "Breathe-Easy Fabric", "10 Years Warranty"],
    sizes: ["King", "Queen", "Single"],
    type: "Memory Foam",
    rating: 4.8,
    reviews: "1.2K",
    isBestSeller: true,
    badge: "BEST SELLER"
  },
  {
    id: "m-new-2",
    title: "CloudSoft Luxury Latex Hybrid",
    img: "https://lh3.googleusercontent.com/d/1d9I_nxjU9u8VBFNIa8_213Ekmknbz4j7",
    features: ["Natural Latex Layer", "Motion Isolation", "Cooling Tech"],
    sizes: ["King", "Queen"],
    type: "Latex",
    rating: 4.9,
    reviews: "850",
    isBestSeller: false,
    badge: "PREMIUM"
  },
  {
    id: "m-new-3",
    title: "ErgoRest Pocket Spring Elite",
    img: "https://lh3.googleusercontent.com/d/1q5dTssJRwfxn8CKO_Y8Gcu6siM1gWSNJ",
    features: ["Zero Partner Disturbance", "Reinforced Edges", "Medium Firm"],
    sizes: ["Queen", "King", "Single"],
    type: "Pocket Spring",
    rating: 4.7,
    reviews: "2.1K",
    isBestSeller: true,
    badge: null
  },
  {
    id: "m-new-4",
    title: "Dual-Side Reversible Comfort",
    img: "https://lh3.googleusercontent.com/d/1jY3KGrYxwSsm_IvPPTkzYgNtVM-EKGMA",
    features: ["Hard & Soft Sides", "All-Season Use", "Lightweight"],
    sizes: ["Diwan", "Single", "Queen"],
    type: "Dual Comfort",
    rating: 4.5,
    reviews: "3.4K",
    isBestSeller: false,
    badge: "VALUE"
  },
  {
    id: "m-new-5",
    title: "SpineCare Orthopedic Essential",
    img: "https://lh3.googleusercontent.com/d/1CJDvOKR_-84nF8-AW-voy6HVFiojanY0",
    features: ["Firm Back Support", "High Density Foam", "Durable"],
    sizes: ["Single", "Queen", "King"],
    type: "Essentials",
    rating: 4.6,
    reviews: "1.8K",
    isBestSeller: false,
    badge: null
  },
  {
    id: "m-new-6",
    title: "Majestic Hotel Grade Mattress",
    img: "https://lh3.googleusercontent.com/d/1ETJ6214ZGCIimxhM7br6xTfwfAtbgWB2",
    features: ["Ultra Plush", "Double Layer Padding", "Luxury Finish"],
    sizes: ["King", "Queen"],
    type: "Plus Series",
    rating: 4.9,
    reviews: "420",
    isBestSeller: false,
    badge: "HOTEL SERIES"
  },
  {
    id: "m-new-7",
    title: "Infiniti Series Memory Master",
    img: "https://lh3.googleusercontent.com/d/1oPln0dlnMTFohZxMzblDZFdQ4lBJa5dw",
    features: ["NASA Grade Memory Foam", "Deep Sleep Tech", "20 Years Warranty"],
    sizes: ["King", "Queen", "Custom"],
    type: "Memory Foam",
    rating: 4.9,
    reviews: "980",
    isBestSeller: true,
    badge: "INFINITI"
  },
  {
    id: "m-new-8",
    title: "CoolGel Ortho Hybrid",
    img: "https://lh3.googleusercontent.com/d/1qTIzlnfC-vwKoVaKjluA0jKTOpbZVCL3",
    features: ["Gel-Infused Foam", "Temperature Control", "Sturdy Base"],
    sizes: ["Queen", "King"],
    type: "Grid",
    rating: 4.7,
    reviews: "1.1K",
    isBestSeller: false,
    badge: "COOLING"
  },
  {
    id: "m-new-9",
    title: "ZenFlex Natural Latex",
    img: "https://lh3.googleusercontent.com/d/1r5GEVCn6NpCP_6C945csjgCSfYo-SM2y",
    features: ["100% Organic Latex", "Hypoallergenic", "Eco-Friendly"],
    sizes: ["King", "Queen"],
    type: "Latex",
    rating: 4.8,
    reviews: "560",
    isBestSeller: false,
    badge: "ECO"
  },
  {
    id: "m-new-10",
    title: "ActiveSupport Pocket Spring",
    img: "https://lh3.googleusercontent.com/d/13ubkTljrjUR-v8v2BXYjt_Q5snxWtG6A",
    features: ["Responsive Springs", "Edge-to-Edge Support", "Medium Firm"],
    sizes: ["Single", "Queen", "King"],
    type: "Pocket Spring",
    rating: 4.6,
    reviews: "2.5K",
    isBestSeller: true,
    badge: null
  },
  {
    id: "m-new-11",
    title: "ShapeSense Ortho Plus",
    img: "https://lh3.googleusercontent.com/d/1PgRC3O7nOsvwvJFCM3PHYy0ckqtUy3q1",
    features: ["Enhanced Support", "Spine Correction", "12 Years Warranty"],
    sizes: ["Queen", "King", "Diwan"],
    type: "Plus Series",
    rating: 4.7,
    reviews: "1.4K",
    isBestSeller: false,
    badge: "PLUS"
  },
  {
    id: "m-new-12",
    title: "SleepWell Essential Foam",
    img: "https://lh3.googleusercontent.com/d/1fhOFQdFAoWHjksKx0_vDy9s2yxg_N7wF",
    features: ["Value for money", "Comfortable filling", "Easy maintenance"],
    sizes: ["Single", "Diwan"],
    type: "Essentials",
    rating: 4.4,
    reviews: "3.2K",
    isBestSeller: false,
    badge: "BEST VALUE"
  },
  {
    id: "m-new-13",
    title: "Royal Touch Luxury Hybrid",
    img: "https://lh3.googleusercontent.com/d/1JnrZe6YCcbIRy245Jt20YwI6chnBkSIF",
    features: ["Hand-tufted finish", "Premium materials", "Elite Comfort"],
    sizes: ["King", "Queen"],
    type: "Plus Series",
    rating: 4.9,
    reviews: "280",
    isBestSeller: true,
    badge: "SIGNATURE"
  }
];

const lShapeSofaProducts = [
  {
    id: "ls-1",
    title: "Napper L Shape Sofa Set (3 Seater + Right Aligned Chaise + Ottoman)",
    img: "https://lh3.googleusercontent.com/d/1Ldmjs5pyvI8UlDOb70cbl-s69x5XIZeO",
    gallery: [
      "https://lh3.googleusercontent.com/d/1Ldmjs5pyvI8UlDOb70cbl-s69x5XIZeO",
      "https://lh3.googleusercontent.com/d/1mn4nmQvyWx5QV2CUcY1_X3PryIY6aJCp",
      "https://lh3.googleusercontent.com/d/1dRR0rVIVj6TP-pbWcAno-RC6nDfubZDc"
    ],
    rating: 4.4,
    reviews: "2.8K",
    price: "59,169",
    mrp: "91,029",
    discount: "35% off",
    colors: [
      { name: "Smoke Grey", hex: "#7a7a7a" },
      { name: "Thundercloud", hex: "#4a4e69" },
      { name: "Malibu Green", hex: "#006d77" }
    ],
    badge: null
  },
  {
    id: "ls-2",
    title: "Dreamer Plus L Shape Sofa Set (3 Seater + Right Aligned Chaise)",
    img: "https://lh3.googleusercontent.com/d/1mn4nmQvyWx5QV2CUcY1_X3PryIY6aJCp",
    gallery: [
      "https://lh3.googleusercontent.com/d/1mn4nmQvyWx5QV2CUcY1_X3PryIY6aJCp",
      "https://lh3.googleusercontent.com/d/1Ldmjs5pyvI8UlDOb70cbl-s69x5XIZeO",
      "https://lh3.googleusercontent.com/d/1sjqlelYhdJ253OWJYvYOR9TWWtmxqybo"
    ],
    rating: 4.6,
    reviews: "1.2K",
    price: "48,384",
    mrp: "79,749",
    discount: "39% off",
    colors: [
      { name: "Mocha Brown", hex: "#5d4037" },
      { name: "Green", hex: "#2e7d32" },
      { name: "Yellow", hex: "#f9a825" },
      { name: "Rose Brown", hex: "#8d6e63" }
    ],
    badge: "PLUS SERIES"
  },
  {
    id: "ls-3",
    title: "Napper L Shape Sofa Set (3 Seater + Right Aligned Chaise with Ottoman)",
    img: "https://lh3.googleusercontent.com/d/1Ldmjs5pyvI8UlDOb70cbl-s69x5XIZeO",
    gallery: [
      "https://lh3.googleusercontent.com/d/1Ldmjs5pyvI8UlDOb70cbl-s69x5XIZeO",
      "https://lh3.googleusercontent.com/d/1dRR0rVIVj6TP-pbWcAno-RC6nDfubZDc"
    ],
    rating: 4.4,
    reviews: "2.8K",
    price: "53,267",
    mrp: "81,949",
    discount: "35% off",
    colors: [
      { name: "Omega Pearl", hex: "#f5ebe0" },
      { name: "Smoke Grey", hex: "#7a7a7a" },
      { name: "Thundercloud", hex: "#4a4e69" }
    ],
    badge: null
  },
  {
    id: "ls-4",
    title: "Azuron L Shape Sofa Set (3 Seater + Left Aligned Chaise)",
    img: "https://lh3.googleusercontent.com/d/1mn4nmQvyWx5QV2CUcY1_X3PryIY6aJCp",
    gallery: [
      "https://lh3.googleusercontent.com/d/1mn4nmQvyWx5QV2CUcY1_X3PryIY6aJCp",
      "https://lh3.googleusercontent.com/d/1Ldmjs5pyvI8UlDOb70cbl-s69x5XIZeO"
    ],
    rating: 4.7,
    reviews: "540",
    price: "80,999",
    mrp: "1,24,614",
    discount: "35% off",
    colors: [
      { name: "Brown & Cappuccino", hex: "#6f4e37" },
      { name: "Beige & Cappuccino", hex: "#d2b48c" }
    ],
    badge: null
  }
];

const mattressSizes = ["All", "King", "Queen", "Diwan", "Single", "Custom"];
const mattressTypes = ["All", "Memory Foam", "Latex", "Grid", "Dual Comfort", "Plus Series", "Pocket Spring", "Essentials"];

const bedBackCushionProducts = [
  {
    id: "bc-1",
    title: "Classic Wedge Bed Back Cushion | Orthopedic Support",
    img: "https://lh3.googleusercontent.com/d/1xwujCENuYX3OCTE6TufQNzch-7fUe0-p",
    features: ["Strong Back Support", "Wedge Shape", "Washable Cover"],
    sizes: ["Standard", "Large"],
    type: "Orthopedic",
    rating: 4.8,
    reviews: "1.5K",
    isBestSeller: true,
    colors: [
      { name: "Navy Blue", hex: "#000080" },
      { name: "Charcoal", hex: "#36454f" }
    ],
    badge: "TOP RATED"
  },
  {
    id: "bc-2",
    title: "Shapesense Orthopedic Wedge Support",
    img: "https://lh3.googleusercontent.com/d/1AbfXKYNYXDgcuIKhEucUeRSngw3j3PnU",
    features: ["Full Back Support", "Armrest Design", "Pockets for essentials"],
    sizes: ["One Size"],
    type: "Orthopedic",
    rating: 4.6,
    reviews: "890",
    isBestSeller: false,
    colors: [
      { name: "Grey", hex: "#808080" },
      { name: "Blue", hex: "#0000ff" }
    ],
    badge: null
  },
  {
    id: "bc-3",
    title: "Velvet Headrest & Back Support Cushion",
    img: "https://lh3.googleusercontent.com/d/1I7rZn0nGw86USIMzdPYV9AH3uB960MIh",
    features: ["Premium Velvet", "Head Support", "Luxury Finish"],
    sizes: ["Standard"],
    type: "Luxury",
    rating: 4.9,
    reviews: "320",
    isBestSeller: true,
    colors: [
      { name: "Maroon", hex: "#800000" },
      { name: "Emerald", hex: "#046307" }
    ],
    badge: "PREMIUM"
  },
  {
    id: "bc-4",
    title: "Reading Master Comfort Pillow",
    img: "https://lh3.googleusercontent.com/d/1Fa8cumt4sC8DkhTTsMAQYbH_MyQGBNRu",
    features: ["Ergonomic Design", "Perfect for Reading", "Soft Finish"],
    sizes: ["King", "Queen"],
    type: "Reading",
    rating: 4.7,
    reviews: "540",
    isBestSeller: false,
    colors: [
      { name: "Blue", hex: "#0000ff" }
    ],
    badge: "BEST FOR READING"
  },
  {
    id: "bc-5",
    title: "ErgoSupport Lumbar Bed Backrest",
    img: "https://lh3.googleusercontent.com/d/1uGMYUYdQ4skfl8RM-dPT2t8-HHL1zBGC",
    features: ["Corrects Posture", "Breathable Mesh", "Portable"],
    sizes: ["Standard"],
    type: "Lumbar",
    rating: 4.5,
    reviews: "450",
    isBestSeller: false,
    colors: [{ name: "Black", hex: "#000000" }],
    badge: "NEW"
  },
  {
    id: "bc-6",
    title: "Luxury Lounger Back Support",
    img: "https://lh3.googleusercontent.com/d/1SrpURxj04iQ_8oj0w6A0IlhpYbZbfLaM",
    features: ["Plush Comfort", "Sturdy Support", "Elegant Design"],
    sizes: ["Large"],
    type: "Luxury",
    rating: 4.8,
    reviews: "210",
    isBestSeller: true,
    colors: [{ name: "Grey", hex: "#808080" }],
    badge: "LUXURY"
  },
  {
    id: "bc-7",
    title: "Backrest Pro Ortho Cushion",
    img: "https://lh3.googleusercontent.com/d/1kw8vV_Rtot4nYPoNITsblUOOx4qUK3FB",
    features: ["Clinical Support", "Wedge Angle", "Durable"],
    sizes: ["Standard", "Large"],
    type: "Orthopedic",
    rating: 4.6,
    reviews: "1.1K",
    isBestSeller: false,
    colors: [{ name: "Navy", hex: "#000080" }],
    badge: null
  },
  {
    id: "bc-8",
    title: "Comfort Plus Multi-purpose Wedge",
    img: "https://lh3.googleusercontent.com/d/1WX3fvSxEdnJHuMk2guUVKXdwj5sKOoFz",
    features: ["Versatile use", "Soft fabric", "Lightweight"],
    sizes: ["One Size"],
    type: "Essentials",
    rating: 4.4,
    reviews: "950",
    isBestSeller: false,
    colors: [{ name: "Teal", hex: "#008080" }],
    badge: "VALUE"
  },
  {
    id: "bc-9",
    title: "Posture Correct Wedge Cushion",
    img: "https://lh3.googleusercontent.com/d/1dg0MLA8MpuHPk6HRTNmJL9_SfE_g75y9",
    features: ["Spine Alignment", "Firm Support", "Pro Quality"],
    sizes: ["Standard"],
    type: "Orthopedic",
    rating: 4.7,
    reviews: "670",
    isBestSeller: true,
    colors: [{ name: "Charcoal", hex: "#333333" }],
    badge: "EXPERT CHOICE"
  },
  {
    id: "bc-10",
    title: "SoftTouch Deluxe Backrest",
    img: "https://lh3.googleusercontent.com/d/1aDbirSY2xfCdOjFFI60f5HwnhOxdg8NA",
    features: ["Super Soft", "Daily Use", "Washable"],
    sizes: ["Standard"],
    type: "Essentials",
    rating: 4.3,
    reviews: "820",
    isBestSeller: false,
    colors: [{ name: "Pink", hex: "#ffc0cb" }],
    badge: null
  },
  {
    id: "bc-12",
    title: "ZenSupport Meditation & Bed Back",
    img: "https://lh3.googleusercontent.com/d/1FN-5uH2H8jfPGnFqQFdokygvpZ6WyI29",
    features: ["Zen Design", "Firm Support", "Natural Fabric"],
    sizes: ["Medium"],
    type: "Zen",
    rating: 4.8,
    reviews: "430",
    isBestSeller: false,
    colors: [{ name: "Cream", hex: "#f5f5dc" }],
    badge: "ZEN"
  },
  {
    id: "bc-13",
    title: "Cloud Bed Backrest Pillow",
    img: "https://lh3.googleusercontent.com/d/1X6nPh0o5y9Y0TRnPJWcCnVBsN2HUUDTd",
    features: ["Cloud-like feel", "Bouncy Support", "Feather touch"],
    sizes: ["Queen"],
    type: "Soft",
    rating: 4.6,
    reviews: "1.3K",
    isBestSeller: true,
    colors: [{ name: "White", hex: "#ffffff" }],
    badge: "SMOOTH"
  },
  {
    id: "bc-14",
    title: "Elite Cushion Master series",
    img: "https://lh3.googleusercontent.com/d/1ioWuD6Z1LZRi_sz1E8MGro35uyY2-bFv",
    features: ["High Density Foam", "Ergo Shape", "Durable Cover"],
    sizes: ["Standard"],
    type: "Elite",
    rating: 4.7,
    reviews: "560",
    isBestSeller: false,
    colors: [{ name: "Brown", hex: "#a52a2a" }],
    badge: "ELITE"
  },
  {
    id: "bc-15",
    title: "PureComfort Essentials Wedge",
    img: "https://lh3.googleusercontent.com/d/10ZbZqt5-GqRU444niymxZs8P7uhwwT7k",
    features: ["Breathable", "Simple Design", "Effective"],
    sizes: ["Standard"],
    type: "Essentials",
    rating: 4.4,
    reviews: "780",
    isBestSeller: false,
    colors: [{ name: "Blue", hex: "#add8e6" }],
    badge: null
  },
  {
    id: "bc-16",
    title: "Relaxer Wedge Support Pillow",
    img: "https://lh3.googleusercontent.com/d/1UpCK-Ef3xE0rNlbSlVqWeine0Q2H7h_5",
    features: ["Relaxation optimized", "Tilted angle", "Soft foam"],
    sizes: ["One Size"],
    type: "Relax",
    rating: 4.5,
    reviews: "290",
    isBestSeller: false,
    colors: [{ name: "Green", hex: "#90ee90" }],
    badge: null
  },
  {
    id: "bc-17",
    title: "Executive Support Backrest",
    img: "https://lh3.googleusercontent.com/d/1-ptdoa65iSZVXzFckEXcY-9LXSdAR8bL",
    features: ["Professional Grade", "Posture Care", "Sleek"],
    sizes: ["Large"],
    type: "Executive",
    rating: 4.8,
    reviews: "110",
    isBestSeller: false,
    colors: [{ name: "Dark Grey", hex: "#555555" }],
    badge: "PREMIUM"
  },
  {
    id: "bc-18",
    title: "Supreme Back Support Cushion",
    img: "https://lh3.googleusercontent.com/d/1ShZq1EUaS3I_TO6rpvLb5ww5BksHzNhD",
    features: ["Maximum Support", "Contoured Fit", "Cooling Fabric"],
    sizes: ["Standard", "Extra Large"],
    type: "Supreme",
    rating: 4.9,
    reviews: "340",
    isBestSeller: true,
    colors: [{ name: "Black & Red", hex: "#8b0000" }],
    badge: "BESTSELLER"
  },
  {
    id: "bc-19",
    title: "Grand Wedge Luxury Support",
    img: "https://lh3.googleusercontent.com/d/1K4tRJfXayMMIggjE8j5ASpQ9mmfzW3jL",
    features: ["Grande Size", "Theater Comfort", "Premium Foam"],
    sizes: ["King", "Diwan"],
    type: "Luxury",
    rating: 4.9,
    reviews: "220",
    isBestSeller: true,
    colors: [{ name: "Gold", hex: "#ffd700" }],
    badge: "SIGNATURE"
  }
];

const curtainProducts = [
  { id: "c-1", title: "Royal Velvet blackout Curtain", img: "https://lh3.googleusercontent.com/d/1SZLpbA7gXP5NCaPMwVvggwQ7N4nJcGJO", features: ["Blackout Tech", "Velvet Finish"], sizes: ["7ft", "9ft"], type: "Premium", rating: 4.8, reviews: "2.1K", badge: "POPULAR" },
  { id: "c-2", title: "Modern Linen Sheer Curtain", img: "https://lh3.googleusercontent.com/d/1Ryw9E05vY0zvPA9WrT_P6Qp4pUFNI55z", features: ["Light Filtering", "Linen Texture"], sizes: ["7ft", "9ft"], type: "Classic", rating: 4.6, reviews: "1.5K", badge: null },
  { id: "c-3", title: "Silk Touch Luxury Drape", img: "https://lh3.googleusercontent.com/d/19Ew42YHE1td8ylPT9tdLzt5_qITIdDZ3", features: ["Silk Finish", "Elegant Drape"], sizes: ["7ft", "9ft"], type: "Luxury", rating: 4.9, reviews: "890", badge: "PREMIUM" },
  { id: "c-4", title: "Cotton Breeze Daily Curtain", img: "https://lh3.googleusercontent.com/d/1R_dTaUolUDlcERWlJyXsD2tQPEnEhCgc", features: ["Breathable Cotton", "Easy Wash"], sizes: ["7ft", "9ft"], type: "Essentials", rating: 4.4, reviews: "3.2K", badge: null },
  { id: "c-5", title: "Elite Geometric Pattern Curtain", img: "https://lh3.googleusercontent.com/d/1F5jQk9v6irYHJFbIsG1fwQ_o79uzkcT_", features: ["Geometric Print", "Modern Look"], sizes: ["7ft", "9ft"], type: "Modern", rating: 4.7, reviews: "560", badge: "TRENDING" },
  { id: "c-6", title: "Classic Floral Embroidered Curtain", img: "https://lh3.googleusercontent.com/d/1mrhYKdleiCFQAnACNmhHZ0Zq0bArHFpl", features: ["Exquisite Embroidery", "Traditional"], sizes: ["7ft", "9ft"], type: "Classic", rating: 4.8, reviews: "1.1K", badge: null },
  { id: "c-7", title: "Abstract Art Series Curtain", img: "https://lh3.googleusercontent.com/d/16JY-_xVxf7Eq_ffCC2pVYarnJ-YdJ-1d", features: ["Digital Print", "Artistic"], sizes: ["7ft", "9ft"], type: "Designer", rating: 4.5, reviews: "430", badge: "NEW" },
  { id: "c-8", title: "Urban Grey Textured Curtain", img: "https://lh3.googleusercontent.com/d/1wYtW9ZE3-LKs5ESdjS5Htb80NTBmdTo9", features: ["Heavy Fabric", "Noise Reduction"], sizes: ["7ft", "9ft"], type: "Essentials", rating: 4.6, reviews: "1.9K", badge: null },
  { id: "c-9", title: "Golden Glow Decorative Curtain", img: "https://lh3.googleusercontent.com/d/1LZ8HLd26r3j_SkCNOfZENUwerBEVKOhj", features: ["Shimmer Effect", "Festival Ready"], sizes: ["7ft", "9ft"], type: "Decor", rating: 4.7, reviews: "670", badge: "FESTIVE" },
  { id: "c-10", title: "Pure White Serenity Curtain", img: "https://lh3.googleusercontent.com/d/1LE8pWdVlgSYolL1eyOyUBl3rXlZzLCMt", features: ["Minimalist", "Fresh Look"], sizes: ["7ft", "9ft"], type: "Zen", rating: 4.8, reviews: "1.2K", badge: null },
  { id: "c-11", title: "Ocean Blue Wave Curtain", img: "https://lh3.googleusercontent.com/d/1yl_j6RIboEcpYGbI5rw70SeKe03aYnBy", features: ["Color Fast", "Soft Touch"], sizes: ["7ft", "9ft"], type: "Modern", rating: 4.4, reviews: "820", badge: null },
  { id: "c-13", title: "Maroon Majesty Velvet", img: "https://lh3.googleusercontent.com/d/1DJJMgyYoIt3eWkk_2dz51Nmqa3Fje7dT", features: ["Extra Heavy", "Room Darkening"], sizes: ["7ft", "9ft"], type: "Premium", rating: 4.8, reviews: "750", badge: null },
  { id: "c-14", title: "Beige Bliss Linen Blend", img: "https://lh3.googleusercontent.com/d/1hOxqOKldWTagSpqvseiz2Nb980r73R32", features: ["Natural Texture", "Neutral Tone"], sizes: ["7ft", "9ft"], type: "Classic", rating: 4.6, reviews: "1.4K", badge: null },
  { id: "c-15", title: "Shadow Grey Blackout Elite", img: "https://lh3.googleusercontent.com/d/1vA0EAnGh9tIgtm-AxkA_Whf5cqrD6OI4", features: ["100% Blackout", "Thermal Insulation"], sizes: ["7ft", "9ft"], type: "Premium", rating: 4.9, reviews: "2.3K", badge: "BEST SELLER" },
  { id: "c-16", title: "Emerald Green Luxury Drape", img: "https://lh3.googleusercontent.com/d/16hBFVCoiHoy1kwFu30Y9NOXkF2gz1DEW", features: ["Rich Color", "Luxury Shine"], sizes: ["7ft", "9ft"], type: "Luxury", rating: 4.8, reviews: "910", badge: null },
  { id: "c-17", title: "Terracotta Earth Series", img: "https://lh3.googleusercontent.com/d/1DKjBIcqGmpT_bOd5XCNb5hOn9kNOOLix", features: ["Earth Tones", "Rustic Look"], sizes: ["7ft", "9ft"], type: "Modern", rating: 4.5, reviews: "520", badge: null },
  { id: "c-18", title: "Silver Sparkle Sheer", img: "https://lh3.googleusercontent.com/d/1IUtfo5AI477vqOnafjeCOzGximzFVhJm", features: ["Metallic Accents", "Light Filter"], sizes: ["7ft", "9ft"], type: "Decor", rating: 4.7, reviews: "380", badge: null },
  { id: "c-19", title: "Deep Navy Night Curtain", img: "https://lh3.googleusercontent.com/d/11i9C0KtYzyfYEAm8ucun8HimMWSaiwbl", features: ["Dark Atmosphere", "Soft Finish"], sizes: ["7ft", "9ft"], type: "Essentials", rating: 4.6, reviews: "1.7K", badge: null },
  { id: "c-20", title: "Sunshine Yellow Bright", img: "https://lh3.googleusercontent.com/d/1_0V8Y53HsZpra0lTmbOjtjG72LjypY5Y", features: ["Brightens Room", "Cheerful"], sizes: ["7ft", "9ft"], type: "Modern", rating: 4.4, reviews: "640", badge: null },
  { id: "c-21", title: "Charcoal Elite Blackout", img: "https://lh3.googleusercontent.com/d/1Fg42f-gu4czt_UUrKM4xqxmnI5TPiLLX", features: ["Industrial Look", "Heavy Drape"], sizes: ["7ft", "9ft"], type: "Premium", rating: 4.8, reviews: "1.1K", badge: null },
  { id: "c-22", title: "Pastel Pink Dream Curtain", img: "https://lh3.googleusercontent.com/d/1mU-nWD1ceauas4xS3peaFLoh5cqzrqwx", features: ["Soft Color", "Perfect for Kids"], sizes: ["7ft", "9ft"], type: "Essentials", rating: 4.7, reviews: "980", badge: "KIDS CHOICE" },
];

const lShapeSofaFilters = ["All sofa-set", "Flash Sale", "Modular Floor Sofa", "Ottoman", "Plus Sofa", "Premium Sofa", "Recliners", "Sofa cum bed", "Metallic Ottoman"];

const furnitureTabs = [
  "Sofas", "Bed Back Cushion", "Mattresses", "Furniture", "Curtains"
];

const furnitureItems: Record<string, { id: number; title: string; img: string }[]> = {
  "Sofas": sofaSubCategories,
  "Bed Back Cushion": bedBackCushionSubCategories,
  "Mattresses": mattressSubCategories,
  "Furniture": furnitureSubCategories,
  "Curtains": curtainSubCategories
};

const heroSlides = [
  { id: 1, img: "https://lh3.googleusercontent.com/d/11ezVKo2DUsrIcdReW7KWw96Mb5RfFpPF", product: bhartiyaBaithakProducts[0] },
  { id: 2, img: "https://lh3.googleusercontent.com/d/1P3SSZ61zdZ_CRo7Nsz1T2DGsV59LAstw", product: bedBackCushionProducts[0] },
  { id: 3, img: "https://lh3.googleusercontent.com/d/19U_aSZvk0dUl41eyeKh7WiXZG-eiytcK", product: allMattressProducts[0] },
  { id: 4, img: "https://lh3.googleusercontent.com/d/1DhEaAM51es03SUtjPIMEmeYJtw5Ijzn7", product: premiumDiningProducts[0] },
  { id: 5, img: "https://lh3.googleusercontent.com/d/1lrJHzNVcFm5JDsEPT4qQYQOwIFbNguUM", product: curtainProducts[0] }
];

const ThreeSixtyViewer = ({ images, title }: { images: string[], title: string }) => {
  const [index, setIndex] = React.useState(0);
  const [isDragging, setIsDragging] = React.useState(false);
  const dragStartPos = React.useRef(0);
  const dragStartIndex = React.useRef(0);

  const handleStart = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    const x = 'touches' in e ? e.touches[0].clientX : e.clientX;
    dragStartPos.current = x;
    dragStartIndex.current = index;
  };

  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return;
    const x = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const diff = x - dragStartPos.current;
    const sensitivity = 10;
    const frameChange = Math.floor(diff / sensitivity);
    
    let newIndex = (dragStartIndex.current - frameChange) % images.length;
    while (newIndex < 0) newIndex += images.length;
    setIndex(newIndex);
  };

  const handleEnd = () => setIsDragging(false);

  return (
    <div 
      className="relative w-full h-full cursor-grab active:cursor-grabbing touch-none select-none flex items-center justify-center p-4"
      onMouseDown={handleStart}
      onMouseMove={handleMove}
      onMouseUp={handleEnd}
      onMouseLeave={handleEnd}
      onTouchStart={handleStart}
      onTouchMove={handleMove}
      onTouchEnd={handleEnd}
    >
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[90%] md:w-[70%] aspect-square border-[1px] border-dashed border-brand/20 rounded-full animate-spin-slow" />
      </div>
      <motion.img 
        initial={false}
        animate={{ scale: isDragging ? 0.98 : 1 }}
        src={images[index]} 
        alt={title} 
        className="w-full max-h-[65vh] md:max-h-[85vh] object-contain pointer-events-none md:rounded-3xl relative z-10"
      />
      <div className="absolute inset-x-0 bottom-10 flex flex-col items-center gap-3 z-30 pointer-events-none">
        <div className="flex items-center gap-3 bg-black/80 backdrop-blur-2xl px-6 py-3 rounded-full border border-white/10 shadow-2xl">
          <RotateCcw size={16} className="text-brand animate-spin-slow" />
          <span className="text-[10px] font-black text-white uppercase tracking-[3px] leading-none">Interactive 360°</span>
        </div>
      </div>
    </div>
  );
};

export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);
  const [showPhoneNumber, setShowPhoneNumber] = React.useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.98, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 24
      }
    }
  };

  const navItemVariants = {
    hover: { 
      scale: 1.05, 
      color: "#ffd700",
      transition: { type: "spring", stiffness: 400, damping: 10 }
    },
    tap: { scale: 0.95 }
  };
  const [activeSlide, setActiveSlide] = React.useState(0);
  const [selectedFurnitureTab, setSelectedFurnitureTab] = React.useState("Sofas");
  const [selectedSubCategory, setSelectedSubCategory] = React.useState<string | null>(null);
  const [selectedProductSubCategory, setSelectedProductSubCategory] = React.useState<string | null>(null);
  const [is360Mode, setIs360Mode] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState("");
  const [showSearchDropdown, setShowSearchDropdown] = React.useState(false);

  const allProducts = React.useMemo(() => [
    ...allMattressProducts,
    ...lShapeSofaProducts,
    ...bedBackCushionProducts,
    ...curtainProducts,
    ...bhartiyaBaithakProducts,
    ...seatedSofaProducts,
    ...maharajaSofaProducts,
    ...modernSofaProducts,
    ...simpleSofaProducts,
    ...sofaCumBedProducts,
    ...lTypeSofaProducts,
    ...sofaWithTeaTableProducts,
    ...sofaWithLoungerProducts,
    ...sofaWithStorageBoxProducts,
    ...premiumDiningProducts,
    ...elegantLivingProducts,
    ...modernStorageProducts
  ], []);
  const [isMobileSearchOpen, setIsMobileSearchOpen] = React.useState(false);
  const [activeMattressSize, setActiveMattressSize] = React.useState("All");
  const [activeMattressType, setActiveMattressType] = React.useState("All");
  const [activeLShapeFilter, setActiveLShapeFilter] = React.useState("All sofa-set");
  const [selectedProduct, setSelectedProduct] = React.useState<any>(null);
  const [hasSeenSwipeHint, setHasSeenSwipeHint] = React.useState(() => {
    return localStorage.getItem('hasSeenSwipeHint') === 'true';
  });
  const [showSwipeHint, setShowSwipeHint] = React.useState(false);
  const [swipeDirection, setSwipeDirection] = React.useState(0);

  // Handle swipe hint visibility and resets
  React.useEffect(() => {
    if (selectedProduct) {
      setActiveImageIndex(0);
      setIs360Mode(false);
      if (!hasSeenSwipeHint) {
        setShowSwipeHint(true);
        const timer = setTimeout(() => {
          setShowSwipeHint(false);
          setHasSeenSwipeHint(true);
          localStorage.setItem('hasSeenSwipeHint', 'true');
        }, 4000);
        return () => clearTimeout(timer);
      }
    }
  }, [selectedProduct, hasSeenSwipeHint]);
  const [wishlist, setWishlist] = React.useState<string[]>([]);
  const [showWishlistDropdown, setShowWishlistDropdown] = React.useState(false);
  const [showLocationDropdown, setShowLocationDropdown] = React.useState(false);
  const [activeImageIndex, setActiveImageIndex] = React.useState(0);
  const [isFullScreen, setIsFullScreen] = React.useState(false);
  const [zoomScale, setZoomScale] = React.useState(1);
  const isProgrammaticScroll = React.useRef(false);

  // Sync active index when product changes
  React.useEffect(() => {
    if (selectedProduct) {
      setActiveImageIndex(0);
      setIsFullScreen(false);
      setZoomScale(1);
    }
  }, [selectedProduct]);

  // Gallery Navigation helpers
  const galleryScrollRef = React.useRef<HTMLDivElement>(null);
  const similarProductsScrollRef = React.useRef<HTMLDivElement>(null);

  const scrollSimilarProducts = (direction: 'left' | 'right') => {
    if (similarProductsScrollRef.current) {
      const container = similarProductsScrollRef.current;
      const scrollAmount = 300;
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  // Sync scroll position when active index changes (programmatic)
  React.useEffect(() => {
    if (galleryScrollRef.current && typeof window !== 'undefined' && window.innerWidth < 768) {
      const container = galleryScrollRef.current;
      const targetScroll = activeImageIndex * container.clientWidth;
      
      if (Math.abs(container.scrollLeft - targetScroll) > 5) {
        isProgrammaticScroll.current = true;
        container.scrollTo({
          left: targetScroll,
          behavior: 'smooth'
        });
        
        // Reset flag after animation completes
        const timer = setTimeout(() => {
          isProgrammaticScroll.current = false;
        }, 500);
        return () => clearTimeout(timer);
      }
    }
  }, [activeImageIndex]);

  const allGalleryImages = React.useMemo(() => 
    selectedProduct ? [selectedProduct.img, ...(selectedProduct.gallery || [])] : [], 
    [selectedProduct]
  );

  const nextImage = React.useCallback(() => {
    setActiveImageIndex((prev) => (prev + 1) % allGalleryImages.length);
  }, [allGalleryImages.length]);

  const prevImage = React.useCallback(() => {
    setActiveImageIndex((prev) => (prev - 1 + allGalleryImages.length) % allGalleryImages.length);
  }, [allGalleryImages.length]);

  // Toggle wishlist item
  const toggleWishlist = (productId: string) => {
    setWishlist(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId) 
        : [...prev, productId]
    );
  };

  // Computed search results
  const searchResults = React.useMemo(() => {
    if (!searchQuery.trim()) return [];
    
    const query = searchQuery.toLowerCase();
    const results: { title: string; category: string; img: string; isProduct?: boolean; product?: any }[] = [];
    const seenTitles = new Set<string>();

    // Search in categories
    categories.forEach(cat => {
      const title = cat.title;
      if (title.toLowerCase().includes(query) && !seenTitles.has(title)) {
        results.push({ title, category: "Main Category", img: cat.img });
        seenTitles.add(title);
      }
    });

    // Search in all subcategories
    const allSubs = [
      ...mattressSubCategories.map(s => ({ ...s, cat: "Mattresses" })),
      ...bedBackCushionSubCategories.map(s => ({ ...s, cat: "Bed Back Cushion" })),
      ...sofaSubCategories.map(s => ({ ...s, cat: "Sofas" })),
      ...furnitureSubCategories.map(s => ({ ...s, cat: "Furniture" })),
      ...curtainSubCategories.map(s => ({ ...s, cat: "Curtains" })),
    ];

    allSubs.forEach(sub => {
      const title = sub.title;
      if (title.toLowerCase().includes(query) && !seenTitles.has(title)) {
        results.push({ title, category: sub.cat, img: sub.img });
        seenTitles.add(title);
      }
    });

    // Search in furniture tabs
    Object.entries(furnitureItems).forEach(([cat, items]) => {
      items.forEach(item => {
        const title = item.title;
        if (title.toLowerCase().includes(query) && !seenTitles.has(title)) {
          results.push({ title, category: `Furniture - ${cat}`, img: item.img, isProduct: false });
          seenTitles.add(title);
        }
      });
    });

    // Search in all products (Products should probably be prioritized or allowed duplicates if different? No, user said same names)
    allProducts.forEach(product => {
      const title = product.title;
      if (title.toLowerCase().includes(query) && !seenTitles.has(title)) {
        results.push({ title, category: "Product", img: product.img, product, isProduct: true });
        seenTitles.add(title);
      }
    });

    return results.slice(0, 15); // Limit to top 15 results
  }, [searchQuery, allProducts]);

  const shuffleArray = <T,>(array: T[]) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  // Computed filtered mattresses
  const filteredMattresses = React.useMemo(() => {
    return allMattressProducts.filter(m => {
      const sizeMatch = activeMattressSize === "All" || m.sizes.includes(activeMattressSize);
      const effectiveType = (selectedProductSubCategory && selectedProductSubCategory !== "All Mattresses") 
        ? selectedProductSubCategory 
        : activeMattressType;
      const typeMatch = effectiveType === "All" || m.type === effectiveType;
      return sizeMatch && typeMatch;
    });
  }, [activeMattressSize, activeMattressType, selectedProductSubCategory]);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const wishlistContainerRef = React.useRef<HTMLDivElement>(null);
  const locationContainerRef = React.useRef<HTMLDivElement>(null);
  const searchContainerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const target = event.target as Node;
      
      if (searchContainerRef.current && !searchContainerRef.current.contains(target)) {
        setShowSearchDropdown(false);
      }
      
      if (wishlistContainerRef.current && !wishlistContainerRef.current.contains(target)) {
        setShowWishlistDropdown(false);
      }
      
      if (locationContainerRef.current && !locationContainerRef.current.contains(target)) {
        setShowLocationDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  React.useEffect(() => {
    if (selectedSubCategory) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [selectedSubCategory]);

  const nextSlide = () => setActiveSlide((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () => setActiveSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);

  // Helper for product swipe feature
  const getCurrentProductList = React.useCallback(() => {
    if (!selectedSubCategory) return [];

    if (selectedSubCategory === "Mattresses") {
      return filteredMattresses;
    }
    
    if (selectedSubCategory === "Bed Back Cushion") {
      return bedBackCushionProducts;
    }

    if (selectedSubCategory === "Curtains") {
      return curtainProducts;
    }

    if (selectedSubCategory === "Sofas") {
      if (selectedProductSubCategory === "L Shape Sofa") return lShapeSofaProducts;
      if (selectedProductSubCategory === "Bhartiya Baithak") return bhartiyaBaithakProducts;
      if (selectedProductSubCategory === "1-7 seated sofa") return seatedSofaProducts;
      if (selectedProductSubCategory === "Modern sofa set") return modernSofaProducts;
      if (selectedProductSubCategory === "Simple sofa set") return simpleSofaProducts;
      if (selectedProductSubCategory === "Sofa cum bed") return sofaCumBedProducts;
      if (selectedProductSubCategory === "L type sofa") return lTypeSofaProducts;
      if (selectedProductSubCategory === "Maharaja sofa") return maharajaSofaProducts;
      if (selectedProductSubCategory === "Sofa with tea table") return sofaWithTeaTableProducts;
      if (selectedProductSubCategory === "Sofa with lounger") return sofaWithLoungerProducts;
      if (selectedProductSubCategory === "Sofa with storage box") return sofaWithStorageBoxProducts;
    }

    if (selectedSubCategory === "Furniture") {
      if (selectedProductSubCategory === "Premium Dining") return premiumDiningProducts;
      if (selectedProductSubCategory === "Elegant Living") return elegantLivingProducts;
      if (selectedProductSubCategory === "Modern Storage") return modernStorageProducts;
    }

    return [];
  }, [selectedSubCategory, selectedProductSubCategory, filteredMattresses]);

  const shuffledSimilarProducts = React.useMemo(() => {
    if (!selectedProduct) return [];
    const list = getCurrentProductList().filter(p => p.id !== selectedProduct.id);
    return shuffleArray(list).slice(0, 12); // Shuffle all and pick top 12
  }, [selectedProduct, selectedProductSubCategory, selectedSubCategory, getCurrentProductList]);

  const handleNextProduct = React.useCallback(() => {
    const list = getCurrentProductList();
    if (list.length <= 1) return;
    
    const currentIndex = list.findIndex(p => p.id === selectedProduct?.id);
    if (currentIndex === -1) return;
    
    setSwipeDirection(1);
    const nextIndex = (currentIndex + 1) % list.length;
    setSelectedProduct(list[nextIndex]);
    setActiveImageIndex(0);
  }, [getCurrentProductList, selectedProduct, setSelectedProduct, setActiveImageIndex]);

  const handlePrevProduct = React.useCallback(() => {
    const list = getCurrentProductList();
    if (list.length <= 1) return;
    
    const currentIndex = list.findIndex(p => p.id === selectedProduct?.id);
    if (currentIndex === -1) return;
    
    setSwipeDirection(-1);
    const prevIndex = (currentIndex - 1 + list.length) % list.length;
    setSelectedProduct(list[prevIndex]);
    setActiveImageIndex(0);
  }, [getCurrentProductList, selectedProduct, setSelectedProduct, setActiveImageIndex]);

  const productVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.95,
      filter: "blur(12px)"
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      filter: "blur(0px)"
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.95,
      filter: "blur(12px)"
    })
  };

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedProduct) return;
      if (e.key === "ArrowRight") handleNextProduct();
      if (e.key === "ArrowLeft") handlePrevProduct();
      if (e.key === "Escape") setSelectedProduct(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedProduct, handleNextProduct, handlePrevProduct]);

  return (
    <div className="min-h-screen flex flex-col font-sans relative">
      {/* Sidebar Overlay */}
      <AnimatePresence>
        {isSidebarOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsSidebarOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[100]"
            />
            <motion.div 
              drag="x"
              dragDirectionLock
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={{ left: 1, right: 0.1 }}
              onDragEnd={(_, info) => {
                if (info.offset.x < -100) {
                  setIsSidebarOpen(false);
                }
              }}
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 bottom-0 w-[280px] bg-white z-[101] shadow-2xl flex flex-col touch-pan-y"
            >
              <div className="p-5 border-b border-gray-100 flex items-center justify-between bg-white text-brand">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-brand/10 rounded-lg flex items-center justify-center border border-brand/20">
                    <div className="w-4 h-4 bg-brand rounded-sm transform rotate-12" />
                  </div>
                  <span className="font-bold text-xl tracking-tight">Kalyankar</span>
                </div>
                <button onClick={() => setIsSidebarOpen(false)} className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-500">
                  <X size={20} />
                </button>
              </div>
              
              <div className="flex-1 overflow-y-auto py-6">
                <div className="px-5 mb-8">
                  <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-[2px] mb-4">Categories</h3>
                  <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="space-y-1"
                  >
                    {[
                      { label: "Sofas", cat: "Sofas" },
                      { label: "Mattresses", cat: "Mattresses" },
                      { label: "Curtains", cat: "Curtains" },
                      { label: "Furniture", cat: "Furniture" },
                      { label: "Bed Back Cushion", cat: "Bed Back Cushion" }
                    ].map((item) => (
                      <motion.button 
                        variants={itemVariants}
                        whileHover={{ x: 8 }}
                        key={item.label}
                        onClick={() => {
                          setIsSidebarOpen(false);
                          setSelectedSubCategory(item.cat);
                          if (item.cat === "Mattresses") {
                            setSelectedProductSubCategory("All Mattresses");
                          }
                        }}
                        className="w-full flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-gray-50 text-gray-700 hover:text-brand transition-all text-sm font-bold group"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-gray-200 group-hover:bg-brand transition-colors" />
                        {item.label}
                      </motion.button>
                    ))}
                  </motion.div>
                </div>

                <div className="px-5 mb-8">
                  <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-[2px] mb-4">About Kalyankar</h3>
                  <div className="bg-brand/5 rounded-2xl p-4 border border-brand/10">
                    <h4 className="text-[10px] font-black text-brand uppercase tracking-[1px] mb-2 flex items-center gap-2">
                       <Rotate3D size={12} />
                       Our Legacy
                    </h4>
                    <p className="text-[11px] text-gray-600 leading-relaxed font-medium">
                      Crafting premium comfort for over two decades. We believe furniture isn't just about utility; it's about the stories you create in your home.
                    </p>
                    <div className="mt-4 pt-4 border-t border-brand/10 flex flex-col gap-2">
                      <div className="flex items-center justify-between text-[9px] font-bold text-gray-400 uppercase tracking-wider">
                         <span>Experience</span>
                         <span className="text-brand">20+ Years</span>
                      </div>
                      <div className="flex items-center justify-between text-[9px] font-bold text-gray-400 uppercase tracking-wider">
                         <span>Happy Customers</span>
                         <span className="text-brand">50k+</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="px-5 pb-10">
                   <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-[2px] mb-6">Stay Inspired</h3>
                   <div className="bg-gray-900 rounded-3xl p-6 text-white border border-white/10 shadow-xl mb-8">
                      <p className="text-[10px] text-white/50 mb-4 font-bold uppercase tracking-wider">Join 50k+ homeowners for design tips</p>
                      <div className="flex flex-col gap-3">
                         <input 
                           type="email" 
                           placeholder="Email address" 
                           className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-xs focus:outline-none focus:ring-1 focus:ring-brand text-white placeholder:text-white/30"
                         />
                         <button className="w-full py-3 bg-brand text-white rounded-xl text-[10px] font-black uppercase tracking-widest transition-all hover:bg-brand/90">
                           Join Now
                         </button>
                      </div>
                   </div>

                   <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-[2px] mb-6">Follow Us</h3>
                   <div className="grid grid-cols-3 gap-4 mb-10">
                      <a 
                        href="https://wa.me/919370684574" 
                        target="_blank" 
                        rel="noreferrer"
                        className="flex flex-col items-center gap-2 p-3 rounded-2xl bg-green-50 text-green-600 hover:bg-green-100 transition-colors"
                      >
                        <MessageCircle size={22} />
                        <span className="text-[9px] font-black uppercase">WhatsApp</span>
                      </a>
                      <a 
                        href="#" 
                        className="flex flex-col items-center gap-2 p-3 rounded-2xl bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors"
                      >
                        <Facebook size={22} />
                        <span className="text-[9px] font-black uppercase">Facebook</span>
                      </a>
                      <a 
                        href="#" 
                        className="flex flex-col items-center gap-2 p-3 rounded-2xl bg-pink-50 text-pink-600 hover:bg-pink-100 transition-colors"
                      >
                        <Instagram size={22} />
                        <span className="text-[9px] font-black uppercase">Instagram</span>
                      </a>
                   </div>

                   <div className="pt-6 border-t border-gray-100 flex flex-col gap-3">
                      <div className="flex items-center justify-between text-[8px] font-black text-gray-300 uppercase tracking-widest">
                         <span>Privacy Policy</span>
                         <span>Terms of Service</span>
                      </div>
                      <p className="text-[8px] font-bold text-gray-300 uppercase tracking-widest text-center mt-2">© 2026 Kalyankar Furniture</p>
                   </div>
                </div>
              </div>
              
              <div className="p-5 border-t border-gray-100 bg-gray-50/50">
                 <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 rounded-full bg-brand/10 flex items-center justify-center text-brand">
                       <User size={20} />
                    </div>
                    <div>
                       <p className="text-sm font-bold text-gray-800">Welcome Guest</p>
                       <p className="text-[11px] font-medium text-gray-400">Login to save items</p>
                    </div>
                 </div>
                 <button className="w-full py-3 bg-brand text-white rounded-xl text-xs font-black uppercase tracking-widest shadow-md">
                    Login / Sign Up
                 </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Main Content Wrapper (Blurrable) */}
      <div className={`transition-all duration-500 ${selectedSubCategory ? 'blur-md brightness-90 grayscale-[0.2]' : ''}`}>
        {/* Header */}
        <header className="bg-white/80 backdrop-blur-xl text-gray-900 sticky top-0 z-[150] border-b border-gray-100 shadow-sm">
        <div className="max-w-[1440px] mx-auto px-4">
          {/* Top Header Bar */}
          <div className="h-12 md:h-14 flex items-center justify-between gap-2 md:gap-4">
            <div className="flex items-center gap-1 md:gap-4 flex-shrink-0">
              <button 
                onClick={() => setIsSidebarOpen(true)}
                className="p-1.5 md:p-2 hover:bg-gray-100 rounded-lg transition-colors focus:outline-none"
              >
                <MoreVertical size={24} className="md:w-7 md:h-7 opacity-70" />
              </button>
              <div className="flex items-center gap-1.5 md:gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                <div className="w-7 h-7 md:w-11 md:h-11 bg-brand rounded-lg md:rounded-xl flex items-center justify-center shadow-md">
                  <div className="w-3.5 h-3.5 md:w-6 md:h-6 bg-white rounded-full" />
                </div>
                <span className="font-bold text-lg md:text-2xl tracking-tighter text-brand">Kalyankar</span>
              </div>
            </div>

            {/* Icons Bar */}
            <div className="flex items-center gap-0 md:gap-4 lg:gap-6">
              <button 
                onClick={() => setIsMobileSearchOpen(!isMobileSearchOpen)}
                className="p-1.5 hover:bg-gray-100 rounded-full transition-colors text-gray-600"
                title="Search"
              >
                <Search size={20} className="md:w-7 md:h-7" strokeWidth={1.5} />
              </button>
              <div className="relative">
                <button 
                  onClick={() => setShowPhoneNumber(!showPhoneNumber)}
                  className="p-1.5 hover:bg-gray-100 rounded-full transition-colors text-gray-600"
                  title="Contact"
                >
                  <Phone size={20} className="md:w-7 md:h-7" strokeWidth={1.5} />
                </button>
                <AnimatePresence>
                  {showPhoneNumber && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.9 }}
                      className="absolute top-full right-0 mt-3 w-64 bg-white rounded-2xl shadow-2xl border border-gray-100 p-4 z-[80]"
                    >
                      <div className="flex flex-col items-center text-center text-gray-800">
                        <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center mb-3 text-green-600">
                          <Phone size={24} />
                        </div>
                        <h4 className="text-sm font-black mb-1 text-gray-900">Contact Us</h4>
                        <p className="text-lg font-bold text-brand mb-4">9370684574</p>
                        <a 
                          href="tel:9370684574" 
                          className="w-full py-3 bg-green-600 hover:bg-green-700 text-white rounded-xl text-xs font-black uppercase tracking-[2px] flex items-center justify-center gap-2 shadow-xl shadow-green-600/20 active:scale-[0.98] transition-all"
                        >
                          <Phone size={14} />
                          Open Dialer
                        </a>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <div ref={wishlistContainerRef} className="relative">
                <button 
                  onClick={() => {
                    setShowWishlistDropdown(!showWishlistDropdown);
                    setShowLocationDropdown(false);
                  }}
                  className="p-1 md:p-1.5 hover:bg-gray-100 rounded-full transition-colors relative text-gray-600"
                  title="Wishlist"
                >
                  <Heart size={22} className={`md:w-7 md:h-7 ${wishlist.length > 0 ? "fill-brand text-brand" : ""}`} strokeWidth={1.5} />
                  {wishlist.length > 0 && (
                    <span className="absolute top-0 right-0 w-3.5 h-3.5 md:w-4 md:h-4 bg-brand text-white text-[7px] md:text-[8px] font-black rounded-full flex items-center justify-center">
                      {wishlist.length}
                    </span>
                  )}
                </button>
                <AnimatePresence>
                  {showWishlistDropdown && (
                    <motion.div
                      initial={{ opacity: 0, y: 15, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 15, scale: 0.95 }}
                      className="absolute top-full right-[-50px] md:right-0 mt-3 w-[260px] md:w-[320px] bg-white rounded-2xl md:rounded-3xl shadow-2xl border border-gray-100 overflow-hidden z-[70] text-gray-800"
                    >
                      <div className="p-3 md:p-4 border-b border-gray-50 flex items-center justify-between bg-gray-50/50">
                        <h3 className="text-[10px] md:text-xs font-black uppercase tracking-widest">My Collection</h3>
                        <button onClick={() => setShowWishlistDropdown(false)} className="p-1 text-gray-400 hover:text-brand transition-colors"><X size={16} /></button>
                      </div>
                      <div className="max-h-[300px] overflow-y-auto p-2 custom-scrollbar">
                        {wishlist.length > 0 ? (
                          <div className="space-y-1 md:space-y-2">
                            {wishlist.map(id => {
                              const product = allProducts.find(p => p.id === id);
                              if (!product) return null;
                              return (
                                <div 
                                  key={id} 
                                  onClick={() => {
                                    setSelectedProduct(product);
                                    setShowWishlistDropdown(false);
                                  }}
                                  className="flex items-center gap-2 md:gap-3 p-2 hover:bg-brand/5 rounded-xl transition-all cursor-pointer group"
                                >
                                  <img src={product.img} className="w-10 h-10 md:w-12 md:h-12 rounded-lg object-cover group-hover:scale-105 transition-transform" alt="" />
                                  <div className="flex-1 min-w-0">
                                    <p className="text-[10px] md:text-[11px] font-bold truncate text-gray-800">{product.title}</p>
                                    <p className="text-[8px] text-brand font-black uppercase tracking-widest mt-0.5">View Details</p>
                                  </div>
                                  <button 
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      toggleWishlist(id);
                                    }} 
                                    className="p-1 text-gray-300 hover:text-red-500 transition-colors"
                                  >
                                    <Trash size={14} />
                                  </button>
                                </div>
                              );
                            })}
                          </div>
                        ) : (
                          <div className="py-8 text-center">
                            <Heart size={24} className="mx-auto text-gray-200 mb-2" />
                            <p className="text-[10px] md:text-xs text-gray-400">Your collection is empty</p>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <div ref={locationContainerRef} className="relative">
                <button 
                  onClick={() => {
                    setShowLocationDropdown(!showLocationDropdown);
                    setShowWishlistDropdown(false);
                  }}
                  className="p-1 md:p-1.5 hover:bg-gray-100 rounded-full transition-colors text-gray-600"
                  title="Our Location"
                >
                  <MapPin size={22} className={`md:w-7 md:h-7 ${showLocationDropdown ? "text-brand" : ""}`} strokeWidth={1.5} />
                </button>
                
                <AnimatePresence>
                  {showLocationDropdown && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      className="absolute top-full right-0 mt-2 w-[280px] md:w-[320px] bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-50 origin-top-right"
                    >
                      <div className="p-4 border-b border-gray-50 flex items-center justify-between bg-gray-50/50">
                        <h4 className="text-[10px] font-black uppercase tracking-widest text-gray-900">Our Showroom</h4>
                        <button onClick={() => setShowLocationDropdown(false)} className="p-1 hover:bg-gray-200 rounded-full transition-colors">
                          <X size={14} className="text-gray-400" />
                        </button>
                      </div>
                      
                      <div className="p-1">
                        <div className="aspect-video w-full rounded-xl overflow-hidden bg-gray-100 relative mb-1">
                          <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3774.582694384664!2d77.109098075!3d18.39294807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDIzJzM0LjYiTiA3N8KwMDYnNDIuOCJF!5e0!3m2!1sen!2sin!4v1715086000000!5m2!1sen!2sin"
                            width="100%" 
                            height="100%" 
                            style={{ border: 0 }} 
                            allowFullScreen={true} 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade"
                            className="grayscale-[0.2] contrast-[1.1] hover:grayscale-0 transition-all duration-500"
                          />
                        </div>
                      </div>
                      
                      <div className="p-4 space-y-3">
                        <div className="flex gap-3">
                          <div className="w-8 h-8 rounded-full bg-brand/10 flex items-center justify-center flex-shrink-0">
                             <MapPin size={14} className="text-brand" />
                          </div>
                          <div>
                            <p className="text-[10px] font-bold text-gray-900 leading-tight">Udgir-Nanded Road</p>
                            <p className="text-[10px] text-gray-500">Latur, Maharashtra 413517</p>
                          </div>
                        </div>
                        
                        <button 
                          onClick={() => window.open('https://www.google.com/maps?q=18.392948,77.111673', '_blank')}
                          className="w-full py-2.5 bg-brand text-white rounded-xl text-[10px] font-black uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-brand/90 transition-all active:scale-95 shadow-lg shadow-brand/20"
                        >
                          Go to Map
                          <ArrowRight size={12} />
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <button className="hidden sm:block p-1.5 hover:bg-white/10 rounded-full transition-colors" title="Account">
                <User size={22} className="md:w-7 md:h-7" strokeWidth={1.5} />
              </button>
            </div>
          </div>

          {/* Search Bar Expansion */}
          <AnimatePresence>
            {isMobileSearchOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="relative z-[60] pb-4 md:pb-6"
              >
                <div ref={searchContainerRef} className="relative max-w-2xl mx-auto">
                  <input 
                    type="text" 
                    value={searchQuery}
                    onChange={(e) => {
                      setSearchQuery(e.target.value);
                      setShowSearchDropdown(true);
                    }}
                    onFocus={() => setShowSearchDropdown(true)}
                    placeholder="Search furniture, mattresses..." 
                    className="w-full h-11 md:h-12 bg-white rounded-xl md:rounded-2xl pl-12 pr-4 text-gray-900 text-sm md:text-base focus:outline-none shadow-lg"
                    autoFocus
                  />
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center text-gray-400">
                    <Search size={20} strokeWidth={2} />
                  </div>

                  {/* Search Results Dropdown */}
                  <AnimatePresence>
                    {showSearchDropdown && searchResults.length > 0 && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-[999] max-h-[500px] overflow-y-auto index-above-all"
                      >
                        <div className="p-3 border-b border-gray-50 flex items-center justify-between bg-gray-50/50">
                          <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Search Results</span>
                          <button onClick={() => setShowSearchDropdown(false)} className="p-1 hover:bg-gray-100 rounded-full"><X size={14} /></button>
                        </div>
                        <div className="p-2 space-y-1">
                          {searchResults.map((result, i) => (
                            <button
                              key={i}
                              onClick={() => {
                                if (result.isProduct && result.product) {
                                  // Find subcategory for swipe context
                                  const id = result.product.id;
                                  let subCat = null;
                                  let mainCat = null;

                                  if (id.startsWith('ls-')) { mainCat = "Sofas"; subCat = "L Shape Sofa"; }
                                  else if (id.startsWith('bb-')) { mainCat = "Sofas"; subCat = "Bhartiya Baithak"; }
                                  else if (id.startsWith('ss-')) { mainCat = "Sofas"; subCat = "1-7 seated sofa"; }
                                  else if (id.startsWith('ms-')) { mainCat = "Sofas"; subCat = "Maharaja sofa"; }
                                  else if (id.startsWith('mod-')) { mainCat = "Sofas"; subCat = "Modern sofa set"; }
                                  else if (id.startsWith('simple-')) { mainCat = "Sofas"; subCat = "Simple sofa set"; }
                                  else if (id.startsWith('scb-')) { mainCat = "Sofas"; subCat = "Sofa cum bed"; }
                                  else if (id.startsWith('lts-')) { mainCat = "Sofas"; subCat = "L type sofa"; }
                                  else if (id.startsWith('tt-')) { mainCat = "Sofas"; subCat = "Sofa with tea table"; }
                                  else if (id.startsWith('sl-')) { mainCat = "Sofas"; subCat = "Sofa with lounger"; }
                                  else if (id.startsWith('sb-')) { mainCat = "Sofas"; subCat = "Sofa with storage box"; }
                                  else if (id.startsWith('pd-')) { mainCat = "Furniture"; subCat = "Premium Dining"; }
                                  else if (id.startsWith('el-')) { mainCat = "Furniture"; subCat = "Elegant Living"; }
                                  else if (id.startsWith('ms-storage')) { mainCat = "Furniture"; subCat = "Modern Storage"; }
                                  else if (id.startsWith('m-')) { mainCat = "Mattresses"; subCat = "All Mattresses"; }
                                  else if (id.startsWith('bc-')) { mainCat = "Bed Back Cushion"; subCat = "Classic Support"; }
                                  else if (id.startsWith('c-')) { mainCat = "Curtains"; subCat = "Curtains"; }

                                  setSelectedProduct(result.product);
                                  if (mainCat) setSelectedSubCategory(mainCat);
                                  if (subCat) setSelectedProductSubCategory(subCat);
                                  setShowSearchDropdown(false);
                                } else {
                                  // Find which category it belongs to and set it
                                  const catMatch = categories.find(c => c.title === result.title);
                                  if (catMatch) {
                                    setSelectedSubCategory(catMatch.title);
                                  } else {
                                    // Try subcategories
                                    const allSubs = [
                                      ...mattressSubCategories.map(s => ({ ...s, cat: "Mattresses" })),
                                      ...bedBackCushionSubCategories.map(s => ({ ...s, cat: "Bed Back Cushion" })),
                                      ...sofaSubCategories.map(s => ({ ...s, cat: "Sofas" })),
                                      ...furnitureSubCategories.map(s => ({ ...s, cat: "Furniture" })),
                                      ...curtainSubCategories.map(s => ({ ...s, cat: "Curtains" })),
                                    ];
                                    const subMatch = allSubs.find(s => s.title === result.title);
                                    if (subMatch) {
                                      setSelectedSubCategory(subMatch.cat);
                                      setSelectedProductSubCategory(subMatch.title);
                                    }
                                  }
                                }
                                setShowSearchDropdown(false);
                                setIsMobileSearchOpen(false);
                                setSearchQuery("");
                              }}
                              className="w-full flex items-center gap-3 p-2 hover:bg-brand/5 rounded-xl transition-all text-left group"
                            >
                              <div className="w-12 h-12 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                                <img src={result.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="text-sm font-bold text-gray-800 truncate">{result.title}</p>
                                <p className="text-[10px] font-medium text-gray-400 uppercase tracking-wider">{result.category}</p>
                              </div>
                              <div className="p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                <ArrowRight size={16} className="text-brand" />
                              </div>
                            </button>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

              <nav className="border-t border-gray-100 flex items-center justify-center py-1.5 md:py-1.5 overflow-hidden">
                <motion.div 
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="flex items-center space-x-6 md:space-x-16 lg:space-x-20 overflow-x-auto no-scrollbar whitespace-nowrap px-4 justify-center touch-pan-x translate-z-0"
                >
                  {navItems.map((item) => (
                    <motion.a 
                      variants={navItemVariants}
                      whileHover="hover"
                      whileTap="tap"
                      key={item} 
                      href="#" 
                      onClick={(e) => {
                        e.preventDefault();
                      }}
                      className="text-[15px] md:text-lg font-bold text-gray-800 hover:text-brand transition-all tracking-tight flex-shrink-0"
                    >
                      {item}
                    </motion.a>
                  ))}
                </motion.div>
              </nav>
        </div>
      </header>

      {/* Hero Carousel Section */}
      <section className="relative overflow-hidden group h-[300px] md:h-[450px] lg:h-[600px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSlide}
            drag="x"
            dragDirectionLock
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={(_, info) => {
              const swipe = info.offset.x;
              const velocity = info.velocity.x;
              if (swipe > 30 || velocity > 300) {
                prevSlide();
              } else if (swipe < -30 || velocity < -300) {
                nextSlide();
              }
            }}
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ 
              opacity: { duration: 0.3 },
              scale: { duration: 0.5 }
            }}
            className="absolute inset-0 cursor-grab active:cursor-grabbing touch-pan-y z-0"
          >
            <img 
              src={heroSlides[activeSlide].img} 
              className="w-full h-full object-cover" 
              alt={`Slide ${activeSlide + 1}`}
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </AnimatePresence>

        {/* Carousel Controls */}
        <button 
          onClick={prevSlide}
          className="absolute left-3 md:left-8 top-1/2 -translate-y-1/2 w-10 h-10 md:w-16 md:h-16 bg-black/10 hover:bg-black/20 text-white rounded-full flex items-center justify-center transition-all backdrop-blur-[2px] z-10"
        >
          <ChevronLeft size={24} className="md:w-9 md:h-9" strokeWidth={1.5} />
        </button>
        <button 
          onClick={nextSlide}
          className="absolute right-3 md:right-8 top-1/2 -translate-y-1/2 w-10 h-10 md:w-16 md:h-16 bg-black/10 hover:bg-black/20 text-white rounded-full flex items-center justify-center transition-all backdrop-blur-[2px] z-10"
        >
          <ChevronRight size={24} className="md:w-9 md:h-9" strokeWidth={1.5} />
        </button>

        {/* Carousel Indicators - Pill shaped from screenshot */}
        <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 flex items-center z-10">
          <div className="bg-[#b3a498]/60 backdrop-blur-md px-4 md:px-6 py-1.5 md:py-2 rounded-full flex items-center gap-2 md:gap-3">
            {heroSlides.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveSlide(i)}
                className={`h-2 md:h-2.5 w-2 md:w-2.5 rounded-full transition-all duration-300 ${i === activeSlide ? "bg-white scale-110 md:scale-125" : "bg-white/40"}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Main Home Content */}
      <main className="flex-1 bg-white pb-20 md:pb-24">
        <div className="max-w-[1440px] mx-auto px-4 md:px-10 py-8 md:py-12">
          {/* Shop By Categories Title */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-12 md:mb-20"
          >
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 tracking-tight">
              <span className="relative pb-2">
                Shop
                <span className="absolute -bottom-1.5 left-0 w-full h-1 bg-brand rounded-full" />
              </span>
              {" "}By Categories
            </h1>
          </motion.div>

          {/* Categories Grid */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-x-6 gap-y-10"
          >
            {categories.map((category) => (
              <motion.div
                variants={itemVariants}
                key={category.id}
                className="group cursor-pointer flex flex-col items-center text-center"
                onClick={() => {
                  if (category.title === "Mattresses") {
                    setSelectedSubCategory("Mattresses");
                    setSelectedProductSubCategory("All Mattresses");
                  } else if (
                      category.title === "Bed Back Cushion" ||
                      category.title === "Sofas" ||
                      category.title === "Furniture" ||
                      category.title === "Curtains") {
                    setSelectedSubCategory(category.title);
                  }
                }}
              >
                <div className="relative w-full md:max-w-[220px] mx-auto aspect-square overflow-hidden rounded-[24px] bg-white shadow-md ring-1 ring-black/[0.03] group-hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2">
                  <img
                    src={category.img}
                    alt={category.title}
                    className="w-full h-full object-cover transform transition-all duration-700 ease-out group-hover:scale-110 group-hover:brightness-[1.02]"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle overlay for depth */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/[0.02] transition-colors duration-500" />
                </div>
                <div className="mt-5 max-w-[160px]">
                  <p className="text-[17px] font-semibold text-gray-700 leading-tight group-hover:text-brand transition-colors">
                    {category.title}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Furnitures Section - Redesigned as "Shop by Collection" */}
          <div className="mt-16 md:mt-24">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-10 md:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6"
            >
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-[2px] bg-brand" />
                  <span className="text-[10px] font-black text-brand tracking-[0.3em] uppercase">The Elite Gallery</span>
                </div>
                <h1 className="text-3xl md:text-5xl font-black text-gray-950 tracking-tighter leading-none">
                  Shop by <span className="text-brand italic">Category</span>
                </h1>
                <p className="text-gray-500 text-xs md:text-sm font-medium">Explore our curated sub-collections designed for modern living.</p>
              </div>
            </motion.div>

            {/* Filter Tabs - Redesigned with Icons */}
            <div className="relative mb-10 md:mb-16">
              <div className="flex overflow-x-auto no-scrollbar gap-4 md:gap-8 pb-4 -mx-4 px-4 md:mx-0 md:px-0 items-center justify-start md:justify-center">
                {[
                  { name: "Sofas", icon: Armchair },
                  { name: "Bed Back Cushion", icon: Layers },
                  { name: "Mattresses", icon: Bed },
                  { name: "Furniture", icon: Lamp },
                  { name: "Curtains", icon: Waves }
                ].map((tab) => (
                  <button
                    key={tab.name}
                    onClick={() => setSelectedFurnitureTab(tab.name)}
                    className={`group flex flex-col items-center gap-3 transition-all duration-500 min-w-[80px] md:min-w-[120px] ${
                      selectedFurnitureTab === tab.name ? "opacity-100" : "opacity-40 hover:opacity-100"
                    }`}
                  >
                    <div className={`w-14 h-14 md:w-20 md:h-20 rounded-full flex items-center justify-center transition-all duration-500 ${
                      selectedFurnitureTab === tab.name 
                        ? "bg-brand text-white shadow-[0_15px_30px_-5px_rgba(183,151,130,0.5)] scale-110 rotate-6" 
                        : "bg-gray-50 text-gray-400 group-hover:bg-white group-hover:shadow-xl"
                    }`}>
                      <tab.icon size={selectedFurnitureTab === tab.name ? 28 : 24} className="md:w-8 md:h-8" strokeWidth={1.5} />
                    </div>
                    <span className={`text-[10px] md:text-xs font-black uppercase tracking-widest whitespace-nowrap transition-colors duration-300 ${
                      selectedFurnitureTab === tab.name ? "text-brand" : "text-gray-500"
                    }`}>
                      {tab.name}
                    </span>
                    {selectedFurnitureTab === tab.name && (
                      <motion.div layoutId="tab-underline" className="w-8 h-1 bg-brand rounded-full mt-1" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Furniture Grid - Grid layout on all devices, matching main categories style */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 gap-6 md:gap-8 min-h-[250px]"
            >
              <AnimatePresence mode="wait">
                {furnitureItems[selectedFurnitureTab] && furnitureItems[selectedFurnitureTab].map((item, idx) => (
                  <motion.div
                    key={`${selectedFurnitureTab}-${item.id}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                    className="group relative flex flex-col cursor-pointer"
                    onClick={() => {
                      setSelectedSubCategory(selectedFurnitureTab);
                      setSelectedProductSubCategory(item.title);
                    }}
                  >
                    <div className="relative w-full aspect-[4/5] overflow-hidden rounded-[32px] bg-gray-50 border border-gray-100 shadow-sm group-hover:shadow-2xl group-hover:-translate-y-2 transition-all duration-500">
                      <img 
                        src={item.img} 
                        alt={item.title} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                         <div className="flex items-center gap-2 text-white">
                           <span className="text-[10px] font-black uppercase tracking-widest">Shop Now</span>
                           <ArrowRight size={14} />
                         </div>
                      </div>
                    </div>
                    <div className="mt-5 px-2">
                      <h4 className="text-[15px] font-black text-gray-900 group-hover:text-brand transition-colors leading-tight mb-1">
                        {item.title}
                      </h4>
                      <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">
                        {selectedFurnitureTab} Sub-Collection
                      </p>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>

          {/* Why Kalyankar? Trust Bar - Relocated to Bottom for better flow */}
          <section className="mt-20 md:mt-32 pt-16 border-t border-gray-100 pb-12">
            <div className="bg-gray-50 rounded-[40px] p-8 md:p-14 flex flex-col md:flex-row items-center gap-10 group hover:shadow-xl transition-all duration-500">
              <div className="flex-shrink-0 text-brand text-center md:text-left">
                <h3 className="text-3xl md:text-4xl font-black italic transform -skew-x-12 leading-none">Why<br /><span className="text-gray-900 not-italic">Kalyankar?</span></h3>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-4">Legacy of Comfort</p>
              </div>
              <div className="flex-1 grid grid-cols-2 sm:grid-cols-4 gap-6 md:gap-10 w-full">
                {[
                  { icon: Smile, label: '5 Lakh+ Happy Customers', desc: 'Trust of half a million lives' },
                  { icon: Truck, label: 'Swift Delivery', desc: 'Doorstep delivery across India' },
                  { icon: Wrench, label: 'Free Installation', desc: 'Expert assembly by masters' },
                  { icon: ShieldCheck, label: 'Premier Warranty', desc: 'Unmatched long-term peace' },
                ].map((item) => (
                  <div key={item.label} className="flex flex-col items-center md:items-start text-center md:text-left group/item cursor-default">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-brand mb-4 group-hover/item:bg-brand group-hover/item:text-white group-hover/item:rotate-6 transition-all duration-300">
                      <item.icon className="w-6 h-6 md:w-7 md:h-7" />
                    </div>
                    <span className="text-xs md:text-sm font-black text-gray-900 leading-tight mb-1">{item.label}</span>
                    <span className="text-[9px] md:text-[10px] font-bold text-gray-400 uppercase tracking-tighter">{item.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>

        {/* Optimized Floating UI for Mobile */}
        <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-gray-100 px-6 py-2 flex items-center justify-between shadow-[0_-8px_30px_rgba(0,0,0,0.05)]">
          {[
            { icon: Home, label: 'Home', active: true, action: () => window.scrollTo({ top: 0, behavior: 'smooth' }) },
            { icon: Search, label: 'Search', action: () => { window.scrollTo({ top: 0, behavior: 'smooth' }); setIsMobileSearchOpen(true); } },
            { icon: Heart, label: 'Liked', action: () => { window.scrollTo({ top: 0, behavior: 'smooth' }); setShowWishlistDropdown(!showWishlistDropdown); } },
            { icon: User, label: 'Profile' }
          ].map((item, idx) => (
            <button 
              key={idx} 
              onClick={item.action}
              className={`flex flex-col items-center gap-0.5 relative ${item.active ? 'text-brand' : 'text-gray-400'}`}
            >
              <item.icon size={20} strokeWidth={item.active ? 2.5 : 2} className={item.label === 'Liked' && wishlist.length > 0 ? "text-brand fill-brand" : ""} />
              {item.label === 'Liked' && wishlist.length > 0 && (
                <span className="absolute -top-1 -right-1.5 w-4 h-4 bg-brand text-white text-[9px] font-black rounded-full flex items-center justify-center ring-2 ring-white">
                  {wishlist.length}
                </span>
              )}
              <span className="text-[10px] font-bold uppercase tracking-tighter">{item.label}</span>
            </button>
          ))}
        </div>
      </div>



      {/* Drawer Overlay for Categories */}
      <AnimatePresence>
        {selectedSubCategory && (
          <>
            {/* Backdrop with blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedSubCategory(null)}
              className="fixed inset-0 z-[100] bg-black/40 backdrop-blur-md cursor-pointer"
            />
            
            {/* Right Drawer Panel */}
            <motion.div 
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed right-0 top-0 h-full z-[101] w-full md:w-[85%] lg:w-[80%] xl:w-[80%] bg-white flex flex-col shadow-[-20px_0_50px_rgba(0,0,0,0.2)] overflow-hidden"
            >
              {/* Modal Header - Fixed at top */}
              <div className="flex-none bg-white px-4 md:px-8 py-4 md:py-6 border-b border-gray-100 flex items-center justify-between backdrop-blur-md bg-white/95 z-20">
                <div className="flex items-center gap-3 md:gap-4">
                  {selectedProductSubCategory && (
                    <button 
                      onClick={() => {
                        if (selectedSubCategory === "Mattresses") {
                          setSelectedSubCategory(null);
                          setSelectedProductSubCategory(null);
                        } else if (selectedSubCategory === "Sofas" && selectedProductSubCategory === "Feature sofa") {
                          setSelectedProductSubCategory(null);
                        } else if (selectedSubCategory === "Sofas" && (selectedProductSubCategory === "Sofa with tea table" || selectedProductSubCategory === "Sofa with lounger" || selectedProductSubCategory === "Sofa with storage box")) {
                          setSelectedProductSubCategory("Feature sofa");
                        } else {
                          setSelectedProductSubCategory(null);
                        }
                      }}
                      className="w-8 h-8 md:w-10 md:h-10 bg-white shadow-sm border border-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:text-brand transition-colors"
                    >
                      <ArrowLeft size={18} className="md:w-5 md:h-5" />
                    </button>
                  )}
                  <h2 className="text-xl md:text-3xl font-bold text-gray-800 tracking-tight relative inline-block">
                    {selectedProductSubCategory || selectedSubCategory}
                    {(!selectedProductSubCategory || selectedProductSubCategory !== "All Mattresses") && (
                      <span className="absolute -bottom-1 md:-bottom-1.5 left-0 w-8 h-1 md:h-1.5 bg-brand rounded-full" />
                    )}
                    {selectedProductSubCategory === "All Mattresses" && (
                      <span className="ml-2 md:ml-3 text-xs md:text-sm font-medium text-gray-400 align-middle hidden sm:inline-block">(23+ Products)</span>
                    )}
                  </h2>
                </div>
                <button 
                  onClick={() => {
                    setSelectedSubCategory(null);
                    setSelectedProductSubCategory(null);
                  }}
                  className="w-10 h-10 md:w-12 md:h-12 bg-white hover:bg-white/80 shadow-md border border-gray-100 rounded-full flex items-center justify-center text-gray-600 transition-all hover:rotate-90 active:scale-95"
                >
                  <X size={20} className="md:w-6 md:h-6" strokeWidth={2.5} />
                </button>
              </div>

              {/* Modal Content - Explicitly scrollable area */}
              <div className="flex-1 min-h-0 overflow-y-auto overflow-x-hidden bg-white overscroll-contain touch-pan-y custom-scrollbar">
                {selectedProductSubCategory === "All Mattresses" || 
                 selectedProductSubCategory === "L Shape Sofa" || 
                 selectedSubCategory === "Bed Back Cushion" || 
                 selectedSubCategory === "Curtains" || 
                 (selectedSubCategory === "Sofas" && selectedProductSubCategory && selectedProductSubCategory !== "Feature sofa") ||
                 (selectedSubCategory === "Furniture" && selectedProductSubCategory) ||
                 (selectedSubCategory === "Mattresses" && selectedProductSubCategory) ? (
                  <div className="p-6 md:p-8">
                    {/* Catalog Header with Enhanced Filters */}
                    <div className="flex flex-col gap-8 mb-8 md:mb-12">
                      <div className="flex flex-col gap-6">
                        {/* Title and Sort Area */}
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                          <div className="flex items-baseline gap-2 relative group">
                             <div className="relative">
                               <h2 className="text-2xl md:text-3xl font-black text-gray-800 tracking-tight">
                                 {selectedProductSubCategory === "All Mattresses" || selectedSubCategory === "Mattresses" ? "Premium Mattresses" : 
                                  selectedProductSubCategory === "L Shape Sofa" ? "L Shape Sofas" : 
                                  selectedSubCategory === "Curtains" ? "Premium Curtains" :
                                  selectedSubCategory === "Sofas" ? `${selectedProductSubCategory} Collection` :
                                  selectedProductSubCategory || selectedSubCategory}
                               </h2>
                               <div className="absolute -bottom-1 left-0 w-full h-1 bg-[#7367f0] rounded-full" />
                             </div>
                             <span className="text-xs md:text-sm font-bold text-gray-400 pl-1">({selectedSubCategory === "Curtains" ? "22+" : selectedSubCategory === "Sofas" && selectedProductSubCategory === "Bhartiya Baithak" ? "26+" : selectedSubCategory === "Sofas" && selectedProductSubCategory === "1-7 seated sofa" ? "13+" : selectedSubCategory === "Sofas" && selectedProductSubCategory === "Maharaja sofa" ? "19+" : selectedSubCategory === "Sofas" && selectedProductSubCategory === "Modern sofa set" ? "15+" : selectedSubCategory === "Sofas" && selectedProductSubCategory === "Simple sofa set" ? "4+" : selectedSubCategory === "Sofas" && selectedProductSubCategory === "Sofa cum bed" ? "9+" : selectedSubCategory === "Sofas" && selectedProductSubCategory === "L type sofa" ? "15+" : selectedSubCategory === "Sofas" && selectedProductSubCategory === "Sofa with tea table" ? "3+" : selectedSubCategory === "Sofas" && selectedProductSubCategory === "Sofa with lounger" ? "2+" : selectedSubCategory === "Sofas" && selectedProductSubCategory === "Sofa with storage box" ? "7+" : selectedSubCategory === "Furniture" && selectedProductSubCategory === "Premium Dining" ? "1+" : selectedSubCategory === "Furniture" && selectedProductSubCategory === "Elegant Living" ? "1+" : selectedSubCategory === "Furniture" && selectedProductSubCategory === "Modern Storage" ? "1+" : (selectedSubCategory === "Sofas" && (selectedProductSubCategory === "Feature sofa" || !selectedProductSubCategory)) ? "40+" : selectedSubCategory === "Sofas" ? "0+" : "46+"} Products Available)</span>
                          </div>
                          
                          <div className="flex items-center gap-2 self-start md:self-auto">
                            {!(selectedProductSubCategory === "All Mattresses") && (
                              <button className="w-[180px] md:w-[220px] px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-xs font-bold text-gray-700 flex items-center justify-between hover:border-brand transition-all shadow-sm">
                                <span>Sort By: Popularity</span>
                                <ChevronDown size={16} className="text-gray-400" />
                              </button>
                            )}
                          </div>
                        </div>

                        {/* Exact Filters from Screenshot */}
                        {selectedProductSubCategory === "L Shape Sofa" && (
                          <div className="flex items-center gap-3 overflow-x-auto no-scrollbar -mx-6 px-6 md:mx-0 md:px-0 py-2">
                             {lShapeSofaFilters.map(filter => (
                               <button 
                                 key={filter} 
                                 onClick={() => setActiveLShapeFilter(filter)}
                                 className={`px-6 py-2.5 rounded-lg border font-bold text-[11px] md:text-sm tracking-tight transition-all whitespace-nowrap active:scale-95 ${
                                   activeLShapeFilter === filter 
                                     ? "bg-white border-[#7367f0] text-[#7367f0] border-2" 
                                     : "bg-white border-[#7367f0]/20 text-[#7367f0] hover:border-[#7367f0] shadow-sm"
                                 }`}
                               >
                                 {filter}
                               </button>
                             ))}
                          </div>
                        )}
                                                 {/* Mattress Filter Section removed as requested */}
                      </div>
                    </div>

                    {/* Products Grid */}
                    <motion.div 
                      variants={containerVariants}
                      initial="hidden"
                      animate="visible"
                      className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 gap-4 md:gap-8 min-h-[400px]"
                    >
                      <AnimatePresence mode="popLayout" initial={false}>
                        {selectedProductSubCategory === "L Shape Sofa" ? (
                          lShapeSofaProducts.map((product) => (
                            <motion.div 
                              layout
                              variants={itemVariants}
                              key={product.id}
                              onClick={() => setSelectedProduct(product)}
                              className="bg-white overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all group flex flex-col relative cursor-pointer"
                            >
                              {/* Badger for Sofa */}
                               {product.badge && (
                                  <div className="absolute top-4 left-0 z-10">
                                    <div className="bg-brand text-white text-[9px] font-black px-3 py-1 tracking-widest uppercase shadow-sm">
                                      {product.badge}
                                    </div>
                                  </div>
                                )}

                              {/* Image Container */}
                              <div className="relative aspect-square bg-white">
                                <img src={product.img} alt={product.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                
                                {/* Wishlist Button - Exactly at bottom right corner of image */}
                                <button 
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    toggleWishlist(product.id);
                                  }}
                                  className="absolute bottom-2.5 right-2.5 z-10 w-9 h-9 bg-white/90 backdrop-blur-sm shadow-md rounded-full flex items-center justify-center transition-all hover:scale-110 active:scale-90 border border-gray-100"
                                >
                                  <Heart 
                                    size={18} 
                                    className={`${wishlist.includes(product.id) ? "fill-red-500 text-red-500" : "text-gray-400"}`} 
                                    strokeWidth={1.5}
                                  />
                                </button>
                              </div>

                              {/* Product Info */}
                              <div className="p-4 md:p-5 flex-1 flex flex-col items-start bg-white min-h-0">
                                <h4 className="text-[13px] md:text-[14px] font-bold text-gray-700 leading-tight mb-4 group-hover:text-brand transition-colors">
                                  {product.title}
                                </h4>

                                <div className="w-full flex items-center gap-2.5 mt-auto pb-2">
                                   <span className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">Premium Collection</span>
                                </div>
                              </div>
                            </motion.div>
                          ))
                        ) : selectedSubCategory === "Bed Back Cushion" ? (
                          bedBackCushionProducts.map((product) => (
                            <motion.div 
                              layout
                              variants={itemVariants}
                              key={product.id}
                              onClick={() => setSelectedProduct(product)}
                              className="bg-white overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all group flex flex-col relative cursor-pointer"
                            >
                               {product.badge && (
                                  <div className="absolute top-4 left-0 z-10">
                                    <div className="bg-brand text-white text-[9px] font-black px-3 py-1 tracking-widest uppercase shadow-sm">
                                      {product.badge}
                                    </div>
                                  </div>
                                )}
                              <div className="relative aspect-square bg-white">
                                <img src={product.img} alt={product.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                <button 
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    toggleWishlist(product.id);
                                  }}
                                  className="absolute bottom-2.5 right-2.5 z-10 w-9 h-9 bg-white/90 backdrop-blur-sm shadow-md rounded-full flex items-center justify-center transition-all hover:scale-110 active:scale-90 border border-gray-100"
                                >
                                  <Heart 
                                    size={18} 
                                    className={`${wishlist.includes(product.id) ? "fill-red-500 text-red-500" : "text-gray-400"}`} 
                                    strokeWidth={1.5}
                                  />
                                </button>
                              </div>
                              <div className="p-4 md:p-5 flex-1 flex flex-col items-start bg-white min-h-0">
                                <h4 className="text-[13px] md:text-[14px] font-bold text-gray-700 leading-tight mb-4 group-hover:text-brand transition-colors">
                                  {product.title}
                                </h4>
                                <div className="w-full flex items-center gap-2.5 mt-auto pb-2">
                                   <span className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">Premium Support Series</span>
                                </div>
                              </div>
                            </motion.div>
                          ))
                        ) : (selectedSubCategory === "Furniture") ? (
                          [...premiumDiningProducts, ...elegantLivingProducts, ...modernStorageProducts].filter(p => !selectedProductSubCategory || (selectedProductSubCategory === "Premium Dining" && premiumDiningProducts.some(dp => dp.id === p.id)) || (selectedProductSubCategory === "Elegant Living" && elegantLivingProducts.some(lp => lp.id === p.id)) || (selectedProductSubCategory === "Modern Storage" && modernStorageProducts.some(sp => sp.id === p.id)) || p.title.toLowerCase().includes(selectedProductSubCategory.toLowerCase())).map((product) => (
                            <motion.div 
                              layout
                              variants={itemVariants}
                              key={product.id}
                              onClick={() => setSelectedProduct(product)}
                              className="bg-white overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all group flex flex-col relative cursor-pointer"
                            >
                               {product.badge && (
                                  <div className="absolute top-4 left-0 z-10">
                                    <div className="bg-brand text-white text-[9px] font-black px-3 py-1 tracking-widest uppercase shadow-sm">
                                      {product.badge}
                                    </div>
                                  </div>
                                )}
                              <div className="relative aspect-square bg-white">
                                <img src={product.img} alt={product.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
                                <button 
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    toggleWishlist(product.id);
                                  }}
                                  className="absolute bottom-2.5 right-2.5 z-10 w-9 h-9 bg-white/90 backdrop-blur-sm shadow-md rounded-full flex items-center justify-center transition-all hover:scale-110 active:scale-90 border border-gray-100"
                                >
                                  <Heart 
                                    size={18} 
                                    className={`${wishlist.includes(product.id) ? "fill-red-500 text-red-500" : "text-gray-400"}`} 
                                    strokeWidth={1.5}
                                  />
                                </button>
                              </div>
                              <div className="p-4 md:p-5 flex-1 flex flex-col items-start bg-white min-h-0">
                                <h4 className="text-[13px] md:text-[14px] font-bold text-gray-700 leading-tight mb-4 group-hover:text-brand transition-colors">
                                  {product.title}
                                </h4>
                                <div className="w-full flex items-center gap-2.5 mt-auto pb-2">
                                   <span className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">Premium Collection</span>
                                </div>
                              </div>
                            </motion.div>
                          ))
                        ) : (selectedSubCategory === "Sofas" && selectedProductSubCategory === "Bhartiya Baithak") ? (
                          bhartiyaBaithakProducts.map((product) => (
                            <motion.div 
                              layout
                              variants={itemVariants}
                              key={product.id}
                              onClick={() => setSelectedProduct(product)}
                              className="bg-white overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all group flex flex-col relative cursor-pointer"
                            >
                               {product.badge && (
                                  <div className="absolute top-4 left-0 z-10">
                                    <div className="bg-brand text-white text-[9px] font-black px-3 py-1 tracking-widest uppercase shadow-sm">
                                      {product.badge}
                                    </div>
                                  </div>
                                )}
                              <div className="relative aspect-square bg-white">
                                <img src={product.img} alt={product.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
                                <button 
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    toggleWishlist(product.id);
                                  }}
                                  className="absolute bottom-2.5 right-2.5 z-10 w-9 h-9 bg-white/90 backdrop-blur-sm shadow-md rounded-full flex items-center justify-center transition-all hover:scale-110 active:scale-90 border border-gray-100"
                                >
                                  <Heart 
                                    size={18} 
                                    className={`${wishlist.includes(product.id) ? "fill-red-500 text-red-500" : "text-gray-400"}`} 
                                    strokeWidth={1.5}
                                  />
                                </button>
                              </div>
                              <div className="p-4 md:p-5 flex-1 flex flex-col items-start bg-white min-h-0">
                                <h4 className="text-[13px] md:text-[14px] font-bold text-gray-700 leading-tight mb-4 group-hover:text-brand transition-colors">
                                  {product.title}
                                </h4>
                                <div className="w-full flex items-center gap-2.5 mt-auto pb-2">
                                   <span className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">Bhartiya Baithak Series</span>
                                </div>
                              </div>
                            </motion.div>
                          ))
                        ) : (selectedSubCategory === "Sofas" && selectedProductSubCategory === "1-7 seated sofa") ? (
                          seatedSofaProducts.map((product) => (
                            <motion.div 
                              layout
                              variants={itemVariants}
                              key={product.id}
                              onClick={() => setSelectedProduct(product)}
                              className="bg-white overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all group flex flex-col relative cursor-pointer"
                            >
                               {product.badge && (
                                  <div className="absolute top-4 left-0 z-10">
                                    <div className="bg-brand text-white text-[9px] font-black px-3 py-1 tracking-widest uppercase shadow-sm">
                                      {product.badge}
                                    </div>
                                  </div>
                                )}
                              <div className="relative aspect-square bg-white">
                                <img src={product.img} alt={product.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
                                <button 
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    toggleWishlist(product.id);
                                  }}
                                  className="absolute bottom-2.5 right-2.5 z-10 w-9 h-9 bg-white/90 backdrop-blur-sm shadow-md rounded-full flex items-center justify-center transition-all hover:scale-110 active:scale-90 border border-gray-100"
                                >
                                  <Heart 
                                    size={18} 
                                    className={`${wishlist.includes(product.id) ? "fill-red-500 text-red-500" : "text-gray-400"}`} 
                                    strokeWidth={1.5}
                                  />
                                </button>
                              </div>
                              <div className="p-4 md:p-5 flex-1 flex flex-col items-start bg-white min-h-0">
                                <h4 className="text-[13px] md:text-[14px] font-bold text-gray-700 leading-tight mb-4 group-hover:text-brand transition-colors">
                                  {product.title}
                                </h4>
                                <div className="w-full flex items-center gap-2.5 mt-auto pb-2">
                                   <span className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">1-7 Seated Series</span>
                                </div>
                              </div>
                            </motion.div>
                          ))
                        ) : (selectedSubCategory === "Sofas" && selectedProductSubCategory === "Modern sofa set") ? (
                          modernSofaProducts.map((product) => (
                            <motion.div 
                              layout
                              variants={itemVariants}
                              key={product.id}
                              onClick={() => setSelectedProduct(product)}
                              className="bg-white overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all group flex flex-col relative cursor-pointer"
                            >
                               {product.badge && (
                                  <div className="absolute top-4 left-0 z-10">
                                    <div className="bg-brand text-white text-[9px] font-black px-3 py-1 tracking-widest uppercase shadow-sm">
                                      {product.badge}
                                    </div>
                                  </div>
                                )}
                              <div className="relative aspect-square bg-white">
                                <img src={product.img} alt={product.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
                                <button 
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    toggleWishlist(product.id);
                                  }}
                                  className="absolute bottom-2.5 right-2.5 z-10 w-9 h-9 bg-white/90 backdrop-blur-sm shadow-md rounded-full flex items-center justify-center transition-all hover:scale-110 active:scale-90 border border-gray-100"
                                >
                                  <Heart 
                                    size={18} 
                                    className={`${wishlist.includes(product.id) ? "fill-red-500 text-red-500" : "text-gray-400"}`} 
                                    strokeWidth={1.5}
                                  />
                                </button>
                              </div>
                              <div className="p-4 md:p-5 flex-1 flex flex-col items-start bg-white min-h-0">
                                <h4 className="text-[13px] md:text-[14px] font-bold text-gray-700 leading-tight mb-4 group-hover:text-brand transition-colors">
                                  {product.title}
                                </h4>
                                <div className="w-full flex items-center gap-2.5 mt-auto pb-2">
                                   <span className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">Modern Luxury Series</span>
                                </div>
                              </div>
                            </motion.div>
                          ))
                        ) : (selectedSubCategory === "Sofas" && selectedProductSubCategory === "Simple sofa set") ? (
                          simpleSofaProducts.map((product) => (
                            <motion.div 
                              layout
                              variants={itemVariants}
                              key={product.id}
                              onClick={() => setSelectedProduct(product)}
                              className="bg-white overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all group flex flex-col relative cursor-pointer"
                            >
                               {product.badge && (
                                  <div className="absolute top-4 left-0 z-10">
                                    <div className="bg-brand text-white text-[9px] font-black px-3 py-1 tracking-widest uppercase shadow-sm">
                                      {product.badge}
                                    </div>
                                  </div>
                                )}
                              <div className="relative aspect-square bg-white">
                                <img src={product.img} alt={product.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
                                <button 
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    toggleWishlist(product.id);
                                  }}
                                  className="absolute bottom-2.5 right-2.5 z-10 w-9 h-9 bg-white/90 backdrop-blur-sm shadow-md rounded-full flex items-center justify-center transition-all hover:scale-110 active:scale-90 border border-gray-100"
                                >
                                  <Heart 
                                    size={18} 
                                    className={`${wishlist.includes(product.id) ? "fill-red-500 text-red-500" : "text-gray-400"}`} 
                                    strokeWidth={1.5}
                                  />
                                </button>
                              </div>
                              <div className="p-4 md:p-5 flex-1 flex flex-col items-start bg-white min-h-0">
                                <h4 className="text-[13px] md:text-[14px] font-bold text-gray-700 leading-tight mb-4 group-hover:text-brand transition-colors">
                                  {product.title}
                                </h4>
                                <div className="w-full flex items-center gap-2.5 mt-auto pb-2">
                                   <span className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">Simple Comfort Series</span>
                                </div>
                              </div>
                            </motion.div>
                          ))
                        ) : (selectedSubCategory === "Sofas" && selectedProductSubCategory === "Sofa cum bed") ? (
                          sofaCumBedProducts.map((product) => (
                            <motion.div 
                              layout
                              variants={itemVariants}
                              key={product.id}
                              onClick={() => setSelectedProduct(product)}
                              className="bg-white overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all group flex flex-col relative cursor-pointer"
                            >
                               {product.badge && (
                                  <div className="absolute top-4 left-0 z-10">
                                    <div className="bg-brand text-white text-[9px] font-black px-3 py-1 tracking-widest uppercase shadow-sm">
                                      {product.badge}
                                    </div>
                                  </div>
                                )}
                              <div className="relative aspect-square bg-white">
                                <img src={product.img} alt={product.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
                                <button 
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    toggleWishlist(product.id);
                                  }}
                                  className="absolute bottom-2.5 right-2.5 z-10 w-9 h-9 bg-white/90 backdrop-blur-sm shadow-md rounded-full flex items-center justify-center transition-all hover:scale-110 active:scale-90 border border-gray-100"
                                >
                                  <Heart 
                                    size={18} 
                                    className={`${wishlist.includes(product.id) ? "fill-red-500 text-red-500" : "text-gray-400"}`} 
                                    strokeWidth={1.5}
                                  />
                                </button>
                              </div>
                              <div className="p-4 md:p-5 flex-1 flex flex-col items-start bg-white min-h-0">
                                <h4 className="text-[13px] md:text-[14px] font-bold text-gray-700 leading-tight mb-4 group-hover:text-brand transition-colors">
                                  {product.title}
                                </h4>
                                <div className="w-full flex items-center gap-2.5 mt-auto pb-2">
                                   <span className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">Sofa Cum Bed Series</span>
                                </div>
                              </div>
                            </motion.div>
                          ))
                        ) : (selectedSubCategory === "Sofas" && selectedProductSubCategory === "L type sofa") ? (
                          lTypeSofaProducts.map((product) => (
                            <motion.div 
                              layout
                              variants={itemVariants}
                              key={product.id}
                              onClick={() => setSelectedProduct(product)}
                              className="bg-white overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all group flex flex-col relative cursor-pointer"
                            >
                               {product.badge && (
                                  <div className="absolute top-4 left-0 z-10">
                                    <div className="bg-brand text-white text-[9px] font-black px-3 py-1 tracking-widest uppercase shadow-sm">
                                      {product.badge}
                                    </div>
                                  </div>
                                )}
                              <div className="relative aspect-square bg-white">
                                <img src={product.img} alt={product.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
                                <button 
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    toggleWishlist(product.id);
                                  }}
                                  className="absolute bottom-2.5 right-2.5 z-10 w-9 h-9 bg-white/90 backdrop-blur-sm shadow-md rounded-full flex items-center justify-center transition-all hover:scale-110 active:scale-90 border border-gray-100"
                                >
                                  <Heart 
                                    size={18} 
                                    className={`${wishlist.includes(product.id) ? "fill-red-500 text-red-500" : "text-gray-400"}`} 
                                    strokeWidth={1.5}
                                  />
                                </button>
                              </div>
                              <div className="p-4 md:p-5 flex-1 flex flex-col items-start bg-white min-h-0">
                                <h4 className="text-[13px] md:text-[14px] font-bold text-gray-700 leading-tight mb-4 group-hover:text-brand transition-colors">
                                  {product.title}
                                </h4>
                                <div className="w-full flex items-center gap-2.5 mt-auto pb-2">
                                   <span className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">L-Type Sectional Series</span>
                                </div>
                              </div>
                            </motion.div>
                          ))
                        ) : (selectedSubCategory === "Sofas" && selectedProductSubCategory === "Maharaja sofa") ? (
                          maharajaSofaProducts.map((product, idx) => (
                            <motion.div 
                              layout
                              key={product.id}
                              initial={{ opacity: 0, scale: 0.9 }}
                              animate={{ opacity: 1, scale: 1 }}
                              exit={{ opacity: 0, scale: 0.9 }}
                              transition={{ duration: 0.3, delay: idx * 0.1 }}
                              onClick={() => setSelectedProduct(product)}
                              className="bg-white overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all group flex flex-col relative cursor-pointer"
                            >
                               {product.badge && (
                                  <div className="absolute top-4 left-0 z-10">
                                    <div className="bg-brand text-white text-[9px] font-black px-3 py-1 tracking-widest uppercase shadow-sm">
                                      {product.badge}
                                    </div>
                                  </div>
                                )}
                              <div className="relative aspect-square bg-white">
                                <img src={product.img} alt={product.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
                                <button 
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    toggleWishlist(product.id);
                                  }}
                                  className="absolute bottom-2.5 right-2.5 z-10 w-9 h-9 bg-white/90 backdrop-blur-sm shadow-md rounded-full flex items-center justify-center transition-all hover:scale-110 active:scale-90 border border-gray-100"
                                >
                                  <Heart 
                                    size={18} 
                                    className={`${wishlist.includes(product.id) ? "fill-red-500 text-red-500" : "text-gray-400"}`} 
                                    strokeWidth={1.5}
                                  />
                                </button>
                              </div>
                              <div className="p-4 md:p-5 flex-1 flex flex-col items-start bg-white min-h-0">
                                <h4 className="text-[13px] md:text-[14px] font-bold text-gray-700 leading-tight mb-4 group-hover:text-brand transition-colors">
                                  {product.title}
                                </h4>
                                <div className="w-full flex items-center gap-2.5 mt-auto pb-2">
                                   <span className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">Maharaja Palace Series</span>
                                </div>
                              </div>
                            </motion.div>
                          ))
                        ) : (selectedSubCategory === "Sofas" && selectedProductSubCategory === "Sofa with tea table") ? (
                          sofaWithTeaTableProducts.map((product) => (
                            <motion.div 
                              layout
                              variants={itemVariants}
                              key={product.id}
                              onClick={() => setSelectedProduct(product)}
                              className="bg-white overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all group flex flex-col relative cursor-pointer"
                            >
                               {product.badge && (
                                  <div className="absolute top-4 left-0 z-10">
                                    <div className="bg-brand text-white text-[9px] font-black px-3 py-1 tracking-widest uppercase shadow-sm">
                                      {product.badge}
                                    </div>
                                  </div>
                                )}
                              <div className="relative aspect-square bg-white">
                                <img src={product.img} alt={product.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
                                <button 
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    toggleWishlist(product.id);
                                  }}
                                  className="absolute bottom-2.5 right-2.5 z-10 w-9 h-9 bg-white/90 backdrop-blur-sm shadow-md rounded-full flex items-center justify-center transition-all hover:scale-110 active:scale-90 border border-gray-100"
                                >
                                  <Heart 
                                    size={18} 
                                    className={`${wishlist.includes(product.id) ? "fill-red-500 text-red-500" : "text-gray-400"}`} 
                                    strokeWidth={1.5}
                                  />
                                </button>
                              </div>
                              <div className="p-4 md:p-5 flex-1 flex flex-col items-start bg-white min-h-0">
                                <h4 className="text-[13px] md:text-[14px] font-bold text-gray-700 leading-tight mb-4 group-hover:text-brand transition-colors">
                                  {product.title}
                                </h4>
                                <div className="w-full flex items-center gap-2.5 mt-auto pb-2">
                                   <span className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">Tea Table Series</span>
                                </div>
                              </div>
                            </motion.div>
                          ))
                        ) : (selectedSubCategory === "Sofas" && selectedProductSubCategory === "Sofa with lounger") ? (
                          sofaWithLoungerProducts.map((product) => (
                            <motion.div 
                              layout
                              variants={itemVariants}
                              key={product.id}
                              onClick={() => setSelectedProduct(product)}
                              className="bg-white overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all group flex flex-col relative cursor-pointer"
                            >
                               {product.badge && (
                                  <div className="absolute top-4 left-0 z-10">
                                    <div className="bg-brand text-white text-[9px] font-black px-3 py-1 tracking-widest uppercase shadow-sm">
                                      {product.badge}
                                    </div>
                                  </div>
                                )}
                              <div className="relative aspect-square bg-white">
                                <img src={product.img} alt={product.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
                                <button 
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    toggleWishlist(product.id);
                                  }}
                                  className="absolute bottom-2.5 right-2.5 z-10 w-9 h-9 bg-white/90 backdrop-blur-sm shadow-md rounded-full flex items-center justify-center transition-all hover:scale-110 active:scale-90 border border-gray-100"
                                >
                                  <Heart 
                                    size={18} 
                                    className={`${wishlist.includes(product.id) ? "fill-red-500 text-red-500" : "text-gray-400"}`} 
                                    strokeWidth={1.5}
                                  />
                                </button>
                              </div>
                              <div className="p-4 md:p-5 flex-1 flex flex-col items-start bg-white min-h-0">
                                <h4 className="text-[13px] md:text-[14px] font-bold text-gray-700 leading-tight mb-4 group-hover:text-brand transition-colors">
                                  {product.title}
                                </h4>
                                <div className="w-full flex items-center gap-2.5 mt-auto pb-2">
                                   <span className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">Lounger Series</span>
                                </div>
                              </div>
                            </motion.div>
                          ))
                        ) : (selectedSubCategory === "Sofas" && selectedProductSubCategory === "Sofa with storage box") ? (
                          sofaWithStorageBoxProducts.map((product) => (
                            <motion.div 
                              layout
                              variants={itemVariants}
                              key={product.id}
                              onClick={() => setSelectedProduct(product)}
                              className="bg-white overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all group flex flex-col relative cursor-pointer"
                            >
                               {product.badge && (
                                  <div className="absolute top-4 left-0 z-10">
                                    <div className="bg-brand text-white text-[9px] font-black px-3 py-1 tracking-widest uppercase shadow-sm">
                                      {product.badge}
                                    </div>
                                  </div>
                                )}
                              <div className="relative aspect-square bg-white">
                                <img src={product.img} alt={product.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
                                <button 
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    toggleWishlist(product.id);
                                  }}
                                  className="absolute bottom-2.5 right-2.5 z-10 w-9 h-9 bg-white/90 backdrop-blur-sm shadow-md rounded-full flex items-center justify-center transition-all hover:scale-110 active:scale-90 border border-gray-100"
                                >
                                  <Heart 
                                    size={18} 
                                    className={`${wishlist.includes(product.id) ? "fill-red-500 text-red-500" : "text-gray-400"}`} 
                                    strokeWidth={1.5}
                                  />
                                </button>
                              </div>
                              <div className="p-4 md:p-5 flex-1 flex flex-col items-start bg-white min-h-0">
                                <h4 className="text-[13px] md:text-[14px] font-bold text-gray-700 leading-tight mb-4 group-hover:text-brand transition-colors">
                                  {product.title}
                                </h4>
                                <div className="w-full flex items-center gap-2.5 mt-auto pb-2">
                                   <span className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">Storage Box Series</span>
                                </div>
                              </div>
                            </motion.div>
                          ))
                        ) : selectedSubCategory === "Sofas" ? (
                          <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="col-span-full py-20 flex flex-col items-center justify-center text-center bg-gray-50/50 rounded-[40px] border-2 border-dashed border-gray-200"
                          >
                             <div className="w-20 h-20 bg-white rounded-full shadow-xl flex items-center justify-center mb-6 text-brand">
                               <Sparkles size={32} />
                             </div>
                             <h3 className="text-2xl font-black text-gray-900 tracking-tight mb-2">{selectedProductSubCategory || selectedSubCategory} Collection</h3>
                             <p className="text-gray-500 font-medium max-w-xs mx-auto text-sm">Our artisans are crafting something extraordinary. This collection will be unveiled soon.</p>
                             <button 
                               onClick={() => setSelectedSubCategory("Sofas")}
                               className="mt-8 px-8 py-3 bg-brand text-white rounded-full text-xs font-black uppercase tracking-widest hover:scale-105 transition-all shadow-lg shadow-brand/20"
                             >
                               Explore Sofas Instead
                             </button>
                          </motion.div>
                        ) : selectedSubCategory === "Curtains" ? (
                          curtainProducts.map((product, idx) => (
                            <motion.div 
                              layout
                              key={product.id}
                              initial={{ opacity: 0, scale: 0.9 }}
                              animate={{ opacity: 1, scale: 1 }}
                              exit={{ opacity: 0, scale: 0.9 }}
                              transition={{ duration: 0.3, delay: idx * 0.1 }}
                              onClick={() => setSelectedProduct(product)}
                              className="bg-white overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all group flex flex-col relative cursor-pointer"
                            >
                               {product.badge && (
                                  <div className="absolute top-4 left-0 z-10">
                                    <div className="bg-brand text-white text-[9px] font-black px-3 py-1 tracking-widest uppercase shadow-sm">
                                      {product.badge}
                                    </div>
                                  </div>
                                )}
                              <div className="relative aspect-square bg-white">
                                <img src={product.img} alt={product.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                <button 
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    toggleWishlist(product.id);
                                  }}
                                  className="absolute bottom-2.5 right-2.5 z-10 w-9 h-9 bg-white/90 backdrop-blur-sm shadow-md rounded-full flex items-center justify-center transition-all hover:scale-110 active:scale-90 border border-gray-100"
                                >
                                  <Heart 
                                    size={18} 
                                    className={`${wishlist.includes(product.id) ? "fill-red-500 text-red-500" : "text-gray-400"}`} 
                                    strokeWidth={1.5}
                                  />
                                </button>
                              </div>
                              <div className="p-4 md:p-5 flex-1 flex flex-col items-start bg-white min-h-0">
                                <h4 className="text-[13px] md:text-[14px] font-bold text-gray-700 leading-tight mb-4 group-hover:text-brand transition-colors">
                                  {product.title}
                                </h4>
                                <div className="w-full flex items-center gap-2.5 mt-auto pb-2">
                                   <span className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">Living Accents Collection</span>
                                </div>
                              </div>
                            </motion.div>
                          ))
                        ) : filteredMattresses.length > 0 ? (
                          filteredMattresses.map((product, idx) => (
                            <motion.div 
                              layout
                              key={product.id}
                              initial={{ opacity: 0, scale: 0.9 }}
                              animate={{ opacity: 1, scale: 1 }}
                              exit={{ opacity: 0, scale: 0.9 }}
                              transition={{ duration: 0.3 }}
                              onClick={() => setSelectedProduct(product)}
                              className="bg-white overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all group flex flex-col relative cursor-pointer"
                            >
                              {/* Badges */}
                              <div className="absolute top-4 left-0 z-10 flex flex-col gap-2">
                                {product.isBestSeller && (
                                  <div className="bg-[#a88d57] text-white text-[10px] font-black px-4 py-1 tracking-widest uppercase shadow-sm">
                                    Best Seller
                                  </div>
                                )}
                              </div>
                              {product.badge === "INFINITI SERIES" && (
                                <div className="absolute top-4 right-4 z-10 w-12 h-12 bg-white rounded-full flex items-center justify-center p-1.5 shadow-md border border-brand/20">
                                   <div className="w-full h-full bg-brand rounded-full flex items-center justify-center text-[7px] text-white font-black text-center leading-[8px]">
                                     INFINITI SERIES
                                   </div>
                                </div>
                              )}

                              {/* Image Container */}
                              <div className="relative aspect-square bg-white">
                                <img src={product.img} alt={product.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                
                                {/* Wishlist Button */}
                                <button 
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    toggleWishlist(product.id);
                                  }}
                                  className="absolute bottom-2.5 right-2.5 z-10 w-9 h-9 bg-white/90 backdrop-blur-sm shadow-md rounded-full flex items-center justify-center transition-all hover:scale-110 active:scale-90 border border-gray-100"
                                >
                                  <Heart 
                                    size={18} 
                                    className={`${wishlist.includes(product.id) ? "fill-red-500 text-red-500" : "text-gray-400"}`} 
                                    strokeWidth={1.5}
                                  />
                                </button>
                              </div>

                              {/* Product Info */}
                              <div className="p-4 md:p-5 flex-1 flex flex-col items-start bg-white min-h-0">
                                <h4 className="text-[13px] md:text-[14px] font-bold text-gray-700 leading-tight mb-4 group-hover:text-brand transition-colors">
                                  {product.title}
                                </h4>

                                {/* Size Selection Chips */}
                                <div className="w-full flex overflow-x-auto no-scrollbar gap-2 mt-auto pb-1">
                                   {product.sizes.map((size, i) => (
                                     <button 
                                       key={i} 
                                       className={`flex-shrink-0 px-3 py-1.5 rounded-full border text-[10px] md:text-xs font-bold transition-all ${
                                         i === 0 
                                           ? "bg-white border-gray-800 text-gray-800" 
                                           : "bg-gray-50/50 border-gray-200 text-gray-400"
                                       }`}
                                     >
                                       {size}
                                     </button>
                                   ))}
                                </div>
                              </div>
                            </motion.div>
                          ))
                        ) : (
                          <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="col-span-full py-20 text-center"
                          >
                            <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
                              <Search size={32} className="text-gray-300" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-800">No matching mattresses</h3>
                            <p className="text-gray-500 mt-2">Try adjusting your filters to find your perfect sleep solution.</p>
                            <button 
                              onClick={() => {
                                setActiveMattressSize("All");
                                setActiveMattressType("All");
                              }}
                              className="mt-6 px-8 py-3 bg-brand text-white rounded-full font-bold shadow-lg hover:bg-brand-light transition-all active:scale-95"
                            >
                              Reset All Filters
                            </button>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  </div>
                ) : (
                  <div className="p-6 md:p-10">
                    {/* 3x3 Grid for Subcategories */}
                    <div className="mb-6">
                      <h3 className="text-lg font-bold text-gray-500 uppercase tracking-widest mb-8 px-2">
                        {selectedSubCategory === "Bed Back Cushion" ? "Choose Your Comfort" : 
                         selectedSubCategory === "Sofas" ? "Elegant Seating" : 
                         selectedSubCategory === "Furniture" ? "Premium Furniture" : 
                         selectedSubCategory === "Beds" ? "Premium Beds" : 
                         selectedSubCategory === "Curtains" ? "Living Accents" :
                         selectedSubCategory === "Mattresses" ? "Sleep Solutions" : "Featured Collection"}
                      </h3>
                      <motion.div 
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-12 pb-16"
                      >
                        {((selectedSubCategory === "Sofas" && selectedProductSubCategory === "Feature sofa") ? featureSofaSubCategories : (selectedSubCategory && categoryToSubCategories[selectedSubCategory] ? categoryToSubCategories[selectedSubCategory] : mattressSubCategories)).map((item) => (
                          <motion.div
                            variants={itemVariants}
                            key={item.id}
                            className="group cursor-pointer flex flex-col items-center text-center"
                            onClick={() => {
                              if (item.title === "All Mattresses" || selectedSubCategory === "Bed Back Cushion" || selectedSubCategory === "Curtains" || selectedSubCategory === "Sofas") {
                                setSelectedProductSubCategory(item.title);
                              }
                            }}
                          >
                            <div className="relative w-full aspect-[4/3] overflow-hidden rounded-[24px] bg-gray-50 shadow-sm ring-1 ring-black/[0.05] group-hover:shadow-xl transition-all duration-500 group-hover:-translate-y-2">
                              <img
                                src={item.img}
                                alt={item.title}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                                referrerPolicy="no-referrer"
                              />
                              <div className="absolute inset-0 bg-brand/0 group-hover:bg-brand/5 transition-colors duration-500" />
                            </div>
                            <p className="mt-5 text-[15px] sm:text-[17px] font-bold text-gray-800 leading-tight group-hover:text-brand transition-colors tracking-tight">
                              {item.title}
                            </p>
                          </motion.div>
                        ))}
                      </motion.div>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
      {/* Product Detail Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[250] bg-black/60 backdrop-blur-md flex items-center justify-center p-0 md:p-10"
            onClick={() => setSelectedProduct(null)}
          >
            {/* Desktop Navigation Arrows - Outside Modal */}
            <button 
              onClick={(e) => { e.stopPropagation(); handlePrevProduct(); }}
              className="absolute left-6 lg:left-10 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/10 hover:bg-white/20 backdrop-blur-xl rounded-full hidden md:flex items-center justify-center text-white transition-all active:scale-90 border border-white/10 z-[300]"
            >
              <ArrowLeft size={32} />
            </button>
            <button 
              onClick={(e) => { e.stopPropagation(); handleNextProduct(); }}
              className="absolute right-6 lg:right-10 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/10 hover:bg-white/20 backdrop-blur-xl rounded-full hidden md:flex items-center justify-center text-white transition-all active:scale-90 border border-white/10 z-[300]"
            >
              <ArrowRight size={32} />
            </button>

            <motion.div 
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.1}
              onDragEnd={(_, info) => {
                const threshold = 40;
                const velocity = info.velocity.x;
                if (info.offset.x < -threshold || velocity < -500) {
                  handleNextProduct();
                } else if (info.offset.x > threshold || velocity > 500) {
                  handlePrevProduct();
                }
              }}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              className="relative bg-white w-full max-w-7xl h-[100dvh] md:h-[90vh] shadow-2xl rounded-t-none md:rounded-t-[40px] md:rounded-b-[40px] overflow-hidden touch-pan-y"
              onClick={(e) => e.stopPropagation()}
            >
              <AnimatePresence initial={false} custom={swipeDirection}>
                <motion.div
                  key={selectedProduct.id}
                  custom={swipeDirection}
                  variants={productVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ 
                    x: { type: "spring", stiffness: 220, damping: 26, mass: 0.8 },
                    opacity: { duration: 0.35, ease: "easeInOut" },
                    scale: { duration: 0.45, ease: [0.23, 1, 0.32, 1] }
                  }}
                  className="absolute inset-0 flex flex-col overflow-y-auto overflow-x-hidden custom-scrollbar bg-white"
                >
                  {/* Main Interaction Area (Main Image) */}
                  <div className="flex-none w-full min-h-[50vh] md:min-h-screen flex flex-col md:flex-row relative">
                    {/* Main Image Display */}
                    <div className="flex-1 relative bg-white flex items-center justify-center group overflow-hidden px-2 md:px-6">
                       {/* 360 View Toggle Button */}
                       {allGalleryImages.length > 2 && (
                          <div className="absolute top-6 left-6 md:left-10 z-40 flex flex-col gap-2">
                             <button 
                                onClick={() => setIs360Mode(!is360Mode)}
                                className={`flex items-center gap-2 px-4 py-2.5 rounded-full backdrop-blur-xl border transition-all active:scale-95 shadow-xl ${
                                  is360Mode 
                                    ? "bg-brand text-white border-brand shadow-brand/20" 
                                    : "bg-white/90 text-gray-900 border-gray-100 hover:bg-white"
                                }`}
                             >
                                <Rotate3D size={18} className={is360Mode ? "animate-pulse" : ""} />
                                <span className="text-[10px] font-black uppercase tracking-widest">{is360Mode ? "Standard View" : "360° Exploration"}</span>
                             </button>
                             
                             <div className={`mt-1 flex items-center justify-center transition-all duration-500 overflow-hidden ${is360Mode ? "h-6 opacity-100" : "h-0 opacity-0"}`}>
                                <span className="text-[8px] font-black text-brand uppercase tracking-widest bg-brand/5 px-2 py-0.5 rounded-full">DRAG TO ROTATE</span>
                             </div>
                          </div>
                       )}

                       {/* Conditional Rendering: Standard Gallery vs 360 Viewer */}
                       {is360Mode && allGalleryImages.length > 2 ? (
                         <ThreeSixtyViewer images={allGalleryImages} title={selectedProduct.title} />
                       ) : (
                         <>
                           {/* Main Image Container */}
                           <div 
                             ref={galleryScrollRef}
                             className="w-full h-full md:flex items-center justify-center overflow-x-auto snap-x snap-mandatory no-scrollbar md:overflow-hidden"
                             onScroll={(e) => {
                               if (isProgrammaticScroll.current) return;
                               const container = e.target as HTMLDivElement;
                               const width = container.clientWidth;
                               if (width > 0) {
                                 const newIndex = Math.round(container.scrollLeft / width);
                                 if (newIndex !== activeImageIndex && newIndex >= 0 && newIndex < allGalleryImages.length) {
                                   setActiveImageIndex(newIndex);
                                 }
                               }
                             }}
                           >

                          <div className="flex md:block w-full h-full">
                            {allGalleryImages.map((img, i) => (
                              <div key={i} className="w-full h-full flex-shrink-0 snap-center flex items-center justify-center p-0 md:absolute md:inset-0">
                                <motion.img 
                                  initial={false}
                                  animate={{ 
                                    opacity: activeImageIndex === i ? 1 : 0,
                                    scale: activeImageIndex === i ? 1 : 0.98,
                                    zIndex: activeImageIndex === i ? 10 : 0,
                                    filter: activeImageIndex === i ? "blur(0px)" : "blur(4px)"
                                  }}
                                  transition={{ duration: 0.45, ease: [0.23, 1, 0.32, 1] }}
                                  src={img} 
                                  className="w-full h-full max-h-[50vh] md:max-h-screen object-contain md:rounded-[40px] cursor-zoom-in" 
                                  alt={selectedProduct.title} 
                                  loading={i < 2 ? "eager" : "lazy"}
                                  onClick={() => setIsFullScreen(true)}
                                />
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Navigation Progress Dots */}
                        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-20 px-3 py-1.5 bg-black/5 md:bg-white/90 backdrop-blur-md rounded-full border border-black/5 md:border-gray-100/50">
                           {allGalleryImages.map((_, i) => (
                             <div 
                               key={i} 
                               className={`h-1 transition-all rounded-full ${activeImageIndex === i ? "w-6 bg-brand" : "w-1.5 bg-gray-300 md:bg-gray-200"}`}
                             />
                           ))}
                        </div>

                        {/* Navigation Arrows */}
                        <button 
                          onClick={(e) => { e.stopPropagation(); prevImage(); }}
                          className="absolute left-1 md:left-6 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white/95 backdrop-blur-md shadow-lg rounded-full items-center justify-center text-gray-900 border border-gray-100 hover:bg-brand hover:text-white transition-all hidden md:flex z-20 active:scale-90"
                        >
                          <ChevronLeft size={24} />
                        </button>
                        <button 
                          onClick={(e) => { e.stopPropagation(); nextImage(); }}
                          className="absolute right-1 md:right-6 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white/95 backdrop-blur-md shadow-lg rounded-full items-center justify-center text-gray-900 border border-gray-100 hover:bg-brand hover:text-white transition-all hidden md:flex z-20 active:scale-90"
                        >
                          <ChevronRight size={24} />
                        </button>
                       </>
                      )}
                    </div>

                    <div className="md:absolute md:right-20 md:bottom-20 z-30 w-full md:w-auto px-6 py-0 md:p-0">
                       <div className="bg-white/80 md:bg-white md:backdrop-blur-xl md:shadow-2xl md:border border-gray-100 md:p-6 rounded-3xl md:w-64">
                          <div className="flex items-center justify-between mb-3">
                            <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Available Sizes</span>
                            <span className="text-[9px] font-black text-brand hover:underline cursor-pointer">Guide</span>
                          </div>
                          <div className="grid grid-cols-2 gap-2">
                             {selectedProduct.sizes?.map((size: string, i: number) => (
                               <button 
                                  key={i} 
                                  className={`p-2.5 border-2 rounded-xl font-black text-[10px] uppercase tracking-tighter transition-all active:scale-95 ${i === 0 ? "border-brand bg-brand/5 text-brand" : "border-gray-50 hover:border-gray-200 text-gray-500"}`}
                               >
                                 {size}
                               </button>
                             ))}
                          </div>
                         <button 
                            onClick={() => {
                              const message = `Hi, I'm inquiring about ${selectedProduct.title}. Can you provide more details?`;
                             window.open(`https://wa.me/919370684574?text=${encodeURIComponent(message)}`, '_blank');
                            }}
                            className="w-full mt-3 py-3 bg-[#25D366] text-white rounded-xl text-[10px] font-black uppercase tracking-[2px] shadow-lg shadow-[#25D366]/20 hover:shadow-[#25D366]/30 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                          >
                            <MessageCircle size={14} fill="white" />
                            Inquire on WhatsApp
                          </button>
                       </div>
                    </div>
                  </div>

                    {/* Mobile Navigation Arrows Area */}
                    <div className="md:hidden flex items-center justify-between px-6 py-3 bg-gray-50 border-b border-gray-100 text-gray-500">
                      <button 
                        onClick={() => handlePrevProduct()}
                        className="flex items-center gap-2 py-2 px-3 bg-white rounded-full border border-gray-200 shadow-sm transition-all active:scale-95"
                      >
                        <ChevronLeft size={16} />
                        <span className="text-[10px] font-black uppercase tracking-widest">Prev</span>
                      </button>
                      <div className="flex items-center gap-1.5 opacity-50">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse" />
                        <span className="text-[8px] font-black uppercase tracking-widest">Swipe Left/Right</span>
                      </div>
                      <button 
                        onClick={() => handleNextProduct()}
                        className="flex items-center gap-2 py-2 px-3 bg-white rounded-full border border-gray-200 shadow-sm transition-all active:scale-95"
                      >
                        <span className="text-[10px] font-black uppercase tracking-widest">Next</span>
                        <ChevronRight size={16} />
                      </button>
                    </div>

                  {/* Product Info Section (Title & Meta) - Now below image */}
                  <div className="flex-none w-full px-6 md:px-20 pt-1 pb-2 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-gray-50">
                    <div className="flex flex-col gap-3">
                       <div className="flex items-center gap-4">
                         <div className="flex items-center gap-2">
                           <div className="w-8 h-[2px] bg-brand" />
                           <span className="text-[10px] font-black text-brand tracking-[0.2em] uppercase">Premium Collection</span>
                         </div>
                         <div className="hidden md:flex items-center gap-2 px-3 py-1 bg-gray-50 border border-gray-100 rounded-full">
                           <span className="text-[8px] font-black text-gray-400 uppercase tracking-widest">Use Arrow Keys or Swipe</span>
                         </div>
                       </div>
                        <h2 className="text-4xl md:text-6xl font-black text-gray-950 leading-tight tracking-tighter">
                          {selectedProduct.title}
                        </h2>
                    </div>
                    
                    <div className="flex flex-col md:items-end gap-2">
                      <span className="text-xs font-black text-gray-400 uppercase tracking-widest">Handcrafted In India</span>
                      <div className="flex items-center gap-5 mt-2">
                        {[Truck, ShieldCheck, Wrench].map((Icon, idx) => (
                           <div key={idx} className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center text-gray-400">
                             <Icon size={20} />
                           </div>
                        ))}
                      </div>
                    </div>
                  </div>


                  {/* BOTTOM SECTION: Similar Products Horizontal Scroll */}
                  <div className="w-full px-6 md:px-20 py-2 md:py-4 bg-gray-50/50 border-t border-gray-100 mt-auto">
                     <div className="flex items-center justify-between mb-3 md:mb-4">
                        <div className="flex flex-col gap-1">
                          <span className="text-[10px] font-black text-brand tracking-[0.2em] uppercase">Complete the set</span>
                          <h3 className="text-2xl md:text-3xl font-black text-gray-950 tracking-tighter">Similar Products</h3>
                        </div>
                        <div className="hidden md:flex items-center gap-2">
                           <button onClick={() => scrollSimilarProducts('left')} className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-white hover:border-brand transition-all text-gray-400 hover:text-brand"><ChevronLeft size={20} /></button>
                           <button onClick={() => scrollSimilarProducts('right')} className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-white hover:border-brand transition-all text-gray-400 hover:text-brand"><ChevronRight size={20} /></button>
                        </div>
                     </div>

                     <div 
                       ref={similarProductsScrollRef}
                       className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar gap-4 md:gap-6 pb-2 md:pb-6 -mx-6 px-6 md:mx-0 md:px-0"
                     >
                        {shuffledSimilarProducts.map((item) => (
                            <motion.div 
                              key={item.id}
                              whileHover={{ y: -8 }}
                              onClick={() => { setSelectedProduct(item); setActiveImageIndex(0); }}
                              className="flex-shrink-0 w-32 md:w-40 cursor-pointer group snap-center"
                            >
                               <div className="relative aspect-[4/5] rounded-[20px] overflow-hidden bg-white shadow-sm ring-1 ring-black/[0.05] group-hover:shadow-lg transition-all duration-500">
                                  <img src={item.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={item.title} />
                                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-2">
                                     <button className="w-full py-2 bg-white text-gray-900 rounded-lg text-[8px] font-black uppercase tracking-widest shadow-xl">View</button>
                                  </div>
                               </div>
                               <h4 className="mt-3 text-[10px] font-black text-gray-900 leading-tight group-hover:text-brand transition-colors tracking-tight line-clamp-1">{item.title}</h4>
                            </motion.div>
                          ))
                        }
                     </div>

                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Close Button - Sticky/Fixed on Mobile */}
              <button 
                onClick={() => setSelectedProduct(null)}
                className="fixed md:absolute top-5 right-5 z-[500] w-12 h-12 bg-white/90 backdrop-blur-md shadow-2xl rounded-full flex items-center justify-center hover:bg-gray-50 transition-all border border-gray-100 active:scale-90"
              >
                <X size={24} className="text-gray-900" strokeWidth={2.5} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modern High-Fidelity Full Screen Lightbox with Zoom & Pan */}
      <AnimatePresence>
        {isFullScreen && selectedProduct && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1000] bg-black/95 backdrop-blur-3xl overflow-hidden flex items-center justify-center select-none"
          >
            {/* Zoomable Image Implementation */}
            <div className="relative w-full h-full flex items-center justify-center overflow-hidden touch-none">
              <motion.div 
                drag={zoomScale > 1}
                dragConstraints={{ left: -500, right: 500, top: -500, bottom: 500 }}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: zoomScale, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", damping: 30, stiffness: 300 }}
                className="relative flex items-center justify-center"
                style={{ cursor: zoomScale > 1 ? 'grab' : 'zoom-in' }}
                onClick={() => setZoomScale(prev => prev === 1 ? 2.5 : 1)}
              >
                <img 
                  src={allGalleryImages[activeImageIndex]} 
                  className="max-w-[95vw] max-h-[95vh] object-contain rounded-lg shadow-2xl transition-shadow duration-500" 
                  alt="Full View" 
                  referrerPolicy="no-referrer"
                  draggable={false}
                />
              </motion.div>
            </div>

            {/* Lightbox Controls */}
            <div className="absolute inset-0 pointer-events-none flex flex-col justify-between p-6 md:p-10">
              {/* Header */}
              <div className="flex items-center justify-between w-full pointer-events-auto">
                <div className="flex flex-col gap-1">
                   <h3 className="text-white text-sm md:text-xl font-black tracking-tight">{selectedProduct.title}</h3>
                   <div className="flex items-center gap-3">
                     <span className="text-white/40 text-[10px] md:text-xs font-black uppercase tracking-widest leading-none">
                       High-Resolution View
                     </span>
                     {zoomScale > 1 && (
                       <span className="px-2 py-0.5 bg-brand text-[8px] font-bold text-white rounded-full animate-pulse">
                         ZOOMED {Math.round(zoomScale * 100)}%
                       </span>
                     )}
                   </div>
                </div>
                <button 
                  onClick={() => {
                    setIsFullScreen(false);
                    setZoomScale(1);
                  }}
                  className="w-12 h-12 md:w-16 md:h-16 bg-white/10 hover:bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center text-white transition-all active:scale-90 border border-white/10 pointer-events-auto"
                >
                  <X size={28} strokeWidth={2.5} />
                </button>
              </div>

              {/* Minimal Help Info */}
              <div className="flex items-center justify-center w-full pointer-events-auto">
                {allGalleryImages.length > 1 && (
                  <div className="flex items-center gap-4 mr-8">
                    <button 
                      onClick={() => setActiveImageIndex(prev => (prev - 1 + allGalleryImages.length) % allGalleryImages.length)}
                      className="w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center text-white border border-white/10"
                    >
                      <ChevronLeft size={24} />
                    </button>
                    <button 
                      onClick={() => setActiveImageIndex(prev => (prev + 1) % allGalleryImages.length)}
                      className="w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center text-white border border-white/10"
                    >
                      <ChevronRight size={24} />
                    </button>
                  </div>
                )}
                 <div className="bg-black/40 backdrop-blur-xl px-6 py-3 rounded-full border border-white/5 flex gap-4 text-white/50 text-[10px] font-bold uppercase tracking-widest">
                   {zoomScale === 1 ? "Tap to Zoom" : "Drag to Explore • Tap to Reset"}
                 </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating WhatsApp Button */}
      <motion.a
        href="https://wa.me/919370684574"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-24 md:bottom-10 right-6 z-[200] w-14 h-14 bg-[#25D366] text-white rounded-full shadow-2xl flex items-center justify-center hover:bg-[#20ba5a] transition-all"
        title="Contact on WhatsApp"
      >
        <MessageCircle size={30} fill="white" />
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-[#25D366] border-2 border-white"></span>
        </span>
      </motion.a>
    </div>
  );
}
