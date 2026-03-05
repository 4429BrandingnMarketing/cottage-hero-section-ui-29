import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, ExternalLink, Star, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

// ============================================================
// PRINTFUL INTEGRATION
// Replace PRINTFUL_TOKEN with your new OAuth2 token from
// developers.printful.com → Generate Token
// ============================================================
const PRINTFUL_TOKEN = 'mV57Mxqeo0JZUYIdBpGr8fyAnla4NhDfDvKiBeDQ'; // Set when new token is generated
const FALLBACK_STORE_URL = 'https://redvisioncreativestudio.myshopify.com';

interface MerchItem {
  id: string;
  name: string;
  thumbnail_url: string;
  retail_price: string;
  currency: string;
  external_id?: string;
}

const PLACEHOLDER_ITEMS = [
  { id: 'p1', name: 'Red Vision Hoodie', thumbnail_url: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=600', retail_price: '59.99', currency: 'USD' },
  { id: 'p2', name: 'LUMI AI T-Shirt', thumbnail_url: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=600', retail_price: '29.99', currency: 'USD' },
  { id: 'p3', name: 'RVM Snapback Cap', thumbnail_url: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&q=80&w=600', retail_price: '24.99', currency: 'USD' },
  { id: 'p4', name: 'Cosmic Mug', thumbnail_url: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&q=80&w=600', retail_price: '19.99', currency: 'USD' },
  { id: 'p5', name: 'Artist Series Poster', thumbnail_url: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=600', retail_price: '14.99', currency: 'USD' },
  { id: 'p6', name: 'Limited Edition Vinyl', thumbnail_url: 'https://images.unsplash.com/photo-1539375665275-f9de415ef9ac?auto=format&fit=crop&q=80&w=600', retail_price: '34.99', currency: 'USD' },
  { id: 'p7', name: 'RVM Tote Bag', thumbnail_url: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=600', retail_price: '22.99', currency: 'USD' },
  { id: 'p8', name: 'Signature Beanie', thumbnail_url: 'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format&fit=crop&q=80&w=600', retail_price: '27.99', currency: 'USD' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } }
};

const MerchSection = () => {
  const [items, setItems] = useState<MerchItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [storeUrl, setStoreUrl] = useState(FALLBACK_STORE_URL);
  const [liveData, setLiveData] = useState(false);

  useEffect(() => {
    const fetchPrintful = async () => {
      if (!PRINTFUL_TOKEN || (PRINTFUL_TOKEN as string) === 'PASTE_NEW_TOKEN_HERE') {
        setItems(PLACEHOLDER_ITEMS);
        setLoading(false);
        return;
      }

      try {
        // Fetch store info for URL
        const storeRes = await fetch('https://api.printful.com/store', {
          headers: { Authorization: `Bearer ${PRINTFUL_TOKEN}` }
        });
        const storeData = await storeRes.json();
        if (storeData?.result?.website) setStoreUrl(storeData.result.website);

        // Fetch products
        const productsRes = await fetch('https://api.printful.com/store/products?limit=20', {
          headers: { Authorization: `Bearer ${PRINTFUL_TOKEN}` }
        });
        const productsData = await productsRes.json();

        if (productsData?.result?.length > 0) {
          const mapped: MerchItem[] = productsData.result.map((p: any) => ({
            id: String(p.id),
            name: p.name,
            thumbnail_url: p.thumbnail_url || PLACEHOLDER_ITEMS[0].thumbnail_url,
            retail_price: p.retail_price || '—',
            currency: p.currency || 'USD',
            external_id: p.external_id,
          }));
          setItems(mapped);
          setLiveData(true);
        } else {
          setItems(PLACEHOLDER_ITEMS);
        }
      } catch {
        setItems(PLACEHOLDER_ITEMS);
      } finally {
        setLoading(false);
      }
    };

    fetchPrintful();
  }, []);

  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-1/2 -left-1/4 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <ShoppingBag className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              Official Merchandise {liveData && '· Live from Printful'}
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="text-foreground">Rep the </span>
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Vision</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Exclusive merch from Red Vision Music. Show your support for the future of sound.
          </p>
        </motion.div>

        {/* Loading */}
        {loading ? (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="w-8 h-8 animate-spin text-primary" />
          </div>
        ) : (
          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
          >
            {items.map((item, idx) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                className="group relative"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
              >
                <div className="relative rounded-2xl overflow-hidden bg-card border border-border/50 shadow-lg hover:shadow-xl hover:border-primary/30 transition-all duration-300">
                  {idx < 2 && (
                    <div className="absolute top-3 left-3 z-10">
                      <span className="inline-flex items-center gap-1 px-2 py-1 text-xs font-bold bg-primary text-primary-foreground rounded-full">
                        <Star className="w-3 h-3 fill-current" />
                        Featured
                      </span>
                    </div>
                  )}

                  <div className="relative aspect-square overflow-hidden bg-secondary/50">
                    <img
                      src={item.thumbnail_url}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <a href={storeUrl} target="_blank" rel="noopener noreferrer">
                        <Button size="sm" className="gap-2">
                          <ShoppingBag className="w-4 h-4" />
                          Shop Now
                        </Button>
                      </a>
                    </div>
                  </div>

                  <div className="p-4">
                    <h3 className="font-semibold text-foreground mt-1 line-clamp-1 group-hover:text-primary transition-colors">
                      {item.name}
                    </h3>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-lg font-bold text-primary">
                        {item.retail_price !== '—' ? `$${item.retail_price}` : '—'}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <a href={storeUrl} target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="gap-2 px-8">
              <ExternalLink className="w-4 h-4" />
              Visit Full Merch Store
            </Button>
          </a>
          <p className="text-sm text-muted-foreground mt-4">
            Free shipping on orders over $75 · Powered by Printful
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MerchSection;
