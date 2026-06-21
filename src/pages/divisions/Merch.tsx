import { useEffect, useState } from 'react';
import { ShoppingBag, ArrowRight, ExternalLink, RefreshCw } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface Product {
  id: number;
  name: string;
  thumbnail: string;
  store: string;
  store_id: number;
}

const STORE_COLORS: Record<string, string> = {
  "GiFTD N' PrVLGD": "#C9A84C",
  "Red Vision Music": "#E5192A",
  "Red Vision Apparel": "#7C3AED",
};

const PRINTFUL_BASE = "https://www.printful.com";

const Merch = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://localhost:3030/api/merch?store=all")
      .then(r => r.json())
      .then(d => { setProducts(d.products || []); setLoading(false); })
      .catch(() => { setError("Could not load live products."); setLoading(false); });
  }, []);

  const stores = ["all", ...Array.from(new Set(products.map(p => p.store)))];
  const filtered = filter === "all" ? products : products.filter(p => p.store === filter);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-purple-500/5" />
        <div className="max-w-7xl mx-auto relative z-10">
          <Link to="/" className="inline-flex items-center text-white/50 hover:text-white mb-8 transition-colors">
            <ArrowRight className="w-4 h-4 mr-2 rotate-180" />Back to home
          </Link>

          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
              <ShoppingBag className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Red Vision Merch</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Wear the <span className="text-primary">Vision.</span>
            </h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Official merchandise from every Red Vision division. Powered by Printful — shipped worldwide.
            </p>
          </div>

          {/* Store filter */}
          <div className="flex gap-3 justify-center flex-wrap mb-10">
            {stores.map(s => (
              <button key={s} onClick={() => setFilter(s)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                  filter === s ? "bg-primary text-white" : "bg-white/5 text-white/60 hover:bg-white/10 border border-white/10"
                }`}>
                {s === "all" ? "All Products" : s}
              </button>
            ))}
          </div>

          {loading && (
            <div className="flex items-center justify-center py-20">
              <RefreshCw className="w-8 h-8 text-primary animate-spin" />
              <span className="ml-3 text-white/60">Loading live products...</span>
            </div>
          )}

          {error && (
            <div className="text-center py-20">
              <p className="text-white/50 mb-4">{error}</p>
              <a href="https://www.printful.com" target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full font-semibold">
                Shop on Printful <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          )}

          {!loading && !error && (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filtered.map((product) => {
                const color = STORE_COLORS[product.store] || "#E5192A";
                return (
                  <div key={product.id}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-white/25 transition-all duration-300 group flex flex-col">
                    <div className="aspect-square bg-white/5 overflow-hidden relative">
                      {product.thumbnail ? (
                        <img src={product.thumbnail} alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <ShoppingBag className="w-12 h-12 text-white/20" />
                        </div>
                      )}
                      <div className="absolute top-2 left-2">
                        <span className="text-xs px-2 py-1 rounded-full font-semibold text-black"
                          style={{ background: color }}>
                          {product.store.split(" ").slice(-1)[0]}
                        </span>
                      </div>
                    </div>
                    <div className="p-4 flex flex-col flex-1">
                      <h3 className="text-sm font-semibold leading-tight mb-3 flex-1">{product.name}</h3>
                      <a href={`https://www.printful.com/dashboard/store/${product.store_id}`}
                        target="_blank" rel="noreferrer"
                        className="flex items-center justify-center gap-2 w-full py-2 rounded-lg text-sm font-semibold transition-all text-black"
                        style={{ background: color }}>
                        <ShoppingBag className="w-3 h-3" /> Shop
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {!loading && filtered.length === 0 && !error && (
            <p className="text-center text-white/40 py-20">No products found for this store.</p>
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
};
export default Merch;
