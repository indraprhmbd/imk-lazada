import { 
  Search, 
  ShoppingCart, 
  Bell, 
  MessageCircle, 
  Heart,
  Smartphone,
  Laptop,
  Watch,
  Home,
  Shirt,
  Sparkles,
  Zap,
  TrendingUp,
  Package,
  Gift,
  Percent,
  Star,
  ChevronRight,
  User,
  Menu
} from 'lucide-react';
import { ImageWithFallback } from './components/figma/ImageWithFallback';

export function LazadaHome() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white sticky top-0 z-50 shadow-lg">
        <div className="max-w-[480px] mx-auto">
          {/* Status Bar */}
          <div className="flex justify-between items-center px-4 py-2 text-xs">
            <span>08:34</span>
            <div className="flex items-center gap-1">
              <span>4G</span>
              <div className="flex gap-0.5">
                <div className="w-1 h-3 bg-white"></div>
                <div className="w-1 h-3 bg-white"></div>
                <div className="w-1 h-3 bg-white"></div>
                <div className="w-1 h-3 bg-white/50"></div>
              </div>
            </div>
          </div>

          {/* Main Header */}
          <div className="px-4 pb-4">
            <div className="flex items-center justify-between mb-3">
              <Menu className="w-6 h-6" />
              <h1 className="tracking-wider">LAZADA</h1>
              <div className="flex items-center gap-3">
                <Bell className="w-5 h-5" />
                <MessageCircle className="w-5 h-5" />
              </div>
            </div>

            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-white text-gray-800 placeholder-gray-400"
              />
              <ShoppingCart className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-purple-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[480px] mx-auto pb-20">
        {/* Hero Banner */}
        <div className="px-4 pt-4">
          <div className="bg-gradient-to-r from-orange-500 to-pink-500 rounded-2xl p-6 relative overflow-hidden">
            <div className="relative z-10">
              <div className="inline-block bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full mb-2">
                <span className="text-white text-xs">MEGA SALE</span>
              </div>
              <h2 className="text-white text-2xl mb-1">Flash Sale</h2>
              <p className="text-white/90 text-sm mb-3">Up to 80% OFF</p>
              <button className="bg-white text-orange-600 px-4 py-2 rounded-lg text-sm hover:bg-orange-50 transition">
                Shop Now
              </button>
            </div>
            <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-20">
              <Sparkles className="w-full h-full" />
            </div>
          </div>
        </div>

        {/* Quick Categories */}
        <div className="px-4 py-6">
          <div className="grid grid-cols-4 gap-4">
            <CategoryIcon icon={<Smartphone />} label="Phones" color="bg-blue-100 text-blue-600" />
            <CategoryIcon icon={<Laptop />} label="Electronics" color="bg-purple-100 text-purple-600" />
            <CategoryIcon icon={<Shirt />} label="Fashion" color="bg-pink-100 text-pink-600" />
            <CategoryIcon icon={<Watch />} label="Watches" color="bg-green-100 text-green-600" />
            <CategoryIcon icon={<Home />} label="Home" color="bg-orange-100 text-orange-600" />
            <CategoryIcon icon={<Gift />} label="Gifts" color="bg-red-100 text-red-600" />
            <CategoryIcon icon={<Sparkles />} label="Beauty" color="bg-yellow-100 text-yellow-600" />
            <CategoryIcon icon={<Package />} label="More" color="bg-gray-100 text-gray-600" />
          </div>
        </div>

        {/* Flash Sale Section */}
        <div className="mb-6">
          <div className="flex items-center justify-between px-4 mb-3">
            <div className="flex items-center gap-2">
              <div className="bg-gradient-to-r from-orange-500 to-red-500 p-1.5 rounded-lg">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-gray-800">Flash Sale</h3>
              <div className="bg-red-500 text-white px-2 py-0.5 rounded text-xs">
                02:34:12
              </div>
            </div>
            <button className="text-purple-600 text-sm flex items-center gap-1">
              See All <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="overflow-x-auto scrollbar-hide">
            <div className="flex gap-3 px-4">
              <FlashSaleCard 
                name="Wireless Earbuds Pro"
                originalPrice="Rp 299.000"
                salePrice="Rp 89.000"
                discount="70%"
              />
              <FlashSaleCard 
                name="Smart Watch Series 8"
                originalPrice="Rp 1.499.000"
                salePrice="Rp 599.000"
                discount="60%"
              />
              <FlashSaleCard 
                name="USB-C Fast Charger"
                originalPrice="Rp 199.000"
                salePrice="Rp 59.000"
                discount="70%"
              />
            </div>
          </div>
        </div>

        {/* Trending Products */}
        <div className="mb-6">
          <div className="flex items-center justify-between px-4 mb-3">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-pink-600" />
              <h3 className="text-gray-800">Trending Now</h3>
            </div>
            <button className="text-purple-600 text-sm flex items-center gap-1">
              See All <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="overflow-x-auto scrollbar-hide">
            <div className="flex gap-3 px-4">
              <TrendingCard 
                name="Gaming Mouse RGB"
                price="Rp 249.000"
                rating={4.8}
                sold="2.3k"
              />
              <TrendingCard 
                name="Mechanical Keyboard"
                price="Rp 899.000"
                rating={4.9}
                sold="1.8k"
              />
              <TrendingCard 
                name="Webcam HD 1080p"
                price="Rp 459.000"
                rating={4.7}
                sold="3.1k"
              />
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="px-4">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-gray-800">Recommended For You</h3>
            <button className="text-purple-600 text-sm">View All</button>
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            <ProductCard 
              name="Bluetooth Speaker Portable"
              price="Rp 199.000"
              originalPrice="Rp 399.000"
              rating={4.6}
              sold="856"
            />
            <ProductCard 
              name="Phone Case Premium"
              price="Rp 79.000"
              originalPrice="Rp 149.000"
              rating={4.5}
              sold="1.2k"
            />
            <ProductCard 
              name="Laptop Stand Aluminum"
              price="Rp 159.000"
              originalPrice="Rp 299.000"
              rating={4.8}
              sold="645"
            />
            <ProductCard 
              name="USB Hub 7-in-1"
              price="Rp 129.000"
              originalPrice="Rp 249.000"
              rating={4.7}
              sold="932"
            />
            <ProductCard 
              name="Wireless Charger Pad"
              price="Rp 149.000"
              originalPrice="Rp 299.000"
              rating={4.6}
              sold="1.5k"
            />
            <ProductCard 
              name="Power Bank 20000mAh"
              price="Rp 249.000"
              originalPrice="Rp 499.000"
              rating={4.9}
              sold="2.8k"
            />
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg">
        <div className="max-w-[480px] mx-auto">
          <div className="grid grid-cols-5 gap-1 px-2 py-3">
            <NavItem icon={<Home />} label="Home" active />
            <NavItem icon={<Heart />} label="Wishlist" />
            <NavItem icon={<Percent />} label="Deals" />
            <NavItem icon={<ShoppingCart />} label="Cart" />
            <NavItem icon={<User />} label="Profile" />
          </div>
        </div>
      </div>
    </div>
  );
}

