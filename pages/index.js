import React, { useState, useEffect } from 'react';
import { MapPin, Clock, Cloud, Play, Star, Menu, X, ChevronRight, Globe, Users, TrendingUp, Award, Zap, Phone, Mail } from 'lucide-react';

export default function HevaraPremium() {
  const [currentPage, setCurrentPage] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [liveTime, setLiveTime] = useState(new Date());
  const [weather, setWeather] = useState({ temp: 22, condition: 'Partly Cloudy', location: 'London, UK' });
  const [activeDestination, setActiveDestination] = useState('bali');
  const [filterBudget, setFilterBudget] = useState('all');
  const [filterType, setFilterType] = useState('all');

  // Update live clock
  useEffect(() => {
    const timer = setInterval(() => setLiveTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Simulate weather updates
  useEffect(() => {
    const weatherLocations = [
      { location: 'London, UK', temp: 22, condition: 'Partly Cloudy' },
      { location: 'Bali, Indonesia', temp: 28, condition: 'Sunny' },
      { location: 'Dubai, UAE', temp: 35, condition: 'Clear' },
      { location: 'Santorini, Greece', temp: 26, condition: 'Clear' }
    ];
    const timer = setInterval(() => {
      setWeather(weatherLocations[Math.floor(Math.random() * weatherLocations.length)]);
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  const destinations = [
    {
      id: 'bali',
      name: 'Bali',
      tagline: 'Tropical Paradise Awaits',
      description: 'Experience pristine beaches, ancient temples and vibrant culture in Indonesia\'s most enchanting island.',
      image: 'https://hevaratravel.co.uk/wp-content/uploads/2026/04/Bali-1-1024x683.png',
      bestFor: ['Honeymoons', 'Culture', 'Luxury'],
      avgPrice: '£899',
      youtube: 'dQw4w9WgXcQ',
      stats: { visitors: '2.5M+', rating: 4.8, deals: 12 }
    },
    {
      id: 'dubai',
      name: 'Dubai',
      tagline: 'Modern Luxury Redefined',
      description: 'Experience world-class luxury, iconic architecture and thrilling desert adventures in the UAE\'s crown jewel.',
      image: 'https://hevaratravel.co.uk/wp-content/uploads/2026/04/Dub-1-1024x683.png',
      bestFor: ['Shopping', 'Luxury', 'Adventure'],
      avgPrice: '£1,299',
      youtube: 'dQw4w9WgXcQ',
      stats: { visitors: '3.2M+', rating: 4.7, deals: 15 }
    },
    {
      id: 'santorini',
      name: 'Santorini',
      tagline: 'Romance in Every Sunset',
      description: 'Discover whitewashed villages, volcanic beaches and Mediterranean elegance on Greece\'s most iconic island.',
      image: 'https://hevaratravel.co.uk/wp-content/uploads/2026/04/Santor-1-1024x683.png',
      bestFor: ['Honeymoons', 'Romance', 'Photography'],
      avgPrice: '£1,199',
      youtube: 'dQw4w9WgXcQ',
      stats: { visitors: '1.8M+', rating: 4.9, deals: 10 }
    },
    {
      id: 'maldives',
      name: 'Maldives',
      tagline: 'Luxury Island Escape',
      description: 'Crystal-clear lagoons, overwater villas and world-class diving in this tropical archipelago paradise.',
      image: 'https://hevaratravel.co.uk/wp-content/uploads/2026/04/maldives-turquoise-lagoon.jpg-scaled.jpg',
      bestFor: ['Luxury', 'Honeymoons', 'Diving'],
      avgPrice: '£1,599',
      youtube: 'dQw4w9WgXcQ',
      stats: { visitors: '1.2M+', rating: 5.0, deals: 8 }
    },
    {
      id: 'thailand',
      name: 'Thailand',
      tagline: 'Adventure & Culture',
      description: 'From bustling Bangkok to pristine islands, explore vibrant culture, temples and unforgettable beaches.',
      image: 'https://hevaratravel.co.uk/wp-content/uploads/2026/04/de39e542-21a3-4f7f-b4ea-641bdcfe6f33-1024x683.png',
      bestFor: ['Adventure', 'Budget', 'Culture'],
      avgPrice: '£649',
      youtube: 'dQw4w9WgXcQ',
      stats: { visitors: '3.5M+', rating: 4.6, deals: 18 }
    },
    {
      id: 'italy',
      name: 'Italy',
      tagline: 'Art, Culture & Cuisine',
      description: 'Explore timeless cities, spectacular coastlines and world-renowned cuisine across Italy\'s most enchanting regions.',
      image: 'https://hevaratravel.co.uk/wp-content/uploads/elementor/thumbs/italy-travel-destination-scaled-rmoqhbyby07e0b9cr66czebokn57l4h09rht4fpo68.jpg',
      bestFor: ['Culture', 'Gastronomy', 'Romance'],
      avgPrice: '£899',
      youtube: 'dQw4w9WgXcQ',
      stats: { visitors: '4.1M+', rating: 4.8, deals: 14 }
    }
  ];

  const deals = [
    { id: 1, title: 'Bali Luxury Escape', destination: 'Bali', price: 899, type: 'luxury', nights: 7, image: 'https://hevaratravel.co.uk/wp-content/uploads/2026/04/Bali-2-1024x683.png' },
    { id: 2, title: 'Dubai City Break', destination: 'Dubai', price: 1299, type: 'luxury', nights: 5, image: 'https://hevaratravel.co.uk/wp-content/uploads/2026/04/Dubai-2-1024x682.png' },
    { id: 3, title: 'Santorini Romance', destination: 'Santorini', price: 1199, type: 'romance', nights: 6, image: 'https://hevaratravel.co.uk/wp-content/uploads/2026/04/Santa-2-1024x683.png' },
    { id: 4, title: 'Thailand Explorer', destination: 'Thailand', price: 649, type: 'adventure', nights: 10, image: 'https://hevaratravel.co.uk/wp-content/uploads/2026/04/de39e542-21a3-4f7f-b4ea-641bdcfe6f33-1024x683.png' },
    { id: 5, title: 'Maldives Overwater', destination: 'Maldives', price: 1599, type: 'luxury', nights: 7, image: 'https://hevaratravel.co.uk/wp-content/uploads/2026/04/maldives-luxury-overwater-villas-aerial-e1777146457263.jpg' },
    { id: 6, title: 'Italy Discovery', destination: 'Italy', price: 899, type: 'culture', nights: 8, image: 'https://hevaratravel.co.uk/wp-content/uploads/elementor/thumbs/italy-travel-destination-scaled-rmoqhbyby07e0b9cr66czebokn57l4h09rht4fpo68.jpg' },
  ];

  const stats = [
    { number: '15K+', label: 'Happy Travellers', icon: Users },
    { number: '50+', label: 'Destinations', icon: Globe },
    { number: '4.8★', label: 'Average Rating', icon: Star },
    { number: '99%', label: 'Satisfaction Rate', icon: TrendingUp }
  ];

  const filteredDeals = deals.filter(deal => {
    const budgetMatch = filterBudget === 'all' || 
      (filterBudget === 'budget' && deal.price < 800) ||
      (filterBudget === 'mid' && deal.price >= 800 && deal.price < 1300) ||
      (filterBudget === 'luxury' && deal.price >= 1300);
    
    const typeMatch = filterType === 'all' || deal.type === filterType;
    return budgetMatch && typeMatch;
  });

  const NavigationItems = [
    { label: 'Home', id: 'home' },
    { label: 'Destinations', id: 'destinations' },
    { label: 'Travel Deals', id: 'deals' },
    { label: 'Custom Journey', id: 'custom' },
    { label: 'Stories', id: 'stories' },
    { label: 'Book', id: 'book' }
  ];

  return (
    <div className="bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 text-white min-h-screen">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-slate-900/95 backdrop-blur border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => setCurrentPage('home')}>
              <img 
                src="https://hevaratravel.co.uk/wp-content/uploads/2026/04/cropped-f2d4ded5-c34a-4cc0-8dfe-32b0760a5ca8-104x104.png" 
                alt="Hevara Travel Logo"
                className="w-12 h-12 rounded-lg"
              />
              <div>
                <div className="font-serif text-xl font-bold">HEVARA</div>
                <div className="text-xs text-amber-400 font-light">LUXURY TRAVEL</div>
              </div>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {NavigationItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => setCurrentPage(item.id)}
                  className={`text-sm font-light transition ${
                    currentPage === item.id
                      ? 'text-amber-400 border-b border-amber-400 pb-1'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Live Widgets - Desktop */}
            <div className="hidden lg:flex items-center gap-6 text-xs">
              <div className="flex items-center gap-2 text-slate-400">
                <Clock size={16} />
                <span className="font-mono">{liveTime.toLocaleTimeString()}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <Cloud size={16} />
                <span>{weather.temp}°C</span>
              </div>
            </div>

            {/* Mobile Menu */}
            <button className="lg:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Nav */}
          {mobileMenuOpen && (
            <nav className="lg:hidden pb-4 space-y-2">
              {NavigationItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => {
                    setCurrentPage(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className="block w-full text-left px-4 py-2 text-slate-300 hover:text-amber-400 text-sm"
                >
                  {item.label}
                </button>
              ))}
            </nav>
          )}
        </div>
      </header>

      <main className="pt-20">
        {/* HOME PAGE */}
        {currentPage === 'home' && (
          <div className="space-y-0">
            {/* Hero */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-900 z-10"></div>
              <video 
                className="absolute inset-0 w-full h-full object-cover opacity-20"
                autoPlay muted loop
              >
                <source src="https://videos.pexels.com/video-files/7991452/7991452-sd_640_360_25fps.mp4" type="video/mp4" />
              </video>
              
              <div className="relative z-20 text-center max-w-3xl px-4">
                <div className="mb-6 inline-block">
                  <span className="text-amber-400 text-xs font-serif tracking-widest uppercase">Discover Extraordinary</span>
                </div>
                <h1 className="font-serif text-6xl md:text-7xl font-light mb-6 leading-tight">
                  Where Every Journey Becomes a Memory
                </h1>
                <p className="text-lg text-slate-300 mb-8 font-light">
                  Curated travel experiences. Personalized journeys. Unforgettable moments.
                </p>
                <button
                  onClick={() => setCurrentPage('custom')}
                  className="px-8 py-4 bg-amber-400 text-slate-900 font-semibold hover:bg-amber-300 transition"
                >
                  Begin Your Journey
                </button>
              </div>

              {/* Live Data Bar - Bottom of Hero */}
              <div className="absolute bottom-0 left-0 right-0 z-20 bg-gradient-to-t from-slate-900 to-transparent">
                <div className="max-w-7xl mx-auto px-4 py-12">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, idx) => (
                      <div key={idx} className="text-center">
                        <div className="text-3xl font-serif font-light text-amber-400 mb-2">{stat.number}</div>
                        <div className="text-xs text-slate-400 uppercase tracking-wide">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Live Data Dashboard */}
            <section className="bg-slate-900 border-t border-slate-700 py-12">
              <div className="max-w-7xl mx-auto px-4">
                <div className="grid md:grid-cols-3 gap-6">
                  {/* Clock Widget */}
                  <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Clock className="text-amber-400" size={20} />
                      <h3 className="font-serif text-lg">Current Time</h3>
                    </div>
                    <div className="font-mono text-4xl font-light mb-2">{liveTime.toLocaleTimeString()}</div>
                    <div className="text-sm text-slate-400">{liveTime.toLocaleDateString('en-UK', { weekday: 'long', month: 'long', day: 'numeric' })}</div>
                  </div>

                  {/* Weather Widget */}
                  <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Cloud className="text-amber-400" size={20} />
                      <h3 className="font-serif text-lg">World Weather</h3>
                    </div>
                    <div className="text-2xl mb-2">{weather.location}</div>
                    <div className="flex justify-between items-center">
                      <div className="text-3xl font-light">{weather.temp}°C</div>
                      <div className="text-sm text-slate-400">{weather.condition}</div>
                    </div>
                  </div>

                  {/* Map Widget */}
                  <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <MapPin className="text-amber-400" size={20} />
                      <h3 className="font-serif text-lg">Popular Routes</h3>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-300">London → Bali</span>
                        <span className="text-amber-400">24h 30m</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-300">London → Dubai</span>
                        <span className="text-amber-400">7h 15m</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-300">London → Santorini</span>
                        <span className="text-amber-400">4h 45m</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Featured Destinations */}
            <section className="bg-gradient-to-b from-slate-900 to-slate-800 py-20">
              <div className="max-w-7xl mx-auto px-4">
                <div className="mb-12">
                  <h2 className="font-serif text-5xl mb-2">Featured Destinations</h2>
                  <p className="text-slate-400 font-light">Hand-selected experiences across the world</p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  {destinations.slice(0, 3).map(dest => (
                    <div key={dest.id} className="group cursor-pointer" onClick={() => setCurrentPage('destinations')}>
                      <div className="relative h-80 rounded-lg overflow-hidden mb-4">
                        <img 
                          src={dest.image} 
                          alt={dest.name}
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                          <h3 className="font-serif text-3xl mb-2">{dest.name}</h3>
                          <p className="text-sm text-slate-300 font-light">{dest.tagline}</p>
                        </div>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <div className="flex gap-3">
                          {dest.bestFor.map((tag, idx) => (
                            <span key={idx} className="text-xs text-amber-400 font-light">{tag}</span>
                          ))}
                        </div>
                        <div className="text-amber-400 font-semibold">From {dest.avgPrice}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* YouTube Video Gallery */}
            <section className="bg-slate-800 border-y border-slate-700 py-20">
              <div className="max-w-7xl mx-auto px-4">
                <div className="mb-12">
                  <h2 className="font-serif text-5xl mb-2">Destination Stories</h2>
                  <p className="text-slate-400 font-light">Watch our curated travel experiences</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {destinations.map(dest => (
                    <div key={dest.id} className="group relative h-64 rounded-lg overflow-hidden cursor-pointer">
                      <div className="absolute inset-0" style={{ background: dest.image }}></div>
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition"></div>
                      <button className="absolute inset-0 flex items-center justify-center group-hover:scale-110 transition">
                        <Play className="text-white" size={48} fill="white" />
                      </button>
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="font-serif text-xl mb-1">{dest.name}</div>
                        <div className="text-xs text-slate-300">{dest.tagline}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Why Hevara */}
            <section className="bg-slate-900 py-20">
              <div className="max-w-7xl mx-auto px-4">
                <div className="mb-12">
                  <h2 className="font-serif text-5xl mb-2">Why Choose Hevara Travel</h2>
                  <p className="text-slate-400 font-light">Luxury redefined for the discerning traveller</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                  <div>
                    <div className="w-12 h-12 bg-amber-400/20 rounded-lg flex items-center justify-center mb-4">
                      <Award className="text-amber-400" size={24} />
                    </div>
                    <h3 className="font-serif text-xl mb-3">Curated Excellence</h3>
                    <p className="text-slate-400 font-light">Every destination, every hotel, every experience is personally verified and selected for quality.</p>
                  </div>

                  <div>
                    <div className="w-12 h-12 bg-amber-400/20 rounded-lg flex items-center justify-center mb-4">
                      <Users className="text-amber-400" size={24} />
                    </div>
                    <h3 className="font-serif text-xl mb-3">Personal Attention</h3>
                    <p className="text-slate-400 font-light">Our expert travel consultants work with you to design bespoke itineraries tailored to your preferences.</p>
                  </div>

                  <div>
                    <div className="w-12 h-12 bg-amber-400/20 rounded-lg flex items-center justify-center mb-4">
                      <Zap className="text-amber-400" size={24} />
                    </div>
                    <h3 className="font-serif text-xl mb-3">Seamless Experience</h3>
                    <p className="text-slate-400 font-light">From booking to return, we handle every detail with precision and care.</p>
                  </div>
                </div>

                {/* Trust Signals */}
                <div className="mt-16 p-8 bg-slate-800 border border-slate-700 rounded-lg">
                  <div className="grid md:grid-cols-3 gap-8 text-center">
                    <div>
                      <div className="text-amber-400 text-sm font-semibold mb-2">ABTA MEMBER</div>
                      <p className="text-xs text-slate-400">Trading as InteleTravel Ltd Member</p>
                    </div>
                    <div>
                      <div className="text-amber-400 text-sm font-semibold mb-2">ATOL PROTECTED</div>
                      <p className="text-xs text-slate-400">Full financial protection on all bookings</p>
                    </div>
                    <div>
                      <div className="text-amber-400 text-sm font-semibold mb-2">24/7 SUPPORT</div>
                      <p className="text-xs text-slate-400">Always here when you need us</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* CTA */}
            <section className="bg-gradient-to-r from-amber-600 to-amber-500 py-16">
              <div className="max-w-4xl mx-auto text-center px-4">
                <h2 className="font-serif text-4xl text-slate-900 mb-4">Ready to Explore?</h2>
                <p className="text-slate-900/80 font-light mb-8">Let us craft your perfect journey</p>
                <button
                  onClick={() => setCurrentPage('book')}
                  className="px-8 py-4 bg-slate-900 text-amber-400 font-semibold hover:bg-slate-800 transition"
                >
                  Start Planning Now
                </button>
              </div>
            </section>
          </div>
        )}

        {/* DESTINATIONS PAGE */}
        {currentPage === 'destinations' && (
          <div className="bg-slate-900 min-h-screen py-20">
            <div className="max-w-7xl mx-auto px-4">
              <div className="mb-12">
                <h1 className="font-serif text-6xl mb-4">Explore Destinations</h1>
                <p className="text-slate-400 font-light text-lg">Discover our most sought-after locations</p>
              </div>

              {/* Filters */}
              <div className="mb-8 space-y-4">
                <div className="flex flex-wrap gap-4">
                  <div>
                    <label className="text-sm text-slate-400 block mb-2">Budget</label>
                    <select 
                      value={filterBudget} 
                      onChange={(e) => setFilterBudget(e.target.value)}
                      className="bg-slate-800 border border-slate-700 rounded px-4 py-2 text-white"
                    >
                      <option value="all">All Budgets</option>
                      <option value="budget">Budget (Under £800)</option>
                      <option value="mid">Mid-Range (£800-£1,300)</option>
                      <option value="luxury">Luxury (£1,300+)</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-sm text-slate-400 block mb-2">Type</label>
                    <select 
                      value={filterType} 
                      onChange={(e) => setFilterType(e.target.value)}
                      className="bg-slate-800 border border-slate-700 rounded px-4 py-2 text-white"
                    >
                      <option value="all">All Types</option>
                      <option value="luxury">Luxury</option>
                      <option value="adventure">Adventure</option>
                      <option value="romance">Romance</option>
                      <option value="culture">Culture</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Destination Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {destinations.map(dest => (
                  <div key={dest.id} className="group cursor-pointer" onClick={() => setActiveDestination(dest.id)}>
                    <div className="relative h-96 rounded-lg overflow-hidden mb-6">
                      <img 
                        src={dest.image} 
                        alt={dest.name}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
                      <div className="absolute top-4 right-4 bg-slate-900/80 backdrop-blur px-3 py-1 rounded text-sm text-amber-400">
                        {dest.stats.rating}★
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h3 className="font-serif text-3xl mb-2">{dest.name}</h3>
                        <p className="text-sm text-slate-300">{dest.tagline}</p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <p className="text-slate-400 font-light text-sm">{dest.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {dest.bestFor.map((tag, idx) => (
                          <span key={idx} className="text-xs bg-amber-400/10 text-amber-400 px-3 py-1 rounded">{tag}</span>
                        ))}
                      </div>
                      <div className="flex justify-between items-center pt-4 border-t border-slate-700">
                        <span className="text-slate-400 text-sm">{dest.stats.deals} Deals Available</span>
                        <span className="text-amber-400 font-semibold">From {dest.avgPrice}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* DEALS PAGE */}
        {currentPage === 'deals' && (
          <div className="bg-slate-900 min-h-screen py-20">
            <div className="max-w-7xl mx-auto px-4">
              <div className="mb-12">
                <h1 className="font-serif text-6xl mb-4">Exclusive Deals</h1>
                <p className="text-slate-400 font-light text-lg">Curated packages with exceptional value</p>
              </div>

              {/* Filters */}
              <div className="mb-8 flex flex-wrap gap-4">
                <button
                  onClick={() => setFilterBudget('all')}
                  className={`px-4 py-2 rounded text-sm ${filterBudget === 'all' ? 'bg-amber-400 text-slate-900' : 'bg-slate-800 text-slate-300'}`}
                >
                  All Deals
                </button>
                <button
                  onClick={() => setFilterBudget('budget')}
                  className={`px-4 py-2 rounded text-sm ${filterBudget === 'budget' ? 'bg-amber-400 text-slate-900' : 'bg-slate-800 text-slate-300'}`}
                >
                  Budget
                </button>
                <button
                  onClick={() => setFilterBudget('mid')}
                  className={`px-4 py-2 rounded text-sm ${filterBudget === 'mid' ? 'bg-amber-400 text-slate-900' : 'bg-slate-800 text-slate-300'}`}
                >
                  Mid-Range
                </button>
                <button
                  onClick={() => setFilterBudget('luxury')}
                  className={`px-4 py-2 rounded text-sm ${filterBudget === 'luxury' ? 'bg-amber-400 text-slate-900' : 'bg-slate-800 text-slate-300'}`}
                >
                  Luxury
                </button>
              </div>

              {/* Deals Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredDeals.map(deal => (
                  <div key={deal.id} className="bg-slate-800 border border-slate-700 rounded-lg overflow-hidden hover:border-amber-400/50 transition">
                    <img 
                      src={deal.image} 
                      alt={deal.title}
                      className="w-full h-64 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="font-serif text-2xl mb-2">{deal.title}</h3>
                      <p className="text-slate-400 text-sm mb-4 font-light">{deal.nights} nights in {deal.destination}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-amber-400 font-semibold">From £{deal.price}</span>
                        <button
                          onClick={() => setCurrentPage('book')}
                          className="text-amber-400 hover:text-amber-300 text-sm"
                        >
                          Enquire →
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* CUSTOM JOURNEY PAGE */}
        {currentPage === 'custom' && (
          <div className="bg-slate-900 min-h-screen py-20">
            <div className="max-w-4xl mx-auto px-4">
              <div className="mb-12">
                <h1 className="font-serif text-6xl mb-4">Build Your Custom Journey</h1>
                <p className="text-slate-400 font-light text-lg">Create a bespoke itinerary tailored to your preferences</p>
              </div>

              <div className="bg-slate-800 border border-slate-700 rounded-lg p-8 space-y-8">
                <div>
                  <label className="block text-sm font-semibold mb-4">Select Destinations</label>
                  <div className="grid md:grid-cols-3 gap-4">
                    {destinations.map(dest => (
                      <label key={dest.id} className="flex items-center p-4 border border-slate-700 rounded-lg cursor-pointer hover:border-amber-400 transition">
                        <input type="checkbox" className="mr-3" />
                        <div>
                          <div className="font-serif text-sm">{dest.name}</div>
                          <div className="text-xs text-slate-400">{dest.tagline}</div>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Trip Duration</label>
                    <select className="w-full bg-slate-700 border border-slate-600 rounded px-4 py-2 text-white">
                      <option>3-5 days</option>
                      <option>1-2 weeks</option>
                      <option>2-3 weeks</option>
                      <option>3+ weeks</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">Budget Range</label>
                    <select className="w-full bg-slate-700 border border-slate-600 rounded px-4 py-2 text-white">
                      <option>£500-£1,000</option>
                      <option>£1,000-£2,000</option>
                      <option>£2,000-£5,000</option>
                      <option>£5,000+</option>
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Travel Style</label>
                    <select className="w-full bg-slate-700 border border-slate-600 rounded px-4 py-2 text-white">
                      <option>Luxury</option>
                      <option>Adventure</option>
                      <option>Culture</option>
                      <option>Relaxation</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">When?</label>
                    <select className="w-full bg-slate-700 border border-slate-600 rounded px-4 py-2 text-white">
                      <option>Next 3 months</option>
                      <option>3-6 months</option>
                      <option>6-12 months</option>
                      <option>Flexible</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Any Special Requirements?</label>
                  <textarea 
                    className="w-full bg-slate-700 border border-slate-600 rounded px-4 py-3 text-white placeholder-slate-400"
                    rows="4"
                    placeholder="Honeymoon, family trip, specific activities, dietary requirements, etc."
                  ></textarea>
                </div>

                <button
                  onClick={() => setCurrentPage('book')}
                  className="w-full bg-amber-400 text-slate-900 py-3 rounded font-semibold hover:bg-amber-300 transition"
                >
                  Create My Journey
                </button>
              </div>
            </div>
          </div>
        )}

        {/* BOOKING PAGE */}
        {currentPage === 'book' && (
          <div className="bg-slate-900 min-h-screen py-20">
            <div className="max-w-2xl mx-auto px-4">
              <div className="mb-12">
                <h1 className="font-serif text-5xl mb-4">Begin Your Adventure</h1>
                <p className="text-slate-400 font-light">One of our travel specialists will be in touch within 24 hours</p>
              </div>

              <div className="bg-slate-800 border border-slate-700 rounded-lg p-8 space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <input type="text" placeholder="Full Name" className="bg-slate-700 border border-slate-600 rounded px-4 py-3 text-white placeholder-slate-400 w-full" />
                  <input type="email" placeholder="Email Address" className="bg-slate-700 border border-slate-600 rounded px-4 py-3 text-white placeholder-slate-400 w-full" />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <input type="tel" placeholder="Phone Number" className="bg-slate-700 border border-slate-600 rounded px-4 py-3 text-white placeholder-slate-400 w-full" />
                  <select className="bg-slate-700 border border-slate-600 rounded px-4 py-3 text-white">
                    <option>Select Destination</option>
                    {destinations.map(dest => (
                      <option key={dest.id} value={dest.name}>{dest.name}</option>
                    ))}
                  </select>
                </div>

                <textarea 
                  placeholder="Tell us about your dream trip..."
                  rows="5"
                  className="w-full bg-slate-700 border border-slate-600 rounded px-4 py-3 text-white placeholder-slate-400"
                ></textarea>

                <button className="w-full bg-amber-400 text-slate-900 py-3 rounded font-semibold hover:bg-amber-300 transition">
                  Submit Enquiry
                </button>

                {/* Alternative Contact */}
                <div className="pt-6 border-t border-slate-700">
                  <p className="text-slate-400 text-sm mb-4 font-light">Or contact us directly:</p>
                  <div className="flex flex-wrap gap-4">
                    <a href="tel:+447741326960" className="flex items-center gap-2 text-amber-400 hover:text-amber-300">
                      <Phone size={18} />
                      +44 7741 326960
                    </a>
                    <a href="mailto:hello@hevaratravel.com" className="flex items-center gap-2 text-amber-400 hover:text-amber-300">
                      <Mail size={18} />
                      hello@hevaratravel.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* STORIES PAGE */}
        {currentPage === 'stories' && (
          <div className="bg-slate-900 min-h-screen py-20">
            <div className="max-w-6xl mx-auto px-4">
              <div className="mb-16">
                <h1 className="font-serif text-6xl mb-4">Travel Stories</h1>
                <p className="text-slate-400 font-light text-lg">Inspiring journeys and unforgettable moments</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {[
                  { title: 'The Bali Chronicles: A Journey of Discovery', img: 'https://hevaratravel.co.uk/wp-content/uploads/2026/04/Bali-1-1024x683.png' },
                  { title: 'Dubai Dreams: Modern Luxury Unleashed', img: 'https://hevaratravel.co.uk/wp-content/uploads/2026/04/Dub-1-1024x683.png' },
                  { title: 'Safari Adventure: Untamed Wildlife Wonders', img: 'https://hevaratravel.co.uk/wp-content/uploads/elementor/thumbs/Safari-desert-rmju20hjfep3k6dkgncxb9n36cm5ubluc7xxiwhrpc.png' },
                  { title: 'Santorini Sunsets: Greek Island Romance', img: 'https://hevaratravel.co.uk/wp-content/uploads/2026/04/Santor-1-1024x683.png' },
                  { title: 'Amazon Expedition: Into the Rainforest', img: 'https://hevaratravel.co.uk/wp-content/uploads/elementor/thumbs/amazon-rainforest-river-canoe-adventure-rmmokidkiepj85q2jvwuzzeyo6mj8umgehfxp4k1vk.png' },
                  { title: 'Extreme Adventures: Thrill Seeker\'s Paradise', img: 'https://hevaratravel.co.uk/wp-content/uploads/elementor/thumbs/paragliding-adventures-rmjwhtkrv8we4stwq3r9qly8x5tjwf75etvuggasg0.png' }
                ].map((story, idx) => (
                  <article key={idx} className="group">
                    <div className="h-80 rounded-lg mb-6 overflow-hidden relative">
                      <img 
                        src={story.img} 
                        alt={story.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition flex items-center justify-center">
                        <Play size={48} className="text-white" fill="white" />
                      </div>
                    </div>
                    <h3 className="font-serif text-2xl mb-3">{story.title}</h3>
                    <p className="text-slate-400 font-light mb-4">Discover unforgettable moments and inspiring travel experiences from our community of adventurers...</p>
                    <a href="#" className="text-amber-400 hover:text-amber-300 text-sm font-light">Read Story →</a>
                  </article>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-800 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img 
                  src="https://hevaratravel.co.uk/wp-content/uploads/2026/04/cropped-f2d4ded5-c34a-4cc0-8dfe-32b0760a5ca8-104x104.png" 
                  alt="Hevara Travel Logo"
                  className="w-10 h-10 rounded"
                />
                <span className="font-serif text-lg">HEVARA</span>
              </div>
              <p className="text-slate-400 font-light text-sm">Luxury travel experiences, curated with care.</p>
            </div>

            <div>
              <h4 className="font-semibold text-sm mb-4 uppercase tracking-wide">Explore</h4>
              <ul className="space-y-2 text-sm text-slate-400 font-light">
                <li><button onClick={() => setCurrentPage('home')} className="hover:text-amber-400">Home</button></li>
                <li><button onClick={() => setCurrentPage('destinations')} className="hover:text-amber-400">Destinations</button></li>
                <li><button onClick={() => setCurrentPage('deals')} className="hover:text-amber-400">Travel Deals</button></li>
                <li><button onClick={() => setCurrentPage('stories')} className="hover:text-amber-400">Stories</button></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-sm mb-4 uppercase tracking-wide">Contact</h4>
              <ul className="space-y-2 text-sm text-slate-400 font-light">
                <li><a href="tel:+447741326960" className="hover:text-amber-400">+44 7741 326960</a></li>
                <li><a href="mailto:hello@hevaratravel.com" className="hover:text-amber-400">hello@hevaratravel.com</a></li>
                <li><a href="#" className="hover:text-amber-400">Live Chat</a></li>
                <li><a href="#" className="hover:text-amber-400">WhatsApp</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-sm mb-4 uppercase tracking-wide">Trust & Safety</h4>
              <ul className="space-y-2 text-sm text-slate-400 font-light">
                <li><a href="#" className="hover:text-amber-400">ABTA Member</a></li>
                <li><a href="#" className="hover:text-amber-400">ATOL Protected</a></li>
                <li><a href="#" className="hover:text-amber-400">Booking Protection</a></li>
                <li><a href="#" className="hover:text-amber-400">Privacy Policy</a></li>
              </ul>
            </div>
          </div>

          {/* Compliance Banner */}
          <div className="bg-slate-900 border border-slate-800 rounded-lg p-6 mb-8">
            <p className="text-slate-300 text-sm font-light">
              Hevara Travel is an independent travel agent trading on behalf of InteleTravel Ltd, a Member of ABTA. When you book a package holiday that includes flights through us, it will be ATOL protected and you will receive an ATOL Certificate confirming what is covered. <a href="#" className="text-amber-400 hover:text-amber-300">Learn more about booking protection →</a>
            </p>
          </div>

          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-400 font-light">
            <p>© 2026 Hevara Travel. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-amber-400">Instagram</a>
              <a href="#" className="hover:text-amber-400">Facebook</a>
              <a href="#" className="hover:text-amber-400">Twitter</a>
              <a href="#" className="hover:text-amber-400">YouTube</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
export default HevaraPremium
