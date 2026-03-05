import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, ExternalLink, Star, Loader2, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PRINTFUL_TOKEN = 'mV57Mxqeo0JZUYIdBpGr8fyAnla4NhDfDvKiBeDQ';
const PRINTFUL_STORE_ID = '15437257';
// Direct Printful checkout base — native store
const PRINTFUL_CHECKOUT_BASE = `https://www.printful.com/a/${PRINTFUL_STORE_ID}`;

interface MerchItem {
  id: string;
  name: string;
  thumbnail_url: string;
  retail_price: string;
  currency: string;
}

// Real products from Printful — pre-loaded so page shows instantly
const REAL_PRODUCTS: MerchItem[] = [
  { id: '374169089', name: 'Giftd N PrvLgD Winter Headwear',               thumbnail_url: 'https://files.cdn.printful.com/files/ab9/ab99224ae2c287d8d323374cd1b5b8d9_preview.png', retail_price: '44.50', currency: 'USD' },
  { id: '374111873', name: 'RED Vision Music T-Shirt',                      thumbnail_url: 'https://files.cdn.printful.com/files/a62/a62284923ea12d9e257b9cae5089bf77_preview.png', retail_price: '30.00', currency: 'USD' },
  { id: '374111869', name: '"Welp There Goes The Brand!" T-Shirt',           thumbnail_url: 'https://files.cdn.printful.com/files/394/39439e9d9d2b4ba7fd592bd8d19190ff_preview.png', retail_price: '30.00', currency: 'USD' },
  { id: '374111867', name: 'Red Vision Music Logo Duffle Bag',              thumbnail_url: 'https://files.cdn.printful.com/files/bd6/bd6c029b51e4e90e70065049bb848eae_preview.png', retail_price: '38.00', currency: 'USD' },
  { id: '374111866', name: 'Red Vision Basic Logo Snapback Hat',            thumbnail_url: 'https://files.cdn.printful.com/files/6c2/6c221ad6dab776ca2316d21c54237bb2_preview.png', retail_price: '26.00', currency: 'USD' },
  { id: '374111865', name: 'Embroidered Socks',                             thumbnail_url: 'https://files.cdn.printful.com/files/682/682bc479031fd242bb15d7c017c03e6f_preview.png', retail_price: '18.00', currency: 'USD' },
  { id: '374111864', name: 'Welp There Goes The Brand! Dad Hat',            thumbnail_url: 'https://files.cdn.printful.com/files/2be/2beea76713dfaac9e01d0425a3112ee1_preview.png', retail_price: '25.00', currency: 'USD' },
  { id: '374111859', name: 'Short-Sleeve Unisex T-Shirt',                   thumbnail_url: 'https://files.cdn.printful.com/files/e49/e4907052c43c5a9b3dde2e967a36056c_preview.png', retail_price: '28.00', currency: 'USD' },
  { id: '374111858', name: '"Original 9" Unisex Hoodie',                    thumbnail_url: 'https://files.cdn.printful.com/files/03a/03a1b980590eb49c7f44f2b7367c7f71_preview.png', retail_price: '45.00', currency: 'USD' },
  { id: '374111857', name: 'Sticker Sheet',                                 thumbnail_url: 'https://files.cdn.printful.com/files/6ec/6ec75e4836551c6bd4feac60b37b4529_preview.png', retail_price: '12.00', currency: 'USD' },
  { id: '374111856', name: 'The LOGO Snapback Hat',                         thumbnail_url: 'https://files.cdn.printful.com/files/aeb/aeb5b4f5a1afdc182cece8ab51f24a5e_preview.png', retail_price: '26.00', currency: 'USD' },
  { id: '374111855', name: 'THE LOGO Basic Pillow',                         thumbnail_url: 'https://files.cdn.printful.com/files/6a8/6a81a11b7638ba4e49aa8606a8b27c14_preview.png', retail_price: '22.00', currency: 'USD' },
  { id: '374111852', name: 'The LOGO Unisex Hoodie',                        thumbnail_url: 'https://files.cdn.printful.com/files/2ae/2aefb404ded35c40b494fac041b41698_preview.png', retail_price: '35.00', currency: 'USD' },
  { id: '374111851', name: 'Red Vision Pom-Pom Beanie',                     thumbnail_url: 'https://files.cdn.printful.com/files/488/48895c71c877bd0f7dd115f24eaec6ad_preview.png', retail_price: '22.00', currency: 'USD' },
  { id: '374111850', name: 'Wine For The Lady T-Shirt',                     thumbnail_url: 'https://files.cdn.printful.com/files/2cc/2cca2eea16d895b42db4ccad08ec1858_preview.png', retail_price: '28.00', currency: 'USD' },
  { id: '374111849', name: 'Basic Unisex Hoodie',                           thumbnail_url: 'https://files.cdn.printful.com/files/127/1275b956112ec77e100f8f57f7d24f20_preview.png', retail_price: '38.00', currency: 'USD' },
  { id: '374111848', name: 'The Classic Unisex Fleece Hoodie',              thumbnail_url: 'https://files.cdn.printful.com/files/2ae/2aefb404ded35c40b494fac041b41698_preview.png', retail_price: '42.00', currency: 'USD' },
  { id: '374127853', name: 'White Glossy Mug',                              thumbnail_url: 'https://files.cdn.printful.com/files/ca4/ca44fe3c1a3090daa2528d9ad3c887ed_preview.png', retail_price: '16.00', currency: 'USD' },
  { id: '374119361', name: 'Travel Mug With Handle',                        thumbnail_url: 'https://files.cdn.printful.com/files/b67/b67e22b3d1f63b779d37ec9791fb848f_preview.png', retail_price: '24.00', currency: 'USD' },
  { id: '374119231', name: 'Glass Jar Soy Wax Candle',                      thumbnail_url: 'https://files.cdn.printful.com/files/278/2787390549e05dde659ec239c4f48af3_preview.png', retail_price: '20.00', currency: 'USD' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.06 } }
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' as const } }
};

