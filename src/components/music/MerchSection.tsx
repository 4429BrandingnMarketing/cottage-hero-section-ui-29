import { motion } from 'framer-motion';
import { ShoppingBag, ExternalLink, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface MerchItem {
  id: string;
  name: string;
  image: string;
  price: string;
  category: string;
  featured?: boolean;
}

const MERCH_ITEMS: MerchItem[] = [
  {
    id: 'm1',
    name: 'Red Vision Hoodie',
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=600',
    price: '$59.99',
    category: 'Apparel',
    featured: true
  },
  {
    id: 'm2',
    name: 'LUMI AI T-Shirt',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=600',
    price: '$29.99',
    category: 'Apparel'
  },
  {
    id: 'm3',
    name: 'RVM Snapback Cap',
    image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&q=80&w=600',
    price: '$24.99',
    category: 'Accessories'
  },
  {
    id: 'm4',
    name: 'Cosmic Mug',
    image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&q=80&w=600',
    price: '$19.99',
    category: 'Accessories'
  },
  {
    id: 'm5',
    name: 'Artist Series Poster',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=600',
    price: '$14.99',
    category: 'Art'
  },
  {
    id: 'm6',
    name: 'Limited Edition Vinyl',
    image: 'https://images.unsplash.com/photo-1539375665275-f9de415ef9ac?auto=format&fit=crop&q=80&w=600',
    price: '$34.99',
    category: 'Music',
    featured: true
  },
  {
    id: 'm7',
    name: 'RVM Tote Bag',
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=600',
    price: '$22.99',
    category: 'Accessories'
  },
  {
    id: 'm8',
    name: 'Signature Beanie',
    image: 'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format&fit=crop&q=80&w=600',
    price: '$27.99',
    category: 'Apparel'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const
    }
  }
};

const MerchSection = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background */}
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
            <span className="text-sm font-medium text-primary">Official Merchandise</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="text-foreground">Rep the </span>
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Vision</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Exclusive merch from Red Vision Music. Show your support for the future of sound.
          </p>
        </motion.div>

        {/* Product Grid */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {MERCH_ITEMS.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="group relative"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
            >
              <div className="relative rounded-2xl overflow-hidden bg-card border border-border/50 shadow-lg hover:shadow-xl hover:border-primary/30 transition-all duration-300">
                {/* Featured Badge */}
                {item.featured && (
                  <div className="absolute top-3 left-3 z-10">
                    <span className="inline-flex items-center gap-1 px-2 py-1 text-xs font-bold bg-primary text-primary-foreground rounded-full">
                      <Star className="w-3 h-3 fill-current" />
                      Featured
                    </span>
                  </div>
                )}

                {/* Image */}
                <div className="relative aspect-square overflow-hidden bg-secondary/50">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button 
                      size="sm" 
                      className="gap-2"
                    >
                      <ShoppingBag className="w-4 h-4" />
                      View Item
                    </Button>
                  </div>
                </div>

                {/* Info */}
                <div className="p-4">
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">
                    {item.category}
                  </span>
                  <h3 className="font-semibold text-foreground mt-1 line-clamp-1 group-hover:text-primary transition-colors">
                    {item.name}
                  </h3>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-lg font-bold text-primary">{item.price}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <Button size="lg" className="gap-2 px-8">
            <ExternalLink className="w-4 h-4" />
            Visit Full Merch Store
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            Free shipping on orders over $75
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MerchSection;
