'use client';

import { useState, useMemo, useEffect, useCallback } from 'react';
import { bookData, BookItem, BookDepartment, bookDepartments, libraryHeroImages } from '../library-data';
import ContactModal, { EmailFormData } from '../components/ContactModal';
import CountUp from '../components/CountUp';
import EmailContactForm from '../components/EmailContactForm';

export default function LibraryPage() {
  const [selectedDepartment, setSelectedDepartment] = useState<BookDepartment | 'All'>('All');
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [heroIndex, setHeroIndex] = useState<number>(0);
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

  // Contact modal state
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [activeInquiryItem, setActiveInquiryItem] = useState<string>('');
  const [emailFormData, setEmailFormData] = useState<EmailFormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const filteredData: BookItem[] = selectedDepartment === 'All'
    ? bookData
    : bookData.filter((item) => item.department === selectedDepartment);

  // Group books by department for display
  const groupedData = useMemo(() => {
    if (selectedDepartment !== 'All') return null;
    const groups: Record<string, BookItem[]> = {};
    for (const dept of bookDepartments) {
      const items = bookData.filter((item) => item.department === dept);
      if (items.length > 0) groups[dept] = items;
    }
    return groups;
  }, [selectedDepartment]);

  useEffect(() => {
    const timer = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % libraryHeroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleWhatsAppInquiry = useCallback((productName: string): void => {
    const businessNumber = "2348165212254";
    const message = `Hello! I am viewing your online bookstore & library and want to inquire about "${productName}". Could you share more details?`;
    window.open(`https://wa.me/${businessNumber}?text=${encodeURIComponent(message)}`, '_blank');
  }, []);

  const handleVerifyPipeline = useCallback((productName: string): void => {
    setActiveInquiryItem(productName);
    setEmailFormData({
      name: '',
      email: '',
      subject: `Verification Request: ${productName}`,
      message: `I would like to verify the availability and specifications for: ${productName}. Please confirm stock tracking at the Kaduna North Massive Bookstore Catalog.`,
    });
    setIsModalOpen(true);
  }, []);

  const handleCloseModal = useCallback((): void => {
    setIsModalOpen(false);
  }, []);

  const handleDepartmentSelect = (dept: BookDepartment | 'All') => {
    setSelectedDepartment(dept);
    setSidebarOpen(false);
  };

  return (
    <main className="min-h-screen bg-stone-50 text-stone-900 flex flex-col">
      {/* Sticky Navigation */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a href="/" className="flex items-center gap-2">
              <span className="text-lg font-extrabold tracking-tight text-stone-900">GLOBAL GROUP</span>
              <span className="text-lg font-light tracking-widest text-amber-700">Systems</span>
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              <a href="/" className="text-sm font-medium text-stone-600 hover:text-amber-600 transition-colors duration-300">Furniture</a>
              <a href="#book-catalog" className="text-sm font-medium text-stone-600 hover:text-amber-600 transition-colors duration-300">Book Catalog</a>
              <a href="#about-library" className="text-sm font-medium text-stone-600 hover:text-amber-600 transition-colors duration-300">About</a>
              <button
                onClick={() => handleWhatsAppInquiry('general bookstore inquiry')}
                className="bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold px-5 py-2 rounded-full transition-colors"
              >
                Inquire
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-stone-700 hover:bg-stone-100 transition-colors"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden border-t border-stone-200 py-4 space-y-3">
              <a href="/" onClick={() => setMobileMenuOpen(false)} className="block text-sm font-medium text-stone-600 hover:text-amber-600 transition-colors duration-300 px-2 py-1">Furniture</a>
              <a href="#book-catalog" onClick={() => setMobileMenuOpen(false)} className="block text-sm font-medium text-stone-600 hover:text-amber-600 transition-colors duration-300 px-2 py-1">Book Catalog</a>
              <a href="#about-library" onClick={() => setMobileMenuOpen(false)} className="block text-sm font-medium text-stone-600 hover:text-amber-600 transition-colors duration-300 px-2 py-1">About</a>
              <button
                onClick={() => handleWhatsAppInquiry('general bookstore inquiry')}
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold px-5 py-2 rounded-full transition-colors"
              >
                Inquire via WhatsApp
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Dynamic Hero with Rotating Library Background */}
      <header className="relative h-[55vh] min-h-[360px] sm:h-[65vh] overflow-hidden">
        {libraryHeroImages.map((img, i) => (
          <div
            key={i}
            className="absolute inset-0 transition-opacity duration-[2000ms] ease-in-out"
            style={{ opacity: i === heroIndex ? 1 : 0 }}
          >
            <img
              src={img}
              alt=""
              className="w-full h-full object-cover"
              loading={i === 0 ? 'eager' : 'lazy'}
            />
          </div>
        ))}

        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/70 via-stone-900/50 to-stone-900/70" />

        <div className="relative h-full flex flex-col items-center justify-center text-center px-4 sm:px-6">
          <span className="inline-block text-xs font-bold tracking-widest text-amber-400 uppercase bg-amber-400/10 px-4 py-1.5 rounded-full border border-amber-400/30 backdrop-blur-sm">
            Kaduna North Massive Bookstore Catalog
          </span>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl leading-tight">
            Exclusive Book<br className="hidden sm:block" /> Catalogue
          </h1>
          <p className="mt-4 text-base sm:text-lg text-stone-200 max-w-xl mx-auto leading-relaxed">
            Explore our organized departments — from primary readers to tertiary textbooks, novels, e-books, and inspirational collections.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="#book-catalog"
              className="bg-white text-stone-900 font-semibold text-sm px-8 py-3 rounded-full hover:bg-stone-100 transition-colors shadow-lg"
            >
              Browse Catalog
            </a>
            <a
              href="#about-library"
              className="bg-amber-600 text-white font-semibold text-sm px-8 py-3 rounded-full hover:bg-amber-700 transition-colors shadow-lg"
            >
              About Library
            </a>
          </div>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
            {libraryHeroImages.map((_, i) => (
              <button
                key={i}
                onClick={() => setHeroIndex(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === heroIndex ? 'w-8 bg-white' : 'w-2 bg-white/40'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </header>

      {/* Book Catalog with Sidebar Layout */}
      <section id="book-catalog" className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-16">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          {/* ── Sidebar: Desktop (left) / Mobile (dropdown) ── */}
          <aside className="lg:w-64 lg:flex-shrink-0">
            {/* Mobile Dropdown Toggle */}
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden w-full flex items-center justify-between bg-white border border-stone-200 rounded-xl px-4 py-3 text-sm font-semibold text-stone-900 shadow-sm"
            >
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                {selectedDepartment === 'All' ? 'All Departments' : selectedDepartment}
              </span>
              <svg className={`w-4 h-4 text-stone-400 transition-transform ${sidebarOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Sidebar Content */}
            <div className={`mt-4 lg:mt-0 ${sidebarOpen ? 'block' : 'hidden lg:block'}`}>
              <div className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden">
                <div className="px-4 py-3 bg-stone-900">
                  <h2 className="text-sm font-bold text-white uppercase tracking-wider">Departments</h2>
                </div>
                <nav className="p-2 space-y-1">
                  <button
                    onClick={() => handleDepartmentSelect('All')}
                    className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-colors flex items-center justify-between ${
                      selectedDepartment === 'All'
                        ? 'bg-amber-600 text-white'
                        : 'text-stone-600 hover:bg-stone-100'
                    }`}
                  >
                    <span>All Departments</span>
                    <span className={`text-xs px-2 py-0.5 rounded-full ${selectedDepartment === 'All' ? 'bg-white/20' : 'bg-stone-100'}`}>
                      {bookData.length}
                    </span>
                  </button>
                  {bookDepartments.map((dept) => {
                    const count = bookData.filter((b) => b.department === dept).length;
                    return (
                      <button
                        key={dept}
                        onClick={() => handleDepartmentSelect(dept)}
                        className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-colors flex items-center justify-between ${
                          selectedDepartment === dept
                            ? 'bg-amber-600 text-white'
                            : 'text-stone-600 hover:bg-stone-100'
                        }`}
                      >
                        <span className="leading-tight">{dept}</span>
                        <span className={`text-xs px-2 py-0.5 rounded-full whitespace-nowrap ml-2 ${selectedDepartment === dept ? 'bg-white/20' : 'bg-stone-100'}`}>
                          {count}
                        </span>
                      </button>
                    );
                  })}
                </nav>
              </div>
            </div>
          </aside>

          {/* ── Main Content Area ── */}
          <div className="flex-1 min-w-0">
            {/* Section Header */}
            <div className="mb-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-stone-900">
                {selectedDepartment === 'All' ? 'Complete Book Catalog' : selectedDepartment}
              </h2>
              <p className="mt-1 text-sm text-stone-500">
                {filteredData.length} {filteredData.length === 1 ? 'item' : 'items'} available
              </p>
            </div>

            {/* Grouped Display (All departments) */}
            {groupedData ? (
              <div className="space-y-12">
                {Object.entries(groupedData).map(([dept, items]) => (
                  <div key={dept}>
                    <div className="flex items-center gap-3 mb-4">
                      <h3 className="text-lg sm:text-xl font-bold text-stone-900">{dept}</h3>
                      <span className="text-xs font-semibold text-stone-400 bg-stone-100 px-2.5 py-1 rounded-full">
                        {items.length} {items.length === 1 ? 'book' : 'books'}
                      </span>
                      <div className="flex-1 h-px bg-stone-200" />
                    </div>
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
                      {items.map((product) => (
                        <BookCard key={product.id} product={product} onVerify={handleVerifyPipeline} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              /* Single Department Display */
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {filteredData.map((product) => (
                  <BookCard key={product.id} product={product} onVerify={handleVerifyPipeline} />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* About / Library Info */}
      <section id="about-library" className="bg-stone-900 text-stone-100 py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">More Than a Bookstore</h2>
          <p className="mt-4 text-base sm:text-lg text-stone-400 leading-relaxed max-w-2xl mx-auto">
            Our library is a community space for readers, writers, and lifelong learners. Beyond selling books and stationery, we host reading clubs, author events, and study sessions in a warm, welcoming environment.
          </p>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div>
              <p className="text-3xl font-black text-amber-500">
                <CountUp end={10000} suffix="+" />
              </p>
              <p className="mt-1 text-sm text-stone-400">Books in Stock</p>
            </div>
            <div>
              <p className="text-3xl font-black text-amber-500">
                <CountUp end={8} />
              </p>
              <p className="mt-1 text-sm text-stone-400">Departments</p>
            </div>
            <div>
              <p className="text-3xl font-black text-amber-500">Free</p>
              <p className="mt-1 text-sm text-stone-400">Library Membership</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer with Contact Email Form */}
      <footer className="bg-stone-950 text-stone-400 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Left: Brand + Links */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-2">
                <span className="text-lg font-extrabold text-white">GLOBAL GROUP</span>
                <span className="text-lg font-light tracking-widest text-amber-500">Systems</span>
              </div>
              <p className="mt-3 text-sm leading-relaxed">A premium furniture showroom and curated bookstore & library for readers and home lovers alike.</p>
              <div className="mt-6 grid grid-cols-2 gap-6">
                <div>
                  <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Bookstore</h4>
                  <ul className="mt-3 space-y-2 text-sm">
                    <li><a href="#book-catalog" className="hover:text-amber-500 transition-colors duration-300">All Departments</a></li>
                    <li><a href="#book-catalog" className="hover:text-amber-500 transition-colors duration-300">Primary & Secondary</a></li>
                    <li><a href="#book-catalog" className="hover:text-amber-500 transition-colors duration-300">Novels & E-Books</a></li>
                    <li><a href="#book-catalog" className="hover:text-amber-500 transition-colors duration-300">Inspirational</a></li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Furniture</h4>
                  <ul className="mt-3 space-y-2 text-sm">
                    <li><a href="/" className="hover:text-amber-500 transition-colors duration-300">Living Room</a></li>
                    <li><a href="/" className="hover:text-amber-500 transition-colors duration-300">Dining Room</a></li>
                    <li><a href="/" className="hover:text-amber-500 transition-colors duration-300">Office</a></li>
                    <li><a href="/" className="hover:text-amber-500 transition-colors duration-300">Bedroom & Kitchen</a></li>
                  </ul>
                </div>
              </div>
              <button
                onClick={() => handleWhatsAppInquiry('general inquiry')}
                className="mt-6 inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Chat on WhatsApp
              </button>
            </div>

            {/* Right: Email Contact Form */}
            <div className="lg:col-span-2">
              <EmailContactForm variant="dark" />
            </div>
          </div>
          <div className="mt-10 pt-6 border-t border-stone-800 text-center text-xs text-stone-500">
            &copy; {new Date().getFullYear()} GLOBAL GROUP Systems. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <button
        onClick={() => handleWhatsAppInquiry('general inquiry')}
        className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 w-14 h-14 sm:w-16 sm:h-16 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110"
        aria-label="Chat on WhatsApp"
      >
        <svg className="w-7 h-7 sm:w-8 sm:h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
        <span className="absolute inset-0 rounded-full bg-emerald-600 animate-ping opacity-20" />
      </button>

      {/* Contact Modal */}
      <ContactModal
        isModalOpen={isModalOpen}
        activeInquiryItem={activeInquiryItem}
        emailFormData={emailFormData}
        setEmailFormData={setEmailFormData}
        onClose={handleCloseModal}
      />
    </main>
  );
}

// ── Book Card Component ──
function BookCard({
  product,
  onVerify,
}: {
  product: BookItem;
  onVerify: (name: string) => void;
}) {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-100 flex flex-col hover:shadow-xl transition-all duration-300">
      <div className="w-full aspect-[4/3] bg-stone-200 overflow-hidden relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <span className={`absolute top-4 left-4 px-3 py-1 text-[10px] font-bold tracking-wide rounded-full text-white shadow-sm ${
          product.status === 'In Stock' ? 'bg-emerald-600' : 'bg-amber-600'
        }`}>
          {product.status}
        </span>
      </div>
      <div className="p-5 sm:p-6 flex flex-col flex-1">
        <h3 className="text-base sm:text-lg font-bold text-stone-900 leading-snug">{product.name}</h3>
        <p className="mt-2 text-sm text-stone-500 leading-relaxed">{product.description}</p>

        {/* Kaduna North Hub Stock badge */}
        <div className="mt-3 inline-flex items-center gap-1.5 self-start bg-stone-100 text-stone-600 text-[10px] font-semibold px-2.5 py-1 rounded-md">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-600" />
          Kaduna North Hub Stock
        </div>

        <button
          onClick={() => onVerify(product.name)}
          className="mt-5 w-full bg-stone-900 hover:bg-stone-800 text-white font-semibold text-sm py-3 px-4 rounded-xl transition-colors shadow-sm flex items-center justify-center gap-2"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Verify Pipeline
        </button>
      </div>
    </div>
  );
}