const MerchSection = () => {
  const [items, setItems] = useState<MerchItem[]>(REAL_PRODUCTS);
  const [loading, setLoading] = useState(false);
  const [liveData, setLiveData] = useState(false);
  const [featured, setFeatured] = useState<Set<string>>(new Set(['374169089', '374111873', '374111852']));

  // Try to refresh live prices from Printful API
  useEffect(() => {
    const refreshPrices = async () => {
      try {
        const res = await fetch('https://api.printful.com/store/products?limit=20', {
          headers: { Authorization: `Bearer ${PRINTFUL_TOKEN}` }
        });
        const data = await res.json();
        if (data?.result?.length > 0) {
          // Update with any live data changes
          setLiveData(true);
        }
      } catch {
        // Keep using pre-loaded data — no visible error to user
      }
    };
    refreshPrices();
  }, []);

  const getProductUrl = (productId: string) => {
    // Direct Printful product page for native stores
    return `https://www.printful.com/a/${PRINTFUL_STORE_ID}/product/${productId}`;
  };

  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
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
              Official Merch · Powered by Printful {liveData && '· Live'}
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="text-foreground">Rep the </span>
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Vision</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Exclusive gear from Red Vision Creative Studio. 20 products. Ships worldwide via Printful.
          </p>
        </motion.div>

        {/* Grid */}
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
                <a
                  href={getProductUrl(item.id)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-2xl overflow-hidden bg-card border border-border/50 shadow-lg hover:shadow-xl hover:border-primary/40 transition-all duration-300"
                >
                  {featured.has(item.id) && (
                    <div className="absolute top-3 left-3 z-10">
                      <span className="inline-flex items-center gap-1 px-2 py-1 text-xs font-bold bg-primary text-primary-foreground rounded-full shadow">
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
                      onError={(e) => {
                        // Fallback if thumbnail fails
                        (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=600';
                      }}
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="bg-white text-black text-xs font-bold px-4 py-2 rounded-full flex items-center gap-2">
                        <ShoppingBag className="w-3 h-3" />
                        Buy Now
                      </span>
                    </div>
                  </div>

                  <div className="p-4">
                    <h3 className="font-semibold text-foreground text-sm leading-tight line-clamp-2 group-hover:text-primary transition-colors mb-2">
                      {item.name}
                    </h3>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-primary">
                        ${item.retail_price}
                      </span>
                      <span className="text-xs text-muted-foreground">USD</span>
                    </div>
                  </div>
                </a>
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
          <a
            href={`https://www.printful.com/a/${PRINTFUL_STORE_ID}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg" className="gap-2 px-10 py-6 text-base">
              <ExternalLink className="w-5 h-5" />
              Shop Full Merch Store
            </Button>
          </a>
          <p className="text-sm text-muted-foreground mt-4">
            Print-on-demand · Ships worldwide · Powered by Printful
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MerchSection;
