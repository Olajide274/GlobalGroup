export interface FurnitureItem {
  id: number;
  name: string;
  category: string;
  price: string;
  status: 'Ready to Ship' | 'Custom Order - 3 Weeks';
  image: string;
  description: string;
}

export const furnitureData: FurnitureItem[] = [
  // ── Living Room ──
  {
    id: 1,
    name: "Black Sectional Sofa",
    category: "Living Room",
    price: "₦1,250,000",
    status: "Ready to Ship",
    image: "https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Sleek black fabric sectional with modular pieces and chrome feet for contemporary living spaces."
  },
  {
    id: 2,
    name: "Modern Living Room Sofa Set",
    category: "Living Room",
    price: "₦1,850,000",
    status: "Custom Order - 3 Weeks",
    image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "A complete sofa set in neutral tones with a matching accent chair and premium fabric upholstery."
  },
  {
    id: 3,
    name: "Brown Leather Sectional",
    category: "Living Room",
    price: "₦1,650,000",
    status: "Ready to Ship",
    image: "https://images.pexels.com/photos/276566/pexels-photo-276566.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Full-grain brown leather sectional with deep cushions and solid wood base for timeless appeal."
  },

  // ── Dining Room ──
  {
    id: 4,
    name: "Scandinavian Dining Set",
    category: "Dining Room",
    price: "₦890,000",
    status: "Ready to Ship",
    image: "https://images.pexels.com/photos/13767176/pexels-photo-13767176.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "A warm Scandinavian-style white wooden dining table with four cushioned chairs and soft lighting."
  },
  {
    id: 5,
    name: "Modern Kitchen Dining Table",
    category: "Dining Room",
    price: "₦1,100,000",
    status: "Custom Order - 3 Weeks",
    image: "https://images.pexels.com/photos/6265940/pexels-photo-6265940.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Contemporary dining table with upholstered chairs, designed to anchor a modern kitchen space."
  },
  {
    id: 6,
    name: "Brown Wooden Dining Table",
    category: "Dining Room",
    price: "₦1,350,000",
    status: "Custom Order - 3 Weeks",
    image: "https://images.pexels.com/photos/7195569/pexels-photo-7195569.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "An elegant solid wood dining table with cushioned chairs and a matching glass display cabinet."
  },

  // ── Office ──
  {
    id: 7,
    name: "Executive Wooden Desk",
    category: "Office",
    price: "₦750,000",
    status: "Ready to Ship",
    image: "https://images.pexels.com/photos/667838/pexels-photo-667838.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "A solid oak executive desk with a matching rolling chair and built-in shelving by the window."
  },
  {
    id: 8,
    name: "Heritage Oak Bookshelf",
    category: "Office",
    price: "₦580,000",
    status: "Custom Order - 3 Weeks",
    image: "https://images.pexels.com/photos/2883049/pexels-photo-2883049.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Floor-to-ceiling solid oak bookshelf with integrated lighting and a minimalist desk setup."
  },
  {
    id: 9,
    name: "Ergonomic Office Chair & Desk",
    category: "Office",
    price: "₦420,000",
    status: "Ready to Ship",
    image: "https://images.pexels.com/photos/7195522/pexels-photo-7195522.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "A sleek designer office chair paired with a geometric desk for a modern, productive workspace."
  },

  // ── Bedroom ──
  {
    id: 10,
    name: "Plush Bedroom Suite",
    category: "Bedroom",
    price: "₦2,100,000",
    status: "Custom Order - 3 Weeks",
    image: "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "A cozy bedroom suite with a premium upholstered headboard, soft bedding, and ambient lighting."
  },
  {
    id: 11,
    name: "Modern Bedroom Set",
    category: "Bedroom",
    price: "₦1,750,000",
    status: "Ready to Ship",
    image: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "A spacious modern bedroom set with neutral tones, a comfortable bed, and matching nightstands."
  },
  {
    id: 12,
    name: "Contemporary Bedroom Suite",
    category: "Bedroom",
    price: "₦1,950,000",
    status: "Custom Order - 3 Weeks",
    image: "https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "A stylish bedroom suite featuring a cityscape artwork accent and premium linen bedding."
  },

  // ── Kitchen ──
  {
    id: 13,
    name: "White Kitchen Island Suite",
    category: "Kitchen",
    price: "₦2,500,000",
    status: "Custom Order - 3 Weeks",
    image: "https://images.pexels.com/photos/8186508/pexels-photo-8186508.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Bright white cabinetry with a granite island, pendant lights, and ample storage for a modern kitchen."
  },
  {
    id: 14,
    name: "Built-in Kitchen Cabinet Set",
    category: "Kitchen",
    price: "₦2,200,000",
    status: "Custom Order - 3 Weeks",
    image: "https://images.pexels.com/photos/7147290/pexels-photo-7147290.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Spacious built-in kitchen cabinets with a central island and modern appliance integration."
  },
  {
    id: 15,
    name: "Kitchen Island with Stools",
    category: "Kitchen",
    price: "₦680,000",
    status: "Ready to Ship",
    image: "https://images.pexels.com/photos/8031918/pexels-photo-8031918.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "A minimalist kitchen island with wooden bar stools, sleek cabinets, and modern decor."
  },

  // ── Bookstore & Library ──
  {
    id: 16,
    name: "Library Bookshelf Wall",
    category: "Bookstore & Library",
    price: "₦1,200,000",
    status: "Custom Order - 3 Weeks",
    image: "https://images.pexels.com/photos/18620046/pexels-photo-18620046.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "A full wall of organized library bookshelves stocked with curated titles for the ultimate home library."
  },
  {
    id: 17,
    name: "Reading Nook Bookshelf",
    category: "Bookstore & Library",
    price: "₦450,000",
    status: "Ready to Ship",
    image: "https://images.pexels.com/photos/1370296/pexels-photo-1370296.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "A quiet library bookshelf with integrated seating and a study area for reading and reflection."
  },
  {
    id: 18,
    name: "Vintage Wooden Bookshelf",
    category: "Bookstore & Library",
    price: "₦620,000",
    status: "Ready to Ship",
    image: "https://images.pexels.com/photos/2177482/pexels-photo-2177482.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "A warm, inviting wooden bookshelf filled with classic titles in a traditional library setting."
  },
  {
    id: 19,
    name: "Modern Library Shelving",
    category: "Bookstore & Library",
    price: "₦980,000",
    status: "Custom Order - 3 Weeks",
    image: "https://images.pexels.com/photos/19822358/pexels-photo-19822358.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "A well-lit modern library featuring wooden shelving, bookshelves, and indoor plants for a fresh look."
  },
  {
    id: 20,
    name: "Library Corner Bookshelf",
    category: "Bookstore & Library",
    price: "₦520,000",
    status: "Ready to Ship",
    image: "https://images.pexels.com/photos/17320782/pexels-photo-17320782.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "A charming library corner with bookshelves, a wooden chair, and a small reading table."
  },
  {
    id: 21,
    name: "Home Library Reading Room",
    category: "Bookstore & Library",
    price: "₦1,500,000",
    status: "Custom Order - 3 Weeks",
    image: "https://images.pexels.com/photos/27296579/pexels-photo-27296579.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "A warm, inviting home library with a full bookshelf, reading chair, and ambient reading lamp."
  },
];

export const heroImages: string[] = [
  "https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "https://images.pexels.com/photos/2883049/pexels-photo-2883049.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "https://images.pexels.com/photos/2177482/pexels-photo-2177482.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "https://images.pexels.com/photos/8186508/pexels-photo-8186508.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "https://images.pexels.com/photos/13767176/pexels-photo-13767176.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "https://images.pexels.com/photos/18620046/pexels-photo-18620046.jpeg?auto=compress&cs=tinysrgb&w=1600",
];
