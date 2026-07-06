export interface BookItem {
  id: number;
  name: string;
  department: BookDepartment;
  status: 'In Stock' | 'Special Order';
  image: string;
  description: string;
}

export type BookDepartment =
  | 'Primary Books'
  | 'Secondary Books'
  | 'Tertiary Books'
  | 'Novels & Fiction'
  | 'E-Books & Digital'
  | 'Educational & Reference'
  | 'Inspirational & Spiritual'
  | 'Comics & Magazines';

export const bookDepartments: BookDepartment[] = [
  'Primary Books',
  'Secondary Books',
  'Tertiary Books',
  'Novels & Fiction',
  'E-Books & Digital',
  'Educational & Reference',
  'Inspirational & Spiritual',
  'Comics & Magazines',
];

export const bookData: BookItem[] = [
  // ── Primary Books ──
  {
    id: 1,
    name: "Primary School Reader Collection",
    department: "Primary Books",
    status: "In Stock",
    image: "https://images.pexels.com/photos/9258376/pexels-photo-9258376.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Illustrated primary school readers and fairy tale books for early childhood education."
  },
  {
    id: 2,
    name: "Children's Library Reading Set",
    department: "Primary Books",
    status: "In Stock",
    image: "https://images.pexels.com/photos/10638230/pexels-photo-10638230.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "A curated set of primary-level reading books for school children in a modern library setting."
  },
  {
    id: 3,
    name: "Kids Reading Together Pack",
    department: "Primary Books",
    status: "In Stock",
    image: "https://images.pexels.com/photos/14025659/pexels-photo-14025659.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Engaging primary school books designed for group reading and interactive learning."
  },
  {
    id: 4,
    name: "Primary Classroom Library",
    department: "Primary Books",
    status: "In Stock",
    image: "https://images.pexels.com/photos/8499572/pexels-photo-8499572.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "A diverse collection of primary school books fostering learning and togetherness."
  },
  {
    id: 5,
    name: "Storytime Teacher's Edition",
    department: "Primary Books",
    status: "In Stock",
    image: "https://images.pexels.com/photos/8613091/pexels-photo-8613091.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Teacher's storybook collection for engaging young children in a colorful classroom setting."
  },
  {
    id: 6,
    name: "Young Reader's First Books",
    department: "Primary Books",
    status: "In Stock",
    image: "https://images.pexels.com/photos/8364030/pexels-photo-8364030.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Colorful first-reader books for young children beginning their reading journey."
  },

  // ── Secondary Books ──
  {
    id: 7,
    name: "Secondary School Textbook Bundle",
    department: "Secondary Books",
    status: "In Stock",
    image: "https://images.pexels.com/photos/32001508/pexels-photo-32001508.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Comprehensive secondary school textbooks covering core subjects for high school students."
  },
  {
    id: 8,
    name: "High School Study Collection",
    department: "Secondary Books",
    status: "In Stock",
    image: "https://images.pexels.com/photos/6958537/pexels-photo-6958537.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Secondary-level textbooks with study notes, calculators, and reference materials."
  },
  {
    id: 9,
    name: "Secondary Classroom Textbooks",
    department: "Secondary Books",
    status: "In Stock",
    image: "https://images.pexels.com/photos/8419156/pexels-photo-8419156.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Secondary school students' textbooks for reading and researching school projects."
  },
  {
    id: 10,
    name: "High School Learning Series",
    department: "Secondary Books",
    status: "In Stock",
    image: "https://images.pexels.com/photos/3380736/pexels-photo-3380736.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "High school learning books with educational posters for classroom study."
  },
  {
    id: 11,
    name: "Secondary Exam Preparation Books",
    department: "Secondary Books",
    status: "Special Order",
    image: "https://images.pexels.com/photos/32001511/pexels-photo-32001511.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Exam preparation textbooks for secondary school students studying together."
  },
  {
    id: 12,
    name: "Secondary School Study Pack",
    department: "Secondary Books",
    status: "In Stock",
    image: "https://images.pexels.com/photos/32279025/pexels-photo-32279025.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "A complete study pack for secondary students with textbooks and classroom materials."
  },

  // ── Tertiary Books ──
  {
    id: 13,
    name: "University Academic Textbooks",
    department: "Tertiary Books",
    status: "In Stock",
    image: "https://images.pexels.com/photos/6209560/pexels-photo-6209560.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "University-level academic textbooks for college and tertiary education students."
  },
  {
    id: 14,
    name: "Digital Learning & Research Books",
    department: "Tertiary Books",
    status: "In Stock",
    image: "https://images.pexels.com/photos/7972359/pexels-photo-7972359.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Modern tertiary learning materials combining digital research with textbook study."
  },
  {
    id: 15,
    name: "Tertiary Study Session Collection",
    department: "Tertiary Books",
    status: "In Stock",
    image: "https://images.pexels.com/photos/9158794/pexels-photo-9158794.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Advanced academic books for tertiary students in a library study setting."
  },

  // ── Novels & Fiction ──
  {
    id: 16,
    name: "Assorted Novel Collection",
    department: "Novels & Fiction",
    status: "In Stock",
    image: "https://images.pexels.com/photos/694740/pexels-photo-694740.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "A diverse pile of assorted novels featuring an array of titles and genres."
  },
  {
    id: 17,
    name: "Classic Literature Stack",
    department: "Novels & Fiction",
    status: "In Stock",
    image: "https://images.pexels.com/photos/10881237/pexels-photo-10881237.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "A vertical stack of classic novel titles illuminated by natural sunlight."
  },
  {
    id: 18,
    name: "Colorful Fiction Stack",
    department: "Novels & Fiction",
    status: "In Stock",
    image: "https://images.pexels.com/photos/14548367/pexels-photo-14548367.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "A vibrant vertical stack of colorful fiction books for every reading mood."
  },
  {
    id: 19,
    name: "Hardbound Novel Editions",
    department: "Novels & Fiction",
    status: "Special Order",
    image: "https://images.pexels.com/photos/158834/pexels-photo-158834.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "A pile of hardcover novels with a vintage vibe for literature lovers."
  },
  {
    id: 20,
    name: "Epic Fiction Series",
    department: "Novels & Fiction",
    status: "In Stock",
    image: "https://images.pexels.com/photos/14488930/pexels-photo-14488930.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "A curated stack of epic fiction series including fantasy and adventure novels."
  },
  {
    id: 21,
    name: "Vintage Novel Collection",
    department: "Novels & Fiction",
    status: "In Stock",
    image: "https://images.pexels.com/photos/16374374/pexels-photo-16374374.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "A close-up view of diverse vintage novels stacked in a cozy indoor environment."
  },

  // ── E-Books & Digital ──
  {
    id: 22,
    name: "Kindle E-Book Reader Bundle",
    department: "E-Books & Digital",
    status: "In Stock",
    image: "https://images.pexels.com/photos/76942/pexels-photo-76942.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "A Kindle e-book reader bundle for digital reading with a cozy cafe atmosphere."
  },
  {
    id: 23,
    name: "Digital E-Reader Collection",
    department: "E-Books & Digital",
    status: "In Stock",
    image: "https://images.pexels.com/photos/844734/pexels-photo-844734.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "A close-up Kindle e-reader showcasing digital reading against a textured backdrop."
  },
  {
    id: 24,
    name: "E-Book & Coffee Set",
    department: "E-Books & Digital",
    status: "In Stock",
    image: "https://images.pexels.com/photos/11660268/pexels-photo-11660268.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "A Kindle e-reader with tea and vintage glasses for a cozy digital reading experience."
  },
  {
    id: 25,
    name: "Children's E-Book Reader",
    department: "E-Books & Digital",
    status: "In Stock",
    image: "https://images.pexels.com/photos/17567913/pexels-photo-17567913.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "A child's Kindle e-book reader highlighting the ease of digital reading for kids."
  },
  {
    id: 26,
    name: "Tablet E-Book Display",
    department: "E-Books & Digital",
    status: "In Stock",
    image: "https://images.pexels.com/photos/20092850/pexels-photo-20092850.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "An e-reader displaying a book cover placed on an open physical book."
  },
  {
    id: 27,
    name: "Digital Reading on Tablet",
    department: "E-Books & Digital",
    status: "In Stock",
    image: "https://images.pexels.com/photos/7129624/pexels-photo-7129624.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "A person reading a digital book on a tablet, showcasing modern reading habits."
  },

  // ── Educational & Reference ──
  {
    id: 28,
    name: "Classic Hardcover Reference Set",
    department: "Educational & Reference",
    status: "In Stock",
    image: "https://images.pexels.com/photos/3747535/pexels-photo-3747535.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "A well-organized set of hardcover reference books for libraries and study rooms."
  },
  {
    id: 29,
    name: "Assorted Reference Library",
    department: "Educational & Reference",
    status: "In Stock",
    image: "https://images.pexels.com/photos/45717/pexels-photo-45717.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "A vibrant collection of hardcover reference books with colorful covers."
  },
  {
    id: 30,
    name: "Vintage Hardbound Reference",
    department: "Educational & Reference",
    status: "Special Order",
    image: "https://images.pexels.com/photos/7682364/pexels-photo-7682364.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Three vintage hardbound reference books with aged textures for collectors."
  },
  {
    id: 31,
    name: "Classic Literature Reference Shelf",
    department: "Educational & Reference",
    status: "In Stock",
    image: "https://images.pexels.com/photos/3861778/pexels-photo-3861778.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "A diverse collection of classic literary reference works for libraries."
  },
  {
    id: 32,
    name: "Leather-Bound Collector's Reference",
    department: "Educational & Reference",
    status: "Special Order",
    image: "https://images.pexels.com/photos/10480076/pexels-photo-10480076.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Elegant leather-bound reference books on a warm wood shelf — true literary treasures."
  },
  {
    id: 33,
    name: "Close-Up Reference Stack",
    department: "Educational & Reference",
    status: "In Stock",
    image: "https://images.pexels.com/photos/6561514/pexels-photo-6561514.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "A detailed close-up of a stack of reference books showcasing texture and alignment."
  },

  // ── Inspirational & Spiritual ──
  {
    id: 34,
    name: "Bible Study Collection",
    department: "Inspirational & Spiritual",
    status: "In Stock",
    image: "https://images.pexels.com/photos/33565388/pexels-photo-33565388.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "A Bible study collection with note markers for devotional reading and reflection."
  },
  {
    id: 35,
    name: "Inspirational Open Bible",
    department: "Inspirational & Spiritual",
    status: "In Stock",
    image: "https://images.pexels.com/photos/1771219/pexels-photo-1771219.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "An open Bible with Proverbs highlighted, bathed in warm light for daily inspiration."
  },
  {
    id: 36,
    name: "Devotional Study Books",
    department: "Inspirational & Spiritual",
    status: "In Stock",
    image: "https://images.pexels.com/photos/5206052/pexels-photo-5206052.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Devotional study books with notes and pencil for spiritual reading and growth."
  },
  {
    id: 37,
    name: "Inspirational Reading Collection",
    department: "Inspirational & Spiritual",
    status: "In Stock",
    image: "https://images.pexels.com/photos/7290231/pexels-photo-7290231.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "An open inspirational book with flowers in the background, symbolizing knowledge."
  },
  {
    id: 38,
    name: "Daily Devotional Reader",
    department: "Inspirational & Spiritual",
    status: "In Stock",
    image: "https://images.pexels.com/photos/3101504/pexels-photo-3101504.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "A daily devotional reader for public reading and personal spiritual growth."
  },
  {
    id: 39,
    name: "Open Study Book",
    department: "Inspirational & Spiritual",
    status: "In Stock",
    image: "https://images.pexels.com/photos/583475/pexels-photo-583475.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "An open inspirational book in focus with a blurred group study session."
  },

  // ── Comics & Magazines ──
  {
    id: 40,
    name: "Superhero Comic Collection",
    department: "Comics & Magazines",
    status: "In Stock",
    image: "https://images.pexels.com/photos/4142267/pexels-photo-4142267.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "A colorful superhero comic book collection for relaxed indoor reading."
  },
  {
    id: 41,
    name: "Graphic Novel Close-Up",
    department: "Comics & Magazines",
    status: "In Stock",
    image: "https://images.pexels.com/photos/4142511/pexels-photo-4142511.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Close-up of hands holding a colorful superhero graphic novel in a sunlit room."
  },
  {
    id: 42,
    name: "Vintage Comic Book Market",
    department: "Comics & Magazines",
    status: "In Stock",
    image: "https://images.pexels.com/photos/17097059/pexels-photo-17097059.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "A collection of vintage comic books on display at an outdoor market table."
  },
  {
    id: 43,
    name: "Magazine & Book Stack",
    department: "Comics & Magazines",
    status: "In Stock",
    image: "https://images.pexels.com/photos/30618331/pexels-photo-30618331.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Stacks of vintage magazines and books on display offering a nostalgic view."
  },
  {
    id: 44,
    name: "Bookstore Magazine Display",
    department: "Comics & Magazines",
    status: "In Stock",
    image: "https://images.pexels.com/photos/13103829/pexels-photo-13103829.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "A vibrant display of magazines and books stacked outside a bookstore."
  },
  {
    id: 45,
    name: "Antique Book & Magazine Entrance",
    department: "Comics & Magazines",
    status: "Special Order",
    image: "https://images.pexels.com/photos/17341806/pexels-photo-17341806.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "A vintage bookstore entrance with a vibrant display of books and antique prints."
  },
];

export const libraryHeroImages: string[] = [
  "https://images.pexels.com/photos/20746512/pexels-photo-20746512.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "https://images.pexels.com/photos/35538161/pexels-photo-35538161.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "https://images.pexels.com/photos/6333739/pexels-photo-6333739.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "https://images.pexels.com/photos/6466108/pexels-photo-6466108.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "https://images.pexels.com/photos/17428653/pexels-photo-17428653.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "https://images.pexels.com/photos/12064/pexels-photo-12064.jpeg?auto=compress&cs=tinysrgb&w=1600",
];