function CategoryIcon({ icon, label, color }: { icon: React.ReactNode; label: string; color: string }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className={`${color} w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm hover:scale-105 transition-transform cursor-pointer`}>
        <div className="w-6 h-6">{icon}</div>
      </div>
      <span className="text-xs text-gray-600 text-center">{label}</span>
    </div>
  );
}

function FlashSaleCard({ name, originalPrice, salePrice, discount }: { 
  name: string; 
  originalPrice: string; 
  salePrice: string; 
  discount: string; 
}) {
  return (
    <div className="flex-shrink-0 w-36 bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow cursor-pointer">
      <div className="relative">
        <div className="bg-gradient-to-br from-gray-100 to-gray-200 aspect-square flex items-center justify-center">
          <Package className="w-12 h-12 text-gray-400" />
        </div>
        <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-0.5 rounded-full text-xs">
          -{discount}
        </div>
      </div>
      <div className="p-2.5">
        <p className="text-xs text-gray-800 mb-1 line-clamp-2">{name}</p>
        <div className="flex items-center gap-1 mb-1">
          <span className="text-orange-600 text-sm">{salePrice}</span>
        </div>
        <div className="text-xs text-gray-400 line-through">{originalPrice}</div>
        <div className="mt-2 bg-orange-500/10 rounded-full h-1.5">
          <div className="bg-orange-500 h-full rounded-full" style={{ width: '65%' }}></div>
        </div>
      </div>
    </div>
  );
}

function TrendingCard({ name, price, rating, sold }: { 
  name: string; 
  price: string; 
  rating: number; 
  sold: string; 
}) {
  return (
    <div className="flex-shrink-0 w-40 bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow cursor-pointer">
      <div className="bg-gradient-to-br from-purple-100 to-pink-100 aspect-square flex items-center justify-center">
        <Sparkles className="w-12 h-12 text-purple-400" />
      </div>
      <div className="p-2.5">
        <p className="text-xs text-gray-800 mb-1.5 line-clamp-2">{name}</p>
        <div className="flex items-center gap-1 mb-1">
          <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
          <span className="text-xs text-gray-600">{rating}</span>
          <span className="text-xs text-gray-400">| {sold} sold</span>
        </div>
        <span className="text-purple-600">{price}</span>
      </div>
    </div>
  );
}

function ProductCard({ name, price, originalPrice, rating, sold }: { 
  name: string; 
  price: string; 
  originalPrice?: string; 
  rating: number; 
  sold: string; 
}) {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow cursor-pointer">
      <div className="relative">
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 aspect-square flex items-center justify-center">
          <Package className="w-16 h-16 text-gray-300" />
        </div>
        <button className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm p-1.5 rounded-full hover:bg-white transition">
          <Heart className="w-4 h-4 text-gray-600" />
        </button>
      </div>
      <div className="p-3">
        <p className="text-sm text-gray-800 mb-2 line-clamp-2">{name}</p>
        <div className="flex items-center gap-1 mb-2">
          <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
          <span className="text-xs text-gray-600">{rating}</span>
          <span className="text-xs text-gray-400">| {sold}</span>
        </div>
        <div className="flex items-baseline gap-1.5">
          <span className="text-purple-600">{price}</span>
          {originalPrice && (
            <span className="text-xs text-gray-400 line-through">{originalPrice}</span>
          )}
        </div>
      </div>
    </div>
  );
}

function NavItem({ icon, label, active }: { icon: React.ReactNode; label: string; active?: boolean }) {
  return (
    <button className={`flex flex-col items-center gap-1 ${active ? 'text-purple-600' : 'text-gray-400'}`}>
      <div className="w-5 h-5">{icon}</div>
      <span className="text-xs">{label}</span>
    </button>
  );
}
