import { motion } from 'framer-motion';
import { ArrowLeft, Book, Newspaper, Cloud, Quote, MessageSquare, Eye, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const JournalPage = () => {
  return (
    <div className="min-h-screen bg-[#fdfcfb] text-[#1a1a1a] font-serif selection:bg-[#d4a574]/30">
      <Navbar />

      {/* Newspaper Header */}
      <header className="pt-32 pb-12 px-4 border-b-2 border-black/10 max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-sm tracking-[0.3em] uppercase mb-4 text-[#8b7355]">The Journal of A Tragic Mulatto</p>
          <h1 className="text-7xl md:text-9xl font-bold mb-6 tracking-tighter" style={{ fontFamily: 'Playfair Display, serif' }}>
            THE HALF REPORT
          </h1>
          <div className="flex flex-col md:flex-row justify-between items-center border-t border-b border-black/40 py-2 px-4 italic text-sm">
            <span>Volume 1, Issue 1</span>
            <span className="font-bold underline uppercase tracking-widest">Half News, Half Fiction, Fully Absurd</span>
            <span>February 2026 Edition</span>
          </div>
        </motion.div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-12 gap-12">

          {/* Left Column: Editor's Note & Portrait */}
          <aside className="lg:col-span-4 space-y-12 order-2 lg:order-1">
            <motion.div
              className="sticky top-32 space-y-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-white border-2 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <img
                  src="/tragic_mulatto_book_cover_1771779727465.png"
                  alt="The Tragic Mulatto"
                  className="w-full grayscale mb-6 transition-all duration-700 hover:grayscale-0"
                />
                <h3 className="text-2xl font-bold mb-2">Editorial Note</h3>
                <p className="text-lg italic leading-relaxed text-black/80">
                  "I scroll through the headlines every morning like they might finally explain me. They never do.
                  But they do remind me that the world is somehow even stranger than I am."
                </p>
                <div className="mt-6 pt-6 border-t border-black/20">
                  <p className="text-sm font-bold">— The Tragic Mulatto</p>
                </div>
              </div>

              <div className="bg-[#d4a574]/10 p-6 border border-[#d4a574]/30 rounded-lg">
                <h4 className="flex items-center gap-2 font-bold mb-4 uppercase tracking-widest text-[#8b7355]">
                  <Cloud className="w-5 h-5" />
                  Mulatto Forecast
                </h4>
                <div className="space-y-4 text-sm leading-relaxed">
                  <p><strong>Monday:</strong> Cloudy with a chance of microaggressions. Pack patience, leave hope at home.</p>
                  <p><strong>Tuesday:</strong> Sunny, but your cousin will still ask why you don’t rap.</p>
                  <p><strong>Wednesday:</strong> 100% chance of Jordan 4s dropping. 100% chance you take an L.</p>
                  <p><strong>Thursday:</strong> Heavy rains of think pieces. Bring an umbrella, drown anyway.</p>
                  <p><strong>Friday:</strong> Clear skies, but your barber’s booked until next week. Tragic.</p>
                </div>
              </div>
            </motion.div>
          </aside>

          {/* Main Content: The News Feed */}
          <article className="lg:col-span-8 space-y-20 order-1 lg:order-2">

            {/* The Half Report Section */}
            <section className="space-y-8">
              <div className="bg-black text-white px-4 py-1 inline-block uppercase tracking-[0.2em] font-bold">
                Breaking News
              </div>
              <div className="border-b-2 border-black pb-12">
                <h2 className="text-5xl md:text-6xl font-black mb-8 leading-tight">
                  Kanye Spotted in Wyoming Building a Church Shaped Like a Yeezy Foam Runner.
                </h2>
                <p className="text-2xl leading-relaxed text-black/90">
                  Locals describe it as <span className="underline decoration-[#d4a574] decoration-4 cursor-help">"holy but breathable."</span> I wonder if the pews are made of algae foam.
                  The world is supposed to ground you, but for me it just confirms the ground has already given out.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 pt-8">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold uppercase border-b border-black pb-2">Ghostly Fashion</h3>
                  <p className="text-lg leading-relaxed italic text-black/80">
                    "Virgil Abloh’s ghost reportedly haunting Louis Vuitton, whispering 'Keep the tags on' into interns’ ears. I wonder if ghosts have HR."
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold uppercase border-b border-black pb-2">The Macchiato Crisis</h3>
                  <p className="text-lg leading-relaxed text-black/80">
                    "Starbucks introduces The Mulatto Macchiato. Half almond milk, half oat milk, 100% confusion. A drink that tastes like my dating history."
                  </p>
                </div>
              </div>
            </section>

            {/* Cultural Confessions Section */}
            <section className="bg-black text-white p-12 -mx-4 md:rounded-3xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <Quote className="w-48 h-48 rotate-180" />
              </div>

              <div className="relative z-10 space-y-12">
                <h2 className="text-4xl md:text-5xl font-light italic mb-12 flex items-center gap-4">
                  <PenTool className="w-10 h-10 text-[#d4a574]" />
                  Cultural Confessions
                </h2>

                <div className="grid gap-12">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="border-l-2 border-[#d4a574] pl-8"
                  >
                    <span className="text-[#d4a574] font-bold block mb-2 uppercase tracking-widest text-sm">Entry 12</span>
                    <p className="text-2xl italic leading-relaxed">
                      "A stranger told me I look like 'if Logic and Drake had a cousin who worked at Whole Foods.' I smiled. Because if I didn’t laugh, I’d scream."
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="border-l-2 border-[#d4a574] pl-8"
                  >
                    <span className="text-[#d4a574] font-bold block mb-2 uppercase tracking-widest text-sm">Entry 15</span>
                    <p className="text-2xl italic leading-relaxed">
                      "My Uber driver asked if I was 'mixed with something exotic.' I told him I was mixed with bad decisions. He gave me 3 stars."
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="border-l-2 border-[#d4a574] pl-8"
                  >
                    <span className="text-[#d4a574] font-bold block mb-2 uppercase tracking-widest text-sm">Entry 17</span>
                    <p className="text-2xl italic leading-relaxed">
                      "They keep saying I 'could play bass for The Roots.' I don’t even own a bass. But sometimes I nod just to see how far the stereotype goes. Spoiler: it always goes too far."
                    </p>
                  </motion.div>
                </div>

                <p className="text-white/60 italic text-xl">
                  Every confession feels less like truth and more like improv comedy. Except I didn’t audition.
                </p>
              </div>
            </section>

            {/* The Remix Review */}
            <section className="border-2 border-black p-12 relative">
              <div className="absolute -top-6 left-12 bg-[#fdfcfb] px-4 py-1 border-2 border-black flex items-center gap-2">
                <Star className="w-5 h-5 fill-[#d4a574] text-[#d4a574]" />
                <span className="font-black uppercase tracking-widest">Remix Review</span>
              </div>

              <div className="space-y-8">
                <h2 className="text-4xl font-bold">Pharrell’s Louis Vuitton Men’s Show</h2>
                <div className="grid md:grid-cols-2 gap-12">
                  <p className="text-xl leading-relaxed text-black/80">
                    Watching Pharrell’s LV debut was like staring into a mirror I wasn’t sure I belonged in.
                    Loud, proud, regal, decadent. Imagine if the Fresh Prince raided a yacht club and NASA handled the tailoring.
                  </p>
                  <p className="text-xl leading-relaxed text-black/80">
                    The collection screamed confidence, while I sat on my couch in sweatpants wondering if I was even allowed to clap.
                    The fashion world is like a house party where I’m always waiting for someone to check the guest list.
                  </p>
                </div>
                <div className="flex items-center gap-4 bg-black text-white p-6 justify-between">
                  <span className="text-2xl font-black italic">Final Score:</span>
                  <div className="flex items-center gap-2">
                    {[1, 2, 3, 4].map(i => <Eye key={i} className="w-6 h-6 text-[#d4a574]" />)}
                    <span className="text-xl font-bold">4.5 / 5 Sunglasses</span>
                  </div>
                </div>
                <p className="text-sm italic text-black/60">Half a star deducted for reminding me I’ll never afford oversized sunglasses.</p>
              </div>
            </section>

            {/* Ask a Mulatto */}
            <section className="space-y-12">
              <h2 className="text-6xl font-bold tracking-tighter text-center" style={{ fontFamily: 'Playfair Display, serif' }}>
                ASK A MULATTO
              </h2>

              <div className="grid gap-8">
                <div className="bg-[#f0ece9] p-8 rounded-2xl border-2 border-transparent hover:border-black transition-all">
                  <p className="font-bold text-xl mb-4 italic">Q: Dear Tragic Mulatto, how do I explain to my white girlfriend’s parents that I don’t ski?</p>
                  <p className="text-lg leading-relaxed text-black/80 pl-6 border-l-4 border-black">
                    <strong>A:</strong> Tell them you snowboard. They’ll think you’re rebellious but still “outdoorsy.” Bonus: no lift pass required for pretending.
                  </p>
                </div>

                <div className="bg-[#f0ece9] p-8 rounded-2xl border-2 border-transparent hover:border-black transition-all">
                  <p className="font-bold text-xl mb-4 italic">Q: Dear Tragic Mulatto, my boss keeps saying “we’re a family” but won’t give me a raise. Thoughts?</p>
                  <p className="text-lg leading-relaxed text-black/80 pl-6 border-l-4 border-black">
                    <strong>A:</strong> Families are dysfunctional. If you’re family, demand inheritance. If not, adopt yourself into a better one.
                  </p>
                </div>
              </div>
            </section>

          </article>
        </div>

        {/* The Side-Eye & Closing Note: Full Width Footer of Article */}
        <section className="mt-20 pt-20 border-t-4 border-black border-double grid md:grid-cols-2 gap-16">
          <div className="space-y-8">
            <h3 className="text-5xl font-black uppercase flex items-center gap-4">
              <div className="w-12 h-1 bg-black" />
              The Side-Eye
            </h3>
            <ul className="grid gap-6 text-xl">
              <li className="flex items-start gap-3">
                <span className="text-[#d4a574]">•</span>
                Balenciaga dropped $850 dirty socks. Congratulations: poverty is now couture.
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#d4a574]">•</span>
                Drake released another album. Somewhere, J. Cole sighed in lowercase.
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#d4a574]">•</span>
                Jordan announced 12 new retros. Meanwhile, my bank account retroactively cried.
              </li>
              <li className="flex items-start gap-3 italic text-black/60">
                They call me “ambiguous.” Joke’s on them — I’m clear as mud.
              </li>
            </ul>
          </div>

          <div className="bg-[#1a1a1a] text-white p-12 rounded-lg shadow-2xl skew-y-1">
            <h4 className="text-3xl font-serif italic mb-6">Closing Note</h4>
            <p className="text-lg leading-relaxed mb-8 text-white/90">
              Some people are born with purpose. Others are born with privilege. I was born with a punchline.
              Too light for the cookout, too dark for the country club, too confused for both.
              <br /><br />
              The world says “pick a side.” I say “why not wander the middle like a ghost at a family reunion?”
              It’s lonely, but at least the drinks are free if you sneak them.
            </p>
            <div className="flex justify-between items-end">
              <div className="space-y-1">
                <p className="text-sm uppercase tracking-widest text-[#d4a574]">Signed,</p>
                <p className="text-3xl font-bold tracking-tighter" style={{ fontFamily: 'Playfair Display, serif' }}>The Tragic Mulatto</p>
              </div>
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="w-16 h-16 border-2 border-[#d4a574] rounded-full flex items-center justify-center text-[#d4a574] font-bold text-xs text-center"
              >
                TM<br />OFFICIAL
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <div className="py-20 text-center bg-black text-[#d4a574]/40">
        <Link to="/" className="inline-flex items-center gap-2 hover:text-[#d4a574] transition-colors uppercase tracking-[0.4em] font-black group">
          <ArrowLeft className="w-5 h-5 transform group-hover:-translate-x-2 transition-transform" />
          Retreat to Sanity
        </Link>
      </div>

      <Footer />

      {/* Font imports */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400&family=Inter:wght@400;700;900&display=swap');
      `}</style>
    </div>
  );
};

export default JournalPage;
